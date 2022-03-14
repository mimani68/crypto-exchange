export interface IExchange {

    setLicense(lisence: string): Promise<any>
    setDefaultLanguage(language: "en"|"fr"): Promise<any>
    setTimezone(timeZone: string): Promise<any>
    loadConfigFile(filePath: string): Promise<any>
    setConfig(configKey: string, value: string|number): Promise<any>
    setBlockchainDriver(driverObject: any): Promise<any>
    swagger(active: boolean, addresPath: string): Promise<any>
    setDataBase(typeOfDatabase: string, databaseStringAddress: string): Promise<any>
    setDataBaseMirror(typeOfDatabase: string, databaseStringAddress: string): Promise<any>
    setCache(typeOfDatabase: string, cacheStringAddress: string): Promise<any>
    setRemoteLogCollector(typeOfLogCollector: string, logServerStringAddress: string): Promise<any>
    setLogDriver(logDriver: any): void
    setPolicy(typeOfPolicy: string, value: string|number): Promise<any>
    start(): Promise<any>

}