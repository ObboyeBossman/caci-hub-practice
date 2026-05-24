const rawMembers = [
    { name: "  kwame asante ", age: 34, gender: "MALE", status: "active", assembly: "accra central", phone: "+233241234567", joined: "2021-03-15" },
    { name: "AMA OWUSU", age: 19, gender: "female", status: "VISITOR", assembly: "Kumasi North", phone: null, joined: "2024-11-02" },
    { name: "kofi mensah  ", age: 67, gender: "male", status: "inactive", assembly: "  TAKORADI ASSEMBLY ", phone: "+233207654321", joined: "2009-07-30" },
    { name: "ABENA SARPONG", age: 25, gender: "FEMALE", status: "active", assembly: "Accra Central", phone: "+233551234567", joined: "2022-01-10" },
    { name: " yaw boateng", age: 15, gender: "male", status: "visitor", assembly: "kumasi north", phone: null, joined: "2025-04-20" },
];

console.log("╔══════════════════════════════════════╗");
console.log("  CAC Hub — Member Profile");
console.log("╚══════════════════════════════════════╝")
console.log();
rawMembers.map((member) => {
   const n = member.name
    .trim()
    .split(" ")
    .map(part => part.toUpperCase())
    .join(" ");

   const g = member.gender[0].toUpperCase() +  member.gender.slice(1).toLowerCase();
   
   const a = member.age;

   const s = member.status[0].toUpperCase() +  member.status.slice(1).toLowerCase();

   const ass = member.assembly
   .trim()
   .split(" ")
   .map(part => part[0].toUpperCase() + part.slice(1).toLowerCase())
   .join(" ");

   const p = member.phone == null ? "Not provided" : member.phone;

    parts = member.joined.split("-");
    const d = `${parts[2]} ${getMonth(parts[1])} ${parts[0]}`;

    const l = a >= 18 && s.toLowerCase() === "active" ? "Eligible" : "Not eligible";
    
    console.log(`Name       : ${n}`);
    console.log(`Gender     : ${g}`);
    console.log(`Age        : ${a}`);
    console.log(`Status     : ${s}`);
    console.log(`Assembly   : ${ass}`);
    console.log(`Phone      : ${p}`);
    console.log(`Joined     : ${d}`);
    console.log(`Leadership : ${l}`);
    console.log("──────────────────────────────────────")
})


const totalMembers = rawMembers.length;
let nActive = 0;
let nInactive = 0;
let nVisitors = 0;
let nLeadEligible = 0;

rawMembers.forEach(element => {
   const s = element.status[0].toUpperCase() +  element.status.slice(1).toLowerCase();
console.log(s)
    if(s == "Active") {nActive += 1;}
    if(s === "Inactive"){ nInactive += 1;}
    if(s === "Visitor") {nVisitors += 1;}
    const l = element.age >= 18 && element.status.toLowerCase() === "active" ? "Eligible" : "Not eligible";
    if(l === "Eligible"){ nLeadEligible += 1;}
});

console.log(`Total Members : ${totalMembers}`);
console.log(`Active        : ${nActive}`);
console.log(`Inactive      : ${nInactive}`);
console.log(`Visitors      : ${nVisitors}`);
console.log(`Leadership Eligible : ${nLeadEligible}`);

function getMonth(month){
    if (month === "01") return "Jan";
    if (month === "02") return "Feb";
    if (month === "03") return "Mar";
    if (month === "04") return "Apr";
    if (month === "05") return "May";
    if (month === "06") return "Jun";
    if (month === "07") return "Jul";
    if (month === "08") return "Aug";
    if (month === "09") return "Sep";
    if (month === "10") return "Oct";
    if (month === "11") return "Nov";
    return "Dec";
}

