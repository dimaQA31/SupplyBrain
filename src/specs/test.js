import allureReporter from "@wdio/allure-reporter";
import {openLoginPage} from '../functions/BaseFunctions';
import loginPage from '../pages/LoginPage';
import dashboardPage from '../pages/DashboardPage';
import {userCreds} from "../creds/Credentials";

describe("Log in test", () => {

    afterEach('Clean browser session', () => {
        loginPage.cleanBrowserSession();
    });

    it('Positive case: log in and verify landing on a dashboard page', () => {
        allureReporter.startStep('Step 1: Log in');
        openLoginPage();
        loginPage.loginToApp(userCreds.name, userCreds.password);
        allureReporter.endStep()

        allureReporter.startStep('Step 2: Verify landing on a dashboard page');
        dashboardPage.verifyLandingOnDashboardPage()
        allureReporter.endStep()
    })
});
