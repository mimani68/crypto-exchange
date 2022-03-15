import { message } from "../../i18n";
import { IConfig } from "./config.interface";

export class ConfigManagment implements IConfig {
    constructor() {
        console.log("Config managment")
    }
}