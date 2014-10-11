jQuery(function() {
    console.log("anti-amazon-recommendation loaded");
    jQuery(".s_checkUnmarked").click();
    setTimeout(function() {
        var $nextButton = jQuery("#ysMoreResults");
        if (!$nextButton.length) {
            $nextButton = jQuery("#iyrNext");
        }
        if ($nextButton.length) {
            window.location.href = $nextButton.parent().attr("href");
        }
    }, 5000);
});
