import { useLocation } from 'react-router-dom'
import './hero.scss'
import { Helmet } from 'react-helmet';

const Hero = (props) => {
    let { state } = useLocation();
    const {name, description, thumbnail: {classNamesImg, thumbnail}} = state;

    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content={`${state.name} page`}
                />
                <title>{state.name}</title>
            </Helmet>
            <section className="hero">
                <div className="container hero__container">
                    <div className={`hero__img` + classNamesImg}>
                        <img src={thumbnail} alt={name} />
                    </div>
                    <div className="hero__information">
                        <div className="hero__name">{name}</div>
                        <p className="hero__description">{description}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero