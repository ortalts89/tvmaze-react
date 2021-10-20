import { getShowInfo } from "../services/api-services";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'


export default function Show(){
    const [showInfo, setShowInfo] = useState([]);
    const { id } = useParams();

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