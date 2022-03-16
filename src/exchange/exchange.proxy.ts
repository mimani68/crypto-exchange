import { Exchange } from "./exchange";
import { IExchange } from "./exchange.interface";
import { IConfig, IProfile, IWallet } from "./class";


/**
 * 
 * Proxy Design Pattern
 * 
 * @description Using Exchange behind proxy
 */
export class ExchangeProxy implements IExchange {
    
    private exchange: IExchange;
    public profile: IProfile;
    public wallet: IWallet;
    public config: IConfig;
    public console: any;

    constructor() {
        this.exchange = new Exchange()
        this.profile = this.exchange.profile
        this.wallet = this.exchange.wallet
        this.config = this.exchange.config
        console.log("Exchange-Proxy started")
    }
    async setLicense(lisence: string): Promise<any> {
        return await this.exchange.setLicense(lisence)
    }
    async setDefaultLanguage(language: "en" | "fr"): Promise<any> {
        return await this.exchange.setDefaultLanguage(language)
    }
    async setTimezone(timeZone: string): Promise<any> {
        return await this.exchange.setTimezone(timeZone)
    }
    async loadConfigFile(filePath: string): Promise<any> {
        return await this.exchange.setTimezone(filePath)
    }
    async setConfig(configKey: string, value: string | number): Promise<any> {
        return await this.exchange.setConfig(configKey, value)
    }
    async setBlockchainDriver(driverObject: any): Promise<any> {
        return await this.exchange.setBlockchainDriver(driverObject)
    }
    async swagger(active: boolean, addresPath: string): Promise<any> {
        return await this.exchange.swagger(active, addresPath)
    }
    async setDataBase(typeOfDatabase: string, databaseStringAddress: string): Promise<any> {
        return await this.exchange.setDataBase(typeOfDatabase, databaseStringAddress)
    }
    async setDataBaseMirror(typeOfDatabase: string, databaseStringAddress: string): Promise<any> {
        return await this.exchange.setDataBaseMirror(typeOfDatabase, databaseStringAddress)
    }
    async setCache(typeOfDatabase: string, cacheStringAddress: string): Promise<any> {
        return await this.exchange.setCache(typeOfDatabase, cacheStringAddress)
    }
    async setRemoteLogCollector(typeOfLogCollector: string, logServerStringAddress: string): Promise<any> {
        return await this.exchange.setRemoteLogCollector(typeOfLogCollector, logServerStringAddress)
    }
    async setLogDriver(logDriver: any) {
        return await this.exchange.setLogDriver(logDriver)
    }
    async setPolicy(typeOfPolicy: string, value: string | number): Promise<any> {
        return await this.exchange.setPolicy(typeOfPolicy, value)
    }
    async resetUser(): Promise<any> {
        return await this.exchange.resetUser()
    }
    async start(): Promise<any> {
        return await this.exchange.start()
    }
}