import { expect, Expect, test } from "@playwright/test";
import AccessPage from "../Pages/Access";
import AddBasketPage from "../Pages/AddBasket";
import ApplyPage from "../Pages/Apply";
import DashboardPage from "../Pages/Dashboard";
import UrlLink from "../Pages/Url";

const Email = "patrick@counts-oprs.org";
const Password = "password";
test.describe("Application Form", function () {
  test("Apply for first time formality", async ({ page, baseURL }) => {
    
    // await page.goto(`${baseURL}route=account/register`);
    // const RegisterLink = new UrlLink(page)
    // await RegisterLink.LinkRegister();
    const apply = new ApplyPage(page);
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/register")
   
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

//   test.skip("Access In ", async ({ page, baseURL }) => {

     // await page.goto(`${baseURL}route=account/login`);
    // const time = new ApplyPage(page);
    // const access = new AccessPage(page);
    // const LoginLink = new UrlLink(page)

    // await LoginLink.LinkLogin()
    // await access.TypeEmail(Email);
    // await access.TypePassword(Password);
    // await access.LoginButton();
    // expect (await page.title()).toBe("My Account")
//     await time.Time();
//   });
//   test.skip("Access in Side", async ({ page, baseURL }) => {
    
    // await page.goto(`${baseURL}route=account/login`);
//     const access = new AccessPage(page);
//     const add = new AddBasketPage(page);
//     const dashboard = new DashboardPage(page);
//     const Link = new UrlLink(page)

//     await Link.LinkLogin();
//     await access.Login(Email, Password);
//     await dashboard.goToMenu();
//     await add.add();
//     const CartVisible = await add.isVisible();
//     await expect(CartVisible).toBeVisible();
//   });
});
