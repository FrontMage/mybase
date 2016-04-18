$(function() {

    $("#sidebar-wrapper").hide();
    $("#toolbar-wrapper").hide();

    $("#sidebar-toggle-btn").click(function(event) {
        event.preventDefault();
        var $sidebar = $("#sidebar"),
            $sbWrapper = $("#sidebar-wrapper"),
            $content = $("#main-content");
            
        if ($sidebar.width() == 0) {
            
            setTimeout(function() {
                $sidebar.animate({
                    width: "250px"
                }, 500);
            }, 1);
            
            setTimeout(function() {
                $content.animate({
                    paddingLeft: "250px"
                }, 500);
            }, 2);
            
            setTimeout(function() {
                $sbWrapper.stop().fadeIn(200);
            }, 500);
            
        } else {
            
            $sbWrapper.stop().fadeOut(200);
            
            setTimeout(function() {
                
                setTimeout(function() {
                    $sidebar.animate({
                        width: "0px"
                    }, 500);
                }, 1);
                
                setTimeout(function() {
                    $content.animate({
                        paddingLeft: "0px"
                    }, 500);
                }, 2);
                
            }, 205);
            
        }
    });
    
    $("#toolbar-toggle-btn").click(function(event) {
        event.preventDefault();
        var $toolbar = $("#toolbar"),
            $tWrapper = $("#toolbar-wrapper"),
            $content = $("#main-content");
            
        if ($toolbar.width() == 0) {
            
            setTimeout(function() {
                $toolbar.animate({
                    width: "250px"
                }, 500);
            }, 1);
            
            setTimeout(function() {
                $content.animate({
                    paddingRight: "250px"
                }, 500);
            }, 2);
            
            setTimeout(function() {
                $tWrapper.stop().fadeIn(200);
            }, 500);
            
        } else {
            
            $tWrapper.stop().fadeOut(200);
            
            setTimeout(function() {
                
                setTimeout(function() {
                    $toolbar.animate({
                        width: "0px"
                    }, 500);
                }, 1);
                
                setTimeout(function() {
                    $content.animate({
                        paddingRight: "0px"
                    }, 500);
                }, 2);
                
            }, 205);
            
        }
    });
    
});