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
        targets: ".squares",
        translateX: 500,
        easing: "spring(1,30,50,20)",
      });
    });
  }
}
