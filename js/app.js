// Main state code
class PageState {
    constructor() {
        let currentState = null;
    }

    init = () => {
        this.change(new homeState);
    }

    change = (state) => {
        this.currentState = state;
    }
}

const homeState = function () {
    document.querySelector("#content").innerHTML = homeHTML;
    setTimeout(() => document.querySelector(".row-1").classList.add("visible"), 50);
    applyFadeEffect(true);
}

const aboutState = function () {
    applyFadeEffect(false);
    document.querySelector("#content").innerHTML = aboutHTML;
    setTimeout(() => document.querySelector(".slide-from-left").classList.add("slide-show"), 50);
    setTimeout(() => document.querySelector(".slide-from-right").classList.add("slide-show"), 50);
}

const contactState = function () {
    applyFadeEffect(false);
    document.querySelector("#content").innerHTML = '<h1>Contact</h1>';
}



// Start the "app"
const page = new PageState();
page.init();