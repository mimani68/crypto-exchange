export interface IProfile {

    walletType: "tatum"|"local";
    authType: "oauth"|"gmail"|"instagram"|"linkedin";
    // transfer(fromTokenId: string, toTokenId: string, amount: number): boolean

    openNewProfile(): Promise<any>
    verifing(): Promise<any>
    closeProfile(): Promise<any>
    upgradePlanyOfMembership(): Promise<any>
    setProfile(id: string, username: string): Promise<any>
    getProfile(): Promise<any>

}