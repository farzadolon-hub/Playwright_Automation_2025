
import { test, Page } from '@playwright/test';
test('Weight Watchers find a workshop', async ({page}) => {
    //initialize page variable for browser
    let zipcodes = new Array<string>()
    zipcodes.push('10011')
    zipcodes.push('10012')
    zipcodes.push('10013')
    for(let i=0; i<zipcodes.length; i++){
        //navigate to Weight Watchers
        await page.goto('https://www.weightwatchers.com');
        //click on find a workshop
        await page.locator('[icon="location"]').click(); 
        await page.waitForTimeout(2000)
        //click on In person link
        //await page.locator('text=In-Person').click();
        //enter the zipcode in the search field
        await page.locator('input[id="location-search"]').fill(zipcodes[i]);
        await page.waitForTimeout(2000) //wait for few seconds for the next step
        //click on the search arrow
        await page.locator('button[type="submit"]').click();
        //scroll to see the first studio result
        await page.locator("[class='showHideFilters-XPYCU']").scrollIntoViewIfNeeded();
        //wait for few seconds
        await page.waitForTimeout(30000);
        //click on the first studio result
        await page.locator("//*[contains(@class,'linkContainer')]").click();
        //capture and print out the address
        let address = await page.locator('[class="address-FnT8k"]').textContent();
        console.log('The address is for the zipcode ', zipcodes[i], ': ', address);
        //scroll down
        await page.locator('//*[contains(@class,"workshopSchedule")]').scrollIntoViewIfNeeded();
        //capture and print out the time table
        let table = await page.locator('//*[contains(@class,"workshopSchedule")]').textContent();
        console.log('The schedule time-table is \n ', table);
    }//end of for loop
});//end of test





























//click on find a workshop link //*[text()='Find a Workshop'].get(0).click();
//click on In person link //*[text()='In-Person']
//enter the zipcode in the search field //*[@id='location-search']
//click on Search arrow //*[contains(@class,'rightArrow')]

//click on the first studio link //*[contains(@class,'linkUnderline')].get(0).click(); //*[contains(@class,'linkContainer')]
//print out the entire address of the studio //*[@class='address-FnT8k']
//scroll down and capture the entire table //*[@id='studioWorkshopSchedule'] ////*[contains(@class,'workshopSchedule')]