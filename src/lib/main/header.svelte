<script>
    let scroll = 0
    let pspeed = 0.4
</script>

<svelte:window bind:scrollY={scroll} />

<div class="header">
    <img src="/main/osr.png" alt="header" style:transform={`translate3d(0 , ${scroll * pspeed}px, 0)`}>
</div>
<style>
    .header{
        width: 100%;
        height: 100vh;
        overflow: hidden;
        position: relative;
        z-index: -5;
        box-shadow: inset 0 -5px 20px #000;
    }
    img{
        width: 100%;
        height: 90vh;
        position: absolute;
        bottom: 0;
        z-index: -5;
    }
</style>