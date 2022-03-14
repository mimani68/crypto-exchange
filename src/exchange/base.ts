import { IExchange } from "./exchange.interface"
import { message } from "./i18n"

export class ExchangeBase implements IExchange {

    console: any

    constructor() {}

    public async setLicense(lisence: string): Promise<any> {
        return null
    }
    public async setDefaultLanguage(language: "en"|"fr"): Promise<any> {
        return null
    }
    public async setTimezone(timeZone: string): Promise<any> {
        return null
    }
    public async loadConfigFile(filePath: string): Promise<any> {
        return null
    }
    public async setBlockchainDriver(driverObject: any): Promise<any> {
        return null
    }
    public setLogDriver(logDriver: any): void {
        this.console = logDriver
    }
    public async setConfig(configKey: string, value: string|number): Promise<any> {
        return null
    }
    public async swagger(active: boolean, addresPath: string): Promise<any> {
        return null
    }
    public async setDataBase(typeOfDatabase: string, databaseStringAddress: string): Promise<any> {
        return null
    }
    public async setDataBaseMirror(typeOfDatabase: string, databaseStringAddress: string): Promise<any> {
        return null
    }
    public async setCache(typeOfDatabase: string, cacheStringAddress: string): Promise<any> {
        return null
    }
    public async setRemoteLogCollector(typeOfLogCollector: string, logServerStringAddress: string): Promise<any> {
        return null
    }
    public async setPolicy(typeOfPolicy: string, value: string|number): Promise<any> {
        return null
    }
    public async start(): Promise<any> {
        console.log(message.START_CORRECTLY)
        return null
    }
}
