import { expect, Expect, test } from "@playwright/test";
import AccessPage from "../Pages/Access";
import AddBasketPage from "../Pages/AddBasket";
import ApplyPage from "../Pages/Apply";
import DashboardPage from "../Pages/Dashboard";
import UrlLink from "../Pages/Url";

const Email = "patrick@counts-op.org";
const Password = "password";
test.describe("Application Form", function () {
  test("Apply for first time formality", async ({ page, baseURL }) => {
    // const link = new UrlLink(page)
    // await link.UrlPage1(`${baseURL}route=account/register`)
    await page.goto(`${baseURL}route=account/register`);
    const apply = new ApplyPage(page);
    await apply.typeFirstName("Patrick");
    await apply.typeRenterName("roboco-op");
    await apply.typeEmail(Email);
    await apply.typePhone("81079737434");
    await apply.typePassword(Password);
    await apply.typeRenterPassword(Password);
    await apply.NotSubscribed();
    await apply.AgreeCheck();
    await apply.Validate();
    await apply.Time();
  });
  test("Access In ", async ({ page, baseURL }) => {
    const time = new ApplyPage(page);
    const access = new AccessPage(page);
    await page.goto(`${baseURL}route=account/login`);
    await access.TypeEmail(Email);
    await access.TypePassword(Password);
    await access.LoginButton();
    // expect (await page.title()).toBe("My Account")
    await time.Time();
  });
  test("Access in Side", async ({ page, baseURL }) => {
    // const url = new UrlLink(page)
    const access = new AccessPage(page);
    const add = new AddBasketPage(page);
    const dashboard = new DashboardPage(page);
    await page.goto(`${baseURL}route=account/login`);
    await access.Login(Email, Password);
    await dashboard.goToMenu();
    await add.add();
    const CartVisible = await add.isVisible();
    await expect(CartVisible).toBeVisible();
  });
});
