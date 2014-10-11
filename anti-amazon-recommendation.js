jQuery(function() {
    console.log("anti-amazon-recommendation loaded");
    jQuery(".s_checkUnmarked").click();
    setTimeout(function() {
        var $nextButton = jQuery("#ysMoreResults");
        console.log("next page " + ($nextButton.length?"exists":"does not exist"));
        if ($nextButton.length) {
            window.location.href = $nextButton.parent().attr("href");
        }
    }, 5000);
});
