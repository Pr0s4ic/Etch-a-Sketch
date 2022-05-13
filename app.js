// Maintain State of Active Tool
const zone = document.querySelector(".zone");
let boxes;

function activeTool() {
    var zoneTool = zone.getAttribute("data-tool");
    if (zoneTool == "penMode") {
        penModeBox();
    } else if (zoneTool == "colorMode") {
        colorModeBox();
    } else if (zoneTool == "eraserMode") {
        eraserModeBox();
    };
};

function penModeBox() {
    for (const box of boxes) {
        box.addEventListener("click", function() {
            box.style.backgroundColor = "black";
        });
    };
};

function colorModeBox(){
    for (const box of boxes) {
        box.addEventListener("click", function(){
            box.style.backgroundColor = "red";
        });
    };
};

function eraserModeBox() {
    for (const box of boxes) {
        box.addEventListener("click", function() {
            box.style.backgroundColor = "white";
        });
    };
};

// Creating Boxes
const size16 = document.querySelector(".s1");
const size32 = document.querySelector(".s2");
const size64 = document.querySelector(".s3");

size16.addEventListener("click", function() {
    size16.classList.add("active");
    size32.classList.remove("active");
    size64.classList.remove("active");
    addBox(16);

    boxes = document.querySelectorAll(".box");
    zone.setAttribute("data-box", "16");
    activeTool();
});

size32.addEventListener("click", function() {
    size16.classList.remove("active");
    size32.classList.add("active");
    size64.classList.remove("active");
    addBox(32);
    
    boxes = document.querySelectorAll(".box");
    zone.setAttribute("data-box", "32");
    activeTool();
});

size64.addEventListener("click", function() {
    size16.classList.remove("active");
    size32.classList.remove("active");
    size64.classList.add("active");
    addBox(64);
    
    boxes = document.querySelectorAll(".box");
    zone.setAttribute("data-box", "64");
    activeTool();
});

function addBox(boxes) {
    var numBox = boxes * boxes;
    var count = 0;
    var fraction = "1fr ";

    zone.innerHTML = null;
    zone.style.display = "grid";
    zone.style.gridTemplateColumns = fraction.repeat(boxes);
    zone.style.alignItems = "stretch";
    
    while (count < numBox) {
        unit = document.createElement("div");
        unit.classList.add("box");
        zone.appendChild(unit);

        count++;
    };
};

// Choosing Active Tools
const penMode = document.querySelector(".pen-mode");
const colorMode = document.querySelector(".color-mode");
const eraserMode = document.querySelector(".eraser-mode");
const clear = document.querySelector(".clear");

penMode.addEventListener("click", function() {
    if (!penMode.classList.contains("active")) {
        penMode.classList.add("active");
        colorMode.classList.remove("active");
        eraserMode.classList.remove("active");
    };

    zone.setAttribute("data-tool", "penMode");
    activeTool();
});

colorMode.addEventListener("click", function() {
    if (!colorMode.classList.contains("active")) {
        penMode.classList.remove("active");
        colorMode.classList.add("active");
        eraserMode.classList.remove("active");
    };

    zone.setAttribute("data-tool", "colorMode");
    activeTool();
});

eraserMode.addEventListener("click", function() {
    if (!eraserMode.classList.contains("active")) {
        penMode.classList.remove("active");
        colorMode.classList.remove("active");
        eraserMode.classList.add("active");
    };

    zone.setAttribute("data-tool", "eraserMode");
    activeTool();

});

clear.addEventListener("click", function() {
    var boxSize = zone.getAttribute("data-box");

    if (boxSize == "16") {
        addBox(16);
    } else if (boxSize == "32") {
        addBox(32);
    } else if (boxSize == "64") {
        addBox(64);
    };

    boxes = document.querySelectorAll(".box");
    zone.setAttribute("data-box", boxSize);
    activeTool();
});
