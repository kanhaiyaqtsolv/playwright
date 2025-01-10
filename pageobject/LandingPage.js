
class LandingPage {
    // call default class constructor
    constructor(page) {
        // set page object
        this.page = page;
    }
    // this methos used for accpet cooike and plociy
    async acceptCookies() {
        // set xpath locator for cooike 
        await this.page.locator("//button[normalize-space()='Accept']").click();
        await this.page.waitForLoadState('networkidle');
        
    }
    // this method used for menu hoveanc check menu and sub menu
    async hoverAndCheckMegaMenu(menu) {
        await this.page.hover(menu.selector);
        const isVisible = await this.isMegaMenuVisible(menu.megaMenu);
        if (isVisible) {
          console.log(`Mega menu is visible for ${menu.selector}`);
        } else {
          console.error(`Mega menu did not appear for ${menu.selector}`);
        }
        // await this.page.waitForTimeout(3000);
    }
    // menu check display or not 
    async isMegaMenuVisible(menuSelector) {
        const isVisible = await this.page.isVisible(menuSelector);
        return isVisible;
    }
    // call this method for menu heading
    async checkHeadingMenu()
    {
        // get all menu seletor 
        const navLinks = await this.page.$$('.nav-link');
        let countOfMenuItem = 1;
        for (const link of navLinks) {
            // Get the text content of the nav-link
            const linkText = await link.textContent();
            
            await this.page.locator(`li.nav-item:nth-child(${countOfMenuItem}) .nav-link`).hover();
            await this.page.waitForLoadState('networkidle');
            // Check if this nav-link has a parent `.nav-item` that contains a `.megaMenu`
            const hasMegaMenu = await link.evaluate((el) => {
                const parentNavItem = el.closest('.nav-item');
                return parentNavItem && parentNavItem.querySelector('.megaMenu') !== null;
            });
            countOfMenuItem ++;
            console.log(`Link: "${linkText.trim()}", Has MegaMenu: ${hasMegaMenu}`);
        }
    }

   
}
    
module.exports = LandingPage;
  