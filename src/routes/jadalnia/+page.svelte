<script>
    import Gallery from './gallery.svelte';
    let scroll = 0
    let pspeed = 0.4
</script>

<svelte:window bind:scrollY={scroll} />

<header>
<div class="image" style:transform={`translate3d(0, ${scroll * pspeed}px, 0)`}></div>
<div class="description">
    <h1>Jadalnia</h1>
    <p>Pobyt w Ośrodku Wczasowym KALA to rozkosz dla podniebienia!</p>
</div>
</header>
<section>
    <h2>Po całym dniu kąpieli morskich zapraszamy do skorzystania z naszej tradycyjnej domowej kuchni polskiej, <br>gdzie skosztują Państwo naszych najlepszych specjałów.</h2>
    <Gallery />
</section>

<style>
header {
    height: 100vh;
    overflow: hidden;
    box-shadow: inset 0 -5px 20px #000;
}
header .image {
    background-image: url('/jadalnia/stolowka.webp');
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
@media (max-width: 445px) {
    .description h1 {
        font-size: 2em;
    }
    .description p {
        font-size: 1em;
    }
}
section {
    margin-top: 50px;
    margin-bottom: 50px;
}
section h2 {
    text-align: center;
    font-weight: 500;
    font-size: 20px;
}
</style>