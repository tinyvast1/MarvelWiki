import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
    const {loading, request, error, clearError} = useHttp();
    
    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=7acb996af1e270fe4d1a19dcb04ebd32';
    const _baseCharLimit = 9;
    const _baseCharOffset = 210;
    const _baseComicsOffset = 1000;
    const _baseComicsLimit = 8;

    const getAllCharacters = async (offset = _baseCharOffset) => {
        const res = await request(`${_apiBase}characters?limit=${_baseCharLimit}&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    }

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformCharacter(res.data.results[0]);
    }

    const searchCharacter = async (name) => {
        const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`)
        return res.data.results[0] === undefined ? false : _transformCharacter(res.data.results[0]);
    }

    const _transformCharacter = (char) => {
        const thumbnail = char.thumbnail.path + '.' + char.thumbnail.extension;
        return {
            name: char.name,
            description: char.description ? char.description : 'У этого персонажа нет описания',
            thumbnail: (thumbnail.includes('image_not_available') || thumbnail.includes('4c002e0305708')) ? {thumbnail: thumbnail, classNamesImg: ' contain'} : {thumbnail: thumbnail, classNamesImg: ' cover'},
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            id: char.id,
            comics: char.comics.items
        }
    }

    const getAllComics = async (offset = _baseComicsOffset) => {
        const res = await request(`${_apiBase}comics?limit=${_baseComicsLimit}&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformComics);
    }

    const getComic = async (id) => {
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
        return _transformComics(res.data.results[0]);
    }

    const _transformComics = (comics) => {
        const thumbnail = comics.thumbnail.path + '.' + comics.thumbnail.extension;
        return {
            name: comics.title,
            description: comics.description ? comics.description : 'У этого комикса нет описания',
            thumbnail: (thumbnail.includes('image_not_available') || thumbnail.includes('4c002e0305708')) ? {thumbnail: thumbnail, classNamesImg: ' contain'} : {thumbnail: thumbnail, classNamesImg: ' cover'},
            id: comics.id,
            price: !(comics.prices[0].price === 0) ? comics.prices[0].price + '$' : 'NOT AVAILIBLE' ,
            pages: comics.pageCount + ' pages',
            language: comics.textObjects.language || 'en-us'
        }
    }

    return {loading, error, clearError, getAllComics, getComic, getAllCharacters, getCharacter, searchCharacter}
}

export default useMarvelService;