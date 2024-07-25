// import PreviewEducation from "./PreviewEducation";
// import PreviewExperience from "./PreviewExperience";
import PreviewPersonal from "./PreviewPersonal";
// import "./style.css";

export default function Preview({
    firstName,
    lastName,
    title,
    address,
    email,
    phoneNumber,
    description,
    //   experience,
    //   deleteExperience,
    //   editExperience,
    //   education,
}){
    return (
        <section className="cv-preview">
            <PreviewPersonal
                firstName={firstName}
                lastName={lastName}
                title={title}
                address={address}
                email={email}
                phoneNumber={phoneNumber}
                description={description}
            />
        </section>
    )
}