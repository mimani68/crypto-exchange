import { message } from "../../i18n";
import { IProfile } from "./profile.interface";

export class GeneralProfile implements IProfile {

    private profile: any;

    walletType: "tatum" | "local";
    authType: "oauth" | "gmail" | "instagram" | "linkedin";

    constructor(userId: string) {
        this.walletType = "tatum"
        this.authType = "oauth"
        console.log(message.OATH_USER_CREATED)
    }

    public async openNewProfile(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    
    public async verifing(): Promise<any> {
        throw new Error("Method not implemented.");
    }

    public async closeProfile(): Promise<any> {
        throw new Error("Method not implemented.");
    }

    public async upgradePlanyOfMembership(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    
    public async setProfile(
        id: string,
    ): Promise<any> {
        this.profile = new GeneralProfile(id)
        return Promise.resolve(true)
    }

    public async getProfile(): Promise<any> {
        return this.profile
    }

}