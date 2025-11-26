//your JS code here. If required.
//your JS code here. If 


//const board = document.getElementById("board");

// for (let i = 0; i < 800; i++) {
//   const box = document.createElement("div");
//   box.classList.add("square");

//   box.addEventListener("mouseover", () => {
//     box.style.backgroundColor = randomColor();

//     setTimeout(() => {
//       box.style.backgroundColor = "#eee";
//     }, 1000);
//   });

//   board.appendChild(box);
// }

// function randomColor() {
//   return "#" + Math.floor(Math.random() * 16777215).toString(16);
// }
const board = document.getElementById("board");

for (let i = 0; i < 800; i++) {
    const box = document.createElement("div");
    box.classList.add("square");

    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = randomColor();

        setTimeout(() => {
            box.style.backgroundColor = "#111";
        }, 1000);
    });

    board.appendChild(box);
}

function randomColor() {
    const colors = ["red", "blue", "yellow", "purple", "green", "cyan", "orange"];
    return colors[Math.floor(Math.random() * colors.length)];
}

