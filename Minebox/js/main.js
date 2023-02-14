const item = document.getElementById("js-item");
const itemGrabbed = document.getElementById("js-item-grabbed");
itemGrabbed.setAttribute("visible",false);
let grabbed = false;

item.onmouseenter = function(){
    if(item.getAttribute("visible") === true){
        item.setAttribute("visible",false);
        itemGrabbed.setAttribute("visible",true);
        grabbed = true
        pickaxeGrabbed.setAttribute("visible",false);
        canIChopWood = false;
        canIChopStone= false;
        canIChopLeaves= false;
    }
}

const yellowSpheres = document.getElementsByClassName("js-sphere");
const invisibleBox = document.getElementById("js-invisible-box");

for(let i = 0; i < yellowSpheres.length; i++){
    yellowSpheres[i].onmouseenter = function(){
        if(yellowSpheres[i].getAttribute("visible") === false || grabbed === false)
        {
            return;
        }
        let position = yellowSpheres[i].getAttribute("position");
        position.y = position.y + 1;
        yellowSpheres[i].setAttribute("visible",false);
        invisibleBox.setAttribute("position",position);
        invisibleBox.setAttribute("visible",true);
        itemGrabbed.setAttribute("visible",false);
        grabbed = false;
    }
}

const trees = document.getElementsByClassName("js--tree");
const castle = document.getElementsByClassName("js--castle");
const leaves = document.getElementsByClassName("js--leaf");
let wood = 0;
let stone = 0;
let leaf = 0;
const pickaxe = document.getElementById("js--pickaxe");
const pickaxeGrabbed = document.getElementById("js--pickaxe--grabbed");
pickaxeGrabbed.setAttribute("visible",false);

pickaxe.onmouseenter = function(){
    if(pickaxe.getAttribute("visible") === true){
        pickaxe.setAttribute("visible",false);
        pickaxeGrabbed.setAttribute("visible",true);
        itemGrabbed.setAttribute("visible",false);
        canIChopWood = true;
        canIChopStone = true;
        canIChopLeaves = true;
    }
}

let canIChopWood = false;
let canIChopStone = false;
let canIChopLeaves = false;

for(let i = 0; i < trees.length; i++){
    trees[i].onmouseenter = function(){
        if(trees[i].getAttribute("visible") === true && canIChopWood === true){
            trees[i].setAttribute("visible", false);
            wood = wood + 1;
            document.getElementById("js--wood").innerText = wood;
        }
    }
}

for(let i = 0; i < castle.length; i++){
    castle[i].onmouseenter = function(){
        if(castle[i].getAttribute("visible") === true && canIChopStone === true){
            castle[i].setAttribute("visible",false);
            stone = stone + 1;
            document.getElementById("js--stone").innerText = stone;
        }
    }
}

for(let i = 0; i < leaves.length; i++){
    leaves[i].onmouseenter = function(){
        if(leaves[i].getAttribute("visible") === true && canIChopLeaves === true){
            leaves[i].setAttribute("visible",false);
            leaf = leaf + 1;
            document.getElementById("js--leaf").innerText = leaf;
        }
    }
}