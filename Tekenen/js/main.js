const cursor = document.getElementById("js--cursor");

// boxes
const boxes = document.getElementsByClassName("js-box");
for(let i = 0; i < boxes.length; i++){
    boxes[i].onmouseenter = function(){
        boxes[i].setAttribute("color", cursor.getAttribute("color"));
    }
}

// spheres
const sphere = document.getElementsByClassName("js-sphere");
for(let i = 0; i < sphere.length; i++){
    sphere[i].onmouseleave = function(){
        cursor.setAttribute("color", sphere[i].getAttribute("color"));
    }
}
