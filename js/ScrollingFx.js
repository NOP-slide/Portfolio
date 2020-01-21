// Get element's 2/3rds point
const offsetTop = (el) => {
    const rect = el.getBoundingClientRect();
    const scrollTop = document.documentElement.scrollTop;

    return rect.bottom - (rect.bottom - rect.top) / 3 + scrollTop;
}

// Scrolling fade-in effect
const applyFadeEffect = (flag) => {

    flag ?
    window.onscroll = () => {
        const scrollY = document.documentElement.scrollTop + document.documentElement.clientHeight;
        const offsets = [];

        offsets.push(offsetTop(document.querySelector(".row-2")));
        offsets.push(offsetTop(document.querySelector(".row-3")));
        offsets.push(offsetTop(document.querySelector(".row-4")));

        offsets.forEach((offset, i) => {
            if (scrollY > offset) {
                document.querySelector(`.row-${i + 2}`).classList.add("visible");
            }
        });
    }
    :
    window.onscroll = null;
}