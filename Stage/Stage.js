/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.color = 43;
    this.vars.size = 3;
    this.vars.transparency = 0;

    this.watchers.color = new Watcher({
      label: "Color",
      style: "slider",
      visible: true,
      value: () => this.vars.color,
      setValue: value => {
        this.vars.color = value;
      },
      x: 244,
      y: 176
    });
    this.watchers.size = new Watcher({
      label: "Size",
      style: "slider",
      visible: true,
      value: () => this.vars.size,
      setValue: value => {
        this.vars.size = value;
      },
      x: 242,
      y: 135
    });
    this.watchers.transparency = new Watcher({
      label: "Transparency",
      style: "slider",
      visible: true,
      value: () => this.vars.transparency,
      setValue: value => {
        this.vars.transparency = value;
      },
      x: 246,
      y: 87
    });
  }
}
