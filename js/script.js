/*Nina Kong*/
function collapsedElement( linkTarget, DetailTarget, iconTarget) {
    "use strict";
    var target = $(DetailTarget);
    target.hide();
    $(linkTarget).find(iconTarget).removeClass("hide");
    $(linkTarget).click(function () {
        $(this).parent().next(DetailTarget).slideToggle();
        $(this).find(iconTarget).toggleClass("fa-chevron-right fa-chevron-down");
    });
}

$(document).ready(function () {
    "use strict";
    collapsedElement(".FirstLayerTitle", ".FirstLayerDetail", "#FirstIcon");
    collapsedElement(".SecondLayerTitle", ".SecondLayerDetail", "#secondIcon");
});

$(window).resize(function(){ 
    
});