import './random.scss'
import randomBackground from '../../resources/images/random-background.png'
import { useEffect, useState } from 'react'
import Spinner from '../spinner/Spinner';
import Error from '../error/Error'
import useMarvelService from '../../services/MarvelService';

const Random = () => {
    const [char, setChar] = useState({thumbnail: ''});
    const {loading, error, getCharacter, clearError} = useMarvelService();
    
    useEffect(() => {
        updateChar();
    }, [])


    const onCharLoaded = (char) => {
        setChar(char);
    }

    const updateChar = () => {
        clearError();
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        getCharacter(id)
            .then(onCharLoaded)
    }


    const errorMessage = error ? <Error/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? <View char={char}/> : null;
    
    return (
        <section className="random">
            <div className="container random__container">
                <div className="random-hero">
                    {errorMessage}
                    {spinner}
                    {content}
                </div>
                <div className="random-description">
                    <div className="random-description__title">Random character for today! <br /> Do you want to get to know him better?</div>
                    <div className="random-description__subtitle">Or choose another one</div>
                    <button onClick={updateChar} className="btn btn-red btn-bgblack">TRY IT</button>
                    <div className="random-description__img">
                        <img src={randomBackground} alt="Молот тора" />
                    </div>
                </div>
            </div>
        </section>
    )
}

const View = ({char}) => {
    const {name, description, thumbnail:{thumbnail, classNamesImg}, homepage, wiki} = char;
    const clazzImg = 'random-hero__img' + classNamesImg;
    return (
        <>
            <div className={clazzImg}>
                <img src={thumbnail} alt="" />
            </div>
            <div className="random-hero__information">
                <div className="random-hero__name">{name}</div>
                <p className="random-hero__description">{description}</p>
                <div className="random-hero__btns">
                    <a href={homepage} className="btn btn-red">HOMEPAGE</a>
                    <a href={wiki} className="btn btn-grey">WIKI</a>
                </div>
            </div>
        </>    
    )
}

export default Random

