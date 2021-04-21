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

function Location(street, house, area) {
  this.street = street;
  this.city = city;
  this.area = area;
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

    var totalTime = (parseInt(quantity) * 15 + 60);
    var totalCost = (parseInt(quantity) * 2000);

    var newPizza = new Pizza(inputtedMeat, inputtedTop, inputtedCrust);
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
  });
});