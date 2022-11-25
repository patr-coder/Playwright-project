import { Expect,Page,test} from "@playwright/test";
export default class DashboardPage{
    constructor(public page: Page){

    }
    async goToMenu(){
        await Promise.all([
         this.page.waitForNavigation({waitUntil:"networkidle"}),
        await this.page.locator(".badge.mx-1.mz-menu-label-27").click()
    ])

    }
}