

require(['gitbook'], function(gitbook) {
  gitbook.events.bind('page.change', function() {
    if (!$(".book-summary .logo").length) {
      $(".book-summary").prepend("<div class=\"logo\"></div>");
    }
  });
});
