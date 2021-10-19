import ShowItem from "./ShowItem";
import '../../dist/ShowsList.css'

export default function ShowsList({shows}) {
    return (
        <div className="shows-list">
            {shows.map(show => <ShowItem key={show.id} item={show} />)}
        </div>
    )
}