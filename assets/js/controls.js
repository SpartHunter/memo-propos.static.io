function verify_video_infos(blockTarget, currentBlock){
    console.log("verify video block called");
    $.each(blockTarget, (index, value) => {
        console.log("Read all occurence");
        if($(value).is(currentBlock)){
            console.log("this occurence is same from target");
        } else{
            console.log("this occurence is not same from target");
            if($(value).hasClass('content-visible')){
                console.log("this occurence is visible go to hidden");
                hide_video_infos($(value))
            }
        }
    });
}


function visible_video_infos(blockTarget){
    if(blockTarget.hasClass("content-invisible")){
        blockTarget.addClass("content-visible");
       const elements = $('.infos-content');
        verify_video_infos(elements, blockTarget);
        blockTarget.addClass("content-visible");
        let info_text = blockTarget.children();
        if(info_text.hasClass("info-up")){
            info_text.slideDown(350, function(){
                info_text.removeClass("info-up");
                blockTarget.removeClass("content-invisible");
                console.log("animation end !");
            });
            info_text.addClass("d-flex");
        }
    }
}

function hide_video_infos(blockTarget){
    if(blockTarget.hasClass("content-visible")){
        blockTarget.addClass("content-invisible");
        let info_text = blockTarget.children();
        if(!(info_text.hasClass("info-up"))){
            info_text.slideUp(350, function(){
                info_text.addClass("info-up");
                blockTarget.removeClass("content-visible");
                console.log("animation end !");
            });
            info_text.removeClass("d-flex");
        }
    }
}

/*Use function in automate start*/

(function  animation_videoover_bis(){
    console.log('Javascript video animation bis initiate !');
    $('.infos-content').mouseenter((e) => {
        visible_video_infos($(e.target));
    });
    $('.infos-content').mouseout((e) => {
        hide_video_infos($(e.target));
    });
})()

