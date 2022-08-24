import React from 'react'
import Comment from './Components/Comment'

function App(){
    return(
        <>
            <h1>Comentarios</h1>
            <Comment title="Comentario Um" text="texto 1" author="Willian Ricardo" />
            <Comment title="Comentario dois" text="texto 2" author="Ricardo Alberto" />
            <Comment title="Comentario tres" text="texto 3" author="Carlos Henrique" />
        </>
    )
}
export default App