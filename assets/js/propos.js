let createObserver = (forElement, forAction) =>{

    const options = {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: 1.0
    }
      
    let observer = new IntersectionObserver(forAction, options);

    observer.observe(forElement);
}

let handlerIconsAnim = (entries, observer) => {

    $.each(entries, (index, value) => {

        console.log(`begin action handler Icon`);

        if(value.isIntersecting){

            visibleInfoBlock(value.target);

            observer.unobserve(value.target);

        }

    });

};

let handlerPlayAnim = (entries, observer) => {

    $.each(entries, (index, value) => {

        console.log(`begin action handler Icon`);

        if(value.isIntersecting){

            visibleDiversBoxBlock(value.target);

            observer.unobserve(value.target);

        }

    });

};

let visibleInfoBlock = (blockTarget) => {

    const propos_button = $(blockTarget).children(".info-play.propos-button");

    propos_button.addClass("anim");

};

let visibleDiversBoxBlock = (blockTarget) => {

    $(blockTarget).addClass("anim");

};

const info_text = document.querySelectorAll(".info-text");

const divers_box = document.querySelectorAll(".divers-box");

for(let i = 0; i < info_text.length; i++){

    createObserver(info_text[i], handlerIconsAnim);

};

for(let i = 0; i < divers_box.length; i++){

    createObserver(divers_box[i], handlerPlayAnim);

};

