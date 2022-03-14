import { ExchangeBase } from "./base"
import { message } from "./i18n"
export * from './enum'

export class Exchange extends ExchangeBase {

    constructor() {
        super()
    }

    public async transfer(userId: string, fromTokenId: string, toTokenId: string, amount: number): Promise<any> {
        this.console.log(message.TRANSFER_DONE)
    }

}
