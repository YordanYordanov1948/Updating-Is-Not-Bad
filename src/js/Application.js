import EventEmitter from "eventemitter3";
import anime from "animejs";

const p = document.querySelector("p");
console.log(p);

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
    document.querySelector("p").addEventListener("click", function () {
      anime({
        targets: "div",
        translateX: 250,
        rotate: "1turn",
        backgroundColor: "#FFF",
        duration: 800,
      });
    });
  }
}
