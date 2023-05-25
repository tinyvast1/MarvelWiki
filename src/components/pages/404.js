import Error from "../error/Error"
import {Link} from 'react-router-dom'

const Page404 = () => {
    return (
        <div className="container">
            <Error/>
            <p style={{textAlign: "center", fontWeight: "bold", fontSize: 24}}>Page doesn't exist</p>
            <Link style={{display: 'block', textAlign: 'center', fontWeight: 'bold', fontSize: 24, marginTop: 30}} to='..'>Back to main page</Link>
        </div>
    )
}

export default Page404