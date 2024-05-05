import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    console.log("debounce controller connected");
  }

  static targets = ["form"];

  search() {
    clearTimeout(this.timeOut);
    debugger;
    this.timeOut = setTimeout(() => {
      this.formTarget.requestSubmit();
    }, 500);
  }
}
