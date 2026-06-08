
const member = {
  id: "m001",
  fullName: "Kwame Asante",
  gender: "male",
  status: "active",
  household: {
    id: "h001",
    name: "Asante Household",
    address: "Kumasi, Ghana",
    isPrimary: true,
  },
  assembly: {
    id: "a001",
    name: "Accra Central Assembly",
    region: "Greater Accra",
  },
  contact: {
    phone: "+233241234567",
    email: "kwame@example.com",
  },
};

// console.log(member.household.name)
// console.log(member.assembly.region)
// console.log(member.contact. phone)

// // To get memberLocation you need,
// // 1. the member name is a direct property for each member object;
// // 2. You will also touch assembly object which is also a member's property.
// // 3. Lastly, in the assembly obj, will touch: assembly name and region

// function getMemberLocation(member) {
//   const mName = member.fullName;
//   const mAssName = member.assembly.name;
//   const mAssLocation = member.assembly.region;

//   return `${mName} — ${mAssName}, ${mAssLocation}`;
// }

// console.log(getMemberLocation(member));

const members = [
  { fullName: "Kwame Asante", status: "active", gender: "male" },
  { fullName: "Ama Owusu", status: "active", gender: "female" },
  { fullName: "Kofi Mensah", status: "inactive", gender: "male" },
  { fullName: "Akosua Boateng", status: "visitor", gender: "female" },
  { fullName: "Yaw Appiah", status: "active", gender: "male" },
  { fullName: "Adwoa Nyarko", status: "active", gender: "female" },
  { fullName: "Kojo Antwi", status: "visitor", gender: "male" },
  { fullName: "Abena Ofori", status: "inactive", gender: "female" },
  { fullName: "Kwaku Frimpong", status: "active", gender: "male" },
  { fullName: "Efua Sarpong", status: "active", gender: "female" },
  { fullName: "Nana Yeboah", status: "visitor", gender: "male" },
  { fullName: "Akua Amoako", status: "active", gender: "female" }
];

// for(let i = 0; i < members.length; i++){
//   console.log(`${i + 1}. Fullname: ${members[i].fullName}`)
// }

// for (const m of members) {

//   console.log(`Fullname: ${m.fullName}, status: ${m.status}`)
// }

// for (const member of members) {
//   console.log("------------------------------")
//   for (const key in member){
//     console.log(`${key}: ${member[key]}`)
//   }
//   console.log("------------------------------")
// }


//  for (const key in member){
//     console.log(`${key}: ${JSON.stringify(member[key])}`)
//   }

  // let i = 0;
  // while (i < members.length) {
  //   console.log(`Fullname: ${members[i].fullName}`);
  //   i++
  // }


  for (const member of members){
    if (member.gender === 'female' && member.status == 'active'){
      console.log("First active female: ", member.fullName);
      break;
    }
  }
