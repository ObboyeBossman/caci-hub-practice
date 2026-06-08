// const members = [
//     "Kwame",
//     "Ama",
//     "Kofi"
// ];

// console.log(members);

// console.log(members[0]);
// console.log(members[1]);
// console.log(members[2]);


// console.log(members.length);

// members.push("Abraham");

// console.log(members);

// members.pop();

// console.log(members);

// members.unshift("Bossman");

// console.log(members);

// members.shift();

// console.log(members);

// console.log(members.includes("Bossman"));

// console.log(members.indexOf("Ama"));
// console.log(members.indexOf("John"));

// // Explaining arrary.shift() and array.unshift()
// // shift() removes the first element from an array and returns that removed element. This method changes the length of the array.
// // unshift() adds one or more elements to the beginning of an array and returns the new length of the array. This method changes the length of the array.

// // Explaining array.splice()
// // splice() changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. This method changes the length of the array.
// // Give example of array.splice()
// const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

// // Remove 2 elements starting from index 1
// fruits.splice(1, 2);
// console.log(fruits);

// // Explaining array.reduce()
// // reduce() executes a reducer function on each element of the array, resulting in a single output value.
// // Give example of array.reduce()
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum); // Output: 15




// Part 4: filter()
// const activeMembers =
//     members.filter(member => member.status === "active");

// console.log(activeMembers);

// Get Active Female Names
// const activeFemaleNames = members
//   .filter(member => member.gender === "female" && member.status === "active")
//   .map(member => member.name);

// console.log(activeFemaleNames);


// // Reduce:
// // reduce() turns an array into a single value.
// const statusCounts = members.reduce(
//   (counts, member) => {

//     counts[member.status] =
//       (counts[member.status] || 0) + 1;

//     return counts;

//   },
//   {}
// );

// console.log(statusCounts);


console.clear();

const members = [
  { name: "Kwame Asante", status: "active", gender: "male", assembly: "Accra Central" },
  { name: "Ama Owusu", status: "visitor", gender: "female", assembly: "Kumasi North" },
  { name: "Kofi Mensah", status: "inactive", gender: "male", assembly: "Accra Central" },
  { name: "Abena Sarpong", status: "active", gender: "female", assembly: "Accra Central" },
  { name: "Yaw Boateng", status: "active", gender: "male", assembly: "Kumasi North" },
  { name: "Akua Frimpong", status: "visitor", gender: "female", assembly: "Takoradi" },
];

// Uppercass all names
const upperNames = members.map(
    (m) => m.name.toUpperCase()
);

console.log(upperNames);