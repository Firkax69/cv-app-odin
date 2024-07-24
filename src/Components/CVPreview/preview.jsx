import PreviewEducation from "./PreviewEducation";
import PreviewExperience from "./PreviewExperience";
import PreviewPersonal from "./PreviewPersonal";
import "./style.css";

export default function Preview(){
    return (
        <div class="preview">
            <PreviewPersonal/>
            <PreviewExperience/>
            <PreviewEducation/>
        </div>
    )
}