import {getRandomFloat} from "../../../utils/math.ts";

export default function TitleBox({technologyName}: {technologyName: string}) {
    const delay = `${getRandomFloat(50, 2000)}ms`;

    return <div className={"title-box"}>
        <div className={"title-loading-block"} style={{animationDelay: delay}}/>
        <p className={"title"} style={{animationDelay: delay}}>{technologyName}</p>
    </div>;
}