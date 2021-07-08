export class TableData{
    public location: Location;
    public cargo: Cargo;
    public company: Company;
}

export class Company {
    public name: string;
    public size: number;
}

export class Location {
    public country: string;
    public city: string;
}

export class Cargo {
    public name: string;
    public type: string;
}
