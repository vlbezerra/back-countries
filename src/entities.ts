export namespace countriesDb {
    export interface ILogs {
        ID: string;
        createdAt?: Date;
        createdBy?: string;
        modifiedAt?: Date;
        modifiedBy?: string;
        path: string;
    }

    export enum Entity {
        Logs = "countriesDb.Logs",
    }

    export enum SanitizedEntity {
        Logs = "Logs",
    }
}

export namespace sap.common {
    export interface ILanguages {
        name: string;
        descr: string;
        code: string;
        texts: ITexts[];
        localized?: ITexts;
    }

    export interface ICountries {
        name: string;
        descr: string;
        code: string;
        texts: ITexts[];
        localized?: ITexts;
    }

    export interface ICurrencies {
        name: string;
        descr: string;
        code: string;
        symbol: string;
        texts: ITexts[];
        localized?: ITexts;
    }

    export interface ITexts {
        locale: string;
        name: string;
        descr: string;
        code: string;
    }

    export interface ITexts {
        locale: string;
        name: string;
        descr: string;
        code: string;
    }

    export interface ITexts {
        locale: string;
        name: string;
        descr: string;
        code: string;
    }

    export enum Entity {
        Languages = "sap.common.Languages",
        Countries = "sap.common.Countries",
        Currencies = "sap.common.Currencies",
        Texts = "sap.common.Currencies.texts",
    }

    export enum SanitizedEntity {
        Languages = "Languages",
        Countries = "Countries",
        Currencies = "Currencies",
        Texts = "Texts",
    }
}

export namespace CountriesService {
    export interface ILogs {
        ID: string;
        createdAt?: Date;
        createdBy?: string;
        modifiedAt?: Date;
        modifiedBy?: string;
        path: string;
    }

    export enum Entity {
        Logs = "CountriesService.Logs",
    }

    export enum SanitizedEntity {
        Logs = "Logs",
    }
}

export type User = string;

export enum Entity {}

export enum SanitizedEntity {}
