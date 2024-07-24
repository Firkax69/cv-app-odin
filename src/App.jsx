import { useState } from "react";
import PersonalInfo from "./Components/CVForm/PersonalInfo";
import Preview from "./Components/CVPreview/PreviewPersonal";
import Experience from "./Components/CVForm/experience";
import Education from "./Components/CVPreview/PreviewEducation";
import PreviewEducation from "./Components/CVPreview/PreviewEducation";
import PreviewExperience from "./Components/CVPreview/PreviewExperience";

function App() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [address, setAddress] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);

  const [position, setPosition] = useState(null);
  const [company, setCompany] = useState(null);
  const [start,setStart] = useState(null);
  const [end,setEnd] = useState(null);
  const [desc, setDesc] = useState(null);
  const [experience, setExperience] = useState([]);

  function onFirstName(event) {
    setFirstName(event.target.value);
  }

  function onLastName(event) {
    setLastName(event.target.value);
  }

  function onTitle(event) {
    setTitle (event.target.value);
  }

  function onEmail(event) {
    setEmail(event.target.value);
  }
  function onDescription(event) {
    setDescription(event.target.value);
  }

  function onAddress(event) {
    setAddress(event.target.value);
  }

  function onPhoneNumber(event) {
    setPhoneNumber(event.target.value);
  }

  function addExperience(e){
    e.preventDefault();
    console.log(e.target[0].value);
    const position = e.target[0].value;
    const company = e.target[1].vlaue;
    const start = e.target[2].value;
    const end = e.target[3].value;
    const desc = e.target[4].value;

    let newExperience = {position, company, start, end, desc}

    console.log(newExperience);
    setCompany(company);
    setExperience([...experience, newExperience]);
    console.log("experience", experience)
  }

  function addEducation(e){
    e.preventDefault();
  }

  return (
    <>
      <PersonalInfo
        onFirstName={onFirstName}
        onLastName={onLastName}
        onTitle={onTitle}
        onEmail={onEmail}
        onDescription={onDescription}
        onAddress={onAddress}
        onPhoneNumber={onPhoneNumber}
      />
      <Experience addExperience={addExperience}/>
      <Education addEducation={" "}/>
      <Preview
        firstName={firstName}
        lastName={lastName}
        title={title}
        phoneNumber={phoneNumber}
        description={description}
        address={address}
        email={email}
        company={company}
      />
    </>
  )
}
