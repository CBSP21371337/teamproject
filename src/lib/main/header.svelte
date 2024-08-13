<script>
	import Reservation from "$lib/components/reservation.svelte";
    let scroll = 0
    let pspeed = 0.4
</script>

<svelte:window bind:scrollY={scroll} />

<section id="header">
    <div class="image" style:transform={`translate3d(0, ${scroll * pspeed}px, 0)`}></div>
    <!-- <Reservation /> -->
</section>

<style>
    #header {
        height: 100vh;
        overflow: hidden;
        box-shadow: inset 0 -5px 20px #000;
    }
    #header .image {
        background-image: url('/main/header/osr.webp');
        background-size: cover;
        background-position: center;
        filter: brightness(0.8);
        z-index: 1;
        height: 100vh;
        position: relative;
    }
</style>