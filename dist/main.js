import { fetchIPData } from "./services/ipApiService.js";
import { loadMap, updateMap } from "./services/mapService.js";
export async function doTheThing() {
    window.addEventListener('load', loadMap);
    const userInput = "8.8.8.8";
    try {
        const ipData = await fetchIPData(userInput);
        console.log(ipData);
        updateMap(ipData.lat, ipData.lng, `${ipData.ip}, ${ipData.city}`);
    }
    catch (e) {
        console.error(e);
    }
}
doTheThing();
