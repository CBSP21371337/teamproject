<script>
    export let MainHeader = {
        image: {},
        title: '',
        subtitle: '',
    };
    let scroll = 0
    let pspeed = 0.4
</script>

<svelte:window bind:scrollY={scroll} />

<div class="Hmainsg">
    <div class="Hbgmage" style="background-image: url({MainHeader.image});" style:transform={`translate3d(0, ${scroll * pspeed}px, 0)`}></div>
    <div class="Hmaindesc">
        <h1>{MainHeader.title}</h1>
        <h2>{MainHeader.subtitle}</h2>
    </div>
    <a href="#bot" class="scrldwn">
        <svg width="35" height="35" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.23983 0.579891L11.9998 8.33989L19.7598 0.579891C19.945 0.394727 20.1648 0.247848 20.4067 0.147638C20.6487 0.0474284 20.908 -0.00415039 21.1698 -0.00415039C21.4317 -0.00415039 21.691 0.0474284 21.9329 0.147638C22.1748 0.247848 22.3947 0.394727 22.5798 0.579891C22.765 0.765055 22.9119 0.984877 23.0121 1.2268C23.1123 1.46873 23.1639 1.72803 23.1639 1.98989C23.1639 2.25175 23.1123 2.51105 23.0121 2.75298C22.9119 2.99491 22.765 3.21473 22.5798 3.39989L13.3998 12.5799C13.2148 12.7653 12.995 12.9124 12.7531 13.0128C12.5111 13.1131 12.2518 13.1648 11.9898 13.1648C11.7279 13.1648 11.4685 13.1131 11.2266 13.0128C10.9846 12.9124 10.7649 12.7653 10.5798 12.5799L1.39983 3.39989C1.21442 3.21486 1.06733 2.99509 0.966964 2.75314C0.866601 2.51119 0.814941 2.25183 0.814941 1.98989C0.814941 1.72795 0.866601 1.46859 0.966964 1.22664C1.06733 0.984696 1.21442 0.764919 1.39983 0.579891C2.17983 -0.180109 3.45983 -0.200109 4.23983 0.579891Z" fill="white"/></svg>
    </a>
</div>

<style>
    .scrldwn {
        width: 35px;
        height: 35px;
        position: absolute;
        bottom: 80px;
        left: 50%;
        translate: -50%;
    }
    .Hmainsg {
        height: 100vh;
        overflow: hidden;
        box-shadow: inset 0 -5px 20px #000;
    }
    .Hmainsg .Hbgmage {
        background-size: cover;
        background-position: center;
        filter: brightness(0.8);
        z-index: -5;
        height: 100vh;
        position: relative;
    }
    .Hmainsg .Hmaindesc {
        width: 100vw;
        position: absolute;
        top: 50%;
        text-align: center;
        transform: translateY(-50%);
        background-color: rgba(0, 0, 0, 0.3);
        padding: 20px;
        z-index: 0;
    }
    .Hmainsg h1 {
        font-size: 350%;
        color: white;
        text-transform: uppercase;
        margin: 0;
    }
    .Hmainsg h2 {
        font-size: 120%;
        color: rgb(215, 215, 215);
    }
    @media (max-width: 445px) {
        .Hmainsg h1 {
            font-size: 1em;
        }
        .Hmainsg h2 {
            font-size: 0.5em;
        }
    }
</style>