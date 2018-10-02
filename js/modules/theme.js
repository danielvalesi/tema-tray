(function($){
    $(".lazy").lazyload({
    	threshold : 300,
    	effect : "fadeIn",
    	failure_limit : 10
    });
})(jQuery);
