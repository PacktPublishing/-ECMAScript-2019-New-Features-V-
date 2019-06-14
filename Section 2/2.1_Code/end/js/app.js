import userProfile from "./userProfile";

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

userProfile().then(({ data }) => {
  const {
    email,
    cell,
    name: { title, first, last },
    location: { street, city },
    picture: { thumbnail },
    ...rest
  } = data.results[0];

  const contact = {
    email,
    cell,
    street,
    city
  };

  const profile = {
    fullname: `${title}. ${first} ${last}`.toUpperCase(),
    thumbnail,
    designation: "Front End Engineer",
    ...contact
  };

  RenderCard(profile);
});
