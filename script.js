function greetUser(userName) {
        return "Hello, " + userName + "! Welcome to our website.";
    }

var Name = prompt("Enter your name:");

    if (Name) {
        var greetingMessage = greetUser(Name);
        document.write('<p>' + greetingMessage + '</p>');
    } else {
        document.write('<p style="color: red;">Invalid input. Please enter a valid name.</p>');
    }


function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    
    return true;
}

var userEnteredNumber = prompt("Enter a positive integer:");

 var number = parseInt(userEnteredNumber);

if (!isNaN(number) && number > 0) {
    var isPrimeResult = isPrime(number);

    document.write('<p>The number ' + number + ' is prime: ' + isPrimeResult + '</p>');
} else {
    document.write('<p style="color: red;">Invalid input. Please enter a valid positive integer.</p>');
}
