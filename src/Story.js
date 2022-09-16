export default function Story(props) {
    return (
        <li class="story">
            <div class="imagem">
                <img src={props.imagem}/>
            </div>
            <div class="usuario">
                {props.usuario}
            </div>
        </li>
        )
}