import { Page } from "@playwright/test";
export default class UrlLink {
  constructor(public page: Page) {}
  async UrlPage2(url: string) {
    return await this.page.goto(url);
  }
  async UrlPage1(url: string) {
    return await this.page.goto(url);
  }
}
