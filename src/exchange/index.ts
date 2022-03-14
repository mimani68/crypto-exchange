import { ExchangeBase } from "./base"
import { message } from "./i18n"

export class Exchange extends ExchangeBase {

    constructor() {
        super()
    }

    public async transfer(userId: string, fromTokenId: string, toTokenId: string, amount: number): Promise<any> {
        this.console.log(message.TRANSFER_DONE)
    }

}

export let ENUM = {

    config: {
        BTC_MAX_DAILY_TRANSFER: 'BTC_MAX_DAILY_TRANSFER',
        STOP_LOST: 'STOP_LOST'
    },

    database: {
        MONGODB: 'MONGODB',
        MYSQL: 'MYSQL',
        POSTGRES: 'POSTGRES',
    },

    cache: {
        REDIS: 'REDIS'
    },

    logServer: {
        RSYS_LOG: 'RSYS_LOG'
    },

    policy: {
        BTC_DAILY_WITHDRAW: 'BTC_DAILY_WITHDRAW'
    }

}