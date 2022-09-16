export default function Sugestao(props) {
    // nomeSuges
    // imgSuges
    return (
        <li class="sugestao">
            <div class="usuario">
                <img src={props.imgsuges} alt = 'Imagem de perfil'/>
                    <div class="texto">
                        <div class="nome">{props.nomesuges}</div>
                        <div class="razao">Segue você</div>
                    </div>
            </div>

            <div class="seguir">Seguir</div>
        </li>
    )
}