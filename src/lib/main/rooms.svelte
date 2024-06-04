<script>
    let scroll = 0
    let pspeed = 0.4
</script>

<svelte:window bind:scrollY={scroll} />

<section id="rooms">
    <div class="image" style:transform={`translate3d(0 , ${scroll * pspeed}px, 0)`}></div>
    <p>Nasze przytulne pokoje czekają na Ciebie!</p>
    <button><a href="/pokoje">Sprawdź Teraz</a></button>
</section>

<style>
    #rooms {
        height: 80vh;
        overflow: hidden;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 40px;
        color: white;
        text-align: center;
    }
    #rooms .image{
        background-image: url(/main/DOMKI-MAIN.webp);
        background-repeat: no-repeat;
        background-size: cover;
        filter: brightness(45%) blur(4px);
        position: absolute;
        z-index: -5;
        width: 100vw;
        height: 100vh;
        top: -60%;
    }
    #rooms button{
        padding: 10px 20px;
        border: 2px solid red;
        border-radius: 10px;
        background-color: rgba(255, 115, 115, 0.3);
        color: white;
        font-size: 20px;
        font-weight: bold;
        text-transform: uppercase;
        transition: all 250ms ease-out;
        margin-top: 30px;
    }
    #rooms button:hover{
        background-color: rgba(255, 0,0, 1);
        color: black;
        scale: 1.02;
    }
</style>