<script>
    import Header from "$lib/components/header.svelte";
    let MainHeader = {
        image: '/faq/faq.webp',
        title: 'FAQ',
        subtitle: 'Najczęściej zadawane pytania!',
    }
    import { slide } from 'svelte/transition'
    let questions = [
        {question: 'Czy dostępne jest miejsce parkingowe?', answer: 'Na terenie ośrodka posiadamy wolne miejsca parkingowe dodatkowo płatne.', state: false},
        {question: 'Czy wystawiamy faktury?', answer: 'Tak, wystawiamy faktury VAT za pobyty i wyżywienie.', state: false},
        {question: 'Czy dostępne są łóżeczka turystyczne?', answer: 'Tak, posiadamy łóżeczka turystyczne za dodatkową opłatą. Obowiązuje rezerwacja.', state: false},
        {question: 'Czy w pokojach jest prywatna łazienka?', answer: 'Tak, w każdym z naszych pokoi i domków jest prywatna łazienka.', state: false},
        {question: 'Czy zwierzęta są akceptowane?', answer: 'Obecność zwierzęcia musi być potwierdzona przy rezerwacji oraz obowiązuje dodatkowa opłata.', state: false},
        {question: 'Jak daleko jest do plaży?', answer: 'Plaża znajduje się w odległości zaledwie 200 metrów od ośrodka.', state: false},
        {question: 'Czy jest możliwość wykupienia wyżywienia?', answer: 'Tak, stołówka w ośrodku serwuje śniadanie, obiad i kolację.', state: false},
        {question: 'Jakie są godziny zameldowania i wymeldowania?', answer: 'Doba zaczyna się od godziny 16, a kończy o 10.', state: false},
        {question: 'Jakie są godziny posiłków?', answer: 'Śniadanie 8:00, Obiad 13:00, Kolacja 18:00 (ewentualnie(to do sprawdzenia i ustalenia) Śniadanie 8:00, Zupa 13:00, Obiadokolacja 18:00)', state: false},
        {question: 'Czy ośrodek zapewnia dostęp do WIFI?', answer: 'Tak, na terenie ośrodka znajduje się bezpłatny punkt dostępowy WIFI.', state: false},
        {question: 'Jakie są rodzaje dostępnych pokoi?', answer: 'Informacje o pokojach wraz ze zdjęciami znajdują się na podstronie pokoje', state: false},
        {question: 'Czy dostępne są leżaki i parawany?', answer: 'Tak, leżaki oraz parawany można wypożyczyć na recepcji.', state: false},
        {question: 'Czy ośrodek przyjmuje grupy zorganizowane, itp.?', answer: 'Tak, szczegółowe informacje można znaleźć na stronie po przejściu na stronę dla-grup, lub poprzez kontakt tel: (+48) 606 446 539.', state: false},
        {question: 'Czy plaża jest strzeżona?', answer: 'Tak, plaża w Pobierowie jest strzeżona przez ratowników RWR, oraz WOPR.', state: false},
        {question: 'Ile wynosi opłata klimatyczna?', answer: 'Opłata klimatyczna wynosi 2.50 zł za osobę (cena może się w każdej chwili zmienić)', state: false},
    ]
</script>

<Header {MainHeader} />

<section class="qcontainer">
    {#each questions as {question, answer, state}}
    <div class="qcard">
        <button on:click={() => {
            if (state == false) {
                state = true
            } else {
                state = false
            }
        }}> </button>
        <div class="question">
            <h2>{question}</h2>
            <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow {state ? 'rotate' : ''}"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier">    <path d="M7 10L12 15L17 10" stroke="#00e1ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
        </div>
        {#if state == true}
        <div class="answer" transition:slide={{duration: 450, delay: 25}}><p>{answer}</p></div>
        {/if}
    </div>
    {/each}
</section>

<style>
    .qcard button {
        z-index: 2;
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
    .qcontainer{
        z-index: 0;
    }
    .qcard{
        border: rgb(158, 158, 158) 1px solid;
        background-color: rgba(0,0,0,0.3);
        border-radius: 20px;
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
    .answer p {
        position: relative;
        font-size: 20px;
        padding: 0 0 20px 20px;
        z-index: 2;
    }
    .arrow {
        transition: transform 0.3s ease;
    }
    .arrow.rotate {
        transform: rotate(180deg);
    }
    @media (max-width: 1050px) {
        .question h2 {
            font-size: 100%;
        }
        .answer p {
            font-size: 90%;
        }
    }
</style>