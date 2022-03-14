import { message } from "../../i18n";
import { IWallet } from "../../interface/wallet.interface";

export class TatumWallet implements IWallet {
    constructor(userId: string, config: any) {
        // console.log(message.OATH_USER_CREATED)
    }

    public transfer(fromTokenId: string, toTokenId: string, amount: number): boolean {
        console.log("Tatum fund transfering")
        return true
    }
}