<script>
    let ofera = [
        {src: '/main/oferta/stolowka.svg', name: "Stołówka", alt: 'stołówka', desc: 'To jest krótki opis do danej oferty'},
        {src: '/main/oferta/stolowka.svg', name: "Monitoring", alt: 'monitoring', desc: 'To jest krótki opis do danej oferty'},
        {src: '/main/oferta/playground.svg', name: "Plac Zabaw", alt: 'pzabaw', desc: 'To jest krótki opis do danej oferty'},
        {src: '/main/oferta/wifi.svg', name: "Wifi", alt: 'wifi', desc: 'To jest krótki opis do danej oferty'}
    ]
</script>


<section class="oferta">
    <h1>Oferta Ośrodka</h1>
    <div class="container">
        {#each ofera as {src, name, alt, desc}, i}
        <div class="card">
            <img src={src} alt={alt}>
            <h3>{name}</h3>
            <p>{desc}</p>
        </div>
        {/each}
    </div>
</section>
<style>
    h1{
        font-size: 35px;
        text-transform: capitalize;
        color: white;
        margin: 40px auto;
    }
    .container{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .oferta{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        user-select: none;
    }
    .card{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 10%;
        border: 2px solid rgb(122, 121, 121);
        margin: 0 30px;
        padding: 20px;
        transition: all 250ms ease;
    }
    .card:hover{
        scale: 1.05;
    }
    .card img{
        width: 64px;
        height: 64px;
    }
    .card h3{
        color: white;
        text-transform: uppercase;
        font-weight: 600;
        text-align: center;
    }
    .card p{
        color: rgb(161, 161, 161);
        text-align: center;
    }
</style>