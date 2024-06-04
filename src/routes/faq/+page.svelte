<script>
    import { slide } from 'svelte/transition'
    let questions = [
        {question: 'Czy dostępne jest miejsce parkingowe?', anwser: 'Na terenie ośrodka posiadamy wolne miejsca parkingowe dodatkowo płatne.', state: false},
        {question: 'Czy wystawiamy faktury?', anwser: 'Tak, wystawiamy faktury VAT za pobyty i wyżywienie.', state: false},
        {question: 'Czy dostępne są łóżeczka turystyczne?', anwser: 'Tak, posiadamy łóżeczka turystyczne za dodatkową opłatą. Obowiązuje rezerwacja.', state: false},
        {question: 'Czy w pokojach jest prywatna łazienka?', anwser: 'Tak, w każdym z naszych pokoi i domków jest prywatna łazienka.', state: false},
        {question: 'Czy zwierzęta są akceptowane?', anwser: 'Obecność zwierzęcia musi być potwierdzona przy rezerwacji oraz obowiązuje dodatkowa opłata.', state: false},
        {question: 'Jak daleko jest do plaży?', anwser: 'Plaża znajduje się w odległości zaledwie 200 metrów od ośrodka.', state: false},
        {question: 'Czy jest możliwość wykupienia wyżywienia?', anwser: 'Tak, stołówka w ośrodku serwuje śniadanie, obiad i kolację.', state: false},
        {question: 'Jakie są godziny zameldowania i wymeldowania?', anwser: 'Doba zaczyna się od godziny 16, a kończy o 10.', state: false},
        {question: 'Jakie są godziny posiłków?', anwser: 'Śniadanie 8:00, Obiad 13:00, Kolacja 18:00 (ewentualnie(to do sprawdzenia i ustalenia) Śniadanie 8:00, Zupa 13:00, Obiadokolacja 18:00)', state: false},
        {question: 'Czy ośrodek zapewnia dostęp do WIFI?', anwser: 'Tak, na terenie ośrodka znajduje się bezpłatny punkt dostępowy WIFI.', state: false},
        {question: 'Jakie są rodzaje dostępnych pokoi?', anwser: 'Informacje o pokojach wraz ze zdjęciami znajdują się na podstronie (link do podstrony)', state: false},
        {question: 'Czy dostępne są leżaki i parawany?', anwser: 'Tak, leżaki oraz parawany można wypożyczyć na recepcji.', state: false},
        {question: 'Czy ośrodek przyjmuje grupy zorganizowane, itp.?', anwser: 'Tak, szczegółowe informacje można znaleźć na stronie (strona do grupy), lub poprzez kontakt tel: +48606446539.', state: false},
        {question: 'Czy plaża jest strzeżona?', anwser: 'Tak, plaża w Pobierowie jest strzeżona przez ratowników RWR, oraz WOPR.', state: false},
        {question: 'Ile wynosi opłata klimatyczna?', anwser: 'Opłata klimatyczna wynosi 2.50 zł za osobę (cena może się w każdej chwili zmienić)', state: false},
    ]
    let scroll = 0
    let pspeed = 0.4
</script>

<svelte:window bind:scrollY={scroll} />

<header>
    <div class="image" style:transform={`translate3d(0, ${scroll * pspeed}px, 0)`}></div>
    <div class="description">
        <h1>FAQ</h1>
        <p>Najczęściej zadawane pytania!</p>
    </div>
</header>

<section class="qcontainer">
    {#each questions as {question, anwser, state}, i}
    <div class="qcard">
        <button on:click={() => {
            if (state == false) {
                state = true
            }else{
                state = false
            }
        }}> </button>
        <div class="question">
            <h2>{question}</h2>
            <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"> <path d="M7 10L12 15L17 10" stroke="#00e1ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
        </div>
        {#if state == true}
        <div class="anwser" transition:slide={{duration: 450, delay: 25}}><p>{anwser}</p></div>
        {/if}
    </div> 
    {/each}
</section>

<style>
    header {
        height: 100vh;
        overflow: hidden;
        box-shadow: inset 0 -5px 20px #000;
    }
    header .image {
        background-image: url('/faq/faq.png');
        background-size: cover;
        background-position: center;
        filter: brightness(0.8);
        z-index: -5;
        height: 100vh;
        position: relative;
    }
    header .description {
        width: 100vw;
        position: absolute;
        top: 50%;
        text-align: center;
        transform: translateY(-50%);
        background-color: rgba(0, 0, 0, 0.3);
        padding: 20px;
        z-index: 0;
    }
    header h1 {
        font-size: 60px;
        color: white;
        text-transform: uppercase;
        margin: 0;
    }
    header p {
        font-size: 30px;
        color: rgb(215, 215, 215);
    }
    .qcard button {
        z-index: 5;
        width: 100%;
        height: 100%;
        position: absolute;
    }
    section {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 60%;
        margin: 0 auto;
        padding-bottom: 100px;
        padding-top: 50px;
    }
    .qcard{
        border: rgb(158, 158, 158) 1px solid;
        background-color: rgba(0,0,0,0.3);
        border-radius: 5px;
        position: relative;
        margin: 20px 0;
    }
    .question {
        display: flex;
        flex-direction: row;  
        justify-content: space-between;
        align-items: center;
        padding: 20px;
    }
    .question h2 {
        color: white;
        margin-right: 20px;
        font-size: 30px;
    }
    .anwser p {
        font-size: 20px;
        padding: 0 0 20px 20px;
    }
</style>