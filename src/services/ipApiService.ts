import Location from '../models/IP-Info.js'
import { ValidationError, NetworkError, DataError } from '../utils/errorHandler.js'

export async function fetchIPData(input: string): Promise<Location> {

    const ipRegex = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/
    const domainRegex = /^(?!-)[A-Za-z0-9-]{1,63}(?<!-)(\.[A-Za-z]{2,6})+$/

    const ipCheck = ipRegex.test(input)
    const domainCheck = domainRegex.test(input)
    const urlItem = ipCheck ? `ipAddress=${input}` : domainCheck ? `domain=${input}` : null

    if (!urlItem) {
        throw new ValidationError("Invalid entry! We ain't tryna waste no tokens")
    }

    const baseURL = "https://geo.ipify.org/api/v1"
    const ipApiKey = '??'
    const url = `${baseURL}?apiKey=${ipApiKey}&${urlItem}`

    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new NetworkError('Network Error!')
        }
        const ipData = await response.json()
        if (typeof ipData !== 'object' || ipData === null) {
            throw new DataError('Data Error!')
        }
        const location = new Location(
            ipData.ip,
            ipData.location.country,
            ipData.location.city,
            ipData.location.lat,
            ipData.location.lng,
            ipData.location.timezone,
            ipData.isp
        )
        return location
    }
    catch (error) {
        if (error instanceof ValidationError || error instanceof NetworkError || error instanceof DataError) {
            throw error
        }
        throw new Error("Where's the QA person when you need 'em")
    }
}

