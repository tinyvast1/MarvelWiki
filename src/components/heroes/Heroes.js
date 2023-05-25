import './heroes.scss'
import HeroCard from "../hero-card/Hero-card"
import HeroInforamation from '../hero-information/Hero-information'
import { useState, useEffect} from 'react'
import Spinner from '../spinner/Spinner'
import Error from '../error/Error'
import ErrorBoundary from '../errorBoundary/ErrorBoundary'
import PropTypes from 'prop-types'
import useMarvelService from '../../services/MarvelService'

const Heroes = () => {

    const [chars, setChars] = useState(JSON.parse(localStorage.getItem('chars')) ? JSON.parse(localStorage.getItem('chars')).chars : []);
    const [selectedChar, setSelectedChar] = useState(null);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(JSON.parse(localStorage.getItem('chars')) ? JSON.parse(localStorage.getItem('chars')).offset : 210);
    const [charEnded, setCharEnded] = useState(false);

    const {loading, error, getAllCharacters} = useMarvelService();

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('chars')) === null) {
            onRequest(offset, true);
        } else {
            setNewItemLoading(false);
        }
    }, [])

    const onCharSelected = (id) => {
        setSelectedChar(id);
    }

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllCharacters(offset)
            .then(onCharsLoaded)
    }

    const onCharsLoaded = async (newChars) => {
        let ended = false;
        if (newChars < 9 ) {
            ended= true;
        }
        setChars(chars => [...chars, ...newChars]);
        setNewItemLoading(false);
        setOffset(offset => offset + 9);
        setCharEnded(ended)

        localStorage.setItem('chars', JSON.stringify({chars:[...chars, ...newChars], offset: offset + 9}));
    }

    const pageError = error ? <Error/> : null;
    const pageLoading = loading && !newItemLoading ? <Spinner/> : null;

    return (
        <section className="heroes">
            <div className="container heroes__container">
                <div className="heroes__catalog">
                        {pageError}
                        {pageLoading}
                        <ErrorBoundary>
                        <div className="heroes__catalog-wrapper">
                            <View chars={chars} selectedChar={selectedChar} onCharSelected={onCharSelected}/>
                        </div>
                        </ErrorBoundary>
                    <button className="btn btn-red btn-long"
                            disabled={newItemLoading}
                            style={{display: charEnded ? 'none' : 'block'}}
                            onClick={() =>onRequest(offset)}>LOAD MORE</button>
                </div>
                <ErrorBoundary>
                    <HeroInforamation charId={selectedChar}/>
                </ErrorBoundary>
            </div>
        </section>
    )
}

const View = ({chars, onCharSelected, selectedChar}) => {
        return chars.map(item => <HeroCard key={item.id} char={item} selectedChar={selectedChar} onCharSelected={onCharSelected}/>)
}

View.propTypes = {
    onCharSelected: PropTypes.func
}

export default Heroes