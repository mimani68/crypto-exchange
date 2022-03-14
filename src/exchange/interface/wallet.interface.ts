export interface IWallet {

    transfer(fromTokenId: string, toTokenId: string, amount: number): boolean

}