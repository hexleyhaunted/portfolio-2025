import {getCvTechnologyIconByName} from "../../../utils/cvDataUtils.ts";
import TechnologyIcon from "./TechnologyIcon.tsx";
import {getRandomFloat} from "../../../utils/math.ts";

export default function IconBox({technologyName}: {technologyName: string}) {
    const Icon = getCvTechnologyIconByName(technologyName);
    const delay = `${getRandomFloat(50, 2000)}ms`;

    return (
        <div className={"icon-box"}>
            <div className={"icon-loading-block"} style={{animationDelay: delay}}/>
            <div className={"icon-container"} style={{animationDelay: delay}}>
                <TechnologyIcon Icon={Icon}/>
            </div>
        </div>
)
}