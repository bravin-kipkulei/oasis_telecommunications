import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Services");
    }

    async getHtml() {
        return `
            <h1>Services</h1>
            <p>You are viewing the services!</p>
        `;
    }
}
