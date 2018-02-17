const mainGrid=document.querySelector(".mainDiv");
const gridSize=90;  // todo=scalable
		mainGrid.style.height=gridSize+"vmin"
		mainGrid.style.width=gridSize+"vmin"
		mainGrid.style.display="flex"
		mainGrid.style.flexWrap="wrap"
let cMode = 0// 1 black, 2 rainbow, 3 pencil

let gridCount=30

//mode 3 needs colour as rgb
const dtypeButton=document.querySelector(".changeDrawingType")
dtypeButton.addEventListener("click",function(e){buttonClicked(e)})

//on changing sizes
const input=document.querySelector("input")
input.addEventListener("input",function(){oninput()})
input.addEventListener("onmouseout",function(){onout()})

function oninput(){
	gridCount=input.value
	dtypeButton.textContent="Generate"
	cMode=0
}
function onout(){
	drawGrid(gridCount)

}

function buttonClicked(event){
	over=document.querySelector(".over")
	if (over){
		over.className="nover"
	}
	button=event.currentTarget
	if (cMode==1){
		cMode=2
		button.textContent="Rainbow"
		drawGrid(gridCount)
		return 0
	}
	if (cMode==2){
		cMode=3
		button.textContent="Pencil"
		drawGrid(gridCount)
		return 0
	}
	if (cMode==3  || cMode==0){
		cMode=1
		button.textContent="Black"
		drawGrid(gridCount)		
		return 0
	}
}


function drawGrid(size=16){
	//remove all
	boxes=document.querySelectorAll(".gridBox")
	if (boxes){
		boxes.forEach(function(element){
			mainGrid.removeChild(element)
		})
	}

	let boxSize= gridSize/size;
	let box
	for (i=0;i<size*size;i++){
		box=document.createElement("div");
		box.addEventListener("mouseenter",function(e){changeColor(e,cMode)});
		box.style.height=boxSize+"vmin"
		box.style.width=boxSize+"vmin"
		box.className="gridBox"
		box.style.backgroundColor="rgb(240,240,240)" 
		mainGrid.appendChild(box)
	}

}

function changeColor(event,mode){
	if (cMode==1){colour="black"}
	if (cMode==2){colour='rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';}
	if (cMode==3){
		col=event.currentTarget.style.backgroundColor
		rgb = col.match(/\d+/g);
		colour="rgb("+(+rgb[0]-25)+","+(+rgb[1]-25)+","+(+rgb[2]-25)+")"
	}
	event.currentTarget.style.backgroundColor=colour
}
