import './comics.scss'

const Comics = () => {
    return (
        <section className="comics">
            <div className="container comics__container">
                <div className="comics__img">
                    <img src="https://loremflickr.com/293/450" alt="" />
                </div>
                <div className="comics__information">
                    <div className="comics__title">X-Men: Days of Future Past</div>
                    <p className="comics__description">
                        Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?
                    </p>
                    <div className="comics__pages">144 pages</div>
                    <div className="comics__language">Language: <span>en-us</span></div>
                    <div className="comics__price">9.99$</div>
                </div>
                <button className="comics__back">Back to all</button>
            </div>
        </section>
    )
}

export default Comics