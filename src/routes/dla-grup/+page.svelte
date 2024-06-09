<script>
    let scroll = 0
    let pspeed = 0.4
    // do dodania bigger picture
</script>

<svelte:window bind:scrollY={scroll} />

<header>
<div class="image" style:transform={`translate3d(0, ${scroll * pspeed}px, 0)`}></div>
<div class="description">
    <h1>Dla grup</h1>
    <p>Oferta dla grup zorganizowanych</p>
</div>
</header>

<section id="dlagrup">
    <div class="description">
        <p><b>Nasz ośrodek jest przystosowany do przyjmowania grup zorganizowanych takich jak:</b></p>
        <ol>
            <li>zielone szkoły,</li>
            <li>kolonie i obozy dla dzieci, młodzieży, sportowe, integracyjne itp.,</li>
            <li>biwaki,</li>
            <li>turnusy dla rencistów i emerytów.</li>
        </ol>
        <p><b>W sąsiedztwie Ośrodka:</b></p>
        <ol>
            <li>Kompleks sportowo-rekreacyjny,</li>
            <li>Boisko wielofunkcyjne,koszykówka, siatkówka nawierzchnia tartan o wymiarach 28mx15m, oświetlone,</li>
            <li>Rozbieg do skoku wzwyż i skoku o tyczce o wymiarach 100x60m, oświetlone,</li>
            <li>Boisko do piłki nożnej (trawa syntetyczna Profoot Final M60),</li>
            <li>Bieżnia lekkoatletyczna 390m, tartanowa dwu torowa,</li>
            <li>5 oświetlanych kortów trawa syntetyczna (WIMBLEDON 20),</li>
            <li>Skatepark 30m X 25m</li>
        </ol>
        <p><b>Hala sportowa</b></p>
        <ol>
            <li>Nawierzchnia parkietowa o wymiarach 35m x 15m.</li>
        </ol>
    </div>
</section>

<style>
    #dlagrup {
        height: 100vh;
        line-height: 31px;
        margin-top: 2em !important;
        padding-right: 5px;
        padding-left: 5px;
        margin: auto;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
    #dlagrup .description p {
        font-size: 1.2em;
        color: #8f8f8f;
        font-weight: 400;
    }
    #dlagrup .description ol {
        list-style-type: disc;
        margin-block-start: 0.5em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;
        unicode-bidi: isolate;
        font-size: 1.1em;
    }
    @media (max-width: 1380px) {
        #dlagrup {
            width: 100%;
        }
    }
    @media (min-width: 992px) {
        #dlagrup {
            width: 970px;
        }
    }
    @media (min-width: 768px) {
        #dlagrup {
            width: 750px;
        }
    }
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