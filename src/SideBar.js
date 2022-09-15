import Sugetoes from "./Sugestoes";
import Usuario from "./Usuario";


export default function SideBar(){
    return(
        <div class ="sidebar">
            <Usuario/>
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