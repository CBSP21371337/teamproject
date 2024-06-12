<script>
    import { onMount, onDestroy} from 'svelte';
    import {fade} from 'svelte/transition'

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
        {nazwa: 'Jadalnia', link: '/jadalnia'},
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
        {simg: '/navbar/bookingrating.webp', slink: 'https://www.booking.com/hotel/pl/osrodek-wczasowy-kala', salt: 'Booking rating'},
        {simg: '/navbar/facebook.webp', slink: 'https://www.facebook.com/kalapobierowo', salt: 'Facebook'}
    ]
</script>

<div class="navbarside {isVisible ? 'visiblex' : 'hiddenx'}">
    <div class="nav-itemdm"></div>
    {#each side as {slink, simg, salt}}
    <div class="separator"></div>
    <div class="nav-item"><a href={slink} target="_blank"><img src={simg} alt={salt}></a></div>
    {/each}
</div>
<div class="navbartop">
<a class="logo" href="/"><img src="/important/kala.webp" alt="kala logo"></a>
<div class="phone"><a href="tel:+48602469714"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="64" stroke-dashoffset="64" d="M8 3C8.5 3 10.5 7.5 10.5 8C10.5 9 9 10 8.5 11C8 12 9 13 10 14C10.3943 14.3943 12 16 13 15.5C14 15 15 13.5 16 13.5C16.5 13.5 21 15.5 21 16C21 18 19.5 19.5 18 20C16.5 20.5 15.5 20.5 13.5 20C11.5 19.5 10 19 7.5 16.5C5 14 4.5 12.5 4 10.5C3.5 8.5 3.5 7.5 4 6C4.5 4.5 6 3 8 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"/></path><path stroke-dasharray="4" stroke-dashoffset="4" d="M14 7.04404C14.6608 7.34734 15.2571 7.76718 15.7624 8.27723M16.956 10C16.6606 9.35636 16.2546 8.77401 15.7624 8.27723" opacity="0"><set attributeName="opacity" begin="0.7s" to="1"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="4;8"/></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M20.748 9C20.3874 7.59926 19.6571 6.347 18.6672 5.3535M15 3.25203C16.4105 3.61507 17.6704 4.3531 18.6672 5.3535" opacity="0"><set attributeName="opacity" begin="1s" to="1"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="10;20"/></path></g></svg><p>(+48) 602-469-714</p></a></div>
<div class="top-menu {isVisible ? 'visibley' : 'hiddeny'}"></div>
</div>
<div class="burger-menu" >
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
        <h3 class="visitus">Odwiedź nas na:</h3>
        <div class="social-container-navbar">
            {#each socialicons as {slogo, slink, sopis}}
            <div><a href={slink}><div><img src={slogo} alt={sopis}></div></a></div>
            {/each}
        </div>
    </div>
    <div class="navbarout" transition:fade={{duration: 200}}></div>
    {/if}
</nav>
<button class="outclick_check" on:click={closeDrawer} style="display: {drawer ? 'block' : 'none'};" transition:fade={{duration: 200}}></button>

<style>
    .navbarout {
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: -5;
    }
    .visitus {
        padding-bottom: 15px;
        color: #2C389E;
        font-family: cursive;
    }
    .nav-item img {
        width: 70px;
        height: 70px;
    }
    .separator {
        width: 100%;
        height: 2px;
        background-color: #808080;
    }
    .nav-itemdm {
        padding: 15px;
        color: white;
        width: 100px;
        height: 100px;
        text-align: center;
    }
    .nav-item {
        padding: 15px;
        color: white;
        width: 100px;
        height: 100px;
        text-align: center;
    }
    .nav-item:hover {
        background-color: rgba(0, 0, 0, 0.6);
        transition: 300ms ease;
    }
    .navbarside {
        background-color: rgba(0, 0, 0, 0.3);
        width: 100px;
        height: 100%;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        position: fixed;
        z-index: 4;
        transition: transform 0.3s;
    }
    @media screen and (max-width: 768px) {
        .navbarside {
            width: 0;
            overflow: hidden;
            max-height: 50px;
        }
    }
    .hiddenx {
        transform: translateX(100%);
    }
    .visiblex {
        transform: translateX(0);
    }
    .hiddeny {
        transform: translateY(0);
    }
    .visibley {
        transform: translateY(-100%);
    }
    .navbartop .logo {
        width: 250px;
        position: fixed;
        float: none;
        display: flex;
        text-align: left;
        z-index: 5;
        margin-top: 13px;
        margin-left: 15px;
    }
    @media (max-width: 440px) {
        .navbartop .logo {
            width: 200px;
            top: 8px;
        }
    }
    @media (max-width: 450px) {
        .navbartop .phone {
            visibility: hidden;
        }
    }
    @media (max-width: 700px) {
        .navbartop .phone {
            border: 2px solid white;
            border-radius: 10px;
            position: fixed;
            text-align: center;
            display: flex;
            right: 0;
            top: 25px;
            margin-right: 110px;
            height: 50px;
            width: 50px;
            z-index: 5;
            padding: 10px;
            justify-content: center;
        }
        .navbartop .phone a {
            width: 0;
            margin-right: 30px;
        }
        .navbartop .phone p {
            visibility: hidden;
            display: flex;
        }
        .navbartop .phone svg {
            font-weight: 700;
            color: white;
            font-size: 28px;
            
        }
    }
    @media (min-width: 700px){
        .navbartop .phone {
            visibility: visible;
            border: 2px solid white;
            border-radius: 10px;
            position: fixed;
            text-align: center;
            display: flex;
            right: 0;
            top: 25px;
            margin-right: 170px;
            height: 50px;
            width: 240px;
            z-index: 5;
            padding: 8px;
            justify-content: center;
        }
        .navbartop .phone a {
            font-weight: 700;
            color: white;
            display: flex;
        }
        .navbartop .phone svg {
            font-size: 28px;
            margin-top: 3px;
            margin-right: 4px;
        }
    }
    @media (max-width: 350px) {
        .navbartop a {
            width: 65%;
            margin-top: 20px;
        }
        .navbartop img {
            display: flex;
        align-items: center;
        justify-content: center;
        }
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
        z-index: 4;
        transition: transform 0.3s;
    }
    .social-container-navbar {
        display: flex;
        gap: 20px;
        justify-content: center;
    }
    hr {
        border-top: 1px solid black;
        margin: 25px 0;
    }
    .outclick_check {
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        cursor: default;
        z-index: 4;
        background-color: rgba(0, 0, 0, 0.5);
        transition: transform 0.3s;
    }
    nav {
        position: fixed;
        right: 0;
        z-index: 5;
    }
    .drawer {
        background-color: #fff;
        width: 100%;
        display: flex;
        flex-direction: column;
        height: 100vh;
        padding: 50px;
        padding-top: 100px;
    }
    ul {
        list-style: none;
    }
    a {
        font-size: 20px;
        color: black;
        font-weight: 500;
        text-transform: uppercase;
        text-align: left;
        transition: all 150ms ease-out;
    }
    li {
        margin: 10px 0;
        transition: all 250ms ease-out;
        transform-origin: center;
        z-index: 200;
    }
    li:after {
        display: block;
        content: '';
        border-bottom: solid 3px rgb(0, 217, 255);  
        transform: scaleX(0);  
        transition: transform 100ms ease-in-out;
        transform-origin: 0% 50%;
    }
    li:hover:after { 
        transform: scaleX(0.8); 
    }
    li:hover a {
        color: rgb(0, 217, 255);
    }
    li:hover {
        scale: 1.05;
    }
    ul {
        display: flex;
        flex-direction: column;
        align-items: left;
    }
    .burger-menu {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        margin: 15px 0;
        position: fixed;
        top: 0;
        right: 14px;
        z-index: 999;
    }
    nav {
        overflow: hidden;
    }
    .burger-svg {
        transition: all 250ms ease-out;
    }
    .burger-svg:hover {
        scale: 1.2;
    }
    #burger-closed, #burger-open {
        transform-origin: 50% 50%;
    }
</style>