
import { test, Page } from '@playwright/test';
import { clickByIndex, scrollByPixel, selectFromDropdownByIndex, type, typeByIndex } from '../../Reusable_Actions';
test('Geico Insurance Quote @ai', async ({ page }) => {
    await page.goto('https://www.geico.com/');
    //enter zip code
    await typeByIndex(page, "//*[@class='zip-code-input']", 0, '11218', 'Zip Code Input');
    //select homeowners
    await clickByIndex(page, "//*[text()='Homeowners']", 3, 'Homeowners Option');
    //scroll down
    await scrollByPixel(page, 0, 400);
    //click on start my quote
    await clickByIndex(page, "//*[text()='Start My Quote']", 0, 'Start My Quote Button');   
    //enter first name
    await type(page, "//*[contains(@id,'Id_GiveFirstName')]", 'John', 'First Name Input');
    //enter last name
    await type(page, "//*[contains(@id,'Id_GiveLastName')]", 'Doe', 'Last Name Input'); 
    //enter date of birth
    await type(page, "//*[contains(@id,'Id_GiveDateOfBirth')]", '01/01/1990', 'Date of Birth Input');
    //scroll down into view until we see the next button
    await scrollByPixel(page, 0, 500);
    await page.waitForTimeout(2000);
    //click next
    await clickByIndex(page, "//*[text()='Next']", 0, 'Next Button');   
    //enter address
    await type(page, "//*[@placeholder='Enter a location']", '123 Main St, Brooklyn, NY', 'Address Input'); 
    await page.waitForTimeout(2000);
    //click next
    await clickByIndex(page, "//*[text()='Next']", 0, 'Next Button');   
    //to begin a new quote checked yes button as I entered the address manually
    await clickByIndex(page, "//*[@value='Yes']", 0, 'Yes Radio Button');   
    //click next
    await clickByIndex(page, "//*[text()='Next']", 0, 'Next Button');   
    //capture and print the message.
    const message = await page.locator("//*[@id='salesForm']").innerText();
    console.log('The captured message is: ', message);
});//end of test



/*
1.Navigate to geico.com
2. enter zip code  //*[@id='ssp-service-zip']
3. select homeowners //*[text()='Homeowners'].get(3)
4. Scroll down
5. click on start my quote //*[text()='Start My Quote'].get(0)
6. enter first name,//*[contains(@id,'Id_GiveFirstName')].get(1) //*[aria-label='First Name']
7.last name //*[contains(@id,'Id_GiveLastName')].get(1)
8.date of birth //*[contains(@id,'Id_GiveDateOfBirth')].get(1)
9. scroll down into view until we see the next button //*[text()='Next']
10. click next //*[text()='Next']
11. enter address //*[@placeholder='Enter a location']
12. click next //*[text()='Next']
13.to begin a new quote checked yes button //*[@value='Yes'] as I entered the address manually
14. click next //*[text()='Next']
15. capture and print the message. //*[@id='salesForm']*/