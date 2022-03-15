import { message } from "../../i18n";
import { IAccount } from "./account.interface";
import { AccountService } from "./account.service";

export class Account implements IAccount {

    private _accoutnService: any;

    constructor(userId: string) {
        this._accoutnService = new AccountService()
        console.log(message.OATH_USER_CREATED)
    }

    async withdrawToLocal() {
        return null
    }

    async list() {
        return null
    }

    async openNewAccount() {
        return null
    }

    async closeAccount() {
        return null
    }
}