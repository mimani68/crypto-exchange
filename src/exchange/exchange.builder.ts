import { ENUM } from "./enum";
import { ExchangeProxy } from ".";
import { IExchange } from "./exchange.interface";

/**
 * @description Build exchange with minimum operation
 */
export class ExchangeBuilder {

    private exchange: IExchange;
    
    constructor(typeOfExchangeMode: "default" | "simple" | "advanced") {
        switch (typeOfExchangeMode) {
            case "default":
                return this.simpleExchange() as any
            case "default":
                return this.defaultExchnage() as any
            case "default":
                return this.advancedExchnage() as any
        }
    }

    public getExchangeInstance(): IExchange {
        return this.exchange
    }

    private simpleExchange(): IExchange {
        this.exchange = new ExchangeProxy()
        this.exchange.setLicense("aiPh,uThaEx(ut'o9zu#ka6e8f~um1sQh7Zogh)a8xAhR[e")
        this.exchange.loadConfigFile("./my-config.json")
        this.exchange.setDefaultLanguage("en")
        this.exchange.setTimezone("Asia/Tehran")
        this.exchange.setConfig(ENUM.config.BTC_MAX_DAILY_TRANSFER, 0.0002)
        this.exchange.setConfig(ENUM.config.STOP_LOST, 0.0001)
        this.exchange.setBlockchainDriver({})
        this.exchange.swagger(true, '/docs/api/v1')
        this.exchange.setDataBase(ENUM.database.POSTGRES, "postgres://admin:123@pg1:5432")
        this.exchange.setDataBaseMirror(ENUM.database.POSTGRES, "postgres://admin:123@pg2:5432")
        this.exchange.setCache(ENUM.cache.REDIS, "redis://redis:6037")
        this.exchange.setLogDriver(console)
        this.exchange.setRemoteLogCollector(ENUM.logServer.RSYS_LOG, "udp://rsyslog:517")
        this.exchange.setPolicy(ENUM.policy.BTC_DAILY_WITHDRAW, 0.25)
        this.exchange.start()
        return this.exchange
    }

    private defaultExchnage(): IExchange {
        return this.exchange
    }

    private advancedExchnage(): IExchange {
        return this.exchange
    } 
}