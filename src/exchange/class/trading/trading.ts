import { message } from "../../i18n";
import { ITrading } from "../../interface";

export class Trading implements ITrading {

    constructor() {
        console.log(message.TRADING_OPEN)
    }

    async order() {
        return null
    }

    async followUpOrder() {
        return null
    }

    async listOfOrders() {
        return null
    }

    async cancelOrder() {
        return null
    }

    async sell() {
        return null
    }

    async convert() {
        return null
    }

}