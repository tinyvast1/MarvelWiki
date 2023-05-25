import { Link } from 'react-router-dom';
import './comics-card.scss'

const ComicsCard = ({comic}) => {
    const {name, thumbnail:{thumbnail, classNamesImg},price, id} = comic;
    return (
        <Link style={{textDecoration: 'none', color: '#000'}} to={`${id}`} state={comic} className="comics-card">
            <div className={"comics-card__img" + classNamesImg}>
                <img src={thumbnail} alt="" />
            </div>
            <div className="comics-card__name">{name}</div>
            <div className="comics-card__price">{price}</div>
        </Link>
    )
}

export default ComicsCard