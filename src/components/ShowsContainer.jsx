import ShowsList from "./ShowsList";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect } from "react";
import { useLocation } from 'react-router-dom'
import { fetchShows } from '../store/shows';


export default function ShowsContainer(){
    const shows = useSelector((state) => state.shows)
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        if(shows.length === 0){
            const url = new URL(location.search, window.location.href);
            let query = url.searchParams.get('q');
            if(query === null){
                query = "mel";
            }
            dispatch(fetchShows(query));
        }
    },[]);

    return (
        <div>
            <h2>Shows</h2>
            <div className="content">
                <ShowsList shows={shows} />
            </div>
        </div>
    )
}