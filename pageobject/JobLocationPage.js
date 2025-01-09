
class JobLocationPage {
    // call default class constructor
    constructor(page) {
        // set page object
        this.page = page;
        
    }
    /**
     * 
     * This method used for got to job lage and click job 
     */
    async goToCareerPage() {
        await this.page.locator('li.nav-item:nth-child(5) .nav-link').click();
        await this.page.locator('a:has-text("Explore Jobs")').click();
        this.scrollPage();
    }
     /**
     * 
     * This method used for scroll page  
     */
    async scrollPage() {
        await this.page.mouse.wheel(0, 500);
        await this.page.waitForLoadState('domcontentloaded');
        
    }
     /**
     * 
     * This method used set job location 
     */
    async setJobLocation(){
        await this.page.locator('#locationDropdown').selectOption({ label: 'Bengaluru, India' });
        await this.page.waitForLoadState('domcontentloaded');
    }
     /**
     * 
     * This method used get job search 
     */
    async getSearchResult(){
        
        await this.page.locator('.serachButton');
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.locator('.loader').waitFor({ state: 'hidden' });
       

        
    }
     /**
     * 
     * This method used get job 
     * return :object 
     */
    async getJobData() {

        await this.page.waitForLoadState('domcontentloaded');
        // get jon title
        const  jobTitle = await this.page.locator('.titleDetail h4').first().innerText();
        // get job year of experience 
        const  jobExperience = await this.page.locator('.jopOpenExperience span:first-child label').first().textContent();
        // get job locatio
        const  jobLocation = await this.page.locator('.jopOpenExperience span:last-child label').first().textContent();

        return {'jobTitle':jobTitle,'jobExperience':jobExperience,'jobLocation':jobLocation}
    }
     /**
     * 
     * This method used get single job detail   
     * return :object 
     */
    async getJobDetail() {

        await this.page.locator('.flip-card .viewDetails a').first().click();
        // get jon title
        const jobTitle =  await this.page.locator('.detailsBlock .pageTitle').innerText();
        // get job year of experience 
        const jobExperience =  await this.page.locator('.detailsBlock .leftBlock .jopOpenExperience span:first-child label').innerText();
        // get job location 
        const jobLocation =  await this.page.locator('.detailsBlock .leftBlock .jopOpenExperience span:last-child label').innerText();
        // return object 
        return {'jobTitle':jobTitle,'jobExperience':jobExperience,'jobLocation':jobLocation}

    }

    
}

module.exports = JobLocationPage;
  