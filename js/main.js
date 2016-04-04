function Component() {
  this.domElement = null;

  this.initialize = function(el) {
  this.domElement = $('<div class="register"><div class="ticket"><h1>Thank you!</h1><table><tbody class="entries"></tbody><tfoot><tr><th> Total </th> <th class="total"> $0.00 </th></tr></tfoot></table></div><form class="entry"> <input class="newEntry" autofocus placeholder="How much?"></form></div>');
  el.append(this.domElement);
  };


  this.render = function () {

    var entries = this.domElement.find('.entries');

    var form = this.domElement.find('form');
    var inputBox = this.domElement.find('.newEntry');

    var totalEl = this.domElement.find('.total');
    var total = 0.00;


    form.on("submit", updateRegister);

    function updateRegister() {
      event.preventDefault();

      // get the amount and clear the box
      var amount = parseFloat(inputBox.val());
      inputBox.val("");

      // make the new element and add it to the list of entries
      var newEl = $("<tr>");
      newEl.append("<td></td>");
      newEl.append("<td>" + "$" + amount.toFixed(2) + "</td>");

      entries.append(newEl);

      // update the total
      total = total + amount;
      totalEl.text("$" + total.toFixed(2));
    }


  };

}

$('.start').submit(function(){
    event.preventDefault();
    var registerCounter = $('.registerCounter')[0].value;

    $('.start').remove();

    for (var i = 0; i<registerCounter; i++){
        var registers = [];
        registers[i] = new Component();
        registers[i].initialize($('body'));
        registers[i].render();
    }

});


// var register_1 = new Component();
// register_1.initialize($('body'));
// register_1.render();
