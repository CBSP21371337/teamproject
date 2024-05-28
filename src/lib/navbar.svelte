<script>
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
        {nazwa: 'O nas', link: '/'},
        {nazwa: 'Kontakt', link: '/'},
        {nazwa: 'FAQ', link: '/faq'},
        {nazwa: 'Pokoje', link: '/'},
        {nazwa: 'Regulamin', link: '/'},
        {nazwa: 'Dla Grup', link: '/'}
    ]
</script>

<!-- <div class="burger-menu">
    {#if drawer == true}
    <button on:click={Drawer}><img src="/important/burger-menu.svg" alt="menu open"></button>
    {/if}
    {#if drawer == false}
    <button on:click={Drawer}><img src="/important/burger-menu-closed.svg" alt="menu open"></button>
    {/if}
</div> -->

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
    </div>
    {/if}
</nav>
    

<style>
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
        width: 20%;
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
        margin: 20px 0;
        position: fixed;
        top: 0;
        right: 1%;
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