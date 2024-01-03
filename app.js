const  express=  require ('express');
const   engine  = require('express-handlebars').engine;
const puppeteer = require('puppeteer');


const app = express();

(async() => {

    const loginPageUrl ='https://my.facturelive.com/login'
    const emailInputSelector ='input[type="email"]'
    const passwordInputSelector ='input[type="password"]'
    const loginButtonSelector ='input[type="email"]'

    const emailInputContent =''
    const passwordInputContent =''
        const browser = await puppeteer.launch({headless:false});

        const page = await browser.newPage();

        await page.goto(loginPageUrl);
        await page.type()
        await page.type()
        await page.click()
        
        await browser.close();

    })();