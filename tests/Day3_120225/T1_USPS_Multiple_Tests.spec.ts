import { test, Page } from '@playwright/test';
test('Mouse hover to quick tools module and select track a package @smoke', async ({ page }) => {
  // Go to https://www.usps.com/
  await page.goto('https://www.usps.com/');
    // Hover mouse to Quick Tools module
    await page.locator('[class="nav-first-element menuitem"]').hover();
    // Click on Track a Package link
    await page.locator('text=Track a Package').click();
    //enter a tracking number
    await page.locator('[id="tracking-input"]').fill('9400111899223925123456');
    await page.waitForTimeout(5000); // wait for few seconds to see it entered because of fast execution

    await page.waitForTimeout(5000); // wait for few seconds to see the ressult
});
test('Mouse hover to quick tools module and click on schedule a pickup on USPS', async ({ page }) => {
    //navigate to USPS
    await page.goto('https://www.usps.com/');
    //hover to quick tools module
    await page.locator('[class="nav-first-element menuitem"]').hover();
    await page.waitForTimeout(3000); //wait for few seconds
    //click on schedule a pickup link
    await page.locator('[alt="Schedule a Pickup Icon"]').click();
});
