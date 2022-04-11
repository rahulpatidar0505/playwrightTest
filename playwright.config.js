const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
 
  reporter: 'html',
  use: {
    actionTimeout: 0,
    browserName : 'chromium',
    headless : false,
    // screenshot : 'on',
    // trace : 'on',//off,on
    // baseURL: 'http://localhost:3000',

    // trace: 'on-first-retry',
  },

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',
};

module.exports = config;
