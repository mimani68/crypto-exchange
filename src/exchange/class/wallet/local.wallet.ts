import { message } from "../../i18n";
import { IWallet } from "./wallet.interface";
import { GeneralProfile } from "../profile/profile";

export class LocalWallet implements IWallet {

    public profile: GeneralProfile;

    constructor(id: string) {
        this.profile = new GeneralProfile(id)
        // this.wallet = new LocalWallet(id)
    }

    public async transfer(
        fromTokenId: string, 
        toTokenId: string, 
        amount: number
    ): Promise<any> {
        // switch (this.profile.walletType) {
        //     case "local":
        //         this.wallet = new LocalWallet(userId, this.config)
        //         this.console.log(message.TRANSFER_DONE)
        //         return this.wallet.transfer(fromTokenId, toTokenId, amount)
        //     case "tatum":
        //         this.wallet = new TatumWallet(userId, this.config)
        //         this.console.log(message.TRANSFER_DONE)
        //         return this.wallet.transfer(fromTokenId, toTokenId, amount)
        // }
    }
}