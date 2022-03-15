import { message } from "../../i18n";
import { LocalWallet } from "./local.wallet";
import { TatumWallet } from "./tatum.wallet";
import { IWallet } from "./wallet.interface";

export class WalletFactory implements IWallet {

    constructor(walletType: string, userId: string) {
        switch (walletType) {
            case "local":
                return new LocalWallet(userId)
            case "tatum":
                return new TatumWallet(userId, {})
        }
    }

    transfer(fromTokenId: string, toTokenId: string, amount: number): Promise<any> {
        throw new Error("Method not implemented.");
    }
    
}