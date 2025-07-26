import Location from '../models/IP-Info.js'
import { ValidationError, NetworkError, DataError } from '../utils/errorHandler.js'

export async function fetchIPData(ip: string): Promise<Location> {

    const baseURL = "https://geo.ipify.org/api/v1"
    const ipApiKey = '??'
    const url = `${baseURL}?apiKey=${ipApiKey}&ipAddress=${ip}`

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

// fetchIPData()
//     .then((location) => console.log(location))
//     .catch((error) => console.error(error))