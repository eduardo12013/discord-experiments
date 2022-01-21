// ==UserScript==
// @name         Experiments.js
// @namespace    https://github.com/eduardo12013/discord-experiments
// @version      1.0
// @description  Enable Experiments mode on Discord
// @author       mace#6441
// @match        https://discord.com/*
// @icon         https://distools.app/logo.svg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    webpackChunkdiscord_app.push([
  ["wp_isdev_patch"],
  {},
  (e) => {
    for (let c in e.c)
      if (e.c[c].exports?.default?.isDeveloper === false)
        Object.defineProperty(e.c[c].exports.default, "isDeveloper", {
          get: () => true,
        });
  },
]);
})();