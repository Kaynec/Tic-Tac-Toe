const Players = (()=> {
  let playerOne;
  let playerTwo;
  let createPlayers=()=>{
  let chkplayer1=(!p1.value=='')?p1.value:'player1'
  let chkplayer2=(!p2.value=='')?p2.value:'player2'
    if (Btn1.checked){
      playerOne =personFactory(chkplayer1,'O')
      playerTwo =personFactory(chkplayer2,'X')
    }else if (Btn2.checked){
      playerOne =personFactory(chkplayer1,'X')
      playerTwo =personFactory(chkplayer2,'O')
    }else if (Btn2.checked&&Btn1.checked){
      playerOne =personFactory(chkplayer1,'O')
      playerTwo =personFactory(chkplayer2,'X')
    }
    return {playerOne, playerTwo}
  }
     return {
       createPlayers:createPlayers,
     }
   })()

// constructer
const personFactory = (name,marker) => {
  return {name,marker};
};
// Cache html files 
let container=document.querySelector('.container')
let btn =document.querySelector('.submit')
let p1 = document.querySelector('#player1')
let p2 = document.querySelector('#player2')
let Btn1=document.getElementById('p1')
let Btn2=document.getElementById('p2')
let para = document.getElementById('para')
let footer = document.querySelector('footer')
let reset=document.createElement('a')
reset.classList.add('reset')
para.textContent=''
// Gameboard
let gameModule=(()=>{
  let markers=['','','','','','','','',''];  
  return{
    markers
  }
})();

// Responsible for The Display 
  
  
  // Making Players According to UserInput



  // Checks For Winner And Changes The Display Text To congratulate The Winner
  const checkWin= (()=>{
  let chk;
  playerOne=Players.createPlayers().playerOne
  playerTwo=Players.createPlayers().playerTwo
  const test = ()=>{
    if(gameModule.markers[0]==playerOne.marker&&gameModule.markers[1]==playerOne.marker&&gameModule.markers[2]==playerOne.marker||
      gameModule.markers[0]==playerTwo.marker&&gameModule.markers[1]==playerTwo.marker&&gameModule.markers[2]==playerTwo.marker){
      chk=gameModule.markers[0]==playerOne.marker?playerOne.name:playerTwo.name
      para.textContent=chk+' '+'won'
      }else if (gameModule.markers[0]==playerOne.marker&&gameModule.markers[3]==playerOne.marker&&gameModule.markers[6]==playerOne.marker||
      gameModule.markers[0]==playerTwo.marker&&gameModule.markers[3]==playerTwo.marker&&gameModule.markers[6]==playerTwo.marker){
      chk=gameModule.markers[0]==playerOne.marker?playerOne.name:pl 
      para.textContent=chk+' '+'won'
      }else if (gameModule.markers[0]==playerOne.marker&&gameModule.markers[4]==playerOne.marker&&gameModule.markers[8]==playerOne.marker||
      gameModule.markers[0]==playerTwo.marker&&gameModule.markers[4]==playerTwo.marker&&gameModule.markers[8]==playerTwo.marker){
      chk=gameModule.markers[0]==playerOne.marker?playerOne.name:playerTwo.name
      para.textContent=chk+' '+'won'
      }else if (gameModule.markers[1]==playerOne.marker&&gameModule.markers[4]==playerOne.marker&&gameModule.markers[7]==playerOne.marker||
      gameModule.markers[1]==playerTwo.marker&&gameModule.markers[4]==playerTwo.marker&&gameModule.markers[7]==playerTwo.marker){
      chk=gameModule.markers[1]==playerOne.marker?playerOne.name:playerTwo.name
      para.textContent=chk+' '+'won'
      }else if (gameModule.markers[2]==playerOne.marker&&gameModule.markers[4]==playerOne.marker&&gameModule.markers[6]==playerOne.marker||
      gameModule.markers[2]==playerTwo.marker&&gameModule.markers[4]==playerTwo.marker&&gameModule.markers[6]==playerTwo.marker){
      chk=gameModule.markers[2]==playerOne.marker?playerOne.name:playerTwo.name
      para.textContent=chk+' '+'won'
      }else if (gameModule.markers[2]==playerOne.marker&&gameModule.markers[5]==playerOne.marker&&gameModule.markers[8]==playerOne.marker||
      gameModule.markers[2]==playerTwo.marker&&gameModule.markers[5]==playerTwo.marker&&gameModule.markers[8]==playerTwo.marker){
      chk=gameModule.markers[2]==playerOne.marker?playerOne.name:playerTwo.name
      para.textContent=chk+' '+'won'
      }
      else if (gameModule.markers[3]==playerOne.marker&&gameModule.markers[4]==playerOne.marker&&gameModule.markers[5]==playerOne.marker||
      gameModule.markers[3]==playerTwo.marker&&gameModule.markers[4]==playerTwo.marker&&gameModule.markers[5]==playerTwo.marker){
      chk=gameModule.markers[3]==playerOne.marker?playerOne.name:playerTwo.name
      para.textContent=chk+' '+'won'
      }else if (gameModule.markers[0]==playerOne.marker&&gameModule.markers[4]==playerOne.marker&&gameModule.markers[8]==playerOne.marker||
      gameModule.markers[0]==playerTwo.marker&&gameModule.markers[4]==playerTwo.marker&&gameModule.markers[8]==playerTwo.marker){
      chk=gameModule.markers[4]==playerOne.marker?playerOne.name:playerTwo.name
      para.textContent=chk+' '+'won'
      }else if (gameModule.markers[6]==playerOne.marker&&gameModule.markers[7]==playerOne.marker&&gameModule.markers[8]==playerOne.marker||
      gameModule.markers[6]==playerTwo.marker&&gameModule.markers[7]==playerTwo.marker&&gameModule.markers[8]==playerTwo.marker){
      chk=gameModule.markers[6]==playerOne.marker?playerOne.name:playerTwo.name
      para.textContent=chk+' '+'won'
      }else if((gameModule.markers.length==9)&&(!gameModule.markers.includes(''))){
        para.textContent=`it's a tie`
      }
  }
  return {
    test:test
  }
})()




const displayController =(()=>{
  const makeDivs=()=> {
    container.innerHTML='' 
    for (let i=0;i<9;i++){
    const div = document.createElement("div");
    div.setAttribute('id',`${i}`)
    div.classList.add('div');
    container.appendChild(div);
    }
    container.classList.add('grid');
    footer.appendChild(reset)
    reset.textContent='Reset'
    divEvent()

    Players.createPlayers()
  }
  
  function divEvent(){
    let last=''
    const divs=document.querySelectorAll('.div')
    for (let i=0;i<divs.length;i++){
    if (para.textContent==''){
      divs[i].addEventListener('click',checkState)
    }else if (!para.textContent){
      divs[i].removeEventListener('click',checkState)
    }
      function checkState(){
        playerOne=Players.createPlayers().playerOne
        playerTwo=Players.createPlayers().playerTwo
        if (!para.textContent==''){
          return
        }
        if (divs[i].textContent==''){
          if (last==playerTwo.marker||lastReset=='something'){
            lastReset=''
            divs[i].textContent=playerOne.marker
            last=playerOne.marker
            gameModule.markers[i]=last
            checkWin.test()
          }else if (last==playerOne.marker){
            divs[i].textContent=playerTwo.marker
            last=playerTwo.marker
            gameModule.markers[i]=last
            checkWin.test()
          }else if (last==''){
            divs[i].textContent=playerOne.marker
            last=playerOne.marker
            gameModule.markers[i]=last
            checkWin.test()

          }
        }
      }
      }
    }
let lastReset=''
const resetDiv=()=>{
  gameModule.markers=['','','','','','','','',''];
  lastReset='something'
  const divs=document.querySelectorAll('.div')
  para.textContent=''
  for (let i=0;i<divs.length;i++){
  divs[i].textContent=''
  }
}
return {
  makeDivs:makeDivs,
  resetDiv:resetDiv,
}
})()

// Initalize
const start=btn.addEventListener('click',displayController.makeDivs)
const end=reset.addEventListener('click',displayController.resetDiv)