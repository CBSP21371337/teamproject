<script>
    let opinie = [
        {link: 'https://www.google.com/travel/search?ts=CAEaIAoAEhwSFAoHCOgPEAUYHBIHCOgPEAUYHRgBMgQIABAA&qs=MiZDaGdJc0p5M2hmV3E2XzZDQVJvTEwyY3ZNWFJvZHpFMWRtNFFBUTgCQhwiGgoWQ0lITTBvZ0tFSUNBZ0lDVXFkX3JNZxAB&utm_campaign=sharing&utm_medium=link_btn&utm_source=htls', logo: '/main/opinie/google-icon.svg', opinia: '4.3/5', nazwa: 'Google'},
        {link: 'https://www.booking.com/Share-eKEqpJ', logo: '/main/booking.png', opinia: '8.6/10', nazwa: 'Booking'},
        {link: '', logo: '/main/guestbook.PNG', opinia: '9/10', nazwa: 'Księga Gości'}
    ]
    let opinieu = [
        {avatar: '/main/00000.png', nick: 'Natalia A', opinia: 'Bardzo miłe i przyjaźne miejsce, wszędzie blisko, dobre warunki...', ocena: '★★★★★'},
        {avatar: '/main/00000.png', nick: 'Anna T', opinia: 'Bardzo ładna miejscówka, ukwiecona, czysciótka, właściciele przesympatyczni, jedzonko bardzo smaczne, urozmaicone, śniadania, kolacje szwecki stół...', ocena: '★★★★★'},
        {avatar: '/main/00000.png', nick: 'Piotr S', opinia: 'Bardzo dobre warunki oraz mili właściciele, posiłki w postaci bufetu szwedzkiego...', ocena: '★★★★☆'},
        {avatar: '/main/00000.png', nick: 'Daniel S', opinia: 'Ośrodek ma bardzo miłą obsługę, plac zabaw dla dzieci i z ośrodka wszędzie jest blisko! Cieszy nas widok nowoczesnej recepcji i rozwijających się domków...', ocena: '★★★★★'},
        {avatar: '/main/00000.png', nick: 'Magda M', opinia: 'Pyszne jedzenia , przemiła obsługa, doskonała organizacja przez właścicieli, wygodne i czyste pokoje z łazienkami TV i WI- FI, oraz piękna pogoda...', ocena: '★★★★☆'},
        {avatar: '/main/00000.png', nick: 'Piotr R', opinia: 'Przemiła atmosfera, bardzo przystępna cena. Muszę pochwalić bogaty wybór jedzenia...', ocena: '★★★★☆'},
        {avatar: '/main/00000.png', nick: 'Jakub J', opinia: 'Polecam ośrodek z oceną mocną oceną 4+. Miła obsługa, czyste pokoje, zadbany obiekt. Nie ma się do czego przyczepić...', ocena: '★★★★★'},
        {avatar: '/main/00000.png', nick: 'Natalia A', opinia: 'Bardzo miłe i przyjaźne miejsce, wszędzie blisko, dobre warunki...', ocena: '★★★★★'},
        {avatar: '/main/00000.png', nick: 'Wicikowa', opinia: 'Ośrodek bardzo komfortowy z domowym jedzeniem. Gospodarze bardzo mili i pomocni. Pokoje czyste, teren ośrodka zadbany...', ocena: '★★★★☆'},
    ]
    let scroll = 0
    let pspeed = 0.1
</script>

<div class="odkryj">
    <h2>Odkryj nasz ośrodek</h2>
    <p>Witamy w naszym ośrodku wczasowym! Gdzie malownicze otoczenie i bogata oferta atrakcji sprawią, że każdy pobyt stanie się niezapomnianą przygodą.</p>
</div>

<div class="opinie">
    {#each opinie as {link, logo, opinia,nazwa}, i}
    <div class="card">
        <a href={link}>
        <img src={logo} alt={nazwa}>
        <p>{opinia}</p>
        </a>
    </div>
    {/each}
</div>

<svelte:window bind:scrollY={scroll} />

<section class="container">
    <div class="opinieu" style:transform={`translate3d(${scroll * pspeed}px, 0,  0)`}>
        {#each opinieu as {avatar, nick, opinia, ocena}, i}
            <section class="opinia">
                <div class="avatar"><img src={avatar} alt="opinia użytkownika"><h3>{nick}</h3><div class="rating">{ocena}</div></div>
                <h4>{opinia}</h4>
            </section>
        {/each}
    </div>
</section>

<style>
    .container{
        position: relative;
        margin-top: 50px;
        height: 220px;
    }
    .opinieu{
        display: flex;
        flex-direction: row;
        overflow: hidden;
        flex-wrap: nowrap;
        position: absolute;
        left: -20%;
        z-index: -5;
    }
    .opinia{
        margin: 0 20px;
        width: 300px;
        height: 250px;
        display: flex;
        flex-direction: column;
        justify-content:flex-start;
        background-color: rgb(235, 235, 235);
        border-radius: 30px;
        padding: 10px;
        box-shadow: 8px 5px 5px rgb(29, 29, 29);
    }
    .opinia .rating {
        font-size: 20px;
        color: rgb(216, 199, 101);
        padding-top: 15px;
        margin-left: 10px;
    }
    .opinia h4{
        text-align: left;
        margin-left: 60px;
        color: rgb(95, 95, 95);
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
        justify-content: flex-start;
        align-items: center;
    }
    .avatar h3{
        font-size: 20px;
        font-weight: bold;
    }
    *{
        color: black;
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