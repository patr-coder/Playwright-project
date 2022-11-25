import{Page} from "@playwright/test"
export default class ApplyPage{
    // typeName(arg0: string) {
    //     throw new Error("Method not implemented.");
    // }
    constructor(public page:Page){

    }
    async typeFirstName(name: string){
        await this.page.getByPlaceholder("First Name")
        .type(name);
    }
    async typeRenterName(LastName: string){
        await this.page.getByPlaceholder("Last Name")
        .type(LastName);
    }
    async typeEmail(Email: string){
        await this.page.getByPlaceholder("E-Mail")
        .type(Email);
    }
    async typePhone(Phone: string){
        await this.page.getByPlaceholder("Telephone")
        .type(Phone);
    }
    async typePassword(Password:string){
        await this.page.locator("input[name='password']")
        .type(Password)
    }
    async typeRenterPassword(Password:string){
        await this.page.getByPlaceholder("Password Confirm")
        .type(Password)
    }
    async NotSubscribed(){
        return await this.page.locator("label[for='input-newsletter-no']").isChecked();
    }
    async AgreeCheck(){
        await this.page.locator("label[for='input-agree']").click();
    }
    async Validate(){
        await Promise.all([
            this.page.waitForNavigation({waitUntil: "networkidle"}),
            this.page.locator("input[type='submit']").click()
        ])
    }
    async Time(){
        this.page.waitForTimeout(5000);
    }
}