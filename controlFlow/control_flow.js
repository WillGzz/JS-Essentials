let userRole = "admin";
let acessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log('Acess Level:', accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn){
    if(userRole === "admin"){
        userMessage = "Welcome, Admin!";

    } else {
        userMessage = "Welcome, User!"
    }
}
else{
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch(userType){
    case "admin":
        userCategory = "Administator";
        break;
    case "manager":
        userCategory = "Manager"
        break;
    case "subscriber":
        userCategory = "Subscriber"
        break;
    default:
        userCategory = "unknown"

}

console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
/*
If isAuthenticated is true, the expression before : (in this case, "Authenticated") is assigned to authenticationStatus.
If isAuthenticated is false, the expression after : (in this case, "Not authenticated") is assigned to authenticationStatus.

*/
console.log("Authentication Status:", authenticationStatus);

/*Practice task */
let orgRole = "Employee"
let Acess;

if (orgRole === "Employee"){
    Acess = "Dietary Services";
}
else if (orgRole === "Enrolled Member"){
    Acess = "Dietary Services and one-on-one interaction with a dietician.";

}
else if (orgRole === "Subscriber"){
    Acess = "Partial access for Dietary Services";

}
else {
    Acess = " enroll or at least subscribe first to avail this facility";

}


console.log("Service:", Acess)