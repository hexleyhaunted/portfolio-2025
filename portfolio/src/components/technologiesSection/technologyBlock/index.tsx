import '../../../sass/technologyBlock/index.scss';
import IconBox from "./IconBox.tsx";
import TitleBox from "./TitleBox.tsx";
import RatingsColumn from "./RatingsColumn.tsx";

export default function TechnologyBlock({technologyName}: {technologyName: string}) {
    return <div className={"technology-block"}>
       <RatingsColumn technologyName={technologyName}/>
        <div className={"icon-title-container"}>
            <IconBox technologyName={technologyName}/>
            <TitleBox technologyName={technologyName}/>
        </div>
    </div>
}