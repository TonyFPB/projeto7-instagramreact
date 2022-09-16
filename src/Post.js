export default function Post(props){
    // props.imgUser
    // props.nameUser
    // props.imgCont
    //props.imgCurtido
    // props.curtido
    // props.cutidas

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
                        <ion-icon name="heart-outline" role="img" class="md hydrated" aria-label="contorno do coração"></ion-icon>
                        <ion-icon name="chatbubble-outline" role="img" class="md hydrated" aria-label="contorno do chatbubble"></ion-icon>
                        <ion-icon name="paper-plane-outline" role="img" class="md hydrated" aria-label="contorno de avião de papel"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline" role="img" class="md hydrated" aria-label="contorno do marcador"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imgCurtido} />
                    <div class="texto">
                        Curtido por <strong>{props.curtido}</strong> e <strong>outras {props.curtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )  
} 