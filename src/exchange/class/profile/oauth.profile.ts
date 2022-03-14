import { message } from "../../i18n";
import { IProfile } from "../../interface";

export class OauthProfile implements IProfile {

    walletType: "tatum" | "local";
    authType: "oauth" | "gmail" | "instagram" | "linkedin";

    constructor(userId: string, username: string) {
        this.walletType = "tatum"
        this.authType = "oauth"
        console.log(message.OATH_USER_CREATED)
    }

}