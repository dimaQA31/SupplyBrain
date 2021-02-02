import BasePage from "./BasePage";
import {el} from "../components/BaseElement";

class LoginPage extends BasePage{

    loginToApp(email, password) {
        const loginElements = {
            emailField: 'input#email',
            passwordField: 'input#password',
            submitButton: 'button[type="submit"]',
        };
        el(loginElements.emailField).enterValue(email);
        el(loginElements.passwordField).enterValue(password);
        el(loginElements.submitButton).clicking();
        return this;
    }

}
export default new LoginPage()
