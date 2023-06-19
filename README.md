# WebdriverIO

### To use this project

Steps to follow

**`npm install`**	// this will download and install all required libraries mentioned in package.json file

**`npx wdio`**		// this will run the tests


### Project Setup & WebdriverIO Installation

Step 1 - Create a new folder and open in IDE (VS Code)

Step 2 - Open terminal in VS Code and run commands  	**`npm init -y`**  and  **`npm init wdio`**
                          
Step 3 - Select the options as required and install

Step 4 - Check WebdriverIO version 					**`npm ls webdriverio`**

Step 5 - Check wdio.conf.js file and project folders are created

Step 6 - To run existing tests

Run all tests in the folder configured in wdio.conf.js 	**`npx wdio run wdio.conf.js`**

or

**`npm run wdio`**

Run specific tests	 **`npx wdio run wdio.conf.js --spec test1.js`**



### How to create Tests

Step 1 - Create a new file under spec folder

Step 2 - Add the test script using it block (mocha)	

***
```
describe('Demo Tests', () => {
   it('My 1st Test', async () => {
       browser.url('https://google.com/')
       browser.pause(2000)
       await $('[name="q"]').setValue("WebdriverIO");
       await $('button[type="submit"]').click();
       browser.keys('Enter')
   })
})
```
***

$()   Single dollar sign to find a single web element

$$() Double dollar sign to find multiple web elements



### How to Generate and View Reports

Step 1 - Run - **`npm install @wdio/allure-reporter --save-dev`**

Step 2 - Add reporter config in wdio.conf.js

Step 3 - Run test and check Allure Results folder is generated

Step 4 - Install allure command line tool  npm install -g allure-commandline --save-dev

Step 5 - Run commands
		**`allure generate allure-results`**	// this will generate allure-report folder
		**`allure open`**			// will start server and open report

Refer - https://webdriver.io/docs/allure-reporter/


