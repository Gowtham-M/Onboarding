export class Address {
    lines: string[]
    town: string
    subdiv: string
    zipcode: number
    country: string
    cCode: string

    constructor(lines: string[], town: string, subdiv: string, zipcode: number, country: string, cCode: string) {
        this.lines = lines,
        this.town = town,
        this.subdiv = subdiv,
        this.zipcode = zipcode,
        this.country = country,
        this.cCode = cCode
    }
}

export class Bank {
    bic: string
    instName: string
    branchInfo: string
    address: Address
    currency: string[]
    payMode: string[]
    status: string
    changes: Bank | undefined

    constructor (bic: string, instName: string, branchInfo: string, address: Address,
        currency: string[], payMode: string[], status: string){
        this.bic = bic,
        this.instName = instName,
        this.branchInfo = branchInfo,
        this.address = address,
        this.currency = currency,
        this.payMode = payMode,
        this.status = status
    }
}