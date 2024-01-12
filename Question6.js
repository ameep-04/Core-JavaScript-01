var paymentMethod = "debit"
switch (paymentMethod) {
   case "credit":
     console.log("processingFee = 2.5");
     break;
   case "debit":
     console.log("processingFee = 1.5");
     break;
   case "paypal":
     console.log("processingFee = 3.0");
     break;
   default:
     console.log("processingFee = 0");
     break;
 }