<script>
    import { onDestroy, onMount } from 'svelte';

    let opinieu = [
        // Lista recenzji
        { avatar: '/main/ptak.webp', nick: 'Natalia A', opinia: 'Bardzo miłe i przyjaźne miejsce, wszędzie blisko, dobre warunki...', ocena: '★★★★★' },
        { avatar: '/main/ptak.webp', nick: 'Anna T', opinia: 'Bardzo ładna miejscówka, ukwiecona, czysciótka, właściciele przesympatyczni, jedzonko bardzo smaczne, urozmaicone, śniadania...', ocena: '★★★★★' },
        { avatar: '/main/ptak.webp', nick: 'Piotr S', opinia: 'Bardzo dobre warunki oraz mili właściciele, posiłki w postaci bufetu szwedzkiego...', ocena: '★★★★☆' },
        { avatar: '/main/ptak.webp', nick: 'Daniel S', opinia: 'Ośrodek ma bardzo miłą obsługę, plac zabaw dla dzieci i z ośrodka wszędzie jest blisko! Cieszy nas widok nowoczesnej recepcji...', ocena: '★★★★★' },
        { avatar: '/main/ptak.webp', nick: 'Magda M', opinia: 'Pyszne jedzenia , przemiła obsługa, doskonała organizacja przez właścicieli, wygodne i czyste pokoje z łazienkami TV i WI- FI..', ocena: '★★★★☆' },
        { avatar: '/main/ptak.webp', nick: 'Piotr R', opinia: 'Przemiła atmosfera, bardzo przystępna cena. Muszę pochwalić bogaty wybór jedzenia...', ocena: '★★★★☆' },
        { avatar: '/main/ptak.webp', nick: 'Jakub J', opinia: 'Polecam ośrodek z oceną mocną oceną 4+. Miła obsługa, czyste pokoje, zadbany obiekt. Nie ma się do czego przyczepić...', ocena: '★★★★★' },
        { avatar: '/main/ptak.webp', nick: 'Natalia A', opinia: 'Bardzo miłe i przyjaźne miejsce, wszędzie blisko, dobre warunki...', ocena: '★★★★★' },
        { avatar: '/main/ptak.webp', nick: 'Wicikowa', opinia: 'Ośrodek bardzo komfortowy z domowym jedzeniem. Gospodarze bardzo mili i pomocni. Pokoje czyste, teren ośrodka zadbany...', ocena: '★★★★☆' },
        { avatar: '/main/ptak.webp', nick: 'Wicikowa', opinia: 'Ośrodek bardzo komfortowy z domowym jedzeniem. Gospodarze bardzo mili i pomocni. Pokoje czyste, teren ośrodka zadbany...', ocena: '★★★★☆' },
        { avatar: '/main/ptak.webp', nick: 'Wicikowa', opinia: 'Ośrodek bardzo komfortowy z domowym jedzeniem. Gospodarze bardzo mili i pomocni. Pokoje czyste, teren ośrodka zadbany...', ocena: '★★★★☆' },
        { avatar: '/main/ptak.webp', nick: 'Wicikowa', opinia: 'Ośrodek bardzo komfortowy z domowym jedzeniem. Gospodarze bardzo mili i pomocni. Pokoje czyste, teren ośrodka zadbany...', ocena: '★★★★☆' },
        { avatar: '/main/ptak.webp', nick: 'Wicikowa', opinia: 'Ośrodek bardzo komfortowy z domowym jedzeniem. Gospodarze bardzo mili i pomocni. Pokoje czyste, teren ośrodka zadbany...', ocena: '★★★★☆' }
    ];

    let lastScrollTop = 0;

    // Funkcja do przewijania recenzji w lewo
    function scrollLeft() {
        const reviewsContainer = document.querySelector('.reviews');
        // @ts-ignore
        reviewsContainer.scrollBy({ left: -300, behavior: 'smooth' });
    }

    // Funkcja do przewijania recenzji w prawo
    function scrollRight() {
        const reviewsContainer = document.querySelector('.reviews');
        // @ts-ignore
        reviewsContainer.scrollBy({ left: 300, behavior: 'smooth' });
    }

    // Funkcja do obsługi scrolla strony
    function handleScroll() {
        const scrollTop = (typeof window !== 'undefined' && window.pageYOffset) || (typeof document !== 'undefined' && document.documentElement.scrollTop);

        // @ts-ignore
        if (scrollTop > lastScrollTop) {
            scrollRight();
        } else {
            scrollLeft();
        }

        // @ts-ignore
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }

    // Obsługa zdarzenia przewijania na urządzeniach dotykowych
    // @ts-ignore
    function handleSwipe(event) {
        const touch = event.touches[0];
        const startX = touch.clientX;
        const startY = touch.clientY;

        // @ts-ignore
        function onTouchMove(moveEvent) {
            const moveTouch = moveEvent.touches[0];
            const deltaX = startX - moveTouch.clientX;
            const deltaY = startY - moveTouch.clientY;

            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                if (deltaX > 0) {
                    scrollRight();
                } else {
                    scrollLeft();
                }
            }

            document.removeEventListener('touchmove', onTouchMove);
            document.removeEventListener('touchend', onTouchEnd);
        }

        function onTouchEnd() {
            document.removeEventListener('touchmove', onTouchMove);
        }

        document.addEventListener('touchmove', onTouchMove);
        document.addEventListener('touchend', onTouchEnd);
    }

    onMount(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
            document.addEventListener('touchstart', handleSwipe);
        }
    });

    // Usunięcie nasłuchiwania zdarzeń po odmontowaniu komponentu
    onDestroy(() => {
        if (typeof window !== 'undefined') {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('touchstart', handleSwipe);
        }
    });
</script>

<section id="feedback">
    <button class="scroll-btn left" on:click={scrollLeft}>❮</button>
    <div class="reviews">
        {#each opinieu as { avatar, nick, opinia, ocena }}
            <div class="text">
                <div class="avatar">
                    <img src={avatar} alt="opinia użytkownika">
                    <h3>{nick}</h3>
                    <div class="rating">{ocena}</div>
                </div>
                <h4>{opinia}</h4>
            </div>
        {/each}
    </div>
    <button class="scroll-btn right" on:click={scrollRight}>❯</button>
</section>


<style>
    #feedback {
        z-index: 1;
        position: relative;
        height: 220px;
        color: black;
        text-align: center;
        overflow: hidden;
        margin-top: 50px;
        margin-bottom: 50px;
    }

    #feedback .reviews {
        display: flex;
        flex-direction: row;
        overflow-x: scroll;
        scrollbar-width: none; /* Ukryj scrollbar dla Firefox */
        scroll-behavior: smooth; /* Płynne przewijanie */
    }

    #feedback .reviews::-webkit-scrollbar {
        display: none; /* Ukryj scrollbar dla WebKit */
    }

    #feedback .text {
        margin: 0 20px;
        width: 300px;
        height: 220px;
        flex: 0 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        background-color: rgb(235, 235, 235);
        border-radius: 30px;
        padding: 10px;
        box-shadow: 8px 5px 5px rgb(29, 29, 29);
    }

    #feedback .text h4 {
        text-align: left;
        margin-left: 60px;
        color: rgb(95, 95, 95);
    }

    #feedback .avatar {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    #feedback .avatar img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        margin-right: 10px;
        border: 2px solid white;
    }

    #feedback .avatar h3 {
        font-size: 20px;
        font-weight: bold;
    }

    #feedback .rating {
        font-size: 20px;
        color: rgb(216, 199, 101);
        padding-top: 15px;
        margin-left: 10px;
    }

    #feedback .scroll-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: rgba(0, 0, 0, 0.5);
        border: none;
        color: white;
        font-size: 24px;
        cursor: pointer;
        z-index: 10;
        padding: 10px;
    }

    #feedback .scroll-btn.left {
        left: 10px;
    }

    #feedback .scroll-btn.right {
        right: 10px;
    }

    #feedback .scroll-btn:hover {
        background-color: rgba(0, 0, 0, 0.7);
    }
</style>

<!-- <script>
    let scroll = 0
    let pspeed = 0.6
    let opinieu = [
        {avatar: '/main/ptak.webp', nick: 'Natalia A', opinia: 'Bardzo miłe i przyjaźne miejsce, wszędzie blisko, dobre warunki...', ocena: '★★★★★'},
        {avatar: '/main/ptak.webp', nick: 'Anna T', opinia: 'Bardzo ładna miejscówka, ukwiecona, czysciótka, właściciele przesympatyczni, jedzonko bardzo smaczne, urozmaicone, śniadania, kolacje szwecki stół...', ocena: '★★★★★'},
        {avatar: '/main/ptak.webp', nick: 'Piotr S', opinia: 'Bardzo dobre warunki oraz mili właściciele, posiłki w postaci bufetu szwedzkiego...', ocena: '★★★★☆'},
        {avatar: '/main/ptak.webp', nick: 'Daniel S', opinia: 'Ośrodek ma bardzo miłą obsługę, plac zabaw dla dzieci i z ośrodka wszędzie jest blisko! Cieszy nas widok nowoczesnej recepcji i rozwijających się domków...', ocena: '★★★★★'},
        {avatar: '/main/ptak.webp', nick: 'Magda M', opinia: 'Pyszne jedzenia , przemiła obsługa, doskonała organizacja przez właścicieli, wygodne i czyste pokoje z łazienkami TV i WI- FI, oraz piękna pogoda...', ocena: '★★★★☆'},
        {avatar: '/main/ptak.webp', nick: 'Piotr R', opinia: 'Przemiła atmosfera, bardzo przystępna cena. Muszę pochwalić bogaty wybór jedzenia...', ocena: '★★★★☆'},
        {avatar: '/main/ptak.webp', nick: 'Jakub J', opinia: 'Polecam ośrodek z oceną mocną oceną 4+. Miła obsługa, czyste pokoje, zadbany obiekt. Nie ma się do czego przyczepić...', ocena: '★★★★★'},
        {avatar: '/main/ptak.webp', nick: 'Natalia A', opinia: 'Bardzo miłe i przyjaźne miejsce, wszędzie blisko, dobre warunki...', ocena: '★★★★★'},
        {avatar: '/main/ptak.webp', nick: 'Wicikowa', opinia: 'Ośrodek bardzo komfortowy z domowym jedzeniem. Gospodarze bardzo mili i pomocni. Pokoje czyste, teren ośrodka zadbany...', ocena: '★★★★☆'},
        {avatar: '/main/ptak.webp', nick: 'Wicikowa', opinia: 'Ośrodek bardzo komfortowy z domowym jedzeniem. Gospodarze bardzo mili i pomocni. Pokoje czyste, teren ośrodka zadbany...', ocena: '★★★★☆'},
        {avatar: '/main/ptak.webp', nick: 'Wicikowa', opinia: 'Ośrodek bardzo komfortowy z domowym jedzeniem. Gospodarze bardzo mili i pomocni. Pokoje czyste, teren ośrodka zadbany...', ocena: '★★★★☆'},
        {avatar: '/main/ptak.webp', nick: 'Wicikowa', opinia: 'Ośrodek bardzo komfortowy z domowym jedzeniem. Gospodarze bardzo mili i pomocni. Pokoje czyste, teren ośrodka zadbany...', ocena: '★★★★☆'},
        {avatar: '/main/ptak.webp', nick: 'Wicikowa', opinia: 'Ośrodek bardzo komfortowy z domowym jedzeniem. Gospodarze bardzo mili i pomocni. Pokoje czyste, teren ośrodka zadbany...', ocena: '★★★★☆'},
    ]
</script>

<svelte:window bind:scrollY={scroll} />

<section id="feedback">
    <div class="reviews" style:transform={`translate3d(${scroll * pspeed}px, 0,  0)`}>
        {#each opinieu as {avatar, nick, opinia, ocena}}
            <div class="text">
                <div class="avatar"><img src={avatar} alt="opinia użytkownika"><h3>{nick}</h3><div class="rating">{ocena}</div></div>
                <h4>{opinia}</h4>
            </div>
        {/each}
    </div>
</section>

<style>
    #feedback {
        z-index: 1;
        position: relative;
        height: 220px;
        color: black;
        text-align: center;
        overflow: hidden;
        margin-top: 30px;
        margin-bottom: 20px;
    }
    #feedback .reviews {
        display: flex;
        flex-direction: row;
        overflow: hidden;
        flex-wrap: nowrap;
        position: absolute;
        left: -75%;
    }
    @media (max-width: 1000px) {
        #feedback .reviews {
            left: -175%;
        }
    }
    @media (min-width: 2000px) {
        #feedback .reviews {
            left: -45%;
        }
    }
    #feedback .text {
        margin: 0 20px;
        width: 300px;
        height: 220px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        background-color: rgb(235, 235, 235);
        border-radius: 30px;
        padding: 10px;
        box-shadow: 8px 5px 5px rgb(29, 29, 29);
    }
    #feedback .text h4{
        text-align: left;
        margin-left: 60px;
        color: rgb(95, 95, 95);
    }
    #feedback .avatar{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
    #feedback .avatar img{
        height: 50px;
        width: 50px;
        border-radius: 50%;
        margin-right: 10px;
        border: 2px solid white;
    }
    #feedback .avatar h3{
        font-size: 20px;
        font-weight: bold;
    }
    #feedback .rating {
        font-size: 20px;
        color: rgb(216, 199, 101);
        padding-top: 15px;
        margin-left: 10px;
    }
</style> -->