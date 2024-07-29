import { useState, useRef } from "react"; // what is useRef?
import PersonalInfo from "./Components/CVForm/PersonalInfo";
import Preview from "./Components/CVPreview/preview";
import Experience from "./Components/CVForm/experience";
import Education from "./Components/CVForm/education";
import {v4 as uuidv4} from "uuid";

export default function Content() {
    let componentRef = null;
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [title, setTitle] = useState(null);
    const [decription, setDescription] = useState(null);
    const [address, setAddress] = useState(null);
    const [email, setEmail] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [experience, setExperience] = useState([]);
    const [education, setEducation] = useState([]);

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

    function addExperience(e) {
        e.preventDefault();
        console.log(e.target[0].value);
        const id = uuidv4();
        const position = e.target[0].value;
        const company = e.target[1].value;
        const start = e.target[2].value;
        const end = e.target[3].value;
        const desc = e.target[4].value;

        let newExperience = {id, position, company, start, end, desc};
        setExperience([...experience, newExperience]);
        clear(e);
    }

    function clear(e) {
        for (let i=0; i<e.target.length; i++) {
            e.target[i].value = "";
        }
    }

    function deleteExperience(id) {
        console.log(id);
        setExperience((currentExperience) => {
            return currentExperience.filter((exp) => exp.id !== id);
        })
    }

    function saveExperience(e, id) {
        e.preventDefault();
        let position = e.target[0].value;
        let company = e.target[1].value;
        let start = e.target[2].value;
        let end = e.target[3].value;
        let desc = e.target[4].value;
        let updateExp = {position, company, start, end, desc};
        setExperience(
            experience.map((exp) => {
                if (exp.id === id) {
                    return {...exp, ...updateExp};
                } else {
                    return exp;
                }
            })
        );
    }

    function addEducation(e) {
        e.preventDefault();
        console.log("Clicked on Add education");
        const id = uuidv4();
        const course = e.target[0].value;
        const university = e.target[1].value;
        const start = e.target[2].value;
        const end = e.target[3].value;
        let newEducation = {id, course, university, start, end};
        setEducation([...education, newEducation]);
        clear(e);
    }

    function saveEducation(e,id) {
        e.preventDefault();

        const course = e.target[0].value;
        const university = e.target[1].value;
        const start = e.target[2].value;
        const end = e.target[3].value;
        const updateEdu = {course,university,start,end};
        setEducation(
            education.map((edu) => {
                if (edu.id === id) {
                    return {...edu, ...updateEdu};
                } else {
                    return edu;
                }
            })
        )
    }

    function deleteEducation(id) {
        setEducation((currentEducation) => {
            return currentEducation.filter((edu) => edu.id !== id);
        })
    }


    // *** BUTTONS ***

    function reset() {
        const empty = [];
        setEducation(empty);
        setExperience(empty)
        setFirstName("")
        setLastName("")
        setTitle("")
        setEmail("")
        setAddress("")
        setPhoneNumber("")
    }

    function loadExample() {
        reset();
        setFirstName("IHOR");
        setLastName("KOVALEVSKYI")
        setTitle("Estimator")
        setAddress("Norwich, UK")
        setPhoneNumber("01603-333-303")
        const experience1 = {
            id: uuidv4(),
            position: "Estimator and Project Coordinator",
            company: "Manufacturing glazing company in Norwich",
            start: "September, 2023",
            end: "Current",
            
            desc: `Provided regular updates on schedule progress;
                Conducted detailed cost analysis and prepared comprehensive cost estimates for various construction and domestic projects;
                Reviewed and interpreted technical drawings, specifications, and project plans to develop accurate estimates;
                Prepared and presented cost estimates and bid proposals to clients and stakeholders;
                Utilized estimating software and tools to streamline the estimation process and improve accuracy;
                Maintained and updated a database of cost information and historical data for future reference;
                Improved customer service on schedules and increased statistic from 78% to 86% on planned repairs (attendance and completions); 
                Increased statistic from 65 to 95% on urgent (emergency) repairs ;
                Improved communication between contracts and other departments for the best response and to determine follow on work for the clients as fast as possible; 
                `,
        }


        const experience2 = {
            id: uuidv4(),
            position: "Operations Manager",
            company: "Carolina Logistics",
            start: "February, 2020",
            end: "November, 2022",
            
            desc: `Remain a high level of customer service and develop relationships;
                Conduct over 60 final interviews;
                Conduct regular Operations meetings one per week including all direct reports to higher.
                Supervise daily team members performance and grooming.
                Managed to create school based on logistics terms and teaching specific cases prior getting to the work for all new members, oversee and fine-tune project scope, scope and strategy;
                Build strong, confident and independent teams across further departments: Operations, Dispatch, Safety and collaborate with other departments (Quotes/HR/Product/Security) to meet targets;
                Communicate with clients/suppliers with regards to order progressing, documentation requirements and to resolve any potential issues along with hard and unusual casesrelating to logistics in USA.
                Gather and analyse data to report on KPIs and milestones, team behaviour, internal/external progress, filling out  multiplicity of tabs, docs, evaluating boards etc.`,
        }

        const education1 = {
            course: "Engineering and Design mechanics",
            university: "Ihor Sikorsky Kyiv Politechnic Institute",
            start: "Septebmer, 2015",
            end: "June, 2019",
        }
        const education2 = {
            course: "Mechanical engineering technology and applied mechanics",
            university: "Ihor Sikorsky Kyiv Politechnic Institute",
            start: "September, 2019",
            end: "January 2021",
        }
        
        setEducation([education1, education2]);
        setExperience([experience1, experience2])
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

                    <Experience
                        onSubmit={addExperience}
                        deleteExperience={deleteExperience}
                        experience={experience}
                        saveExperience={saveExperience}
                    />

                    <Education
                        addEducation={addEducation}
                        education={education}
                        saveEducation={saveEducation}
                        deleteEducation={deleteEducation}
                    />

                    <section className="btn-continer">
                        <button className="btn btn-load" onClick={loadExample}>
                            Load Example
                        </button>
                        <button className="btn btn-reset" onClick={reset}>
                            Reset
                        </button>
                    </section>

                </section>

                <div className="preview">
                    {/* add component ref on top */}
                    <Preview
                        firstName={firstName}
                        lastName={lastName}
                        title={title}
                        phoneNumber={phoneNumber}
                        description={decription}
                        address={address}
                        email={email}
                        experience={experience}
                        education={education}
                    />
                </div>
            </div>
        </>
    )
}