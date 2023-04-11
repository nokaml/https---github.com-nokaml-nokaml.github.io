import TemplateView from "./templateView.js";

export default class extends TemplateView {
    constructor() {
        super();
        this.setTitle('Time');
    }

    async getHtml() {
        return ``;
    }
}