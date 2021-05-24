//movement animation
const card=document.querySelector(".card");
const container =document.querySelector(".container");
//items
const title=document.querySelector('.info h1');
const sneaker=document.querySelector('.sneaker img');
const purchase=document.querySelector('.purchase button');
const info=document.querySelector('.info h3');
const sizes=document.querySelector('.sizes');
//animation
container.addEventListener("mousemove",(e)=>
{
    let xAxis=((window.innerWidth/2 - e.pageX)/15);
    let yAxis=((window.innerHeight/2 - e.pageY)/15);
    card.style.transform =`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//animate in inital position
container.addEventListener('mouseenter',(e)=>
{
  card.style.transition=`none`;
  //popout
  title.style.transform=`translateZ(130px)`;
  sneaker.style.transform="translateZ(160px) rotateZ(40deg) rotateX(20deg)";
  info.style.transform=`translateZ(125px)`;
  sizes.style.transform=`translateZ(100px)`;
  purchase.style.transform=`translateZ(75px)`;
});

container.addEventListener('mouseleave', (e)=>
{
    card.style.transition=`0.5s ease`;
   
    card.style.transform=`rotateY(0deg) rotateX(0deg)`;
    title.style.transform="translateZ(0px)";
    sneaker.style.transform="translateZ(0px) rotateZ(0deg) rotateX(0deg)";
    info.style.transform=`translateZ(0px)`;
    sizes.style.transform=`translateZ(0px)`;
    purchase.style.transform=`translateZ(0px)`;
});