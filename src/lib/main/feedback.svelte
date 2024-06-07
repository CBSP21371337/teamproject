<script>
    let scroll = 0
    let pspeed = 0.6
    let opinieu = [
        {avatar: '/main/ptak.webp', nick: 'Natalia A', opinia: 'Bardzo miłe i przyjaźne miejsce, wszędzie blisko, dobre warunki...', ocena: '★★★★★'},
        {avatar: '/main/ptak.webp', nick: 'Anna T', opinia: 'Bardzo ładna miejscówka, ukwiecona, czysciótka, właściciele przesympatyczni, jedzonko bardzo smaczne, urozmaicone, śniadania, kolacje szwecki stół...', ocena: '★★★★★'},
        {avatar: '/main/ptak.webp', nick: 'Piotr S', opinia: 'Bardzo dobre warunki oraz mili właściciele, posiłki w postaci bufetu szwedzkiego...', ocena: '★★★★☆'},
        {avatar: '/main/ptak.webp', nick: 'Daniel S', opinia: 'Ośrodek ma bardzo miłą obsługę, plac zabaw dla dzieci i z ośrodka wszędzie jest blisko! Cieszy nas widok nowoczesnej recepcji i rozwijających się domków...', ocena: '★★★★★'},
        {avatar: '/main/ptak.webp', nick: 'Magda M', opinia: 'Pyszne jedzenia , przemiła obsługa, doskonała organizacja przez właścicieli, wygodne i czyste pokoje z łazienkami TV i WI- FI, oraz piękna pogoda...', ocena: '★★★★☆'},
        {avatar: '/main/ptak.webp', nick: 'Piotr R', opinia: 'Przemiła atmosfera, bardzo przystępna cena. Muszę pochwalić bogaty wybór jedzenia...', ocena: '★★★★☆'},
        {avatar: '/main/ptak.webp', nick: 'Jakub J', opinia: 'Polecam ośrodek z oceną mocną oceną 4+. Miła obsługa, czyste pokoje, zadbany obiekt. Nie ma się do czego przyczepić...', ocena: '★★★★★'},
        {avatar: '/main/ptak.webp', nick: 'Natalia A', opinia: 'Bardzo miłe i przyjaźne miejsce, wszędzie blisko, dobre warunki...', ocena: '★★★★★'},
        {avatar: '/main/ptak.webp', nick: 'Wicikowa', opinia: 'Ośrodek bardzo komfortowy z domowym jedzeniem. Gospodarze bardzo mili i pomocni. Pokoje czyste, teren ośrodka zadbany...', ocena: '★★★★☆'},
        {avatar: '/main/ptak.webp', nick: 'Wicikowa', opinia: 'Ośrodek bardzo komfortowy z domowym jedzeniem. Gospodarze bardzo mili i pomocni. Pokoje czyste, teren ośrodka zadbany...', ocena: '★★★★☆'},
        {avatar: '/main/ptak.webp', nick: 'Wicikowa', opinia: 'Ośrodek bardzo komfortowy z domowym jedzeniem. Gospodarze bardzo mili i pomocni. Pokoje czyste, teren ośrodka zadbany...', ocena: '★★★★☆'},
        {avatar: '/main/ptak.webp', nick: 'Wicikowa', opinia: 'Ośrodek bardzo komfortowy z domowym jedzeniem. Gospodarze bardzo mili i pomocni. Pokoje czyste, teren ośrodka zadbany...', ocena: '★★★★☆'},
        {avatar: '/main/ptak.webp', nick: 'Wicikowa', opinia: 'Ośrodek bardzo komfortowy z domowym jedzeniem. Gospodarze bardzo mili i pomocni. Pokoje czyste, teren ośrodka zadbany...', ocena: '★★★★☆'},
    ]
</script>

<svelte:window bind:scrollY={scroll} />

<section id="feedback">
    <div class="reviews" style:transform={`translate3d(${scroll * pspeed}px, 0,  0)`}>
        {#each opinieu as {avatar, nick, opinia, ocena}}
            <div class="text">
                <div class="avatar"><img src={avatar} alt="opinia użytkownika"><h3>{nick}</h3><div class="rating">{ocena}</div></div>
                <h4>{opinia}</h4>
            </div>
        {/each}
    </div>
</section>

<style>
    #feedback {
        z-index: 1;
        position: relative;
        height: 220px;
        color: black;
        text-align: center;
        overflow: hidden;
        margin-top: 50px;
        margin-bottom: 50px;
    }
    #feedback .reviews {
        display: flex;
        flex-direction: row;
        overflow: hidden;
        flex-wrap: nowrap;
        position: absolute;
        left: -75%;
    }
    #feedback .text {
        margin: 0 20px;
        width: 300px;
        height: 220px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        background-color: rgb(235, 235, 235);
        border-radius: 30px;
        padding: 10px;
        box-shadow: 8px 5px 5px rgb(29, 29, 29);
    }
    #feedback .text h4{
        text-align: left;
        margin-left: 60px;
        color: rgb(95, 95, 95);
    }
    #feedback .avatar{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
    #feedback .avatar img{
        height: 50px;
        width: 50px;
        border-radius: 50%;
        margin-right: 10px;
        border: 2px solid white;
    }
    #feedback .avatar h3{
        font-size: 20px;
        font-weight: bold;
    }
    #feedback .rating {
        font-size: 20px;
        color: rgb(216, 199, 101);
        padding-top: 15px;
        margin-left: 10px;
    }
</style>