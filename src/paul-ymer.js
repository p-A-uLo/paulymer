// Element is the same as Polymer.Element in 2.x
// Modules give you the freedom to rename the members that you import
import {Element as PolymerElement}
    from '../node_modules/@polymer/polymer/polymer-element.js';

// Added "export" to export the MyApp symbol from the module
export class Paulymer extends PolymerElement {

  // Define a string template instead of a `<template>` element.
  static get template() {
    return `<div>Coucou ! Bienvenue dans [[name]].</div>`
  }

  constructor() {
    super();
    this.name = 'Paulymer';
  }

  // properties, observers, etc. are identical to 2.x
  static get properties() {
    name: {
      Type: String
    }
  }
}

customElements.define('paul-ymer', Paulymer);
