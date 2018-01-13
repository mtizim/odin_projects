//functions and operate
function add(a,b){return +a + +b;}
function sub(a,b){return +a - +b;}
function mul(a,b){return +a * +b;}
function div(a,b){return +a / +b;}
function operate(a,b,op){
	switch(op){
		case "add":
			return add(a,b);
			break;
		case "sub":
			return sub(a,b);
			break;
		case "mul":
			return mul(a,b);
			break;
		case "div":
			return div(a,b);
			break;
		default: 
			return 0
		break;
	}}
function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}



let maxLen=12
let lastValue=null
let current=[0,]
let pressedOp=""
let shouldValueBeChanged=false
let waslastDisplayManmade=true
let lastResult=""
let lastOperand=""

function currentNum(){
	if (current.length>1){
		if (current[0]==0 && current[1]=="."){start=0}
		else{start=1}
	}
	else{start=0}
	enume=""
	for (i=start;i<current.length;i++){
		enume+=current[i]
	}
	return enume
}

function display(numero){
	if (numero<0.000001&&numero>0){numero=0}
	displayNumbers=String(numero).split("")
	if (displayNumbers.length>maxLen){
		if (displayNumbers.indexOf(".")>11 || displayNumbers.indexOf(".")==-1 ){
			displ.innerHTML="Too long"
		}
		else{
			displ.innerHTML=parseFloat(String(numero).slice(0,11))
		}
	}
	else{
		displ=document.querySelector("#display")
		displ.innerHTML=numero
	}
}

function equal(e){
	if (pressedOp=="div" && currentNum()==0){document.querySelector("#display").innerHTML="ERR"}
	else{
	if (lastResult===""){lastResult=lastValue}
	if (lastOperand===""){lastOperand=currentNum()}
	currPlaceholder=operate(lastResult,lastOperand,pressedOp)
	lastResult=currPlaceholder
	shouldValueBeChanged=true
	dot.disabled=false
	display(currPlaceholder)
	waslastDisplayManmade=false
}
}
function clickedOp(event){
	opPressed=event.target.id
	dot.disabled=false
	if (pressedOp&&shouldValueBeChanged==false){equal()}
	lastOperand=""
	pressedOp=opPressed
	document.querySelector("#add").classList.remove("selectedOp")
	document.querySelector("#sub").classList.remove("selectedOp")
	document.querySelector("#mul").classList.remove("selectedOp")
	document.querySelector("#div").classList.remove("selectedOp")
	event.target.classList.add("selectedOp")
	shouldValueBeChanged=true
	waslastDisplayManmade=true
}

function clickedNum(event){
	if (!waslastDisplayManmade){
		current=[0,]
		lastValue=null
		pressedOp=""
		lastResult=""
		lastOperand=""
		dot.disabled=false
		document.querySelector("#add").classList.remove("selectedOp")
		document.querySelector("#sub").classList.remove("selectedOp")
		document.querySelector("#mul").classList.remove("selectedOp")
		document.querySelector("#div").classList.remove("selectedOp")
		document.querySelector("#display").innerHTML=0
	}
	waslastDisplayManmade=true
	numberPressed=event.target.id
	if (numberPressed==0){
		if ((current[1]=="." || current.length>1 )&& (current.length<=maxLen)){current[current.length]=numberPressed}
		if (shouldValueBeChanged){
			lastValue=currentNum()
			current=[0,]
			dot.disabled=false
			shouldValueBeChanged=false

		}
		display(currentNum())
	}
	else{
		if (shouldValueBeChanged){
			lastValue=currentNum()
			current=[0,]
			dot.disabled=false
			current[current.length]=numberPressed
			shouldValueBeChanged=false
		}
		else if (current.length<=maxLen){
			current[current.length]=numberPressed
		}
	}
	display(currentNum())
}


//adding event listeners
let num=["a",]
for(i=0;i<=9;i++){
	id= "[id=\"" + i + "\"]"
	num[i]=document.querySelector(id)
	num[i].addEventListener("click",function(e){clickedNum(e)})
}
dot=document.querySelector("#dot")
dot.addEventListener("click",function(e){
	current[current.length]=".";
	dot.disabled=true
	if (!waslastDisplayManmade){
		document.querySelector("#add").classList.remove("selectedOp")
		document.querySelector("#sub").classList.remove("selectedOp")
		document.querySelector("#mul").classList.remove("selectedOp")
		document.querySelector("#div").classList.remove("selectedOp")
		current=[0,]
		lastValue=null
		pressedOp=""
		lastResult=""
		lastOperand=""
		dot.disabled=false
		document.querySelector("#display").innerHTML=0
	}
	if (shouldValueBeChanged){
		lastValue=currentNum()
		current=[0,"."]
		shouldValueBeChanged=false
		waslastDisplayManmade=true
		display([0])
	}
	document.querySelector("#display").innerHTML+= "."
})
document.querySelector("#del").addEventListener("click",function(e){
	if (waslastDisplayManmade){
		if (current.length>1){current.pop()}
		if (!current.find(function(element){return element=="."})){
			dot.disabled=false
		}
		display(currentNum())
	}
	else{
		document.querySelector("#add").classList.remove("selectedOp")
		document.querySelector("#sub").classList.remove("selectedOp")
		document.querySelector("#mul").classList.remove("selectedOp")
		document.querySelector("#div").classList.remove("selectedOp")
		current=[0,]
		lastValue=null
		pressedOp=""
		lastResult=""
		lastOperand=""
		dot.disabled=false
		document.querySelector("#display").innerHTML=0
	
}})
document.querySelector("#equals").addEventListener("click",function(e){
	equal(e)
})
document.querySelector("#clear").addEventListener("click",function(e){
	current=[0,]
	lastValue=null
	pressedOp=""
	lastResult=""
	lastOperand=""
	dot.disabled=false
	document.querySelector("#add").classList.remove("selectedOp")
	document.querySelector("#sub").classList.remove("selectedOp")
	document.querySelector("#mul").classList.remove("selectedOp")
	document.querySelector("#div").classList.remove("selectedOp")
	document.querySelector("#display").innerHTML=0
})
document.querySelector("#add").addEventListener("click",function(e){clickedOp(e)})
document.querySelector("#sub").addEventListener("click",function(e){clickedOp(e)})
document.querySelector("#mul").addEventListener("click",function(e){clickedOp(e)})
document.querySelector("#div").addEventListener("click",function(e){clickedOp(e)})