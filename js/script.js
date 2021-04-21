var price = 
{
  large : 2000,
  medium : 1500,
  small : 1000
}

function Pizza(meatBase, topping, base) {
  this.meatBase = meatBase;
  this.topping = topping;
  this.base = base;
}

function Location(estate, houseNumber, phoneNumber) {
  this.estate = estate;
  this.houseNumber = houseNumber;
  this.phoneNumber = phoneNumber;
}

Pizza.prototype.fullOrder = function()
  {
    return this.meatBase + " " + this.topping + " " + this.base;
  }

Location.prototype.fullAddress = function() {
  return this.estate + ", " + this.houseNumber + ", " + this.phoneNumber;
}

function resetFields() {
  $("select#meat_type").val('');
  $("select#topping_type").val('');
  $('select#base_type').val('');
}

$(document).ready(function()
{
  $('form#new_pizza').submit(function(event)
  {
    event.preventDefault();

    var inputtedMeat = $("select#meat_type").val();
    var inputtedTop = $("select#topping_type").val();
    var inputtedCrust = $('select#base_type').val();
    var quantity = $('input#quantity').val();

    var inputtedEstate = $("input.estate").val();
    var inputtedHouse = $("input.houseNumber").val();
    var inputtedPhone = $("input.phoneNumber").val();

    var totalTime = (parseInt(quantity) * 15 + 60);
    var totalCost = (parseInt(quantity) * 2000);

    var newPizza = new Pizza(inputtedMeat, inputtedTop, inputtedCrust);
    var newLocation = new Location(inputtedEstate, inputtedHouse, inputtedPhone);
    console.log(newPizza);
    console.log(totalTime);

    $("#submit").last().click(function() {
      $("#show-order").show();
      $(".meat").text(newPizza.meatBase);
      $(".top").text(newPizza.topping);
      $(".base").text(newPizza.base);  
      $(".time").text(totalTime + " minutes");
      $(".cost").text("Ksh. " +totalCost);  
    });

    $('#yes').last().click(function()
    {
      $("#show-address").show();
    });

    $("#no").last().click(function()
    {
      alert("Order has been placed successfully. You will be notified when ready");
    });

    $("#confirm").last().click(function()
    {
      alert("Order has been placed successfully. It will be delivered in " + totalTime + " minutes, to " + Location.fullAddress);
    });
  });
});