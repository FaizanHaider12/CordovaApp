$(document).ready(function() {
    $('li').click(function() {
        $('li').fadeOut('slow');
    });
});

var faizanapp= {};
faizanapp.app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    onDeviceReady: function() {
      fastClick.attach(document.body);
    }
};
