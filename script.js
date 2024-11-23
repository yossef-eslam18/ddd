
let image = [
    { img: "A1.jpg" },
    { img: "A2.jpg" },
    { img: "A3.jpg" },
    { img: "A4.jpg" },
    { img: "A5.jpg" },
    { img: "A6.jpg" },
    { img: "A7.jpg" },
    { img: "A1.jpg" },
    { img: "A2.jpg" },
    { img: "A3.jpg" },
    { img: "A4.jpg" },
    { img: "A5.jpg" },
    { img: "A6.jpg" },
    { img: "A7.jpg" },
    { img: "A1.jpg" },
    { img: "A2.jpg" },
    { img: "A3.jpg" },
    { img: "A4.jpg" },
    { img: "A5.jpg" },
    { img: "A6.jpg" },
    { img: "A7.jpg" },
    { img: "A1.jpg" },
    { img: "A2.jpg" },
    { img: "A3.jpg" },
    { img: "A4.jpg" },
    { img: "A5.jpg" },
    { img: "A6.jpg" },
    { img: "A7.jpg" },
];

let gall = document.querySelector(".gallery");

for (let i = 0; i < image.length; i++) {
    let ime = document.createElement("img");
    ime.classList.add("imgee");
    ime.src = image[i].img;

    let div = document.createElement("div");
    div.append(ime);
    gall.append(div);
}

let overlay = document.createElement("div");
overlay.classList.add("overlay");
document.body.appendChild(overlay);

gall.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        const clickedImage = e.target;

        clickedImage.classList.add("fullscreen");

        overlay.style.display = "block";

        overlay.addEventListener("click", () => {
            clickedImage.classList.remove("fullscreen");
            overlay.style.display = "none";
        });
    }
});
