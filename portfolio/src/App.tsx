import './sass/pages/App.scss'
import TechnologyBlock from "./components/technologiesSection/technologyBlock";
import {getAllCvTechnologyNames} from "./utils/cvDataUtils.ts";

function App() {

    const technologyNames = getAllCvTechnologyNames();

  return (
    <div className={"sandbox"}>
        {technologyNames.map((name) => (<TechnologyBlock technologyName={name}/>))}
    </div>
  )
}

export default App
