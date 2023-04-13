let paper = document.querySelector(".paper");
let canvasSmall = document.querySelector(".small");
let canvasMedium = document.querySelector(".medium");
let canvasLarge = document.querySelector(".large");

function removeChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }};

canvasSmall.addEventListener("click", () => {
    removeChildren(paper);
    for (let i = 0; i < 256; i++) {
        let canvasCubeSmall = document.createElement("div");
        canvasCubeSmall.classList.add("canvas-small");
        paper.appendChild(canvasCubeSmall);
    }
});

canvasMedium.addEventListener("click", () => {
    removeChildren(paper);
    for (let i = 0; i < 1024; i++) {
        let canvasCubeMedium = document.createElement("div");
        canvasCubeMedium.classList.add("canvas-medium");
        paper.appendChild(canvasCubeMedium);
    }
});

canvasLarge.addEventListener("click", () => {
    removeChildren(paper);
    for (let i = 0; i < 4096; i++) {
        let canvasCubeLarge = document.createElement("div");
        canvasCubeLarge.classList.add("canvas-large");
        paper.appendChild(canvasCubeLarge);
    }
});