/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 14.5,
        y: 13.384615384615358
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Sat.100" },
        this.whenIReceiveSat100
      ),
      new Trigger(Trigger.BROADCAST, { name: "Sat.0" }, this.whenIReceiveSat0)
    ];
  }

  *whenGreenFlagClicked() {
    this.effects.ghost = 70;
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
    this.clearPen();
    while (true) {
      this.goto(this.mouse.x, this.mouse.y);
      if (this.mouse.down) {
        this.penDown = true;
      } else {
        this.penDown = false;
      }
      this.penColor.h = this.stage.vars.color;
      this.penSize = this.stage.vars.size;
      this.penColor.a = 1 - this.stage.vars.transparency / 100;
      yield;
    }
  }

  *whenIReceiveSat100() {
    this.penColor.s = 100;
  }

  *whenIReceiveSat0() {
    this.penColor.s = 0;
  }
}
