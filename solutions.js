// SET ALARM

function setAlarm(employed, vacation) {
    return employed && vacation;
}

console.log(setAlarm(true, false)); // Should return true (Employed and not on vacation)
console.log(setAlarm(false, true)); // Should return false (Not employed and on vacation)
console.log(setAlarm(true, true));  // Should return false (Employed but on vacation)
console.log(setAlarm(false, false)); // Should return false (Not employed and not on vacation)

// Count Odd Numbers


function oddNumberCount(number) {
    let count = 0
    for (let i = 1; i < number; i++) {
        count++;{
    }
}
return count
}

console.log(oddNumberCount(16))


// Trolls be gone function

function trollsBeGone(sentence) {
    return sentence.replace(/[aeiou]/gi, '');
  }
  

  // bank summary 

  const bankInfo = {
    savings: 600,
    checking: 800,
    moneyMarket: 200,
    creditCard: -2000
  };

  function bankAccountSummary(bankInfo) {
    return bankInfo.savings + bankInfo.checking + bankInfo.moneyMarket + bankInfo.creditCard;
  }
  const bankTotal = bankAccountSummary(bankInfo);


// in the red

function inTheRed(total) {
    return total < 0;
  }

  
