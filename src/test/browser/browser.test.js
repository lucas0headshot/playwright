import { test } from '@playwright/test'

test('test browser', async ({ page }) => {
    const URL = "url_do_site_a_ser_testado";

    await page.goto(URL);

    await page.pause();
});
