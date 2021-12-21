import EventEmitter from "eventemitter3";
import anime from "animejs";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.init();
    this.emit(Application.events.READY);
  }
  init() {
    const p = document.querySelector("p");
    p.addEventListener("click", () => {
      // use anime.js
      anime({
        targets: scrollElement,
        scrollTop: 0,
        duration: 500,
        easing: "easeInOutQuad",
      });
    });
  }
}
