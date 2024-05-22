<script>
    let scroll = 0
    let pspeed = 0.7
</script>

<svelte:window bind:scrollY={scroll} />

<div class="header">
    <img src="/main/00000.png" alt="header" style:transform={`translate3d(0 , ${scroll * pspeed}px, 0)`}>
</div>
<style>
    .header{
        width: 100%;
        height: 90vh;
        overflow: hidden;
        position: relative;
        z-index: -5;
    }
    img{
        position: absolute;
        bottom: 0;
        z-index: -5;
    }
</style>