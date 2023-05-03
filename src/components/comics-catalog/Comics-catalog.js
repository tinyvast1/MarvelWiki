import ComicsCard from '../comics-card/Comicks-card'
import './comics-cataglog.scss'

const ComicsCatalog = () => {
    return (
        <section className="comics-catalog">
            <div className="container comics-catalog__container">
                <ComicsCard/>
                <ComicsCard/>
                <ComicsCard/>
                <ComicsCard/>
                <ComicsCard/>
                <ComicsCard/>
                <ComicsCard/>
                <ComicsCard/>
            </div>
            <button className="btn btn-red btn-long">LOAD MORE</button>
        </section>
    )
}

export default ComicsCatalog