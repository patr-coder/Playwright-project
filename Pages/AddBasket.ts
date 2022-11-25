import { expect, Expect,Page,test } from "@playwright/test";
export default class AddBasketPage{
    constructor(public page: Page){

    }
    async add(){
        await this.page.hover("(//img[@title='iPod Touch'])[1]",{
            strict : false
        })
        await this.page.click("(//button[@title='Add to Cart']//i)[1]")
    }
}