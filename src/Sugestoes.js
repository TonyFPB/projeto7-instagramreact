import Sugestao from "./Sugestao";

export default function Sugetoes() {
    const listSuges = [
        { nome: 'bad.vibes', imagem: 'assets/img/bad.vibes.memes.svg' },
        { nome: 'chibirdart', imagem: 'assets/img/chibirdart.svg' },
        { nome: 'razoesparaacreditar', imagem: 'assets/img/razoesparaacreditar.svg' }, 
        { nome: 'adorable_animals', imagem: 'assets/img/adorable_animals.svg' }, 
        { nome: 'smallcutecats', imagem: 'assets/img/smallcutecats.svg' }
    ]



    return (
        <ul class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {listSuges.map((s) => <Sugestao nomesuges = {s.nome} imgsuges = {s.imagem}></Sugestao>)}
        </ul>
    )
}