class BaseElement {
    constructor(value) {
        this.value = value;
    }

    get element() {
        return $(this.value);
    }

    shouldBeVisible() {
        this.element.waitForEnabled();
        this.element.waitForExist();
        this.element.waitForDisplayed();
        return this.element;
    }

    clicking() {
        this.shouldBeVisible().click();
        return this;
    }

    getValueText() {
        return this.shouldBeVisible().getText();
    }

    enterValue(text) {
        this.shouldBeVisible().setValue(text);
    }

    shouldHaveTextEl(text) {
        this.element.waitForExist();
        this.element.waitForDisplayed();
        this.element.waitForEnabled();
        console.log('Get gext() :', this.getValueText());
        expect(this.getValueText()).to.equal(text);
    }

    shouldHavePartialTextEl(text) {
        expect(this.getValueText()).to.include(text);
    }
}

export function el (value){
    return new BaseElement(value)
}
