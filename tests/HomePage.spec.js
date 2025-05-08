const { test, expect } = require('@playwright/test');

test('home page of Demoblaze', async ({ page }) => {
  // Visit Demoblaze
  await page.goto('https://portfolio-eight-ashy-54.vercel.app/'); //ok

  // Wait and get the title
  const pageTitle = await page.title();
  console.log("Page title is:", pageTitle);

   // Validate main heading text
   await expect(page.locator('text=Crafting Scalable & Engaging Web Experiences')).toBeVisible();

    // Check Resume link/button
  await expect(page.locator('text=Resume')).toBeVisible();


  // Validate the page title (check actual casing)
  await expect(page).toHaveTitle('Create Next App');  // It's in uppercase

  // Get and log the URL
  const pageUrl = page.url();
  console.log('Page URL is:', pageUrl);

  // Validate the URL
  await expect(page).toHaveURL("https://portfolio-eight-ashy-54.vercel.app/");

  await page.close();
});