import { ExchangeBase } from "./base"
import { OauthProfile, GmailProfile, LocalWallet, TatumWallet } from "./class"
import { message } from "./i18n"

export * from './enum'

export class Exchange extends ExchangeBase {

    constructor() {
        super()
    }

    public setProfile(
        authType: "oauth"|"gmail"|"instagram"|"linkedin",
        userProfile: { id: string, username: string }, 
        config: { role: string }
    ) {
        switch (authType) {
            case "oauth":
                this.profile = new OauthProfile(userProfile.id, userProfile.username)
                break;
            case "gmail":
                this.profile = new GmailProfile(userProfile.id, userProfile.username)
                break;
        }
    }

    public async transfer(userId: string, fromTokenId: string, toTokenId: string, amount: number): Promise<any> {
        const walletType: string = "tatum"
        switch (walletType) {
            case "local":
                this.wallet = new LocalWallet(userId, this.config)
                this.wallet.transfer(fromTokenId, toTokenId, amount)
                break;
            case "tatum":
                this.wallet = new TatumWallet(userId, this.config)
                this.wallet.transfer(fromTokenId, toTokenId, amount)
                break;
        }
        this.console.log(message.TRANSFER_DONE)
    }


}
