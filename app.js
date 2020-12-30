var cartValue = document.getElementById("cart-value");
var cartButton = document.getElementById("cart");

var addButtons= document.getElementsByClassName("button");

console.log(addButtons[0]);
var items=[

{
    name: "This was our pact",
    quantity: 0,
    dollars: 7,
    cents: 49,
},
  
// console.log(book1.name);
{
    name: "The famous five",
    quantity: 0,
    dollars: 4,
    cents: 59,
},
{
    name: "Matlida",
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
    name: "Connect 4",
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
    name: "Birthday card",
    quantity: 0,
    dollars: 19,
    cents: 99,
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
}
]

function updateCart(){
    let cart = 0;
    for (index = 0; index<items.length; index++){
        cart = cart + items[index].quantity;
    }
    cartValue.innerHTML = cart;
}
for(let i=0; addButtons.length; i){
    addButtons[i].onclick = (e) => {
        items[i].quantity++;
        updateCart();
    };
}

function updatePrice(){
    let totalPriceInCents = 0;
    for(index = 0; index<items.length; index++){
       totalPriceInCents=totalPriceInCents + items[index].quantity * (index[items].dollars*100 + items[index].cents);
    }
    finalDollars = Math.floor(totalPriceInCents / 100);
    finalCents = totalPriceInCents % 100;
}

/*function updatePrice() {
var book1CostInCents =
    book1.quantity * book1.dollars * 100 + book1.quantity * book1.cents;
var book2CostInCents =
    book2.quantity * book2.dollars * 100 + book2.quantity * book2.cents;
var book3CostInCents =
    book3.quantity * book3.dollars * 100 + book3.quantity * book3.cents;
var book4CostInCents =
    book4.quantity * book4.dollars * 100 + book4.quantity * book4.cents;
var book5CostInCents =
    book5.quantity * book5.dollars * 100 + book5.quantity * book5.cents;
var book6CostInCents =
      book6.quantity * book6.dollars * 100 + book6.quantity * book6.cents;

var game1CostInCents =
    game1.quantity * game1.dollars * 100 + game1.quantity * game1.cents;
var game2CostInCents =
    game2.quantity * game2.dollars * 100 + game2.quantity * game2.cents;
var game3CostInCents =
    game3.quantity * game3.dollars * 100 + game3.quantity * game3.cents;
var game4CostInCents =
    game4.quantity * game4.dollars * 100 + game4.quantity * game4.cents;
  
var craft1CostInCents =
    craft1.quantity * craft1.dollars * 100 + craft1.quantity * craft1.cents;
var craft2CostInCents =
    craft2.quantity * craft2.dollars * 100 + craft2.quantity * craft2.cents;
var craft3CostInCents =
    craft3.quantity * craft3.dollars * 100 + craft3.quantity * craft3.cents;
var craft4CostInCents =
    craft4.quantity * craft4.dollars * 100 + craft4.quantity * craft4.cents;

totalPriceInCents =
    book1CostInCents +
    book2CostInCents +
    book3CostInCents +
    book4CostInCents +
    book5CostInCents +
    book6CostInCents +
    game1CostInCents +
    game2CostInCents +
    game3CostInCents +
    game4CostInCents +
    craft1CostInCents +
    craft2CostInCents +
    craft3CostInCents +
    craft4CostInCents;

finalDollars = Math.floor(totalPriceInCents / 100);
finalCents = totalPriceInCents % 100;
}*/

var whatsappLink =
  "https://api.whatsapp.com/send?phone=919000000000&text=Order%20details";

function updateWhatsappLink() {
    if (book1.quantity != 0) {
      whatsappLink += "%0A" + book1.name + "%20" + book1.quantity;
}

if (book2.quantity != 0) {
    whatsappLink += "%0A" + book2.name + "%20" + book2.quantity;
  }
  if (book3.quantity != 0) {
    whatsappLink += "%0A" + book3.name + "%20" + book3.quantity;
  }
  if (book4.quantity != 0) {
    whatsappLink += "%0A" + book4.name + "%20" + book4.quantity;
  }
  if (book5.quantity != 0) {
    whatsappLink += "%0A" + book5.name + "%20" + book5.quantity;
  }
  if (book6.quantity != 0) {
    whatsappLink += "%0A" + book6.name + "%20" + book6.quantity;
  }

  if (game1.quantity != 0) {
    whatsappLink += "%0A" + game1.name + "%20" + game1.quantity;
  }
  if (game2.quantity != 0) {
    whatsappLink += "%0A" + game2.name + "%20" + game2.quantity;
  }
  if (game3.quantity != 0) {
    whatsappLink += "%0A" + game3.name + "%20" + game3.quantity;
  }
  if (game4.quantity != 0) {
    whatsappLink += "%0A" + game4.name + "%20" + game4.quantity;
  }

  if (craft1.quantity != 0) {
    whatsappLink += "%0A" + craft1.name + "%20" + craft1.quantity;
  }
  if (craft2.quantity != 0) {
    whatsappLink += "%0A" + craft2.name + "%20" + craft2.quantity;
  }
  if (craft3.quantity != 0) {
    whatsappLink += "%0A" + craft3.name + "%20" + craft3.quantity;
  }
  if (craft4.quantity != 0) {
    whatsappLink += "%0A" + craft4.name + "%20" + craft4.quantity;
  }
  whatsappLink +=
    "%0A" + "Total%20Price:%20$" + finalDollars + "%20" + finalCents + "c";
}


cartButton.onclick = () => {
    updatePrice();
    updateWhatsappLink();
    window.open(whatsappLink, "_blank");
};
