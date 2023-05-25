import { useEffect, useState } from 'react';
import useMarvelService from '../../services/MarvelService'
import ComicsCard from '../comics-card/Comicks-card'
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';
import './comics-cataglog.scss'

const ComicsCatalog = () => {
    const [comics, setComics] = useState(JSON.parse(localStorage.getItem('comics')) ? JSON.parse(localStorage.getItem('comics')).comics : []);
    const [offset, setOffset] = useState(JSON.parse(localStorage.getItem('comics')) ? JSON.parse(localStorage.getItem('comics')).offset : 222);
    const [newComicLoaded, setNewComicLoaded] = useState(false);
    const {loading, error, getAllComics, clearError} = useMarvelService();

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('comics')) === null) {
            updateComics();
        } else {
            setNewComicLoaded(true);
        }
    }, [])

    const onComicsLoaded = (res) => {
        setComics([...comics, ...res]);
        setOffset(offset => offset + 8);
        setNewComicLoaded(true);

        localStorage.setItem('comics', JSON.stringify({comics: [...comics, ...res], offset: offset+8}))
    }

    const updateComics = () => {
        clearError();
        getAllComics(offset)
            .then(onComicsLoaded);
    }

    const pageLoading = (loading && !newComicLoaded) ? <Spinner/> : null;
    const pageError = error ? <Error/> : null;
    const pageContent = <div className="container comics-catalog__container"><View comics={comics}/></div>

    return (
        <section className="comics-catalog">
                {pageLoading}
                {pageError}
                {pageContent}
            <button onClick={updateComics} disabled={loading} className="btn btn-red btn-long">LOAD MORE</button>
        </section>
    )
}

const View = ({comics}) => {
    return comics.map((item, i) => <ComicsCard key={i} comic={item}/>)
}


export default ComicsCatalog