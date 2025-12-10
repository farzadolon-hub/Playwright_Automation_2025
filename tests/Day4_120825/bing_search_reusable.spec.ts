import { Page, test } from "@playwright/test";
import { click, type, getText } from "../Reusable_Actions";

let page: Page;
test.beforeAll( async ({ browser }) => {
    page = await browser.newPage();
});

test('Search for playwright keyword on bing', async ({}) => {
    //Navigate to Bing home page
    await page.goto("https://www.bing.com");   
    await page.waitForTimeout(3000);
    await type(page, '[name="q"]', 'Playwright Testing', 'Search Box'); 
    await page.keyboard.press('Enter'); //Press Enter to search
});
 test('capture the search number on bing for Playwright keyword', async ({}) => {
    //Capture the search result text
    let searchResult = await getText(page, '[class="sb_count"]', 'Search Result Text');
    console.log("Search Result Text: " + searchResult);
    let searchNumber = searchResult.split(" ")[1];
    console.log("Search Number: " + searchNumber);
 });