const mainGrid=document.querySelector(".mainDiv");
const gridSize=90;  // todo=scalable
		mainGrid.style.height=gridSize+"vmin"
		mainGrid.style.width=gridSize+"vmin"
		mainGrid.style.backgroundColor="gray"
		mainGrid.style.display="flex"
		mainGrid.style.flexWrap="wrap"
let cMode = 3// 1 black, 2 rainbow, 3 pencil
//mode 3 needs colour as rgb

function drawGrid(size=16){
	let boxSize= gridSize/size;
	let box
	for (i=0;i<size*size;i++){
		box=document.createElement("div");
		box.addEventListener("mouseenter",function(e){changeColor(e,cMode)});
		box.style.height=boxSize+"vmin"
		box.style.width=boxSize+"vmin"
		box.style.backgroundColor="rgb(128,128,128)" 
		mainGrid.appendChild(box)
	}

}

function changeColor(event,mode){
	if (mode==1){colour="black"}
	if (mode==2){colour='rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';}
	if (mode==3){
		col=event.currentTarget.style.backgroundColor
		rgb = col.match(/\d+/g);
		colour="rgb("+(+rgb[0]+25)+","+(+rgb[1]+25)+","+(+rgb[2]+25)+")"
	}
	event.currentTarget.style.backgroundColor=colour
}

window.onload = function(){
	let colour
	drawGrid(30);
}