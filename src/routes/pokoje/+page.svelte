<script>
    let pokoje_def = [
        {nazwa: 'Apartament 2-Poziomowy', img: '/pokoje/pokojemain/apartament2poziomowy.webp', link: '/apartament2poz', alt: 'Apartament 2 poziomowy'},
        {nazwa: 'Pokój 2 osobowy z tarasem', img: '/pokoje/pokojemain/pokoj2osobowytaras.webp', link: '/pokoj2os', alt: 'Pokój 2 osobowy z tarasem'},
        {nazwa: 'Domki Drewniane', img: '/pokoje/pokojemain/domkidrewniane.webp', link: '/domkidrewniane', alt: 'Domki drewniane'},
        {nazwa: 'Domki Letniskowe', img: '/pokoje/pokojemain/domkiletniskowe.webp', link: '/domkiletniskowe', alt: 'Domki letniskowe'},
        {nazwa: 'Dom Rodzinny', img: '/pokoje/pokojemain/domrodzinny.webp', link: '/domrodzinny', alt: 'Dom rodzinny'},
        {nazwa: 'Pokój studio 2+2', img: '/pokoje/pokojemain/pokojstudio22.webp', link: '/pokojstudio', alt: 'Pokój typu studio 2+2 pawilon'},
        {nazwa: 'Pokój 2-3 osobowy', img: '/pokoje/pokojemain/pokoj34osobowy.webp', link: '/pokoj3os', alt: 'Pokój 2-3 osobowy pawilon'},
        {nazwa: 'Pokój 3-4 osobowy', img: '/pokoje/pokojemain/pokoj34osobowy.webp', link: '/pokoj4os', alt: 'Pokój 3-4 osobowy pawilon'},
    ]
    let linklsna = '/pokoj4os'
    let scroll = 0
    let pspeed = 0.7
</script>

<svelte:window bind:scrollY={scroll} />

<header>
    <div class="image" style:transform={`translate3d(0, ${scroll * pspeed}px, 0)`}></div>
    <div class="description">
        <h1>Pokoje</h1>
        <p>Sprawdź nasz szeroki wybór pokoi!</p>
    </div>
</header>
<div class="roomsdescription">
    <p>
        Witamy serdecznie i zapraszamy do spędzenia wolnego czasu w Ośrodku Wczasowym „KALA”, położonym w centrum Pobierowa (gmina Rewal) w odległości ok 200m od pięknej piaszczystej plaży, otoczony zielenią i drzewami.
        W bezpośrednim sąsiedztwie z Kompleksem sportowo-rekreacyjnym, oraz z halą sportową.
    </p>
    <br>
    <b>Do dyspozycji naszych Gości:</b>
    <ul>
        <li><span class="important">NOWOŚĆ!</span> <b>Apartamenty 2 poziomowe</b></li>
        <li><span class="important">NOWOŚĆ!</span> <b>Komfortowy pokój 2 osobowy z tarasem</b></li>
        <li>rodzinny dom do 9 osób</li>
        <li>komfortowe pokoje 2,3,4 osobowe, studia 2+2 osobowe z aneksem kuchennym w budynku wczasowym</li>
        <li>komfortowe domki w całości z drewna dla 6 osób</li>
        <li>domki letniskowe do 4 osób,</li>
        <li>zadaszone miejsce do grillowania,</li>
        <li>stoły do ping - ponga,</li>
        <li>plac zabaw dla dzieci</li>
        <li>bawialnia dla dzieci</li>
        <li>stołówka - serwująca smaczne, domowe posiłki,</li>
        <li>kawiarnia</li>
        <li>recepcja</li>
        <li>ogrodzony, monitorowany parking na terenie Ośrodka Wczasowego (płatny VII-VIII),</li>
        <li>punkt medyczny,</li>
        <li>wi-fi,</li>
        <li>obiekt monitorowany.</li>
    </ul>
    <p>
    </p>
    <p class="questions">
        Ośrodek Wczasowy „KALA” ul. Moniuszki 5 72-346 Pobierowo<br>
        <b>Zapytania oraz rezerwacje przyjmujemy od 8:00 do 22:00 pod numerem telefonu 602-469-714</b>
    </p>
</div>
<div class="pokoje_container">
    {#each pokoje_def as {nazwa, img, link, alt}}
        <a href={link}>
            <div class="room">
                <img src={img} alt={alt}>
                <h2><p>{nazwa}</p></h2>
            </div>
        </a>
    {/each}
</div>

<hr>
<br>
<h1 style="text-align: center; font-size: 40px;">Poza obiektem</h1>

<div class="roomout room2">
    <a href={linklsna}>
    <img src='/pokoje/pokojemain/apartament2poziomowy.webp' alt='pokojspec'>
    <h2>Apartament Lesna Dreams</h2>
    </a>
</div>

<style>
    .important {
        color: red;
        font-weight: bold;
    }
    .questions {
        text-align: center;
        font-size: 1em !important;
        margin-top: 10px;
    }
    .roomsdescription {
        line-height: 31px;
        margin-top: 2em !important;
        padding-right: 5px;
        padding-left: 5px;
        margin: auto;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
    .roomsdescription p {
        font-size: 1.2em;
        color: #8f8f8f;
        font-weight: 400;
    }
    .roomsdescription ul {
        list-style-type: disc;
        margin-block-start: 0.5em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;
        unicode-bidi: isolate;
        font-size: 1.1em;
    }
    .roomout *, .roomout {
        transition: all 350ms ease-out;
    }
    .roomout h2 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 25px;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
        width: 50%;
        text-align: center;
        transition: all 150ms ease-out;
    }
    .roomout img {
        filter: brightness(80%);
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .roomout:hover img {
        transform: scale(1.05);
        filter: brightness(50%);
    }
    .roomout:hover {
        box-shadow: 0 0 10px white;
        cursor: pointer;
    }
    .roomout:hover h2 {
        font-size: 26px;
    }
    .roomout {
        border-radius: 20px;
        height: 500px;
        width: 50%;
        position: relative;
        overflow: hidden;
        border: 1px solid white;
    }
    header {
        height: 100vh;
        overflow: hidden;
        box-shadow: inset 0 -5px 20px #000;
    }
    header .image {
        background-image: url('/pokoje/pokojemain/apartament2poziomowy.webp');
        background-size: cover;
        background-position: center;
        filter: brightness(0.8);
        z-index: -5;
        height: 100vh;
        position: relative;
    }
    header .description {
        width: 100vw;
        position: absolute;
        top: 50%;
        text-align: center;
        transform: translateY(-50%);
        background-color: rgba(0, 0, 0, 0.3);
        padding: 20px;
        z-index: 0;
    }
    header h1 {
        font-size: 60px;
        color: white;
        text-transform: uppercase;
        margin: 0;
    }
    header p {
        font-size: 30px;
        color: rgb(215, 215, 215);
    }
    .room2 {
        margin: 100px auto;
    }
    .pokoje_container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        width: 80%;
        max-width: 1200px;
        margin: 100px auto;
    }
    .room {
        height: 300px;
        width: 100%;
        position: relative;
        overflow: hidden;
        border: 1px solid white;
        border-radius: 20px;
    }
    .room *, .room {
        transition: all 350ms ease-out;
    }
    .room h2 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 25px;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
        width: 100%;
        text-align: center;
        transition: all 150ms ease-out;
    }
    .room img {
        filter: brightness(80%);
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .room:hover img {
        transform: scale(1.05);
        filter: brightness(50%);
    }
    .room:hover {
        box-shadow: 0 0 10px white;
        cursor: pointer;
    }
    .room:hover h2 {
        font-size: 26px;
    }
    @media (max-width: 1380px) {
    .roomsdescription {
        width: 100%;
        }
    }
    @media (min-width: 992px) {
        .roomsdescription {
        width: 970px;
        }
    }
    @media (min-width: 768px) {
        .roomsdescription {
            width: 750px;
        }
    }
    @media (max-width: 768px) {
        header h1 {
            font-size: 40px;
        }
        header p {
            font-size: 20px;
        }
        .pokoje_container {
            grid-template-columns: 1fr;
            width: 80%;
        }
        .room {
            height: 300px;
        }
        .room h2 {
            font-size: 20px;
        }
    }
    @media (max-width: 480px) {
        header h1 {
            font-size: 30px;
        }
        header p {
            font-size: 18px;
        }
        .room {
            height: 150px;
        }
        .room h2 {
            font-size: 18px;
        }
    }
    @media (max-width: 768px) {
        .roomout {
            height: 400px;
            width: 80%;
            position: relative;
            overflow: hidden;
            border: 1px solid white;
            border-radius: 20px;
        }
    }
</style>