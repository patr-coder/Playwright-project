import { expect, Expect, test } from "@playwright/test";
import AccessPage from "../Pages/Access";
import AddBasketPage from "../Pages/AddBasket";
import ApplyPage from "../Pages/Apply";
import DashboardPage from "../Pages/Dashboard";
import UrlLink from "../Pages/Url";

const Email = "patrick@20000951.org";
const Password = "password";
// test.describe("Application Form", function () {
  test("Apply for first time formality", async ({ page, baseURL }) => {
   
    const apply = new ApplyPage(page);
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/register")
    await page.goto(`${baseURL}route=account/register`);
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

    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")
    // await page.goto(`${baseURL}route=account/login`);
    const time = new ApplyPage(page);
    const access = new AccessPage(page);
    const LoginLink = new UrlLink(page)

    await LoginLink.LinkLogin()
    await access.TypeEmail(Email);
    await access.TypePassword(Password);
    await access.LoginButton();
    const AccountTitle = await page.title();
    expect(AccountTitle).toBe("My Account"); 
    // expect (await page.title()).toBe("My Account"); 
    await page.waitForTimeout(5000);
    // await time.Time();
  });
  test("Access in Side", async ({ page, baseURL }) => {
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")
    // await page.goto(`${baseURL}route=account/account`);
    const access = new AccessPage(page);
    const add = new AddBasketPage(page);
    const dashboard = new DashboardPage(page);
    const Link = new UrlLink(page)

    await Link.LinkLogin();
    await access.Login(Email, Password);
    await dashboard.goToMenu();
    await add.add();
    const CartVisible = await add.isVisible();
    await expect(CartVisible).toBeVisible();
  });
// });
