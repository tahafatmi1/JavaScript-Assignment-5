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
    return "True"
    
}
 