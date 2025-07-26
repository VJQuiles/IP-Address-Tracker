export class ValidationError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'ValidationError'
    }
}

export class NetworkError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'NetworkError'
    }
}

export class DataError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'DataError'
    }
}

export function validateInput(input: string) {
    const ipRegex = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/
    const domainRegex = /^(?!-)[A-Za-z0-9-]{1,63}(?<!-)(\.[A-Za-z]{2,6})+$/

    if (input.trim() === '') {
        throw new ValidationError('Hey buddy! Whaddya doin? You gotta write somethin!')
    } else if (!ipRegex.test(input) && !domainRegex.test(input)) {
        throw new ValidationError('The correct format is uh, its uh....sorry i get performance anxiety')
    }
}

export function validateNetwork(response: Response) {
    if (!response.ok) {
        throw new NetworkError(`Uh-oh! Network said hollaback youngin! ${response.status}`)
    }
}

export function validateData(data: any) {
    if (typeof data !== 'object' || data === null) {
        throw new DataError("Error parsing data! Where's C-3PO and his 6 million forms of communication when you need him *sigh*")
    }
}