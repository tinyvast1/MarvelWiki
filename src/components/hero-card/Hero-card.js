import React, { Component } from 'react'
import './hero-crad.scss'

const HeroCard = (props) =>{
    const {classNames, char:{name, thumbnail:{thumbnail, classNamesImg}, id}, selectedChar, onCharSelected} = props;
    const clazz = "hero-card" + (classNames ? classNames : '') + (selectedChar === id ? ' active' : ''),
    clazzImg = 'hero-card__img' + (classNamesImg);
    return (
        <button key={id} data-id={id} className={clazz} onClick={() => onCharSelected(id)}>
            <div className={clazzImg}>
                <img src={thumbnail} alt="" />
            </div>
            <div className="hero-card__name">
                <span>{name}</span>
            </div>
        </button>
    )
} 

export default HeroCard