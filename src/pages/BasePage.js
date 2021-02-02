
export default class Page {

    cleanBrowserSession(){
        browser.deleteCookies();
        browser.reloadSession();
        return this;
    }

}
