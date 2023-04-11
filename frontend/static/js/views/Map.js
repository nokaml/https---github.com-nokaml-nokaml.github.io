import TemplateView from "./templateView.js";

export default class extends TemplateView {
  constructor() {
    super();
    this.setTitle("Map");
  }

  async getHtml() {
    return `
    <div class="map-container">
      Basic Map
      <div id="map"></div>
    </div>
    `;
  }
}
