document.addEventListener('DOMContentLoaded', () =>{
    console.log("Script loaded");
let Userscore=0;
let Computerscore=0;
const msg = document.querySelector('.message');
const Userscore_Para =document.querySelector('.Userscore');
const Compscore_Para =document.querySelector('.Compscore');
const  photos = document.querySelectorAll('.photo');
const Gen_comp_choice =()=>{
    const choices=['rock','paper','scissors'];
    const random_number=Math.floor(Math.random()*3);
    return choices[random_number];
}
const draw_game=()=>{
    console.log("It's a tie");
    msg.innerHTML="Game Draw";
}
const showWinner=(userWin,user_choice, comp_choice)=>{
    if(user_choice===comp_choice){
        console.log("Its a tie");
        msg.innerHTML="It's a tie";
        msg.style.backgroundColor="#081b31";
    }else if(userWin){
        Userscore++;
        Userscore_Para.innerHTML=Userscore;
        console.log("User wins");
        msg.innerHTML=`You wins ${user_choice} beats ${comp_choice}`;
        msg.style.backgroundColor="green";
    }else{
        Computerscore++;
        Compscore_Para.innerHTML=Computerscore;
        console.log("Computer wins");
        msg.innerHTML=msg.innerHTML=`Comp wins ${comp_choice} beats ${user_choice}`;;
        msg.style.backgroundColor="red";
    }
    }

const play_game=(user_choice)=>{
console.log("user choice",user_choice);
//Generating computer choice
const comp_choice=Gen_comp_choice();
console.log("comp_choice",comp_choice);
let userWin=null;
if (user_choice === comp_choice) {
    draw_game();
} else if (user_choice === 'rock') {
    userWin = comp_choice === 'scissors';
} else if (user_choice === 'paper') {
    userWin = comp_choice === 'rock';
} else {
    userWin = comp_choice === 'paper';
}
showWinner(userWin,user_choice, comp_choice);
}
photos.forEach((photo)=>{
    console.log(photo);
    photo.addEventListener('click',()=>{
        const user_choice=photo.getAttribute("id");
        console.log('clicked',user_choice);
        play_game(user_choice);
    });
});
});

