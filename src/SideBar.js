import Sugetoes from "./Sugestoes";
import Usuario from "./Usuario";


export default function SideBar(){
    const dadosUser = {nome: 'catana', imagem:'assets/img/catanacomics.svg'}
    return(
        <div class ="sidebar">
            <Usuario nomeUsuarioPrincipal = {dadosUser.nome} imgUsuarioPrincipal = {dadosUser.imagem}/>
            <Sugetoes/>
            <div class="links">
                Sobre • Ajuda • • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>
            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}