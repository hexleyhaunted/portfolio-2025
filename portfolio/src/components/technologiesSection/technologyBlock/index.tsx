import '../../../sass/technologyBlock/index.scss';
import IconBox from "./IconBox.tsx";
import TitleBox from "./TitleBox.tsx";

export default function TechnologyBlock({technologyName}: {technologyName: string}) {
    return <div className={"technology-block"}>
        <div className={"icon-title-container"}>
            <IconBox technologyName={technologyName}/>
            <TitleBox technologyName={technologyName}/>
        </div>
    </div>
}