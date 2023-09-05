// var dimensions = 8;


const container = document.getElementById("container");




document.getElementById("size-button").addEventListener('click', function() {
    container.innerHTML = '';
    let size = prompt('enter size for grid');
    //TODO-- validate input.
    drawGrid(size);
})



function drawGrid(dimensions) {

    var row = document.createElement("div");
    row.classList.add("row");

    var box = document.createElement("div");
    box.classList.add("box");

    for (let i = 0; i < dimensions; i++) {

        row.appendChild(box.cloneNode());
    }
    for (let i = 0; i < dimensions; i++) {
        container.appendChild(row.cloneNode(true));
    }

    let boxes = document.getElementsByClassName("box");
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('mouseover', (e) => {
        e.target.classList.add("filled");
    });
}


}

