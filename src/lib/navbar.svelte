<script>
    import { onMount, onDestroy } from 'svelte';

    let isVisible = true;
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
      if (currentScrollTop > lastScrollTop) {
        isVisible = false;
      } else if (currentScrollTop <= 0) {
        isVisible = true;
      } else {
        isVisible = false;
      }

      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    onMount(() => {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', handleScroll);
      }
    });

    onDestroy(() => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    });

    import {fly, scale} from 'svelte/transition'
    let drawer = false;
    function Drawer() {
        if (drawer == false) {
            drawer = true;
        }else{
            drawer = false;
        }
    }
    function closeDrawer() {
        if (drawer == true) {
            drawer = false;
        }
    }

    let navlinks = [
        {nazwa: 'Strona Główna', link: '/'},
        {nazwa: 'Kontakt', link: '/#form'},
        {nazwa: 'FAQ', link: '/faq'},
        {nazwa: 'Pokoje', link: '/pokoje'},
        {nazwa: 'Regulamin', link: '/regulamin'},
        {nazwa: 'Księga Gości', link: '/ksiega-gosci'},
        {nazwa: 'Dla Grup', link: '/dla-grup'}
    ]

    let socialicons = [
        {slogo: '/navbar/booking.svg', slink: 'https://www.booking.com/hotel/pl/osrodek-wczasowy-kala.pl.html', sopis: 'Booking'},
        {slogo: '/navbar/google.svg', slink: 'https://g.co/kgs/dL4CMUa', sopis: 'Google'},
        {slogo: '/navbar/facebook.svg', slink: 'https://www.facebook.com/kalapobierowo', sopis: 'Facebook'},
        {slogo: '/navbar/instagram.svg', slink: 'https://www.instagram.com/ow.kala', sopis: 'Instagram'}
    ]
    let side = [
        {simg: '/navbar/bookingrating.png', slink: 'https://www.booking.com/hotel/pl/osrodek-wczasowy-kala', salt: 'Booking rating'},
        {simg: '/navbar/facebook.png', slink: 'https://www.facebook.com/kalapobierowo', salt: 'Facebook'}
    ]
</script>

<!-- <div class="burger-menu"> SAVE
    {#if drawer == true}
    <button on:click={Drawer}><img src="/important/burger-menu.svg" alt="menu open"></button>
    {/if}
    {#if drawer == false}
    <button on:click={Drawer}><img src="/important/burger-menu-closed.svg" alt="menu open"></button>
    {/if}
</div> -->
<div class="navbarside {isVisible ? 'visible' : 'hidden'}">
    <div class="nav-item"></div>
    {#each side as {slink, simg, salt}}
    <div class="separator"></div>
    <div class="nav-item"><a href={slink} target="_blank"><img src={simg} alt={salt}></a></div>
    {/each}
</div>
<div class="navbartop">
<a href="/"><img src="/important/kala.png" alt="kala logo"></a>
<div class="top-menu"></div>
</div>
<button class="outclick_check" on:click={closeDrawer}></button>
<div class="burger-menu">
    <button on:click={Drawer}>
        <svg width="70" height="70" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" class="burger-svg">
            <g id="burger-menu">
                {#if drawer == false}
                <g id="burger-closed" transition:scale={{duration: 400, opacity: 0, start: 0.4}}>
                    <rect id="burger-menu-line burger-menu-lines" x="20" y="15" width="80" height="10" rx="5" fill="#00C2FF"/>
                    <rect id="burger-menu-line_2 burger-menu-lines" x="20" y="40" width="80" height="10" rx="5" fill="#00C2FF"/>
                    <rect id="burger-menu-line_3 burger-menu-lines" x="20" y="65" width="80" height="10" rx="5" fill="#00C2FF"/>
                </g>
                {:else if drawer == true}
                <g id="burger-open" transition:scale={{duration: 400, opacity: 0, start: 0.4}}>
                    <rect id="burger-menu-line_4 burger-menu-lines" x="28.1802" y="69.7485" width="80" height="10" rx="5" transform="rotate(-45 28.1802 69.7485)" fill="#00C2FF"/>
                    <rect id="burger-menu-line_5 burger-menu-lines" x="84.7485" y="76.8198" width="80" height="10" rx="5" transform="rotate(-135 84.7485 76.8198)" fill="#00C2FF"/>
                </g>
                {/if}
            </g>
        </svg>
    </button>
</div>

<nav>
    {#if drawer == true}
    <div class="drawer" in:fly={{delay: 50, duration: 300, x: 200}} out:fly={{delay: 50, duration: 200, x: 200}}>
        <ul in:fly={{delay: 200, duration: 250, x: 200}} out:fly={{delay: 0, duration: 200, x: 200}}>
            {#each navlinks as {nazwa, link}, i}
            <li><a href={link}><div>{nazwa}</div></a></li>
            {/each}
        </ul>
        <hr>
        <h3 style="padding-bottom: 15px;">Odwiedź nas na:</h3>
        <div class="social-container-navbar">
            {#each socialicons as {slogo, slink, sopis}}
            <div><a href={slink}><div><img src={slogo} alt={sopis}></div></a></div>
            {/each}
        </div>
    </div>
    {/if}
</nav> 

<style>
    .nav-item img {
        width: 70px;
        height: 70px;
    }
    .separator {
        width: 100%;
        height: 2px;
        background-color: #808080;
    }
    .nav-item {
        padding: 15px;
        color: white;
        width: 100px;
        height: 100px;
        text-align: center;
    }
    .navbarside {
        background-color: rgba(0, 0, 0, 0.3);
        width: 100px;
        height: 100%;
        right: 0;
        display: flex;
        flex-direction: column;
        position: fixed;
        bottom: 0;
        z-index: 1;
        transition: transform 0.3s;
    }
    .hidden {
      transform: translateX(100%);
    }
    .visible {
      transform: translateX(0);
    }
    .navbartop a {
        width: 250px;
        position: fixed;
        float: none;
        display: block;
        text-align: left;
        z-index: 2;
        margin-top: 13px;
        margin-left: 15px;
    }
    .top-menu {
        background-color: black;
        opacity: 0.3;
        width: 100%;
        height: 100px;
        display: flex;
        flex-direction: row;
        position: fixed;
        top: 0;
        z-index: 1;
    }
    .social-container-navbar {
        display: flex;
        gap: 20px;
        justify-content: center;
    }
    hr{
        border-top: 1px solid black;
        margin: 25px 0;
    }
    .outclick_check{
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        cursor: default;
    }
    nav{
        position: fixed;
        right: 0;
        z-index: 3;
    }
    @media screen and (max-width: 500px) {
        nav {
        width: 100%;
        height: 100%;
        }
    }
    .drawer{
        background-color: #fff;
        width: 100%;
        display: flex;
        flex-direction: column;
        height: 100vh;
        padding: 50px;
        padding-top: 100px;
    }
    ul{
        list-style: none;
    }
    a{
        font-size: 20px;
        color: black;
        font-weight: 500;
        text-transform: uppercase;
        text-align: left;
        transition: all 150ms ease-out;
    }
    li{
        margin: 10px 0;
        transition: all 250ms ease-out;
        transform-origin: center;
    }
    li:after {
        display:block;
        content: '';
        border-bottom: solid 3px rgb(0, 217, 255);  
        transform: scaleX(0);  
        transition: transform 100ms ease-in-out;
        transform-origin: 0% 50%;
    }
    li:hover:after { transform: scaleX(0.8); }
    li:hover a{
        color: rgb(0, 217, 255);
    }
    li:hover{
        scale: 1.05;
    }
    ul{
        display: flex;
        flex-direction: column;
        align-items: left;
    }
    .burger-menu{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        margin: 15px 0;
        position: fixed;
        top: 0;
        right: 0.8%;
        z-index: 50;
    }
    /* .burger-menu img{
        width: 60px;
        height: 60px;
        transition: all 150ms ease-out;
    }
    .burger-menu img:hover{
        scale: 1.2;
    } */
    nav{
        overflow: hidden;
    }
    .burger-svg{
        transition: all 250ms ease-out;
    }
    .burger-svg:hover{
        scale: 1.2;
    }
    #burger-closed, #burger-open{
        transform-origin: 50% 50%;
    }
</style>