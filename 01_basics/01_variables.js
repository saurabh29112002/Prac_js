const accountId = 957
let accountEmail = "saurabh@google.com"
var accountPassword = "123"
accountCity = "Nagpur"
let accountDate;

// accountId = 25 // Not allowed

accountEmail = "mishra@google.com"
accountPassword = "252525"
accountCity = "Pune"

console.log(accountId)

/*
prefer not to use var
because of issues in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountDate])