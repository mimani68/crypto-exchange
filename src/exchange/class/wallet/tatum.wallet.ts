import { message } from "../../i18n";
import { IWallet } from "./wallet.interface";

export class TatumWallet implements IWallet {

    constructor(userId: string, config: any) {
        // console.log(message.OATH_USER_CREATED)
    }

    public transfer(fromTokenId: string, toTokenId: string, amount: number): Promise<any> {
        console.log("Tatum fund transfering")
        return Promise.resolve(true)
    }
    
}