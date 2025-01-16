let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn")
let winMassage=document.querySelector("#winner")
let winMassageContainer=document.querySelector(".win-massage")

let turnO=true;

const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6],
];

let count=0;


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        count+=1;
      box.innerText=turnO?"O":"X";
      turnO=!turnO;
      box.disabled=true; 

      checkWinner();
    })
})


const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;

        if(val1!=="" && val2!=="" && val3!==""){
        if(val1===val2 && val2===val3 ){
            showWinner(val1);
            
        }
        else if(count===9){
            winMassage.innerText="Game Draw";
            winMassageContainer.classList.remove("hide");
            disableButtons();
        }
     }

    }
}

let showWinner = (winner)=>{
    winMassage.innerText=`Winner is ${winner}`;
    winMassageContainer.classList.remove("hide");
    disableButtons();
  
}

const disableButtons = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
    count=0;
}
const enableButtons = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const resetgame=()=>{
    turnO=true;
    enableButtons();
    winMassageContainer.classList.add("hide");
    

}

newGameBtn.addEventListener("click",()=>{
    resetgame();
});
resetBtn.addEventListener("click",()=>{
    resetgame();
});

