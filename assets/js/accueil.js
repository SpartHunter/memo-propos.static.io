
let createObserver = (forElement, forAction) =>{

    const options = {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: 1.0
    }
      
    let observer = new IntersectionObserver(forAction, options);

    observer.observe(forElement);
}

let handlerVideoAction = (entries, observer) => {

    $.each(entries, (index, value) => {

        if(value.isIntersecting){

            visibleVideoBlock(value.target);

            observer.unobserve(value.target);

        }

    });

};

let visibleVideoBlock = (blockTarget) => {

    const animate_block = $(blockTarget).children(".infos-content");

    if(animate_block.hasClass("content-invisible")){

        animate_block.addClass("content-visible");

        // animate_block.removeClass("content-invisible");

        const play_button = animate_block.children(".info-text").children(".info-play");

        play_button.on("click", (event) => {

            const video_block = $(blockTarget).children(".embed-responsive-item");

            let fullscreen_button = $(blockTarget).children(".fullscreen_button").children(".full_button");

            video_block.trigger('play');

            animate_block.css("visibility", "hidden");

            fullscreen_button.css("visibility", "visible");

            fullscreen_button.click((event) => {

                const video = event.target.parentNode.parentNode.parentNode.firstElementChild;

                video.requestFullscreen();

                fullscreen_button.css("visibility", "hidden");

            });

            video_block.on("ended", (event) => {

               event.target.load();

               animate_block.css("visibility", "visible");

            })

            video_block.on("click", (event) => {

                if(!(event.target.paused)){

                    $(event.target).trigger('pause');

                    animate_block.css("visibility", "visible");

                }

            })

        });
    }
};

let controlWindows = () => {

    let screen_size = window.screen.width;

    if(screen_size <= 991){

        const container_video = document.querySelectorAll(".container-video");

        for(let i = 0; i < container_video.length; i++){
        
            createObserver(container_video[i], handlerVideoAction);
        
        };

    } else{

        const container_video = document.querySelectorAll(".container-video");

        $.each(container_video, (index, value) => {
            
            let anime_block = $(value).children(".infos-content");

            let button_play = anime_block.children(".info-text").children(".info-play");

            anime_block.removeClass("content-visible");

            button_play.on("click", (event) => {

                const video_block = $(value).children(".embed-responsive-item");

                let fullscreen_button = $(value).children(".fullscreen_button").children(".full_button");

                anime_block.css("visibility", "hidden");

                fullscreen_button.css("visibility", "visible");
    
                video_block.trigger('play');

                fullscreen_button.click((event) => {

                    const video = event.target.parentNode.parentNode.parentNode.firstElementChild;

                    if (video.requestFullscreen) {

                        video.requestFullscreen();

                      } else if (video.webkitRequestFullscreen) { /* Safari, chrome*/

                        video.webkitRequestFullscreen();

                      } 

                    fullscreen_button.css("visibility", "hidden");

                });
    
                video_block.on("ended", (event) => {

                    anime_block.css("visibility", "visible");
    
                    event.target.load();
    
                });
    
                video_block.on("click", (event) => {
    
                    if(!(event.target.paused)){
    
                        $(event.target).trigger('pause');
                        
                        anime_block.css("visibility", "visible");

                        anime_block.addClass("content-visible");
    
                    }
    
                });

            });

        });
    }
}

window.onresize = controlWindows;

window.onload = controlWindows;