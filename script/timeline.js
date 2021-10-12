const timeline = Object.create(null);

const el = (id) => document.getElementById(id);

const tag = (tag) => document.getElementsByTagName(tag);

const cn = (cl) => document.getElementsByClassName(cl);

var milestones = cn("milestone");



window.addEventListener("DOMContentLoaded", function () {
    timeline.init();
    timeline.scrollAnimation();
});

timeline.init = function () {
    for (var i in milestones) {
        milestones[i].innerText = cn("date")[i].innerText;
        cn("date")[i].href = "#" + String(cn("date")[i].innerText);
        milestones[i].setAttribute("id", String(cn("date")[i].innerText));
        
    }
};

timeline.scrollAnimation = function () {
    for (;;) {
        alert("loop")
        for (var i in milestones) {
            var segment = el(String(milestones[i].innerText)).getBoundingClientRect().top; //distance between page top and top of element
            if (segment <= 0) {
                milestones[i].setAttribute("class", String("active"));
            }
            else {
                milestones[i].removeAttribute("class");
            }
            alert(cl("active"));
        }
    }
}

export default Object.freeze(timeline);