// Please use only var, or (const + let)
// It is better use: camelCaseForVariableNames
// Most javascripter's will use single quotes: '', with the exception of "How are you? 'your name'"

// Take into account:
// 1. You can have base variables like: base price, base taxe, base account balance


// const initialAmount = 300
// let currentAmount = initialAmount // => currentAmount = currentAmount - 100


let Total_Money = prompt("How much money do you have in your bank account?"); // totalMoney
const Tax_Rate = .08;
const Phone_Price = 250;
const Spending_Threshold = 300;
let Accessory_1 = 20; 
let Accessory_2 = 5;

var Price = 0; // find a better name? maybe? right? ... ok



function printAmount(amt){ // amt not better than 'amount'
    console.log(amt.toFixed(2));
}

function formatAmount(){
    // consider template strings
    // return `$${Total_Money.toFixed(2)}`
    return "$" + Total_Money.toFixed(2);
}

function CalculateFinalAmount(amt){ // consistency calculateFinalAmount
  amt = amt + (amt * Tax_Rate);
  return amt; // return amt + (amt * Tax_Rate)
}

function getInitialPhonePrice() {
    alert("We verify your Bank Account and we find enough money to buy this phone!");
      Phone_Price = CalculateFinalAmount(Phone_Price); // purchasePrice
      alert(`The final cost of the phone is ${(Phone_Price)}`);

      return Phone_Price
}

function discountPurchaseAmount (amount) {
    accountBalance -= amount;
    accountPurchaseTotal += amount;
}


do { // take care of identation
  alert("Morning sir,  We have a phone thats currently on Sale! It's only $250 plus Taxes, Are you going to buy it?");

  let Buy = prompt ("Yes or No?");
                                        

  if (Buy === "Yes" || Buy === "yes"){ // buy.toUpperCase() === 'YES'

    // first purchasePrice, the validate
    if(Total_Money >= Phone_Price){
      const purchaseTotal = getInitialPhonePrice()
      discountPurchaseAmount(purchaseTotal)


      console.log(`You already spent ${(Price)}`);
      console.log(`The money you have in your bank account is ${Total_Money}`);
      
      // check treshold here, and if true
      alert('Are you interested in buy an accessory for your phone?');
      let Choose = prompt("Yes or No");
        if (Choose === "Yes" || Choose === "yes"){
          alert('Currently we have 2, a Phone Case "(1)" and a Screen Protector"(2)"');
          let Choose_2 = prompt('What would you like to buy?');


          // let selection = prompt('Which one would you like to buy?');
          // switch(selection) {
              // case '1': 
                // break
              // default:
              //alert('Oh, Ok... Have a nice day!');
          // }

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
} while (Total_Money >= 0);



// Re name variables (take care of let and const)
// Use switch instead
// What about if you make a function to prompt any message?
// What about a while, instead of 'do while'
// *Try to reduce if nesting, maybe create some functions to isolate your code
