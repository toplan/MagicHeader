/**
 *
 * @type {number}
 */

var MagicHeader = ( function () {

    //animate speed
    var speed = 500;

    //pre drawer handle
    var drawer_handle_old = "";

    $(".magic-header .drawer-handle").live('click',function () {
        var drawer_handle_new = $(this).attr("name");
        if( drawer_handle_old == $(this).attr("name") || drawer_handle_old == "" ){
            //open the selected drawer
            $(".magic-header #"+$(this).attr("name")+"").fadeIn();
            $(this).addClass("open");

            var isDisplay = $(".magic-header .drawer-inner").css("display");
            if(isDisplay == "none"){
                //it's first time to open drawer
                drawer_handle_old = $(this).attr("name");
            }else{
                //click the same open menu
                drawer_handle_old = "";
                $(this).removeClass("open");
            }
            $(".magic-header .drawer-inner").slideToggle(speed);
            if(isDisplay != "none"){
                //close the opened drawer
                $(".magic-header #"+drawer_handle_new).fadeOut();
            }
        }else{
            $(".magic-header .drawer-handle[name='"+drawer_handle_old+"']").removeClass('open');
            $(".magic-header #"+drawer_handle_old).hide();
            drawer_handle_old = $(this).attr("name");
            $(this).addClass("open");
            $(".magic-header #"+drawer_handle_old).show();
        }
    });


    $(".magic-header .close_drawer").live("click",function(){
        $(".magic-header .drawer-handle[name='"+drawer_handle_old+"']").removeClass('open');
        $(".magic-header .drawer-inner").slideUp(speed);
        close_opended_drawer_paenl();
        drawer_handle_old = "";
    });

    //reset password
    $(".magic-header .lostPwd").live("click",function(){
        $(".magic-header #reset-password-table").show();
        $(".magic-header #login-table").hide();
    });

    //agreement
    $(".magic-header .click_clause").live("click",function(){
        if($(".cb_clause_div").html() == ""){
            $(".cb_clause_div").html("√");
            $(this).addClass('checked');
        }else{
            $(".cb_clause_div").html("");
            $(this).removeClass('checked');
        }
    });

    $(".magic-header .return_to_login").live("click",function(){
        $(".magic-header #reset-password-table").hide();
        $(".magic-header #login-table").show();
    });

    function close_opended_drawer_paenl(){
        if( $(".magic-header .drawer-panel").is(":visible") ){
            $(".magic-header .drawer-panel").fadeOut(speed);
        }
    }

})();




