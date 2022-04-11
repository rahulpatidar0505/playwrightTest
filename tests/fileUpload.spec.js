const { test, expect } = require('@playwright/test');

test('File upload test', async ({page}) =>{
    await page.goto('https://ps.uci.edu/~franklin/doc/file_upload.html')
    await page.locator("input[name='userfile']").setInputFiles('abc.txt')
})