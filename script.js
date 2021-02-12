// constructer
const personFactory = (name,marker) => {
  return {name,marker};
};
let gameModule=(()=>{
  let markers=['','','','','','','','',''];
  let gameCheck=false
  // Cache Container
  let container=document.querySelector('.container')
  let btn =document.querySelector('.submit')
  const p1 = document.querySelector('#player1')
  const p2 = document.querySelector('#player2')
  const body=document.querySelector('body')
  const para = document.getElementById('para')
  const footer = document.querySelector('footer')
  const reset=document.createElement('a')
  reset.classList.add('reset')
  const radioBtn1=document.getElementById('p1').checked
  const radioBtn2=document.getElementById('p2').checked
  para.textContent=''
  // Clear Cotainer And Make The Divs  
  const makeDivs=(e)=> { 
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
  console.log(reset)
 players()
 divEvent()
}
// Make The Players
let playerOne;
let playerTwo;

function players(){
if (radioBtn1==true){
  if (p1.value&&p2.value){
    playerOne =personFactory(p1.value,'O')
    playerTwo =personFactory(p2.value,'X')
    }else if (p1.value&&p2.value==''){
    playerOne =personFactory(p1.value,'O')
    playerTwo =personFactory('player2','X')
    }else if(p2.value&&p1.value==''){
    playerOne =personFactory('player1','O')
    playerTwo =personFactory(p2.value,'X')
    }else if (p1.value==''&&p2.value==''){
    playerOne =personFactory('player1','O')
    playerTwo =personFactory('player2','X')
    }
}else if (radioBtn1==false&&radioBtn2==true){
  if (p1.value&&p2.value){
    playerOne =personFactory(p1.value,'X')
    playerTwo =personFactory(p2.value,'O')
    }else if (p1.value&&p2.value==''){
    playerOne =personFactory(p1.value,'X')
    playerTwo =personFactory('player2','O')
    }else if(p2.value&&p1.value==''){
    playerOne =personFactory('player1','X')
    playerTwo =personFactory(p2.value,'O')
    }else if (p1.value==''&&p2.value==''){
    playerOne =personFactory('player1','X')
    playerTwo =personFactory('player2','O')
    }
}
}  
//  eventListener For Divs
 function divEvent(){
    let last=''
    const divs=document.querySelectorAll('.div')
    for (let i=0;i<divs.length;i++){
    console.log(para.textContent)
    if (!para.textContent){
      divs[i].addEventListener('click',checkState)
    }else if (para.textContent==playerOne.name+' '+'won'){
      divs[i].removeEventListener('click',checkState)
    }else if (para.textContent==playerTwo.name+' '+'won'){
      divs[i].removeEventListener('click',checkState)
    }

      function checkState(){
        checkWin()
        if (divs[i].textContent==''){
          if (last==playerTwo.marker||lastReset=='something'){
            lastReset=''
            divs[i].textContent=playerOne.marker
            last=playerOne.marker
            markers[i]=last
            checkWin()
          }else if (last==playerOne.marker){
            divs[i].textContent=playerTwo.marker
            last=playerTwo.marker
            markers[i]=last
            checkWin()
          }else if (last==''){
            divs[i].textContent=playerOne.marker
            last=playerOne.marker
            markers[i]=last
            checkWin()
          }
        }
      }
      }
}
//  last if win
const checkWin=()=>{
    let chk;
    if(markers[0]==playerOne.marker&&markers[1]==playerOne.marker&&markers[2]==playerOne.marker||
    markers[0]==playerTwo.marker&&markers[1]==playerTwo.marker&&markers[2]==playerTwo.marker){
    chk=markers[0]==playerOne.marker?playerOne.name:playerTwo.name
    para.textContent=chk+' '+'won'
    gameCheck=true
    }else if (markers[0]==playerOne.marker&&markers[3]==playerOne.marker&&markers[6]==playerOne.marker||
    markers[0]==playerTwo.marker&&markers[3]==playerTwo.marker&&markers[6]==playerTwo.marker){
    chk=markers[0]==playerOne.marker?playerOne.name:playerTwo.name
    para.textContent=chk+' '+'won'
    gameCheck=true
    }else if (markers[0]==playerOne.marker&&markers[4]==playerOne.marker&&markers[8]==playerOne.marker||
    markers[0]==playerTwo.marker&&markers[4]==playerTwo.marker&&markers[8]==playerTwo.marker){
    chk=markers[0]==playerOne.marker?playerOne.name:playerTwo.name
    para.textContent=chk+' '+'won'
    gameCheck=true
    }else if (markers[1]==playerOne.marker&&markers[4]==playerOne.marker&&markers[7]==playerOne.marker||
    markers[1]==playerTwo.marker&&markers[4]==playerTwo.marker&&markers[7]==playerTwo.marker){
    chk=markers[1]==playerOne.marker?playerOne.name:playerTwo.name
    para.textContent=chk+' '+'won'
    gameCheck=true
    }else if (markers[2]==playerOne.marker&&markers[4]==playerOne.marker&&markers[6]==playerOne.marker||
    markers[2]==playerTwo.marker&&markers[4]==playerTwo.marker&&markers[6]==playerTwo.marker){
    chk=markers[2]==playerOne.marker?playerOne.name:playerTwo.name
    para.textContent=chk+' '+'won'
    gameCheck=true
    }else if (markers[2]==playerOne.marker&&markers[5]==playerOne.marker&&markers[8]==playerOne.marker||
    markers[0]==playerTwo.marker&&markers[4]==playerTwo.marker&&markers[8]==playerTwo.marker){
    chk=markers[2]==playerOne.marker?playerOne.name:playerTwo.name
    para.textContent=chk+' '+'won'
    gameCheck=true
    }
    else if (markers[3]==playerOne.marker&&markers[4]==playerOne.marker&&markers[5]==playerOne.marker||
    markers[3]==playerTwo.marker&&markers[4]==playerTwo.marker&&markers[5]==playerTwo.marker){
    chk=markers[3]==playerOne.marker?playerOne.name:playerTwo.name
    para.textContent=chk+' '+'won'
    gameCheck=true
    }else if (markers[0]==playerOne.marker&&markers[4]==playerOne.marker&&markers[8]==playerOne.marker||
    markers[0]==playerTwo.marker&&markers[4]==playerTwo.marker&&markers[8]==playerTwo.marker){
    chk=markers[4]==playerOne.marker?playerOne.name:playerTwo.name
    para.textContent=chk+' '+'won'
    gameCheck=true
  
    }else if (markers[6]==playerOne.marker&&markers[7]==playerOne.marker&&markers[8]==playerOne.marker||
    markers[6]==playerTwo.marker&&markers[7]==playerTwo.marker&&markers[8]==playerTwo.marker){
    chk=markers[6]==playerOne.marker?playerOne.name:playerTwo.name
    para.textContent=chk+' '+'won'
    gameCheck=true
    }else if((markers.length==9)&&(!markers.includes(''))){
      para.textContent=`it's a tie`
    }
}
// Reset
let lastReset=''
function resetDiv(){
  markers=[]
  lastReset='something'
  const divs=document.querySelectorAll('.div')
  para.textContent=''
  for (let i=0;i<divs.length;i++){
  divs[i].textContent=''
  }
  remove()
}
// remove event listeners
function remove(){
  const divs=document.querySelectorAll('.div')
    for (let i=0;i<divs.length;i++){
      btn.addEventListener('click',makeDivs)
    }
}
 // Initalize
  const start=btn.addEventListener('click',makeDivs)
  const end=reset.addEventListener('click',resetDiv)
  return{
    start,
    end
  }
})();


