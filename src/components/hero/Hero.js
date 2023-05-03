import './hero.scss'

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero__container">
                <div className="hero__img">
                    <img src="https://loremflickr.com/293/293" alt="" />
                </div>
                <div className="hero__information">
                    <div className="hero__name">LOKI</div>
                    <p className="hero__description">
                    In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero