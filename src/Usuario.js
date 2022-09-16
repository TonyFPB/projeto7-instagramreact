import React, { useState } from "react"

export default function Usuario(props) {
    // usando props para img e nome
    // props.imgUsuarioPrincipal
    let [nomeUsuario, setNome] = useState(props.nomeUsuarioPrincipal)
    let [fotoUsuario, setFoto] = useState(props.imgUsuarioPrincipal)
    console.log(props.imgUsuarioPrincipal)
    console.log(fotoUsuario)
    

    return (
        <div class="usuario">
            <img onClick={() => setFoto(fotoUsuario = prompt('qual foto?'))} src={fotoUsuario} />
            <div class="texto">
                <strong>catanacomics</strong>
                <div class='editor'>
                    {nomeUsuario}
                    <ion-icon onClick={() => setNome(nomeUsuario = prompt('seu nome aqui!'))} name="pencil-outline"></ion-icon>
                </div>
            </div>
        </div>
    )
}