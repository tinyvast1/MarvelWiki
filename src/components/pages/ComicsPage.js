import { Helmet } from "react-helmet"
import ComicsBaner from "../comics-baner/comics-baner"
import ComicsCatalog from "../comics-catalog/Comics-catalog"
import ErrorBoundary from "../errorBoundary/ErrorBoundary"


const ComicsPage = () => {
    return (
        <>
            <Helmet>
            <meta name="description"
                content="Page with list of our comics"/>
            <title>Comics</title>
            </Helmet>
            <ComicsBaner/>
            <ErrorBoundary>
                <ComicsCatalog/>
            </ErrorBoundary>
        </>
    )
} 

export default ComicsPage