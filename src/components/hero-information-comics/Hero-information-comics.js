import './hero-information-comics.scss'

const HeroInformationComics = ({comics, id}) => {
    return (
        <div key={id} className="hero-infomation__comics-item">
            <span>{comics.name}</span>
        </div>
    )
}

export default HeroInformationComics