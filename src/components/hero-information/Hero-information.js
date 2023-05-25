import { Component, Fragment, useEffect, useState } from 'react'
import HeroInformationComics from '../hero-information-comics/Hero-information-comics'
import HeroSearch from '../hero-search/Hero-search'
import './hero-information.scss'
import MarvelService from '../../services/MarvelService'
import HeroInforamationSceleton from '../hero-inforamtion-sceleton/Hero-information-skeleton'
import Spinner from '../spinner/Spinner'
import Error from '../error/Error'
import PropTypes from 'prop-types'

const HeroInforamation = (props) =>  {
    const [char, setChar] = useState(null);
    const {loading, error, getCharacter, clearError} = MarvelService();

    useEffect(() => {
        updateChar();
    }, [])

    useEffect(() => {
        updateChar();
    }, [props.charId])

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const updateChar = () => {
        clearError();
        const {charId} = props;
        if (!charId) {
            return
        }
        getCharacter(charId)
            .then(onCharLoaded)
    }

    const pageSceleton = char || loading || error ? null : <HeroInforamationSceleton/>;
    const pageError = error ? <Error/> : null;
    const pageLoading = loading ? <Spinner/> : null;
    const pageView = !(error || loading || !char) ? <View char={char}/> : null;

    return (
        <div className="hero-information">
            <div className="hero-information__wrapper">
                {pageSceleton}
                {pageError}
                {pageLoading}
                {pageView}
            </div>
            <HeroSearch/>
        </div>
        
    )
}

const View = ({char}) => {
    const {name, description, thumbnail:{thumbnail, classNamesImg}, homepage, wiki, comics} = char;
    return (
        <>
            <div className="hero-information__hero">
                <div className={'hero-information__img' + classNamesImg}>
                    <img src={thumbnail} alt={name} />
                </div>
                <div className="hero-information__presentation">
                    <div className="hero-information__name">
                        <span>{name}</span>
                    </div>
                    <div className="hero-information__btns">
                            <a href={homepage} className="btn btn-red">HOMEPAGE</a>
                            <a href={wiki} className="btn btn-grey">WIKI</a>
                    </div>
                </div>
            </div>
            <p className="hero-information__description">
                {description}
            </p>
            <div className="hero-information__comics">
                <div className="hero-information__comics-title">
                    Comics:
                </div>
                <div className="hero-information__comics-items">
                    {comics.lenght > 0 ? null : 'There is no comics with character'}
                    {
                        comics.map((item, i) => {
                            if (i < 10) {
                                return (
                                    <HeroInformationComics key={i} comics={item}/>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </>
    )
}

HeroInforamation.propTypes = {
    charId: PropTypes.number
}

export default HeroInforamation