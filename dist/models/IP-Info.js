export default class Location {
    ip;
    country;
    city;
    lat;
    lng;
    timezone;
    isp;
    constructor(ip, country, city, lat, lng, timezone, isp) {
        this.ip = ip;
        this.country = country;
        this.city = city;
        this.lat = lat;
        this.lng = lng;
        this.timezone = timezone;
        this.isp = isp;
    }
    displayIPDetails() {
        return `IP-Address: ${this.ip}, Country: ${this.country}, City: ${this.city}, Latitude: ${this.lat}, Longitude: ${this.lng}, Timezone: ${this.timezone}, ISP: ${this.isp}`;
    }
}
