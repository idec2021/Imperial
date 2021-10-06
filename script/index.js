const index = Object.create(null);

const el = (id) => document.getElementById(id);

const tag = (tag) => document.getElementsByTagName(tag);

const cn = (cl) => document.getElementsByClassName(cl);

var opacity = 0;

var intervalID = 0;

window.addEventListener("DOMContentLoaded", function () {
    setInterval(index.scrollFade("back-to-top"), 1000);
});

index.scrollFade = function (target) {
    var segment = window.scrollY;

    if (segment > 100) {
        index.fadeIn(target);
    }

    else {
        index.fadeOut(target);
    }
}


index.fadeIn = function (name) {
    setInterval(index.show(name), 200);
}

index.fadeOut = function (name) {
    setInterval(index.hide(name), 200);
}

index.show = function (name) {
    //var tagname = tag(name);
    //var classname = cn(name);
    var idname = el(name);

    opacity = Number(window.getComputedStyle(idname).getPropertyValue("opacity"));
    if (opacity < 1) {
        opacity += 0.9;
        idname.style.opacity = opacity;
    }

    else {
        clearInterval(intervalID);
    }
}

index.hide = function (name) {
    var idname = el(name);

    opacity = Number(window.getComputedStyle(idname).getPropertyValue("opacity"));
    if (opacity > 0) {
        opacity -= 0.9;
        idname.style.opacity = opacity;
    }

    else {
        clearInterval(intervalID);
    }
}

export default Object.freeze(index);