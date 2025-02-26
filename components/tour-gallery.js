

    document.addEventListener("DOMContentLoaded", () => {
        class TourGallery extends HTMLElement {
            constructor() {
                super();
                this.innerHTML = `
                    <div class="gallery">
                        <div class="gallery-item" data-location="Playa El Tunco">
                            <img src="https://www.tripsavvy.com/thmb/m0z-rpUzm6wKLUCJOSJ4fV3nEls=/3865x2576/filters:fill(auto,1)/hotels-and-palm-trees--on-el-tunco-beach-565787131-5931d8d25f9b589eb4bb78ed.jpg" alt="Playa de El Salvador">
                        </div>
                        <div class="gallery-item" data-location="Volcán de Izalco">
                            <img src="https://th.bing.com/th/id/R.fa702b395c90a748efcf1c2a809b177e?rik=i3M6zAujcMCxBg&riu=http%3a%2f%2f3.bp.blogspot.com%2f_Rf0X5DAYr_I%2fSxPJjQ1Y3KI%2fAAAAAAAAAI8%2f4_nQ4bVeqik%2fs1600%2fizalco.jpg&ehk=sTF2WlyfP7845welw2R%2bDGdfU4%2fgJkUeOPDEPvIteq4%3d&risl=&pid=ImgRaw&r=0 alt="Montañas de El Salvador">
                        </div>
                        <div class="gallery-item" data-location="San Salvador">
                            <img src="https://latinarepublic.com/wp-content/uploads/2023/07/San-Salvador-Capital.-Image-Credit-El-Salvador-Travel.-Courtesy-Ministerio-de-Turismo-El-Salvador.jpeg" alt="Ciudad de El Salvador">
                        </div>
                    </div>
 <div class="gallery">
                        <div class="gallery-item" data-location="Conchagua">
                            <img src="https://astelus.com/wp-content/viajes/el-volcan-de-conchagua-el-guardian-del-golfo-1152x759.jpg">
                        </div>
                        <div class="gallery-item" data-location="Alegría">
                            <img src="https://1.bp.blogspot.com/-cfo1cr3wCCA/U3L9xBdYDtI/AAAAAAAAChI/9kjSakkMzwQ/s1600/364142605_84c647f739_o.jpg">
                        </div>
                        <div class="gallery-item" data-location="Puerta del Diablo">
                            <img src="https://elsalvadoresbello.com/wp-content/uploads/2024/01/puerta-del-diablo-123.jpeg">
                        </div>
                    </div>

                    
                `;
            }
        }
        customElements.define("tour-gallery", TourGallery);
    });
