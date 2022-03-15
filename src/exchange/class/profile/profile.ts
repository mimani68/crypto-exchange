import { message } from "../../i18n";
import { IProfile } from "../../interface";

export class GeneralProfile implements IProfile {

    private profile: any;

    walletType: "tatum" | "local";
    authType: "oauth" | "gmail" | "instagram" | "linkedin";

    constructor(userId: string) {
        this.walletType = "tatum"
        this.authType = "oauth"
        console.log(message.OATH_USER_CREATED)
    }

    async openNewProfile() {
        return null
    }

    async verifing() {
        return null
    }

    async closeProfile() {
        return null
    }

    async upgradePlanOfMembership() {
        return null
    }

    public setProfile(
        id: string,
    ) {
        this.profile = new GeneralProfile(id)
    }

    public getProfile() {
        return this.profile
    }

}