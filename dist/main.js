import { domCache } from "./models/domCache.js";
import { fetchIPData } from "./services/ipApiService.js";
import { DataError, NetworkError, validateInput, ValidationError } from "./utils/errorHandler.js";
import { loadMap, updateMap } from "./services/mapService.js";
window.addEventListener('load', loadMap);
export async function doTheThing(userInput) {
    try {
        const ipData = await fetchIPData(userInput);
        console.log(ipData);
        updateMap(ipData.lat, ipData.lng, `${ipData.ip}, ${ipData.city}`);
        domCache.ipDisplay.textContent = ipData.ip;
        domCache.cityDisplay.textContent = `${ipData.city}, ${ipData.country}`;
        domCache.tzDisplay.textContent = `UTC ${ipData.timezone}`;
        domCache.championDisplay.textContent = ipData.isp;
    }
    catch (e) {
        if (e instanceof NetworkError) {
            alert(e.message);
        }
        else if (e instanceof DataError) {
            alert(e.message);
        }
        alert("Houston we have a problem!");
    }
}
domCache.ipForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userInput = domCache.userInput.value.trim();
    try {
        validateInput(userInput);
        doTheThing(userInput);
    }
    catch (e) {
        if (e instanceof ValidationError) {
            alert(e.message);
        }
    }
    domCache.userInput.value = '';
});
