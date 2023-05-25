import { useParams, useNavigate, useLocation } from 'react-router-dom'
import ComicsBaner from '../../comics-baner/comics-baner'
import './comics.scss'
import { useEffect, useState } from 'react';
import useMarvelService from '../../../services/MarvelService';
import Error from '../../error/Error';
import Spinner from '../../spinner/Spinner';
import { Helmet } from 'react-helmet';

const Comics = () => {
    const { state } = useLocation();
    const pageContent =  <View comic={state}/>;

    return (
        <>
            <Helmet>
            <meta
                name="description"
                content={`${state.name} comics book`}
            />
            <title>{state.name}</title>
            </Helmet>
            <ComicsBaner/>
            {pageContent}
        </>
    )
}

const View = ({comic}) => {
    const {name, thumbnail:{thumbnail, classNamesImg}, description, pages, price, language} = comic
    const navigate = useNavigate();

    return (
        <section className="comics">
            <div className="container comics__container">
                <div className={"comics__img" + classNamesImg}>
                    <img src={thumbnail} alt={name} />
                </div>
                <div className="comics__information">
                    <div className="comics__title">{name}</div>
                    <p className="comics__description">
                        {description}
                    </p>
                    <div className="comics__pages">{pages}</div>
                    <div className="comics__language">Language: <span>{language}</span></div>
                    <div className="comics__price">{price}</div>
                </div>
                <button onClick={() => navigate(-1)} className="comics__back">Back to all</button>
            </div>
        </section>
    )
}

export default Comics