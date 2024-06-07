<script>
    let pokoje_def = [
        {nazwa: 'Apartament 2-Poziomowy', img: '/pokoje/pokojemain/apartament2poziomowy.webp', link: '/example', alt: 'Apartament 2 poziomowy'},
        {nazwa: 'Pokój 2 osobowy z tarasem', img: '/pokoje/pokojemain/pokoj2osobowytaras.webp', link: '/example', alt: 'Pokój 2 osobowy z tarasem'},
        {nazwa: 'Domki Drewniane', img: '/pokoje/pokojemain/domkidrewniane.webp', link: '/example', alt: 'Domki drewniane'},
        {nazwa: 'Domki Letniskowe', img: '/pokoje/pokojemain/domkiletniskowe.webp', link: '/example', alt: 'Domki letniskowe'},
        {nazwa: 'Dom Rodzinny', img: '/pokoje/pokojemain/domrodzinny.webp', link: '/example', alt: 'Dom rodzinny'},
        {nazwa: 'Pokój studio 2+2', img: '/pokoje/pokojemain/pokojstudio22.webp', link: '/example', alt: 'Pokój typu studio 2+2 pawilon'},
        {nazwa: 'Pokój 2-3 osobowy', img: '/pokoje/pokojemain/pokoj34osobowy.webp', link: '/example', alt: 'Pokój 2-3 osobowy pawilon'},
        {nazwa: 'Pokój 3-4 osobowy', img: '/pokoje/pokojemain/pokoj34osobowy.webp', link: '/example', alt: 'Pokój 3-4 osobowy pawilon'},
    ]
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

<div class="pokoje_container">
    {#each pokoje_def as {nazwa, img, link, alt}}
        <div class="room">
            <img src={img} alt={alt}>
            <h2><a href={link}>{nazwa}</a></h2>
        </div>
    {/each}
</div>

<hr>

<div class="roomout room2">
    <img src='/pokoje/pokojemain/apartament2poziomowy.webp' alt='pokojspec'>
    <h2><a href='/'>Apartament Lesna Dreams</a></h2>
</div>

<style>
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
    @media (max-width: 768px) {
        header h1 {
            font-size: 40px;
        }
        header p {
            font-size: 20px;
        }
        .pokoje_container {
            grid-template-columns: 1fr;
            width: 90%;
        }
        .room {
            height: 200px;
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
</style>
