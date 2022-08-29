import React from 'react'
//import DestinationArray from '../data.js'

export default function Card(props) {

    return (
        <div className={`card-${props.item.id} card`}>
            <div className="card__image-container">
                <img
                    className="card__image"
                    src={require(`../${props.item.coverImg}`)}>
                </img>
            </div>

            <div className="card__info">
                <h2 className="card__destination">
                    {props.item.destination}
                </h2>
                <p className="card__country">
                    {props.item.country}
                </p>
                <p className="card__description">
                    {props.item.description}
                </p>
                <p className="card__random-fact">
                    <h4>Random Fact: </h4>{props.item.facts.randomFact}
                </p>
            </div>
        </div>
    )
}

