

class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=7acb996af1e270fe4d1a19dcb04ebd32';
    _baseCharLimit = 'limit=' + 9;
    _baseCharOffset = 210;
    
    getResourse = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = async (offset = this._baseCharOffset) => {
        const res = await this.getResourse(`${this._apiBase}characters?${this._baseCharLimit}&offset=${offset}&${this._apiKey}`);
        return res.data.results.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
        const res = await this.getResourse(`${this._apiBase}characters/${id}?${this._apiKey}`);
        return this._transformCharacter(res.data.results[0]);
    }

    _transformCharacter = (char) => {
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
}

export default MarvelService;