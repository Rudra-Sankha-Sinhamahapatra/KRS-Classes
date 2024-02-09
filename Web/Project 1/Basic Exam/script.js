const magicElement=document.getElementById('magicid');

let isHovered=false;
magicElement.addEventListener('mouseenter',()=>{
    isHovered=true;
    if(isHovered){
magicElement.style.backgroundColor='aqua';
magicElement.style.color='white';
magicElement.style.transform='translateY(-10px)';
    }
})

magicElement.addEventListener('mouseleave',()=>{
    magicElement.style.backgroundColor='aquamarine';
    magicElement.style.color='black';
    magicElement.style.transform='translateY(0px)';
    })