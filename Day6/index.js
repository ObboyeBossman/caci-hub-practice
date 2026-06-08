
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


// OBJECT DESTRUCTURING
const {fullName, status, gender} = member;
const {assembly : {name : assemblyName}} = member;
const {assembly : {region}} = member;
const {assembly} = member;


// FUNCTION PARAMETER DESTRUCTURING
function getMemberLocation({fullName, assembly : {name, region}}){
  return `${fullName} — ${name} — ${region}`;
}
console.log(getMemberLocation(member));

// SPREAD


const changes = {
  id: "m001",
  fullName: "Kwame Asante",
  gender: "male",
  status: "inactive",
  household: {
    id: "h001",
    name: "Asante Household",
    address: "Accra, Ghana",
    isPrimary: true,
  },
  assembly: {
    id: "a001",
    name: "Accra Central Assembly",
    region: "Greater Accra",
  },
  contact: {
    phone: "+233240330123",
    email: "kwameasante@example.com",
  },
};

function updateMember(member, changes){
   const updatedMember = {
      ...member,
      ...changes
   }

   return updatedMember;
}

const newStatus = updateMember(member, changes).status
console.log(newStatus);
console.log(member.status);


// REST
const members = [
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

function addMember(members, newMember){
  return [newMember, ...members];
}
