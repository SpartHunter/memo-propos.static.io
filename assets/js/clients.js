const client_link = document.querySelectorAll(".video-link");

const video_player = document.querySelector(".embed-responsive-item");

let clientLinkClick = (allLinks) => {

    $.each(allLinks, (index, value) => {

        $(value).on("click", (event) => {

            const video_url = event.target.getAttribute("data");

            $(video_player).children(".embed-src").attr("src", video_url);

            $(video_player).attr("muted", false);

            $(video_player).attr("loop", false);
            
            video_player.load();

            $(video_player).trigger("play");

            $(video_player).on("ended", (event) => {

                $(video_player).children(".embed-src").attr("src", "assets/video/clients.mp4");

                $(video_player).attr("muted", true);

                $(video_player).attr("loop", true);
                
                video_player.load();
    
                $(video_player).trigger("play");

            });

        });

    });
}


clientLinkClick(client_link);