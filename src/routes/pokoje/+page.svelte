<script>

    let pokoje_def = [
        {nazwa: 'Apartament 2-Poziomowy', img: '/pokoje/APARTAMENT-2POZIOMOWY-MAIN.webp', link: '/example'},
        {nazwa: 'Domki Drewniane', img: '/pokoje/APARTAMENT-2POZIOMOWY-MAIN.webp', link: '/example'},
        {nazwa: 'Domki Letniskowe', img: '/pokoje/APARTAMENT-2POZIOMOWY-MAIN.webp', link: '/example'},
        {nazwa: 'Dom Rodzinny', img: '/pokoje/APARTAMENT-2POZIOMOWY-MAIN.webp', link: '/example'},
        {nazwa: 'Pokój 2 osobowy z tarasem', img: '/pokoje/APARTAMENT-2POZIOMOWY-MAIN.webp', link: '/example'},
        {nazwa: 'Pokój 2-3 osobowy', img: '/pokoje/APARTAMENT-2POZIOMOWY-MAIN.webp', link: '/example'},
        {nazwa: 'Pokój 3-4 osobowy', img: '/pokoje/APARTAMENT-2POZIOMOWY-MAIN.webp', link: '/example'},
        {nazwa: 'Pokój studio 2+2', img: '/pokoje/APARTAMENT-2POZIOMOWY-MAIN.webp', link: '/example'},
    ]
    let scroll = 0
    let pspeed = 0.7
</script>

<svelte:window bind:scrollY={scroll} />

<header>
    <img src="/pokoje/APARTAMENT-2POZIOMOWY-MAIN.webp" alt="jebany header" style:transform={`translate3d(0 , ${scroll * pspeed}px, 0)`}>
    <div>
        <h1>Pokoje</h1>
        <p>Sprawdź nasz szerki kurwa wybór</p>
    </div>
</header>


<div class="pokoje_container">
    {#each pokoje_def as {nazwa, img, link}, i}
        <div class="room">
            <img src={img} alt='pokoj{i}'>
            <h2><a href={link}>{nazwa}</a></h2>
        </div>
    {/each}
</div>

<hr>

<div class="room room2">
    <img src='/pokoje/APARTAMENT-2POZIOMOWY-MAIN.webp' alt='pokojspec'>
    <h2><a href='/'>Apartament Lesna Dreams</a></h2>
</div>

<style>
    header{
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        position: relative;
        z-index: -9;
    }
    header img{
        width: 120%;
        position: absolute;
        bottom: 0;
        filter: brightness(80%);
        z-index: -10;
    }
    header div{
        width: 100vw;
        position: absolute;
        top: 50%;
        text-align: center;
        transform: translateY(-50%);
        background-color: rgba(0,0,0,0.3);
        padding: 20px;
        z-index: -9;
    }
    header h1{
        font-size: 60px;
        color: white;
        text-transform: uppercase;
        margin: 0;
    }
    header p{
        font-size: 30px;
        color: rgb(215,215,215);
    }
    .room2{ 
        margin: 100px auto;
    }
    .pokoje_container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        width: 60%;
        margin: 100px auto;
    }
    .room{
        height: 300px;
        width: 500px;
        position: relative;
        overflow: hidden;
        border: 1px solid white;
    }
    .room *, .room{
        transition: all 350ms ease-out;
    }
    .room h2{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 25px;
        text-shadow: 2px 2px 5px rgba(0, 0, 0,0.3);
        width: 100% ;
        text-align: center;
        transition: all 150ms ease-out;
    }
    .room img{
        filter: brightness(80%);
    }
    .room:hover img{
        scale: 1.05;
        filter: brightness(50%);
    }
    .room:hover{
        box-shadow: 0 0 10px white;
        cursor: pointer;
    }
    .room:hover h2{
        font-size: 26px;
    }
</style>