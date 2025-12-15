import { Page, test } from '@playwright/test';
import { click, clickByIndex, getText, mouseHoverByIndex, scrollByPixel, selectFromDropdown, selectFromDropdownByIndex, type } from '../../Reusable_Actions';

test('Capture fox stamp cart QA @ai', async ({ page }) => {

  // navigate to USPS website
  await page.goto('https://www.usps.com/');
  // wait for page to load
  await page.waitForTimeout(2000);
  // hover over the Shop menu
  await mouseHoverByIndex(page, '//*[text()="Shop"]', 0, 'Shop menu');
  // click on the Stamps link by index
  await selectFromDropdownByIndex(page, '//*[text()="Stamps"]', 0, 'Stamps link');
  // click checkbox for stamps
  await click(page, "//*[text()='Stamps (105)']",'Stamps only checkbox');
  // click on additional postage checkbox
  await clickByIndex(page, '[class="checkbox-container"]', 4, 'Additional Postage checkbox');
  // scroll by 400 pixels
  await scrollByPixel(page, 0, 400);
  // click on first stamp by index
  await clickByIndex(page, '[class="result-product-img"]', 0, 'First stamp');
  // click on add to cart
  await click(page, '[id="addToCartVisBtn122184"]', 'Add to Cart');
  // click on view cart
  await click(page, '//*[text()="View Cart"]', 'View Cart');
  // enter 2 on the quantity field
  await type(page, '[class="col-8 form-control"]', '2', 'Quantity field');
  // click on update cart
  await click(page, '[value="Update"]', 'Update Cart');
  // getText from stamp information under item and print
  let stampInfo = await getText(page, '[class="item-wrapper"]', 'Stamp information');
  console.log('stampInfo:', stampInfo);

});
// end of stamp cart test
