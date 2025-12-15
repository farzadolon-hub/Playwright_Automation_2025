import { Page } from '@playwright/test';
//viod mrthods
//method to click on any unique element
export async function click(page: Page, locator: string, elementName: string) {
    console.log("Clicking on " + elementName);
    await page.locator(locator).click();
}//end of click method

//method to click on any element by index
export async function clickByIndex(page: Page, locator: string, index: number, elementName: string) {
    console.log("Clicking on element " + elementName);
    //await page.waitForTimeout(2000);
    await page.locator(locator).nth(index).click();
}//end of clickByIndex method

//return methods
//method to type on any element
export async function type(page: Page, locator: string, userValue: string, elementName: string) {
    console.log("Typing on " + elementName);
    let element = page.locator(locator);
    await element.fill('');
    await element.fill(userValue);
}//end of type method

//method to type on any element by index
export async function typeByIndex(page: Page, locator: string, index: number, userValue: string, elementName: string) {
    console.log("Typing on " + elementName);    
    let element = page.locator(locator).nth(index);
    await element.fill('');
    await element.fill(userValue);
}//end of typeByIndex method

//method to get text from any unique element
export async function getText(page: Page, locator: string, elementName: string){
    console.log("Getting text from " + elementName);
    let result = await page.locator(locator).innerText();
    return result;
}//end of getText method
//method to get text from any element by index
export async function getTextByIndex(page: Page, locator: string, index: number, elementName: string){
    console.log("Getting text from " + elementName);
    let result = await page.locator(locator).nth(index).innerText();
    return result;
}//end of getTextByIndex method

//Reusable method for select dropdown 
export async function selectFromDropdown(page: Page,locator: string,optionValue: string,elementName: string){
  console.log("Selecting value from dropdown element " + elementName);
  await page.locator(locator).selectOption(optionValue);
}// end of select method

//Reusable method for select dropdown by index
export async function selectFromDropdownByIndex(page: Page,locator: string,index: number,elementName: string){
  console.log("Selecting value from dropdown element " + elementName);
  await page.locator(locator).selectOption({index: index});
}// end of selectByIndex method


//method to mouse hover on any unique element
export async function mouseHover(page: Page, locator: string, elementName: string){
    console.log("Hovering on " + elementName);
    await page.locator(locator).hover();
}//end of mouseHover method

//method to mouse hover on any element by index
export async function mouseHoverByIndex(page: Page, locator: string, index: number, elementName: string){
    console.log("Hovering on " + elementName);
    await page.locator(locator).nth(index).hover();
}//end of mouseHoverByIndex method


//method to scroll by pixel
export async function scrollByPixel(page: Page, deltaX: number, deltaY: number){
    console.log("Scrolling by pixel " + deltaX + ", " + deltaY);
    await page.mouse.wheel(deltaX, deltaY);
}//end of scrollByPixel method

//method to scroll by element
export async function scrollToElement(page: Page, locator: string, elementName: string){
    console.log("Scrolling to element " + elementName);
    await page.locator(locator).scrollIntoViewIfNeeded();
}//end of scrollToElement method

