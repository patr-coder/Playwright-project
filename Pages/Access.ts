import { Page } from "@playwright/test";
import { ClassificationTypeNames } from "typescript";
export default class AccessPage {
  constructor(public page: Page) {}
  async TypeEmail(Email: string) {
    await this.page.getByPlaceholder("E-Mail Address").type(Email);
  }
  async TypePassword(Password: string) {
    await this.page.getByPlaceholder("Password").type(Password);
  }
  async LoginButton() {
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: "networkidle" }),
      this.page.locator("input[type='submit']").click(),
    ]);
  }
  async Login(Email: string, Password: string) {
    await this.TypeEmail(Email);
    await this.TypePassword(Password);
    await this.LoginButton();
  }
}
