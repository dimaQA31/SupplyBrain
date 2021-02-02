export function openLoginPage() {
    browser.setWindowSize(1920, 1080);
    return browser.url('/login');
}
