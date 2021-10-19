import { useMemo } from 'react';
import { Link } from 'react-router-dom'
import '../../dist/ShowItem.css'

export default function ShowItem({item,}){
    const imgSrc = useMemo(() => {
        return item.image? (<img src={item.image.medium}/>) : null;
    }, [item.image])

    return (
        <Link to={`/show/?id=${item.id}`}>
             <div className="show-item">
                <h3>{item.name}</h3>
                {imgSrc}
                <hr />
                <div className="item-footer">
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-star">7.7</i> 
                </div>
            </div>
        </Link>
    )
}