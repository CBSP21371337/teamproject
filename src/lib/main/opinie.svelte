<script>
    let opinie = [
        {logo: '/main/opinie/google-icon.svg', opinia: '9/10', nazwa: 'Google'},
        {logo: '/main/opinie/google-icon.svg', opinia: '9/10', nazwa: 'Booking'},
        {logo: '/main/opinie/google-icon.svg', opinia: '9/10', nazwa: 'Chuj wie co'}
    ]
    let opinieu = [
        {avatar: '/main/00000.png', nick: 'Stasiu Stonoga', opinia: 'Bardzo fajny ośrodek, nielimitowana dostawa srajtaśmy do kibla...', ocena: 4.5},
        {avatar: '/main/00000.png', nick: 'Stasiu Stonoga', opinia: 'Bardzo fajny ośrodek, nielimitowana dostawa srajtaśmy do kibla...', ocena: 4.5},
        {avatar: '/main/00000.png', nick: 'Stasiu Stonoga', opinia: 'Bardzo fajny ośrodek, nielimitowana dostawa srajtaśmy do kibla...', ocena: 4.5},
        {avatar: '/main/00000.png', nick: 'Stasiu Stonoga', opinia: 'Bardzo fajny ośrodek, nielimitowana dostawa srajtaśmy do kibla...', ocena: 4.5},
        {avatar: '/main/00000.png', nick: 'Stasiu Stonoga', opinia: 'Bardzo fajny ośrodek, nielimitowana dostawa srajtaśmy do kibla...', ocena: 4.5},
        {avatar: '/main/00000.png', nick: 'Stasiu Stonoga', opinia: 'Bardzo fajny ośrodek, nielimitowana dostawa srajtaśmy do kibla...', ocena: 4.5},
        {avatar: '/main/00000.png', nick: 'Stasiu Stonoga', opinia: 'Bardzo fajny ośrodek, nielimitowana dostawa srajtaśmy do kibla...', ocena: 4.5},
    ]
    let scroll = 0
    let pspeed = 0.1
</script>/


<div class="odkryj">
    <h2>Odkryj nasz ośrodek</h2>
    <p>Witamy w naszym ośrodku wczasowym! Gdzie malownicze otoczenie i bogata oferta atrakcji sprawią, że każdy pobyt stanie się niezapomnianą przygodą.</p>
</div>

<div class="opinie">
    {#each opinie as {logo, opinia,nazwa}, i}
    <div class="card">
        <img src={logo} alt={nazwa}>
        <p>{opinia}</p>
    </div>
    {/each}
</div>

<svelte:window bind:scrollY={scroll} />

<section class="container">
    <div class="opinieu" style:transform={`translate3d(${scroll * pspeed}px, 0,  0)`}>
        {#each opinieu as {avatar, nick, opinia}, i}
            <section class="opinia">
                <div class="avatar"><img src={avatar} alt="opinia użytkownika"><h3>{nick}</h3></div>
                <h4>{opinia}</h4>
            </section>
        {/each}
    </div>
</section>

<style>
    .container{
        position: relative;
        margin-top: 50px;
        height: 150px;
    }
    .opinieu{
        display: flex;
        flex-direction: row;
        overflow: hidden;
        flex-wrap: nowrap;
        position: absolute;
        left: -12%;
        z-index: -5;
    }
    .opinia{
        margin: 0 20px;
        width: 300px;
        height: 100px;
        height: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: rgba(8, 199, 199, 0.1);
        border-radius: 30px;
        padding: 10px;
        border: 1px solid rgba(13, 255, 255, 0.2);
    }
    .opinia h4{
        text-align: left;
        margin-left: 60px;
        color: rgb(190, 190, 190);
    }
    .avatar img{
        height: 50px;
        width: 50px;
        border-radius: 50%;
        margin-right:10px;
        border: 2px solid white;
    }
    .avatar{
        display: flex;
        flex-direction: row;
        justify-content:flex-start;
        align-items: center;
    }
    .avatar h3{
        font-size: 20px;
        font-weight: bold;
    }
    *{
        color: white;
        text-align: center;
    }
    .odkryj h2{
        text-transform: capitalize;
        font-size: 35px;
    }
    .odkryj p{
        color: gray;
        font-size: 15px;
    }
    .odkryj{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 40%;
        margin: 50px auto;
    }
    .opinie{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: 40%;
        margin: 5px auto;
    }
    .card{
        background: linear-gradient(45deg, rgba(221, 221, 221, 0.1) 40%, rgba(255, 255, 255, 0.3));
        height: 160px;
        width: 140px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 20px 10px;
        transition: all 250ms ease-out;
        user-select: none;
    }
    .card:hover{
        scale: 1.05;
    }
    .card img{
        width: 80px;
        height: 80px;
    }
    .card p{
        font-weight: bold;
        color: gold;
    }
</style>