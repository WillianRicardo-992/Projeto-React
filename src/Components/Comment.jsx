import React from 'react'
import './Comment.css'

function Comment(props) {

    function Maiusculas(texto){
        return texto.toUpperCase();
    }
    
    return (
        <>
            <section className="comment">
                <p className="title">{Maiusculas(props.title)}</p>
                <p className="text">{props.text}</p>
                <p className="author">Autor:{props.author}</p>
            </section>

        </>
    )

}
export default Comment