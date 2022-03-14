import { message } from "../../i18n";
import { IWallet } from "../../interface/wallet.interface";

export class LocalWallet implements IWallet {
    constructor(userId: string, config: any) {
        // console.log(message.GMAIL_USER_CREATED)
    }

    public transfer(fromTokenId: string, toTokenId: string, amount: number): boolean {
        console.log("Local fund transfering")
        return true
    }
}