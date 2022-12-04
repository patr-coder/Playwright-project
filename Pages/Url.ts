import { Page } from "@playwright/test";
export default class UrlLink {
  constructor(public page: Page) {}
  async UrlPage2(url: string) {
    return await this.page.goto(url);
  }
  async UrlPage1(url: string) {
    return await this.page.goto(url);
  }
  async LinkRegister(){
    return await this.page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/register")
  }
  async LinkLogin(){
    return await this.page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")
  }
}
