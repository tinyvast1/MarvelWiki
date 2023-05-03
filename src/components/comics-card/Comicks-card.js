import './comics-card.scss'

const ComicsCard = () => {
    return (
        <div className="comics-card">
            <div className="comics-card__img">
                <img src="https://loremflickr.com/225/346" alt="" />
            </div>
            <div className="comics-card__name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
            <div className="comics-card__price">9.99$</div>
        </div>
    )
}

export default ComicsCard