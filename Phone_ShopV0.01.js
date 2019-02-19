var Total_Money = prompt("How much money do you have in your bank account?");
const Tax_Rate = .08;
var Phone_Price = 250;
let Accessory_1 = 20;
let Accessory_2 = 5;
var Spending_Threshold = 300;
var Price = 0;

function printAmount(amt){
    console.log(amt.toFixed(2));
}

function formatAmount(){
    return "$" + Total_Money.toFixed(2);
}

function CalculateFinalAmount(amt){
  amt = amt + (amt * Tax_Rate);
  return amt;
}


do {
   alert("Morning sir,  We have a phone thats currently on Sale! It's only $250 plus Taxes, Are you going to buy it?");
  let Buy = prompt ("Yes or No?");
  
  if (Buy === "Yes" || Buy === "yes"){
    if(Total_Money >= Phone_Price){
      alert("We verify your Bank Account and we find enough money to buy this phone!");
      Phone_Price = CalculateFinalAmount(Phone_Price);
      alert(`The final cost of the phone is ${(Phone_Price)}`);
      Total_Money -= Phone_Price;
      Price = Price + Phone_Price;
      console.log(`You already spent ${(Price)}`);
      console.log(`The money you have in your bank account is ${Total_Money}`);
      
      alert('Are you interested in buy an accessory for your phone?');
      let Choose = prompt("Yes or No");
        if (Choose === "Yes" || Choose === "yes"){
          alert('Currently we have 2, a Phone Case "(1)" and a Screen Protector"(2)"');
          let Choose_2 = prompt('What would you like to buy?');
          if (Choose_2 === '1' || Choose === "phone case" || Choose === "Phone Case"){
            Accessory_1 = CalculateFinalAmount(Accessory_1);
            console.log(`Accessory_1 is ${(Accessory_1)}`);
            Price += Accessory_1;
            console.log(`You already spent ${(Price)}`);
            Total_Money = Total_Money - Accessory_1;
            alert('Congratulation, You bought a Phone Case!');
            
            printAmount(Total_Money);
            console.log(`Something Something ${(Total_Money)}`);
            
            Total_Money = formatAmount();
            console.log(`The new amount in your bank acccount is ${(Total_Money)}`);
          }
        }else{
          alert('Oh, Ok... Have a nice day!');
        }
      
    }else{
      console.log("get out of my store, you're not welcome here you poor little shit")
    }
    
  }else if (Buy === "No" || Buy === "no"){
    console.log("Something not yes")
  }
  console.log(`Lo que sobra es (ultimo 'Total_Money' console.log) ${Total_Money}`);
  Total_Money -= Total_Money;
} while (Total_Money = 0);

