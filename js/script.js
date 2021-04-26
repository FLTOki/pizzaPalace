// var price = 
// {
//   large : 2000,
//   medium : 1500,
//   small : 1000
// }

// function Pizza(meatBase, topping, base) {
//   this.meatBase = meatBase;
//   this.topping = topping;
//   this.base = base;
//   this.location = [];
// }

// function Location(estate, houseNumber, phoneNumber) {
//   this.estate = estate;
//   this.houseNumber = houseNumber;
//   this.phoneNumber = phoneNumber;
// }

// Pizza.prototype.fullOrder = function()
//   {
//     return this.meatBase + " " + this.topping + " " + this.base;
//   }

// Location.prototype.fullAddress = function() {
//   return this.estate + ", " + this.houseNumber + ", " + this.phoneNumber;
// }

// function resetFields() {
//   $("select#meat_type").val('');
//   $("select#topping_type").val('');
//   $('select#base_type').val('');
// }

// $(document).ready(function()
// {
//   $('form#new_pizza').submit(function(event)
//   {
//     event.preventDefault();

//     var inputtedMeat = $("select#meat_type").val();
//     var inputtedTop = $("select#topping_type").val();
//     var inputtedCrust = $('select#base_type').val();
//     var quantity = $('input#quantity').val();

//     var totalTime = (parseInt(quantity) * 15 + 60);
//     var totalCost = (parseInt(quantity) * 2000);

//     var newPizza = new Pizza(inputtedMeat, inputtedTop, inputtedCrust);

//     $("#submit").last().click(function() {
//       $("#show-order").show();
//       $(".meat").text(newPizza.meatBase);
//       $(".top").text(newPizza.topping);
//       $(".base").text(newPizza.base);  
//       $(".time").text(totalTime + " minutes");
//       $(".cost").text("Ksh. " +totalCost);  
//     });

//     // $('#yes').last().click(function()
//     // {
//     //   $("#show-address").show();
//     // });

//     // var inputtedEstate = $("input#estate").val();
//     // var inputtedHouse = $("input#houseNumber").val();
//     // var inputtedPhone = $("input#phoneNumber").val();

//     // var newLocation = new Location(inputtedEstate, inputtedHouse, inputtedPhone);

//     // console.log(newLocation);

//     // newPizza.location.push(newLocation);


//     $("#no").last().click(function()
//     {
//       alert("Order has been placed successfully. You will be notified when ready");
//     });

//     $("#confirm").last().click(function()
//     {
//       alert("Order has been placed successfully. It will be delivered in " + totalTime + " minutes, to " + inputtedEstate +
//       " House number " + inputtedHouse);
//       // alert(newPizza.location);
//     });
//   });
// });

var price = 
{
  large : 2000,
  medium : 1500,
  small : 1000,
  delivery : 200
}

var toppings = 
{
  cheese: 350,
  vegetables : 200,
  pepperoni : 575,
  sausages : 400,
  mushrooms : 275
}

var crust = 
{
  hard : 200,
  soft : 180
}

function Pizza(size, topping, base) {
  this.size = size;
  this.topping = topping;
  this.base = base;
  this.location = [];
}

function Location(estate, houseNumber, phoneNumber) {
  this.estate = estate;
  this.houseNumber = houseNumber;
  this.phoneNumber = phoneNumber;
}

$(document).ready(function()
{
  $('form#new_pizza').submit(function(event)
  {
    event.preventDefault();

    var inputtedSize = $("select#size").val();
    var inputtedTop = $("select#topping_type").val();
    var inputtedCrust = $('select#base_type').val();
    var quantity = parseInt($('input#quantity').val());
    var cost, totalCost, newLocation;

    if(inputtedSize ==="Large")
    {
      if(inputtedTop == "Cheese"){
        cost = price.large * quantity + toppings.cheese * quantity;
      }
      else if(inputtedTop == "Vegetables")
      {
        cost = price.large * quantity + toppings.vegetables * quantity;
      }
      else if(inputtedTop == "Mushrooms")
      {
        cost = price.large * quantity + toppings.mushrooms * quantity;
      }
      else if(inputtedTop == "Pepperoni")
      {
        cost = price.large * quantity + toppings.pepperoni * quantity;
      }
      else if(inputtedTop == "Sausages")
      {
        cost = price.large * quantity + toppings.sausages * quantity;
      }
    }


    else if(inputtedSize ==="Medium")
    {
      if(inputtedTop == "Cheese"){
        cost = price.medium * quantity + toppings.cheese * quantity;
      }
      else if(inputtedTop == "Vegetables")
      {
        cost = price.medium * quantity + toppings.vegetables * quantity;
      }
      else if(inputtedTop == "Mushrooms")
      {
        cost = price.medium * quantity + toppings.mushrooms * quantity;
      }
      else if(inputtedTop == "Pepperoni")
      {
        cost = price.medium * quantity + toppings.pepperoni * quantity;
      }
      else if(inputtedTop == "Sausages")
      {
        cost = price.medium * quantity + toppings.sausages * quantity;
      }
    }
    
    else if(inputtedSize ==="Small")
    {
      if(inputtedTop == "Cheese"){
        cost = price.small * quantity + toppings.cheese * quantity;
      }
      else if(inputtedTop == "Vegetables")
      {
        cost = price.small * quantity + toppings.vegetables * quantity;
      }
      else if(inputtedTop == "Mushrooms")
      {
        cost = price.small * quantity + toppings.mushrooms * quantity;
      }
      else if(inputtedTop == "Pepperoni")
      {
        cost = price.small * quantity + toppings.pepperoni * quantity;
      }
      else if(inputtedTop == "Sausages")
      {
        cost = price.small * quantity + toppings.sausages * quantity;
      }
    }

    if(inputtedCrust = "Hard")
    {
      totalCost = cost + crust.hard * quantity;
    }
    else{
      totalCost = cost + crust.soft * quantity;
    }

    // console.log(inputtedCrust, inputtedSize, inputtedTop, cost, totalCost);

    var newPizza = new Pizza(inputtedSize, inputtedTop, inputtedCrust);

    $("#submit").click(function() {
      $("#show-order").show();
      $(".meat").text(newPizza.size);
      $(".top").text(newPizza.topping);
      $(".base").text(newPizza.base);  
      // $(".time").text(totalTime + " minutes");
      $(".cost").text("Ksh. " +totalCost);  
    });


    $(".yes").click(function()
    {
      var inputtedEstate = prompt('Enter your estate'); 
      var inputtedHouse = prompt("Enter your house number");
      var inputtedPhone = prompt("Enter your phone number");

      newLocation = new Location(inputtedEstate, inputtedHouse, inputtedPhone);
      alert("we will deliver to your location");
      var finalCost = totalCost + price.delivery
      alert("Yout total cost is " +finalCost);
    });

    $(".no").click(function(){
      alert("you will be notified when your order is ready")
    });


    // console.log(newPizza, totalCost, newLocation);

  });
});