import { useState, useRef } from "react"; // what is useRef?
import PersonalInfo from "./Components/CVForm/PersonalInfo";
import Preview from "./Components/CVPreview/preview";

export default function Content() {
    let componentRef = null;
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [title, setTitle] = useState(null);
    const [decription, setDescription] = useState(null);
    const [address, setAddress] = useState(null);
    const [email, setEmail] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);

    function onFirstName(event) {
        setFirstName(event.target.value);
    }

    function onLastName(event) {
        setLastName(event.target.value);
    }
    
    function onTitle(event) {
        setTitle(event.target.value);
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



    return (
        <>
            <div className="content">
                <section className="cv-form">
                    <PersonalInfo
                        onFirstName={onFirstName}
                        onLastName={onLastName}
                        onTitle={onTitle}
                        onEmail={onEmail}
                        onDescription={onDescription}
                        onAddress={onAddress}
                        onPhoneNumber={onPhoneNumber}
                    />
                </section>

                <div className="preview">
                    <Preview
                        firstName={firstName}
                        lastName={lastName}
                        title={title}
                        phoneNumber={phoneNumber}
                        description={decription}
                        address={address}
                        email={email}
                    />
                </div>
            </div>
        </>
    )
}