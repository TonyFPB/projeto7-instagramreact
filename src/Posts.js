import Post from "./Post";

export default function Posts() {
    const posts = [
        {
            nomeUser: 'meowed',
            imgUser: 'assets/img/meowed.svg',
            imgPost: 'assets/img/gato-telefone.svg',
            imgCurtido: 'assets/img/respondeai.svg',
            curtido: 'respondeai',
            curtidas: '101523'
        },
        {
            nomeUser: 'latiu',
            imgUser: 'assets/img/barked.svg',
            imgPost: 'assets/img/dog.svg',
            imgCurtido:'assets/img/adorable_animals.svg',
            curtido: 'adorável_animais',
            curtidas: '99159'
        }
    ]
    return (
        <div class="posts">
            {posts.map((p) => <Post imgUser={p.imgUser} nameUser={p.nomeUser} imgCont={p.imgPost} imgCurtido ={p.imgCurtido} curtido = {p.curtido} curtidas = {p.curtidas}></Post>)}
        </div>
    )
}