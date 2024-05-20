<section class="oferta">
    <div class="card">
        <img src="/main/oferta/stolowka.svg" alt="stołówka">
        <h3>Stołówka</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, laudantium!</p>
    </div>
    <div class="card">
        <img src="/main/oferta/stolowka.svg" alt="Monitoring">
        <h3>Monitoring</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, laudantium!</p>
    </div>
    <div class="card">
        <img src="/main/oferta/playground.svg" alt="pzabaw">
        <h3>Plac Zabaw</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, laudantium!</p>
    </div>
    <div class="card">
        <img src="/main/oferta/wifi.svg" alt="wifi">
        <h3>Wifi</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, laudantium!</p>
    </div>
</section>
<style>
    .oferta{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 40px auto;
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