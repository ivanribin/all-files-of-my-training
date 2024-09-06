const icon = document.querySelector(".icon");
const body = document.querySelector("body");

const handleMouseOver = () => {
    if (icon.getAttribute("data-object") === "type") {
        body.style.backgroundColor = "rgb(104, 104, 160)";
        return;
    }
    body.style.backgroundColor = "rgb(188, 153, 29)";
}

const handleMouseOut = () => {
    body.style.backgroundColor = "white";
    icon.classList.remove("click");
}

const handleClick = () => {
    icon.classList.add("click");
    if (icon.getAttribute("data-object") === "type") {
        icon.src = "resources/images/scale_1200.jpeg";
        body.style.backgroundColor = "rgb(255, 242, 0)";
        icon.dataset.object = "java";
        return;
    }
    icon.src = "resources/images/Typescript.svg.png";
    body.style.backgroundColor = "rgb(3, 3, 215)";
    icon.dataset.object = "type";
}

icon.addEventListener("mouseover", () => {
    handleMouseOver()});

icon.addEventListener("mouseout", () => {
    handleMouseOut();
})

icon.addEventListener("click", () => {
    handleClick();
});