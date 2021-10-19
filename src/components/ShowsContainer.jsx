import ShowsList from "./ShowsList";
import { getShows } from "../services/api-services";
import { useEffect, useState } from "react";

export default function ShowsContainer({query}){
    
    const [shows, setShows] = useState([]);
    
    useEffect(async() => {
        setShows(await getShows(query || "Loki"));
    }, [query]);

    return (
        <div>
            <h2>Shows</h2>
            <div className="content">
                <ShowsList shows={shows} />
            </div>
        </div>
    )
}