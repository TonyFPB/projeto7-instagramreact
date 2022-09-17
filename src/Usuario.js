import React, { useState } from "react"

export default function Usuario(props) {
    // usando props para img e nome
    // props.imgUsuarioPrincipal
    const [nome, setNome] = useState(props.nomeUser)
    const [foto, setFoto] = useState(props.imgUser)
    
    function mudaNome(){
        const novoNome = prompt('Qual o seu nome?')
        if(novoNome !== '' && novoNome !== null){
            setNome(novoNome)
        }else{
            alert('Insira um nome valido!')
        }
    }
    
    function mudaFoto(){
        const novaFoto = prompt('Qual a sua nova imagem de perfil?')
        const imgTeste = new Image()
        imgTeste.src = novaFoto
        imgTeste.onload = function(){
            setFoto(novaFoto)
        }
        imgTeste.onerror = function(){
            alert('A imagem é invalida!!!!!')
        } 
    }

    return (
        <div class="usuario">
            <img onClick={mudaFoto} src={foto} />
            <div class="texto">
                <strong>catanacomics</strong>
                <div class='editor'>
                    {nome}
                    <ion-icon onClick={mudaNome} name="pencil-outline"></ion-icon>
                </div>
            </div>
        </div>
    )
}