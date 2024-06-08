<script>
    let scroll = 0
    let pspeed = 0.4
</script>

<svelte:window bind:scrollY={scroll} />

<header>
<div class="image" style:transform={`translate3d(0, ${scroll * pspeed}px, 0)`}></div>
<div class="description">
    <h1>Dla grup</h1>
    <p>Oferta dla grup zorganizowanych</p>
</div>
</header>

<style>
header {
    height: 100vh;
    overflow: hidden;
    box-shadow: inset 0 -5px 20px #000;
}
header .image {
    background-image: url('/dlagrup/kompleks.jpg');
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
</style>