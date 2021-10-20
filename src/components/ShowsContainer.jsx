import ShowsList from "./ShowsList";
import { useSelector } from 'react-redux'

export default function ShowsContainer(){
    const shows = useSelector((state) => state.shows)

    return (
        <div>
            <h2>Shows</h2>
            <div className="content">
                <ShowsList shows={shows} />
            </div>
        </div>
    )
}