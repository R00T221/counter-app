const countValue=document.querySelector('#counter');
let posit=document.getElementById('positive');
let negat=document.getElementById('negative');

const increment=(()=>{
    let value=countValue.innerText;
value=parseInt(value);

//Incremeneting the value
value=value+1;
//Setting the new updated value
countValue.innerText=value;
})

//Creating a decrement() function.
const decrement=(()=>{

    let value=parseInt(countValue.innerText);
    //Decrement the value
    value=value-1;
    //Update the value back to UI.
    countValue.innerText=value;
});

posit.addEventListener('click',increment);
negat.addEventListener('click',decrement);
