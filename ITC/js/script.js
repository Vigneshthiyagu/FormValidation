function resetForm() {
    document.getElementById('submitButton').disabled = true;
}

function calculateFinalAmount() {


    var product = document.getElementById("cproduct").value;
    var quantity = document.getElementById("cquantity").value;
    var mode = document.getElementById("cpayment").value;

    var tv = 30000;
    var fri =50000;
    var mobile = 20000;

    if(mode === "cash" || mode === "UPI"){
        if(product === "tv" ){
            var tot = (quantity * tv)  ;
            var big = tot * (5 / 100);
            var BagTotal = tot - big;
        }
        else if (product === "fridge"){
            var tot = (quantity * fri) ;
            var big = tot * (5 / 100);
            var BagTotal = tot - big;

        }
        else {
            var tot = (quantity * mobile );
            var big = tot * (5 / 100);
            var BagTotal = tot - big;
        }
    }else{
        if(product === "tv" ){
            var BagTotal = quantity * tv;

        }
        else if (product === "fridge"){
            var BagTotal = quantity * fri;
        }
        else {
            var BagTotal = quantity * mobile;

        }
    }
    document.getElementById("cbag").value = BagTotal.toFixed(2);
    var coupon =
    "ADI" + (BagTotal >= 100000 ? String(BagTotal).slice(0, 4) : "0000");
  document.getElementById("coupon").value = coupon;


    var delivery = document.querySelector(
      'input[name="delivery"]:checked'
    ).value;

    var coupon = document.getElementById("coupon").value;
    var discount = coupon === "ADI0000" ? 0 : parseFloat(coupon.slice(3));

     var deliveryTime
    if(delivery === "Express"){
        deliveryTime = "24 Hr";
        BagTotal += 500;
    }
    else{
        deliveryTime = "72 Hr";
    }

    var cuName =document.getElementById("cname").value;
    var email = document.getElementById("cemail").value;
    document.getElementById("result").innerHTML=`<ul>
       <li>Customer Name: ${cuName}</li>
       <li>BagTotal RS :${BagTotal}</li>
       <li>Invoice Copy is mailed on :${email}</li>
       <li>Product wil be delivery in nexts :${deliveryTime}</li>
       </ul>`;
}

    document.addEventListener('DOMContentLoaded', function () {
        var checkbox = document.getElementById('agreeTerms');
        var submitBtn = document.getElementById('submitButton');


        checkbox.addEventListener('change', function () {

          if (checkbox.checked) {
            submitBtn.disabled = false;
          } else {

            submitBtn.disabled = true;
          }
        });
      });