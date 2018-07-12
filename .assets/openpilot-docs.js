

require(['gitbook'], function(gitbook) {
  console.warn("gitbook:",gitbook);
  gitbook.events.bind('page.change', function() {
    console.warn("page.change:",gitbook);
    if (!$(".book-summary .logo").length) {
      $(".book-summary").prepend("<a href=\"" + gitbook.state.bookRoot + "\" class=\"logo\"></a>");
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
