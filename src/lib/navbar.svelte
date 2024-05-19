<script>
    let drawer = false;
    function Drawer() {
        if (drawer == false) {
            drawer = true;
        }else{
            drawer = false;
        }
    }
    import {fly} from 'svelte/transition'
</script>

<div class="burger-menu">
    {#if drawer == true}
    <button on:click={Drawer}><img src="/important/burger-menu.svg" alt="menu open"></button>
    {/if}
    {#if drawer == false}
    <button on:click={Drawer}><img src="/important/burger-menu-closed.svg" alt="menu open"></button>
    {/if}
</div>

<nav>
    {#if drawer == true}
    <div class="drawer" in:fly={{delay: 50, duration: 300, x: 200}} out:fly={{delay: 50, duration: 200, x: 200}}>
        <ul in:fly={{delay: 200, duration: 250, x: 200}} out:fly={{delay: 0, duration: 200, x: 200}}>
            <li><a href="/">Strona Główna</a></li>
            <li><a href="/">O Nas</a></li>
            <li><a href="/">Kontakt</a></li>
            <li><a href="/">FAQ</a></li>
            <li><a href="/">Pokoje</a></li>
            <li><a href="/">Regulamin</a></li>
            <li><a href="/">Dla Grup</a></li>
        </ul>
    </div>
    {/if}
</nav>

<style>
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
    li:hover:after { transform: scaleX(0.6); }
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
    nav{
        position: fixed;
        right: 0;
        width: 20%;
    }
    .burger-menu{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        margin: 20px 0;
        position: fixed;
        top: 0;
        right: 2%;
        z-index: 9999;
    }
    .burger-menu img{
        width: 60px;
        height: 60px;
        transition: all 150ms ease-out;
    }
    .burger-menu img:hover{
        scale: 1.2;
    }
    nav{
        overflow: hidden;
    }
</style>