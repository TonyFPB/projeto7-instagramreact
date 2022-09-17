import { useState } from "react"

export default function Post(props){
    // props.imgUser
    // props.nameUser
    // props.imgCont
    //props.imgCurtido
    // props.curtido
    // props.cutidas
    const [gostei, setGostei] = useState('heart-outline')
    const [classGostei, setClassGostei] = useState('md hydrated')
    const [gosteiBool, setGosteiBool] = useState(false)
    const [nCurtidas, setNCutidas] = useState(props.curtidas)

    function curtindo(){
        
        if(gosteiBool){
            const novoNcurtidas = String(Number(nCurtidas.replace('.','')) - 1)
            setNCutidas(novoNcurtidas)
            setGosteiBool(false)
            setGostei('heart-outline')
            setClassGostei('md hydrated')
        }else{
            const novoNcurtidas = String(Number(nCurtidas.replace('.','')) + 1)
            setNCutidas(novoNcurtidas)
            setGosteiBool(true)
            setGostei('heart')
            setClassGostei('like md hydrated')
        }
    }
    
    const [salvar, setSalvar] = useState('bookmark-outline')
    const [classSalvar, setClassSalvar] = useState('md hydrated')
    const [salvarBool, setSalvarBool] = useState(false)
    
    function salvando(){
        if(salvarBool){
            setSalvarBool(false)
            setSalvar('bookmark-outline')
            setClassSalvar('md hydrated')
        }else{
            setSalvarBool(true)
            setSalvar('bookmark')
            setClassSalvar('salvo md hydrated')
        }
    }





    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imgUser} />
                    {props.nameUser}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal" role="img" class="md hydrated" aria-label="reticências horizontais"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.imgCont} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon onClick={curtindo} name={gostei} role="img" class= {classGostei} aria-label="contorno do coração"></ion-icon>
                        <ion-icon name="chatbubble-outline" role="img" class="md hydrated" aria-label="contorno do chatbubble"></ion-icon>
                        <ion-icon name="paper-plane-outline" role="img" class="md hydrated" aria-label="contorno de avião de papel"></ion-icon>
                    </div>
                    <div>
                        <ion-icon onClick={salvando} name={salvar} role="img" class={classSalvar} aria-label="contorno do marcador"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imgCurtido} />
                    <div class="texto">
                        Curtido por <strong>{props.curtido}</strong> e <strong>outras {nCurtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )  
} 