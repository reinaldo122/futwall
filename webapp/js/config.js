(function() {
  require.config({
    deps: ["main"],
    paths: {
      jquery: 'libs/jquery',
      bootstrap: 'libs/bootstrap',
      underscore: 'libs/underscore',
      backbone: 'libs/backbone',
      layoutmanager: 'libs/backbone.layoutmanager'
    },
    shim: {
      underscore: {
        deps: ["jquery"],
        exports: "_"
      },
      backbone: {
        deps: ["underscore", "jquery"],
        exports: "Backbone"
      },
      layoutmanager: {
        deps: ["backbone"],
        exports: "Backbone.Layout"
      },
      bootstrap: {
        deps: ["jquery"]
      }
    },
    urlArgs: "bust=" + (new Date()).getTime()
  });

}).call(this);
