import { Component } from "react";
import './hero-search.scss'

class HeroSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render () {
        return (
            <div className="hero-search">
                <div className="hero-search__title">Or find a character by name:</div>
                <form action="" className="hero-search__form">
                    <input className="hero-search__input" type="text" placeholder="Enter name"/>
                    <button className="btn btn-red hero-search__btn">FIND</button>
                </form>
            </div>
        )
    }
    
}

export default HeroSearch

