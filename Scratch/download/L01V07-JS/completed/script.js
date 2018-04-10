let clients = [{
    firstName:"Jhon",
    lastName: "Doe",
    salary: 5000
},{
    firstName:"Jane",
    lastName: "Doe",
    salary: 3000
}]

for (let i=0; i<clients.length; i++){
    let client=clients[i];
    client.id = i;
}

console.log(clients)

let newFirstName
let count = 0;
while(!newFirstName) {
    newFirstName = prompt("Enter First Name");      
    count += 1;
    if(count >= 5){
        console.log("Too Many")
        break;
    }
}

console.log(newFirstName)























