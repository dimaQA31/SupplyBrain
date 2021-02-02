import BasePage from "./BasePage";
import {el} from "../components/BaseElement";

const dashboardElements = {
    header: 'div.card-header',
    body: 'div.card-body'
};

class DashboardPage extends BasePage{

    verifyLandingOnDashboardPage(){
        el(dashboardElements.header).shouldHaveTextEl('Dashboard')
        el(dashboardElements.body).shouldHavePartialTextEl('You are logged in!')
        return this;
    }

}
export default new DashboardPage()
