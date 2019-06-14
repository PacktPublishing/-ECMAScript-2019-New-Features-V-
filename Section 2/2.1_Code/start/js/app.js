const fullnameSel = document.getElementById("fullname");
const designationSel = document.getElementById("designation");
const emailSel = document.getElementById("email");
const phoneSel = document.getElementById("phone");
const addressSel = document.getElementById("address");
const photoSel = document.getElementById("photo");

const RenderCard = ({
  fullname,
  email,
  cell,
  designation,
  thumbnail,
  street,
  city
}) => {
  fullnameSel.innerText = fullname;
  designationSel.innerText = designation;
  emailSel.innerText = `e: ${email}`;
  phoneSel.innerText = `p: ${cell}`;
  addressSel.innerText = `${street}, ${city}`;
  photoSel.style.backgroundImage = `url(${thumbnail})`;
};

RenderCard({
  fullname: "John Doe",
  email: "john@somecorp.com",
  cell: "9810231193",
  designation: "Data Scientist",
  thumbnail: "https://randomuser.me/api/portraits/thumb/men/95.jpg",
  street: "8th Street, New Lane",
  city: "Magrathea"
});
