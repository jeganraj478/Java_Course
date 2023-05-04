const number = document.getElementById('textBox');
const generatebtn = document.getElementById('generateButton');


generatebtn.addEventListener('click', () => {
    RemoveId();
    document.getElementById("grid").style.visibility='visible';
    document.querySelector("p").style.visibility='visible';
    for (let i = 1; i <= number.value; i++) {
        const myGiftBox =document.createElement('img');
        myGiftBox.src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lmdCUyMGJveHxlbnwwfHwwfHw%3D&w=1000&q=80";
        const giftBox=document.createElement('div');
        giftBox.setAttribute('id',"gift-box");
        giftBox.appendChild(myGiftBox);
        document.getElementById('grid').appendChild(giftBox);

    }
})

function RemoveId(){
    const divElement=document.querySelectorAll("#gift-box");
    if (divElement){
        divElement.forEach(res=>{
            res.remove();
        })
        }
    }





