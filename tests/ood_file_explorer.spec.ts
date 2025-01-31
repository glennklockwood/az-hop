import {test, expect} from '@playwright/test';
import config from './playwright.config';

test('File Explorer', async ({browser}) => {
    // create context with HTTP credentials
    const context = await browser.newContext();
    // Create a page
    const page = await context.newPage();
    await page.goto('/', { waitUntil: 'networkidle' });

        // Click text=Files
    await page.click('text=Files');

    // Click text=Home Directory
    await Promise.all([
        page.waitForNavigation({ waitUntil: 'networkidle' }),
        page.click('text=Home Directory')
    ]);

    // Click text=anfhome /
    await Promise.all([
        page.waitForNavigation({ waitUntil: 'networkidle' }),
        page.click('text=anfhome /')
    ]);


    // Click text=Files
    await page.click('text=Files');

    // Click text=Lustre /lustre
    await Promise.all([
        page.waitForNavigation(),
        page.click('text=Lustre /lustre')
    ]);

    // Click div[role="main"] >> text=lustre /
    await page.click('div[role="main"] >> text=lustre /');

    // Click div[role="main"] >> text=Lustre
    await page.click('div[role="main"] >> text=Lustre');

    await page.waitForLoadState('networkidle');
    await page.close()

    // Close the browser
    await context.close();
});

