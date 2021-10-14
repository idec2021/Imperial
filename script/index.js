const index = Object.create(null);

const el = (id) => document.getElementById(id);

const tag = (tag) => document.getElementsByTagName(tag);

const cn = (cl) => document.getElementsByClassName(cl);

const checkpoint = 500;

var opacity;

window.addEventListener("scroll", function () {
    const currentScroll = window.scrollY;
    if (currentScroll <= checkpoint) {
        opacity = 0; //currentScroll / checkpoint;
        cn("back-to-top").href = null;
    } else {
        opacity = 1;
        cn("back-to-top").href = "#";
    }
    el("back-to-top").style.opacity = opacity;
});

export default Object.freeze(index);