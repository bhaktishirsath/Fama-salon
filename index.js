// function displaydate(){
//     document.getElementById("logo").innerHTML=Date();
//   }

//   function displaydate2(){
//     document.getElementById("logo1").innerHTML=Date();
//   }
  //

  //js for login
  function Validation(){
    var number1=document.myform.num.value;
     if(number1.length<10){
      alert("Mobile number must be  10 numbers");
      return false;

    }
    else{
        alert("continue");
    }
  }
  


function displayform_date(){
  var check_in=document.myformcheck1.check.value;
  var check_out=document.myformcheck1.check.value;
  var check_guest=document.myformcheck1.check.value;

  // displayform_date.preventDefault();
  // clearErrors();
  

  var valid=true;

  if(check_in == null || check_in==""){
    // alert("please enter Check-In date");
    document.getElementById("checkin").style.border="3px solid red";
    document.getElementById("s1").innerHTML="*required";
    document.getElementById("s1").style.color="red";
    valid =false;
  }
  
  else if (check_out==null  || check_out==" " ){
    document.getElementById("d2").style.border="3px solid red"
    document.getElementById("s2").innerHTML="*required";
    document.getElementById("s2").style.color="red";
    valid= false;
  }
   else if(check_guest==null  || check_guest==" " ){
    document.getElementById("d3").style.border="3px solid red"
    document.getElementById("s3").innerHTML="*required";
    document.getElementById("s3").style.color="red";
    valid=false;
  }
  else{
    document.getElementById("checkin").style.border="";
   
    document.getElementById('s1').innerHTML="";
     document.getElementById("s1").style.color="";
     document.getElementById('submit').reset();
  }

  

}

// cart----------------
let selectelement=document.querySelector(".elements");
const Room_cart=[
  {
    id:1,
    name:"Beard Services",
    price:299,
    qty:0,
   

  },
  {
    id:2,
    name:"Haircuts",
    price:399,
    qty:0,

  },
  {
    id:3,
    name:" Premium Services",
    price:259,
    qty:0,

  },
]

function displayhotelroom(){
  Room_cart.forEach((products)=>{
    selectelement.innerHTML+=
   ` <div class="room__grid col-md-4 col-lg-3 d-flex d-flex-wrap   "  style=" border-radius:20px ;padding:9px;">
      
    <div class="room__card row">
      <div class="room__card__image ">
        <img src="${products.id}.jpg" alt="">
        <div class="room__card__icons ">
          <span><i class="ri-heart-fill"></i></span>
          <span><i class="ri-paint-fill"></i></span>
          <span><i class="ri-shield-star-fill"></i></span>
        </div>
        <div class="room__card__details row">
           <h4 >${products.name}</h4>
      
      <p>Lorem ipsum dolor sit amet.</p>
      <h5>strating from Rs.<span>${products.price}</span></h5>
      <button class="btn" >Book Now</button>
    </div>
      </div>
      
    </div>
  </div>`
  })
}
//onclick="addtocart(${product.id})"

displayhotelroom();

// cart
let cartitemsel=document.querySelector(".offcanvas-body");
let subtotalel=document.querySelector(".subtotal");
let itemsincartel=document.querySelector(".btn-secondary span");

let cart=JSCON.parse(localStorage.getItem("CART"))||[];
updatecart();












