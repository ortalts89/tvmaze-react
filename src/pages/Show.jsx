import { useEffect } from "react";
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchShowInfo } from '../store/show';
import { useSelector } from 'react-redux'


export default function Show(){
    const { showId } = useParams();
    const dispatch = useDispatch()
    const showInfo = useSelector((state) => state.showInfo)

    useEffect(() => {
       dispatch(fetchShowInfo(showId));
   },[showId]);

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