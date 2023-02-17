/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite2/costumes/costume1.svg", {
        x: 7.580532500000032,
        y: 9.978097500000018
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.stage.watchers.color.visible = true;
    this.stage.watchers.size.visible = true;
    this.stage.watchers.transparency.visible = true;
    this.goto(-230, -171);
  }

  *whenthisspriteclicked() {
    this.broadcast("Hide all ");
    this.visible = false;
    this.stage.watchers.color.visible = false;
    this.stage.watchers.size.visible = false;
    this.stage.watchers.transparency.visible = false;
  }
}
