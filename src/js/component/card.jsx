import React from "react";
import PropType from "prop-types";

const Card = (props) => {
    const style={
        width: "20rem",
        textAlign: "center"
    }
    const bodyStyle={height:"150px"}
    return(
        <div className="card m-4 col-sm-3 col-xs-12 p-0" style={style}>
            <img src={props.image} className="card-img-top" />
            <div className="card-body" style={bodyStyle}>
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
            </div>
            <div className="card-body bg-light" >
                <a href="#" className="btn btn-primary">{props.button}</a>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropType.string,
    text: PropType.string,
    button: PropType.string,
    image: PropType.string
}


export {Card}