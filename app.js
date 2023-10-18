var btn=document.getElementsByClassName("cart")
var cart=document.getElementById("cart-icon");
var value=document.getElementById("cart-value")

list=[
    {    name: "This was our pact",
    quantity: 0,
    dollars: 7,
    cents: 49,
  },
  {
    name: "The famous five",
    quantity: 0,
    dollars: 4,
    cents: 59,
  },
  {
    name: "Matilda",
    quantity: 0,
    dollars: 6,
    cents: 80,
  },
  {
    name: "Harry Potter",
    quantity: 0,
    dollars: 10,
    cents: 0,
  },
  {
    name: "For Young Readers",
    quantity: 0,
    dollars: 7,
    cents: 29,
  },
  {
    name: "Wimpy Kid - DIY",
    quantity: 0,
    dollars: 4,
    cents: 99,
  },
  {
    name: "Dart Board",
    quantity: 0,
    dollars: 17,
    cents: 49,
  },
  {
    name: "Connect Four",
    quantity: 0,
    dollars: 19,
    cents: 99,
  },
  {
    name: "Jenga",
    quantity: 0,
    dollars: 20,
    cents: 99,
  },
  {
    name: "Monopoly",
    quantity: 0,
    dollars: 19,
    cents: 49,
  },
  {
    name: "Bookmarks",
    quantity: 0,
    dollars: 12,
    cents: 49,
  },
  {
    name: "Birthday Card",
    quantity: 0,
    dollars: 12,
    cents: 49,
  },
  {
    name: "Stuffed toys",
    quantity: 0,
    dollars: 15,
    cents: 99,
  },
  {
    name: "Dream catcher drawing",
    quantity: 0,
    dollars: 18,
    cents: 49,
  },
]

function updateCart() {
    let cart = 0;
    for (i = 0; i < list.length; i++) {
      cart += list[i].quantity;
    }
    value.innerHTML = cart;
  }

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click",myFunction)
    function myFunction(){
      list[i].quantity++;
      updateCart();
    }
  }

  function updatePrice() {
    let totalPriceInCents = 0;
  
    for (index = 0; index < list.length; index++) {
      totalPriceInCents =
        totalPriceInCents +
        list[index].quantity * (list[index].dollars * 100 + list[index].cents);
    }
    finalDollars = Math.floor(totalPriceInCents / 100);
    finalCents = totalPriceInCents % 100;
  }

  cart.addEventListener("click",finalOutput)

function finalOutput(){
    updatePrice()
    for(var i=0;i<list.length;i++){
        if(list[i].quantity!== 0){
            console.log("Item name: " +
            list[i].name +
            " - Quantity: " +
            list[i].quantity
            
            
            )
        }
    }
    console.log(
        "The total amount is " + finalDollars + "$ and " + finalCents + " cents"
      );
}