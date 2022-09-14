export default function NavBar() {
    return (
        <div class="navbar">
            <div class="container">
                <div class="logo">
                    <ion-icon name="logo-instagram" role="img" class="md hydrated" aria-label="logo instagram"></ion-icon>
                    <div class="separador"></div>
                    <img src="assets/img/logo.png" />
                </div>

                <div class="logo-mobile">
                    <ion-icon name="logo-instagram" role="img" class="md hydrated" aria-label="logo instagram"></ion-icon>
                </div>

                <div class="instagram-mobile">
                    <img src="assets/img/logo.png" />
                </div>

                <div class="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>

                <div class="icones">
                    <ion-icon name="paper-plane-outline" role="img" class="md hydrated" aria-label="contorno de avião de papel"></ion-icon>
                    <ion-icon name="compass-outline" role="img" class="md hydrated" aria-label="contorno da bússola"></ion-icon>
                    <ion-icon name="heart-outline" role="img" class="md hydrated" aria-label="contorno do coração"></ion-icon>
                    <ion-icon name="person-outline" role="img" class="md hydrated" aria-label="esboço de pessoa"></ion-icon>
                </div>

                <div class="icones-mobile">
                    <ion-icon name="paper-plane-outline" role="img" class="md hydrated" aria-label="contorno de avião de papel"></ion-icon>
                </div>
            </div>
        </div>
    )
}

