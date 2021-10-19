import { getShowInfo } from "../services/api-services";
import { useParams, useLocation } from "react-router-dom"
import { useEffect, useState } from "react";


export default function Show(){
    //const { id } = useParams();
    const [showInfo, setShowInfo] = useState([]);

    const location = useLocation();
    const url = new URL(location.search, window.location.href);
    const id = url.searchParams.get("id");

    console.log(location.search);

    useEffect(async () => {
       setShowInfo(await getShowInfo(id))
   },[id]);

    

    const imgSrc = showInfo.image ? (<img src={showInfo.image.medium}/>) : null

    return (
        <div>
            {imgSrc}
            <div>{showInfo.name}</div>
            <div>{showInfo.premiered}</div>
            <div>{showInfo.summary}</div>
        </div>
    )
}