

require(['gitbook'], function(gitbook) {
  gitbook.events.bind('page.change', function() {
    if (!$(".book-summary .logo").length) {
      $(".book-summary").prepend("<a href=\"/\" class=\"logo\"></a>");
    }

    $(".navigation").each((i,val) => {
      var $this = $(val);
      var labelParts = $this.attr('aria-label').split(":");
      var labelNav = labelParts[0].replace(' page','');
      var labelPageTitle = labelParts[1];
      
      $this.append("<span class=\"label-nav\">" + labelNav + "</span>");
      $this.append("<span class=\"label-page-title\">" + labelPageTitle + "</span>");
    })
  });
});
