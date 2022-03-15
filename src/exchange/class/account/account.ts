import { message } from "../../i18n";
import { IAccount } from "../../interface";

export class Account implements IAccount {

    constructor(userId: string) {
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