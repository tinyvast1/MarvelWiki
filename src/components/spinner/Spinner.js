import spin from '../../resources/images/1481.gif'
import './Spinner.scss'

const Spinner = () => {
    return (
        <div className="spinner">
            <img src={spin}  alt="" />
        </div>
    )
}

export default Spinner;