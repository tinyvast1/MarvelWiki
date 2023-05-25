import { lazy, Suspense } from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Header from "../header/Header";
import Spinner from "../spinner/Spinner";

const Page404 = lazy(() => import('../pages/404'));
const HeroPage = lazy(() => import('../pages/HeroPage'));
const Comics = lazy(() => import('../pages/comics/Comics'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const Hero = lazy(() => import('../pages/hero/Hero'));



const App = () => {
    return(
        <Router>
            <Header/>
            <Suspense fallback={<Spinner/>}>
                <Routes>
                    <Route path="/" element={<HeroPage/>} />
                    <Route path="/comics" element={<ComicsPage/>} />
                    <Route path="/comics/:comicId" element={<Comics/>}/>
                    <Route path="/char/:charId" element={<Hero/>}/>
                    <Route path="*" element={<Page404/>}/>
                </Routes>
            </Suspense>

            {/* <ComicsBaner/>
            <Hero/> */}
        </Router>
    )
}

export default App