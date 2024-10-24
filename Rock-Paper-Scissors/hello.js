let userscore =0;
let compscore =0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")
const userscorenew=document.querySelector("#userscore");
const compscoernew=document.querySelector("#compscore");
const compchoice=()=>{
    const options =["rock","paper","scissors"];
    const index= Math.floor(Math.random()*3);
    return options [index];
}
const showwinner=(userwin,userId,defaultchoice )=>{
    if(userwin){
        userscore++;
        userscorenew.innerHTML=userscore;
        
        msg.innerHTML=`you win your ${userId} bets ${defaultchoice}`;
    }
    else{
        compscore++;
        compscoernew.innerHTML=compscore;
        console.log("you lose");
        msg.innerHTML=`you lose ${defaultchoice} bets your ${userId}`;
    }
} 
const game=(userId)=>{
    console.log("user choice is",userId);
    const defaultchoice= compchoice()
    console.log("comp choice is",defaultchoice);
    if(userId===defaultchoice){
        console.log("game was draw");
        msg.innerHTML="match draw play again";
    }
    else{
        let userwin=true;
        if (userId==="rock"){
            userwin=defaultchoice==="paper"?false:true;
        }
        else if(userId==="paper"){
            userwin=defaultchoice==="scissors"?false:true;
        }
        else{
            userwin=defaultchoice==="rock"?false:true;
        }
        showwinner(userwin,userId,defaultchoice);
    }

}
choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const userId=choice.getAttribute("id");
       game(userId); 
    })
})