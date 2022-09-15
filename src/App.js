import NavBar from "./NavBar";
import Corpo from "./Corpo";



export default function App() {
    return (
        <main class="main">
            <NavBar></NavBar>
            <Corpo></Corpo>
            <div class="fundo-mobile">
                <ion-icon name="home" role="img" class="md hydrated" aria-label="casa"></ion-icon>
                <ion-icon name="search-outline" role="img" class="md hydrated" aria-label="esboço de pesquisa"></ion-icon>
                <ion-icon name="add-circle-outline" role="img" class="md hydrated" aria-label="adicionar contorno do círculo"></ion-icon>
                <ion-icon name="heart-outline" role="img" class="md hydrated" aria-label="contorno do coração"></ion-icon>
                <ion-icon name="person-outline" role="img" class="md hydrated" aria-label="esboço de pessoa"></ion-icon>
            </div>
        </main>
    )
}