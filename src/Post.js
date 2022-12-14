import { useState } from "react"

export default function Post(props) {
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
    const [contagem, setContagem] = useState(0)

    function curtindo() {

        if (gosteiBool) {
            const novoNcurtidas = String(Number(nCurtidas.replace('.', '')) - 1)
            setNCutidas(novoNcurtidas)
            setGosteiBool(false)
            setGostei('heart-outline')
            setClassGostei('md hydrated')
            setContagem(0)
        } else {
            const novoNcurtidas = String(Number(nCurtidas.replace('.', '')) + 1)
            setNCutidas(novoNcurtidas)
            setGosteiBool(true)
            setGostei('heart')
            setClassGostei('like md hydrated')
            setContagem(1)
        }
    }


    const [pulse, setPulse] = useState('heart-image md hydrated ')
    function animacao() {
        if (contagem === 0) {
            setContagem(1)
            const novoNcurtidas = String(Number(nCurtidas.replace('.', '')) + 1)
            setPulse('heart-image md hydrated pulsar')
            setNCutidas(novoNcurtidas)
            setGosteiBool(true)
            setGostei('heart')
            setClassGostei('like md hydrated')
            setTimeout(setPulse, 1000, 'heart-image md hydrated ')

        } else {
            setPulse('heart-image md hydrated pulsar')
            setTimeout(setPulse, 1000, 'heart-image md hydrated ')
        }

    }

    const [salvar, setSalvar] = useState('bookmark-outline')
    const [classSalvar, setClassSalvar] = useState('md hydrated')
    const [salvarBool, setSalvarBool] = useState(false)

    function salvando() {
        if (salvarBool) {
            setSalvarBool(false)
            setSalvar('bookmark-outline')
            setClassSalvar('md hydrated')
        } else {
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
                    <ion-icon name="ellipsis-horizontal" role="img" class="md hydrated" aria-label="retic??ncias horizontais"></ion-icon>
                </div>
            </div>

            <div onDoubleClick={animacao} class="conteudo">
                <img src={props.imgCont} />
                <ion-icon class={pulse} name="heart"></ion-icon>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon onClick={curtindo} name={gostei} role="img" class={classGostei} aria-label="contorno do cora????o"></ion-icon>
                        <ion-icon name="chatbubble-outline" role="img" class="md hydrated" aria-label="contorno do chatbubble"></ion-icon>
                        <ion-icon name="paper-plane-outline" role="img" class="md hydrated" aria-label="contorno de avi??o de papel"></ion-icon>
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