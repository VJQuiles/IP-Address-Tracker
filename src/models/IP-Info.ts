export class Location {
    ip: string
    country: string
    city: string
    lat: number
    lng: number
    timezone: string
    isp: string


    constructor(
        ip: string,
        country: string,
        city: string,
        lat: number,
        lng: number,
        timezone: string,
        isp: string
    ) {
        this.ip = ip
        this.country = country
        this.city = city
        this.lat = lat
        this.lng = lng
        this.timezone = timezone
        this.isp = isp
    }
    displayIPDetails(): string {
        return `IP-Address: ${this.ip}, Country: ${this.country}, City: ${this.city}, Latitude: ${this.lat}, Longitude: ${this.lng}, Timezone: ${this.timezone}, ISP: ${this.isp}`
    }
}

const location1 = new Location('s', 's', 's', 3, 4, 'd', 't')
console.log(location1.displayIPDetails()) 