<script>
    let scroll = 0
    let pspeed = 0.4
</script>

<svelte:window bind:scrollY={scroll} />

<div class="header">
    <section>
        <img src="/main/DOMKI-MAIN.webp" alt="pokoje" style:transform={`translate3d(0 , ${scroll * pspeed}px, 0)`}>
        <div class='napisy'></div>
        <p>Nasze przytulne pokoje czekają na Ciebie!</p>
        <button>Sprawdź Teraz</button>
    </section>
</div>

<style>
    .header{
        width: 100%;
        height: 90vh;
        overflow: hidden;
        margin: 50px auto;
    }
    section{
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    img{
        position: absolute;
        z-index: -5;
        width: 100%;
        height: 140%;
        filter: brightness(50%);
        top: -100%;
    }
    p{
        font-size: 40px;
        color: white;
    }
    button{
        padding: 10px 20px;
        border: 2px solid red;
        border-radius: 10px;
        background-color: rgba(255, 115, 115, 0.3);
        color: white;
        font-size: 20px;
        font-weight: bold;
        text-transform: uppercase;
        transition: all 250ms ease-out;
        margin-top: 20px;
    }
    button:hover{
        background-color: rgba(255, 0,0, 1);
        color: black;
        scale: 1.02;
    }
</style>