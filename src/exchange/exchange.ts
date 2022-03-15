import { message } from "./i18n";
import { IExchange } from "./exchange.interface";
import { ConfigManagment, GeneralProfile, LocalWallet, WalletFactory } from "./class";
import { IConfig, IProfile, IWallet } from "./class";

export class Exchange implements IExchange {

    public console: any
    public profile: IProfile;
    public wallet: IWallet;
    public config: IConfig;

    constructor() {
        this.config = new ConfigManagment()
        this.profile = new GeneralProfile("*")
        this.wallet = new WalletFactory("local", "*")
    }

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
        this.console.log(message.START_CORRECTLY)
        return null
    }

    public async resetUser(): Promise<any> {
        this.profile = new GeneralProfile("*")
        this.wallet = new LocalWallet("*")
        return Promise.resolve(true)
    }

}
