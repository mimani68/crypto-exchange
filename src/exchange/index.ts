import { ExchangeBase } from "./base"
import { message } from "./i18n"
import { IConfig, IProfile, IWallet } from "./interface"
import { OauthProfile, GmailProfile, LocalWallet, TatumWallet, ConfigManagment } from "./class"

export * from './enum'

export class Exchange extends ExchangeBase {

    protected profile: IProfile;
    protected wallet: IWallet;
    protected config: IConfig;

    constructor() {
        super()
        this.config = new ConfigManagment()
        this.profile = new GmailProfile("*", "*")
        this.wallet = new LocalWallet("*", this.config)
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
        switch (this.profile.walletType) {
            case "local":
                this.wallet = new LocalWallet(userId, this.config)
                this.console.log(message.TRANSFER_DONE)
                return this.wallet.transfer(fromTokenId, toTokenId, amount)
            case "tatum":
                this.wallet = new TatumWallet(userId, this.config)
                this.console.log(message.TRANSFER_DONE)
                return this.wallet.transfer(fromTokenId, toTokenId, amount)
        }
        return false
    }


}
