import './comics-baner.scss'
import comicsBanerImg from '../../resources/images/baner-comics.png'

const ComicsBaner = () => {
    return (
        <div className="comics-baner container">
                <img src={comicsBanerImg} alt="банер" />
                <div className="comics-baner__text">New comics every week!<br />Stay tuned!</div>
        </div>
    )
}

export default ComicsBaner