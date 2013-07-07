(function() {
  define(['jquery', 'underscore', 'backbone', 'layoutmanager', 'bootstrap'], function($, _, Backbone) {
    var app;
    $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
      options.url = options.url;
    });
    Backbone.Layout.configure({
      manage: true
    });
    return app = {
      root: "/"
    };
  });

}).call(this);
