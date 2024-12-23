import {getCvTechnologyRatingByName} from "../../../utils/cvDataUtils.ts";
import {getRandomFloat} from "../../../utils/math.ts";

function RatingBlock({isFilled, delay}: {isFilled: boolean, delay: number}) {
    const filledClass = isFilled ? "filled" : "empty"
    return <>
        <div className={`rating-block`}>
            <div className={`rating-loading-block ${filledClass}`} style={{animationDelay: `${delay}ms`}}></div>
        </div>
    </>
}

export default function RatingsColumn({technologyName}: { technologyName: string}) {
    const rating = getCvTechnologyRatingByName(technologyName) || 0;
    const ratingArray = Array(5).fill(0);
    const delay = getRandomFloat(2500, 3000);

    return (
        <div className={"ratings-column"}>
            {ratingArray.map((_item, index) => (<RatingBlock isFilled={5 - rating <= index} delay={delay - (index * getRandomFloat(200, 500))}/>))}
        </div>
    )
}