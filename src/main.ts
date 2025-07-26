import { domCache } from "./models/domCache.js"
import { fetchIPData } from "./services/ipApiService.js"
import { validateData, validateInput } from "./utils/errorHandler.js"
import { loadMap, updateMap } from "./services/mapService.js"

window.addEventListener('load', loadMap)

export async function doTheThing(userInput: string) {

    try {
        const ipData = await fetchIPData(userInput)
        console.log(ipData)

        updateMap(ipData.lat, ipData.lng, `${ipData.ip}, ${ipData.city}`)
    }

    catch (e) {
        console.error(e)
    }
}

domCache.ipForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const userInput = domCache.userInput.value.trim()

    try {
        validateInput(userInput)
        doTheThing(userInput)
    }
    catch (e) {
        console.error(e)
    }

    domCache.userInput.value = ''
})











