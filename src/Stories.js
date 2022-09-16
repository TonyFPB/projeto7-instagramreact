import Story from "./Story"


export default function Stories() {
    const perfils = [
        { fotoStory: 'assets/img/9gag.svg', nomeStory: '9gag' },
        { fotoStory: 'assets/img/meowed.svg', nomeStory: 'meowed' },
        { fotoStory: 'assets/img/barked.svg', nomeStory: 'barked' },
        { fotoStory: 'assets/img/nathanwpylestrangeplanet.svg', nomeStory: 'nathanwpylestrangeplanet' },
        { fotoStory: 'assets/img/wawawicomics.svg', nomeStory: 'wawawicomics' },
        { fotoStory: 'assets/img/respondeai.svg', nomeStory: 'respondeai' },
        { fotoStory: 'assets/img/filomoderna.svg', nomeStory: 'filomoderna' },
        { fotoStory: 'assets/img/memeriagourmet.svg', nomeStory: 'memeriagourmet' },
    ]
    return (
        <ul class="stories">
            {perfils.map((obj) => <Story imagem={obj.fotoStory} usuario={obj.nomeStory}></Story>)}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle" role="img" class="md hydrated" aria-label="círculo para frente chevron"></ion-icon>
            </div>
        </ul>
    )
}