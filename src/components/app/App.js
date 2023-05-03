import { Component } from "react";
import Header from "../header/Header";
import Random from "../random/Random";
import Heroes from "../heroes/Heroes";
import ComicsBaner from "../comics-baner/comics-baner";
import ComicsCatalog from "../comics-catalog/Comics-catalog";
import Comics from "../comics/Comics";
import Hero from "../hero/Hero";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";


const App = () => {
    return(
        <>
            <Header/>
            <ErrorBoundary>
                <Random/>
            </ErrorBoundary>
            <Heroes/>

            {/* <ComicsBaner/>
            <ComicsCatalog/> */}

            {/* <ComicsBaner/>
            <Comics/> */}

            {/* <ComicsBaner/>
            <Hero/> */}
        </>
    )
}

export default App