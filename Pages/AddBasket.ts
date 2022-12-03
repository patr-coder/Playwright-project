import { expect, Expect, Page, test } from "@playwright/test";
export default class AddBasketPage {
  constructor(public page: Page) {}
  async add() {
    await this.page.hover("(//img[@class='lazy-load'])[1]", {
      strict: false,
    });
    await this.page.locator("(//button[@title='Add to Cart']//i)[1]").click();
  }
  async isVisible() {
    const see = this.page.locator("a.btn.btn-primary.btn-block");
    await see.waitFor({ state: "visible" });
    return see;
  }
}
