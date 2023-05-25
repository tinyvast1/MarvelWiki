import { Helmet } from "react-helmet"
import ErrorBoundary from "../errorBoundary/ErrorBoundary"
import Heroes from "../heroes/Heroes"
import Random from "../random/Random"


const HeroPage = () => {
    return (
        <>
            <Helmet>
            <meta
                name="description"
                content="Marvel infomation portal"
            />
            <title>MarvelWiki</title>
            </Helmet>
            <ErrorBoundary>
                <Random/>
            </ErrorBoundary>
            <Heroes/>
        </>
    )   
}

export default HeroPage