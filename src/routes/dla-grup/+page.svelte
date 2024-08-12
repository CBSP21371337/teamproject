<script>
    import Header from "$lib/components/header.svelte";
    let MainHeader = {
        image: '/dlagrup/kompleks.jpg',
        title: 'Dla grup',
        subtitle: 'Oferta dla grup zorganizowanych',
    }
    import Gallery from '$lib/components/gallery.svelte';
    let images = [
        '/dlagrup/2-7.jpg',
        '/dlagrup/17-4.jpg',
        '/dlagrup/20-3.jpg',
        '/dlagrup/8-7.jpg',
        '/dlagrup/10-6.jpg',
        '/dlagrup/6-7.jpg',
        '/dlagrup/1-7.jpg',
    ];
</script>

<Header {MainHeader} />

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
<Gallery {images} />
<style>
    #dlagrup {
        height: 100%;
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
</style>