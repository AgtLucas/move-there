// TODO: Must find a good Brackets plugin for comments

var app = (function () {

  'use strict';

  var main = {

    init: function () {
      this.moveThere();
    },

    moveThere: function () {
      this.goUp(250);
      this.goRight(500);
      this.goDown(250);
      this.goLeft(500);
    },

    goUp: function (x) {
      // TODO: Implement goUp
    },

    goRight: function (x) {
      // TODO: Implement goRight
    },

    goDown: function (x) {
      // TODO: Implement goDown
    },

    goLeft: function (x) {
      // TODO: Implement goLeft
    }

  };

  return main.init();

}());
