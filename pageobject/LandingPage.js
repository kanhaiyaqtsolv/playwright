
class LandingPage {
    // call default class constructor
    constructor(page) {
        // set page object
        this.page = page;
        // set menu item 
        this.menuSelectors = [
            { selector: 'li.nav-item:nth-child(1) .nav-link', megaMenu: '.megaMenu' },
            { selector: 'li.nav-item:nth-child(2) .nav-link', megaMenu: '.megaMenu' }, 
            { selector: 'li.nav-item:nth-child(3) .nav-link', megaMenu: '.megaMenu' }, 
            { selector: 'li.nav-item:nth-child(4) .nav-link', megaMenu: '.megaMenu' }, 
            { selector: 'li.nav-item:nth-child(5) .nav-link', megaMenu: '.megaMenu' }, 
            { selector: 'li.nav-item:nth-child(6) .nav-link', megaMenu: '.megaMenu' }, 
            { selector: 'li.nav-item:nth-child(7) .nav-link', megaMenu: '.megaMenu' }, 
          ];
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
        for (const menu of this.menuSelectors) {
            await this.hoverAndCheckMegaMenu(menu);
        }

    }

   
}
    
module.exports = LandingPage;
  