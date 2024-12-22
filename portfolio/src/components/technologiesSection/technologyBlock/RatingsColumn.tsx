import {getCvTechnologyRatingByName} from "../../../utils/cvDataUtils.ts";

function RatingBlock({isFilled}: {isFilled: boolean}) {
    const filledClass = isFilled ? "filled" : "empty"
    return <div className={`rating-block ${filledClass}`}></div>
}

export default function RatingsColumn({technologyName}: {technologyName: string}) {
    const rating = getCvTechnologyRatingByName(technologyName) || 0;
    const ratingArray = Array(5).fill(0);
    return (
        <div className={"ratings-column"}>
            {ratingArray.map((_item, index) => (<RatingBlock isFilled={5 - rating <= index}/>))}
        </div>
    )
}