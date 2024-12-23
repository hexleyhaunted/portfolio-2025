import {getAllCvTechnologyNames} from "../../utils/cvDataUtils.ts";
import TechnologyBlock from "./technologyBlock";
import '../../sass/sectionContainers/technologySectionContainer.scss';

export default function TechnologiesSection() {
    const technologyNames = getAllCvTechnologyNames();

    return (
        <div id={"technologies-section-container"}>
            <div className={"title-box"}><h3>{"Technologies"}</h3></div>
            <div className={"technology-blocks-container"}>
                {technologyNames.map((name) => (<TechnologyBlock technologyName={name}/>))}
            </div>
        </div>
    )
}