import { test, expect } from '@playwright/test';
import { devConfig } from '../config/dev-config';
// import another class 
const LandingPage  = require('../pageobject/LandingPage');
const HeadingPage = require('../pageobject/HeadingPage');
const JobLocationPage = require('../pageobject/JobLocationPage'); 

test.describe('New Todo', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(devConfig.baseUrl);
        console.log('Before tests');
    });
    // accept cooike and policy
    test('Go to footer and accept cookie and policy', async ({ page }) => {
        const pageObject = new LandingPage(page);
        await pageObject.acceptCookies();
        
    });

    // check menu and sub menu 
    test('Check all heading menu and submneu ', async ({ page }) => {
        const pageObject = new LandingPage(page);
        await pageObject.checkHeadingMenu();
       
    });
    // go job listing page
    test('Go to careers page on click', async ({ page }) => {
        
    //     const pageObject = new JobLocationPage(page);
    //     // go to job page
    //     await pageObject.goToCareerPage(page);
    //     // scroll down page
    //     await pageObject.scrollPage(page);
    // // set default job 
    //     await pageObject.setJobLocation(page);
    //     // get serach result page
    //     await pageObject.getSearchResult(page);
    //     // get jon detial in first record 
    //     let jobResultData = await pageObject.getJobData(page);
    //     // Go to job detail page
    //     let singleJobDetail = await pageObject.getJobDetail(page);
        
    //     // match job title jon listing  and  detail page
    //     expect(jobResultData.jobTitle).toBe(singleJobDetail.jobTitle);
    //     // match job title jon location  and  detail page
    //     expect(jobResultData.jobLocation).toBe(singleJobDetail.jobLocation);
        // match job loca year of experiences and  detail page experiences
    //  expect(jobResultData.jobExperience).toBe(singleJobDetail.jobExperience);
        
    
    });

});