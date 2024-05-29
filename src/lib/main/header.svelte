<script>
    let scroll = 0
    let pspeed = 0.4
</script>

<svelte:window bind:scrollY={scroll} />

<div class="header">
    <img src="/main/osr.png" alt="header" style:transform={`translate3d(0 , ${scroll * pspeed}px, 0)`}>
    <i class="scrlbtn" style="">
        <a href="owkala.pl" class="width: 50px; height: 50px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="white" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496"/></svg>
        </a>
    </i>
</div>

<style>
    .scrlbtn {
        width: 50px;
        height: 50px;
        position: absolute;
        top: 85%;
        left: 50%;
        transform: translate(-50%,-50%);
        transition: all 250ms ease-in-out;
        font-size: 3rem;
        position: absolute;
        height: 2px;
    }
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
        position: absolute;
        bottom: 0;
        z-index: -5;
    }
</style>