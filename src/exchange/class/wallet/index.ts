import { message } from "../../i18n";
import { IWallet } from "../../interface";
import { GeneralProfile } from "../profile/profile";
import { LocalWallet } from "./local.wallet";
import { TatumWallet } from "./tatum.wallet";

export class WalletProxy {

    constructor(walletType: string, userId: string) {
        switch (walletType) {
            case "local":
                return new LocalWallet(userId)
            case "tatum":
                return new TatumWallet(userId, {})
        }
    }
}