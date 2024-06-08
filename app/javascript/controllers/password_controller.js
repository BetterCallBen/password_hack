import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="password"
export default class extends Controller {
  static targets = ["button", "input"];
  connect() {}

  check() {
    if (this.inputTargets.every((input) => input.value.length >= 3)) {
      this.buttonTarget.disabled = false;
      this.buttonTarget.style.opacity = 1;
    } else {
      this.buttonTarget.disabled = true;
      this.buttonTarget.style.opacity = 0.5;
    }
  }
}
