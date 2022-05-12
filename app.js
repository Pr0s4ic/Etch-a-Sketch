const zone = document.querySelector(".zone");

const size16 = document.querySelector(".s1");
size16.addEventListener("click", function() {
    size16.classList.add("active");
    size32.classList.remove("active");
    size64.classList.remove("active");
    addBox(16);
});

const size32 = document.querySelector(".s2");
size32.addEventListener("click", function() {
    size16.classList.remove("active");
    size32.classList.add("active");
    size64.classList.remove("active");
    addBox(32);
});

const size64 = document.querySelector(".s3");
size64.addEventListener("click", function() {
    size16.classList.remove("active");
    size32.classList.remove("active");
    size64.classList.add("active");
    addBox(64);
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
    }
}