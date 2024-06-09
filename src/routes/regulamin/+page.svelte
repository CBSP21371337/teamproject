<script>
let scroll = 0
let pspeed = 0.7
</script>

<svelte:window bind:scrollY={scroll} />

<header>
<div class="image" style:transform={`translate3d(0, ${scroll * pspeed}px, 0)`}></div>
    <div class="description">
        <h1>Regulamin</h1>
        <p></p>
    </div>
</header>
<section id="regulations">
    <p>
        Witamy naszych gości w O.W. „Kala” i prosimy o zapoznanie się z zasadami panującymi w ośrodku, pozwoli to obu stronom uniknąć nieprzyjemnych sytuacji, a nam ułatwi pracę i pozwoli skupić się nad umileniem Państwa wypoczynku.
    </p>
    <p>
        Klienci przebywający w Ośrodku i korzystający z jego usług zobowiązani są przestrzegać regulaminu na nim panującego, przepisów P-poż i BHP oraz w sytuacjach awaryjnych stosować się do zaleceń osób wskazanych.
    </p>
    <ol>
        <li>Opłaty za zakwaterowanie w O.W. „Kala” określa cennik dostępny w recepcji, oraz na stronie www.owkala.pl.</li>
        <li>Klienci O.W. „Kala” zobowiązani są dokonać meldunku niezwłocznie po przyjeździe w Recepcji. W celu potwierdzenia tożsamości, klient ma obowiązek okazać się dokumentem z fotografią.</li>
        <li>Należność za pobyt, oraz opłata miejscowa pobierana jest w dniu przyjazdu do godz. 17<sup>00</sup>. Bardzo prosimy o punktualne uregulowanie płatności.</li>
        <li>W ośrodku obowiązuje doba hotelowa od godz. 16<sup>00</sup> w dniu przyjazdu do godz. 10<sup>00</sup> w dniu wyjazdu. Prosimy o przestrzeganie godziny hotelowej.</li>
        <li>Właściciel O.W. „Kala” nie ponosi odpowiedzialności za przedmioty i mienie pozostawione w wynajmowanym pokoju, oraz za samochody zaparkowane na jego posesji, ani znajdujące się w nich przedmioty i mienie.</li>
        <li>W momencie przekazania przez recepcję klucza do pokoju stają się Państwo jego gospodarzami, na życzenie pokój może zostać sprzątnięty, w tym celu należy uzgodnić tą usługę z personelem lub zgłosić sprzątanie w Recepcji.</li>
        <li>O.W. „Kala” nie przyjmuje zwierząt na swoim terenie (w sytuacjach wyjątkowych prosimy o kontakt z właścicielem Ośrodka celem ustalenia warunków na jakich zwierzę mogło by przebywać na terenie O.W. „Kala”).</li>
        <li>Wprowadzenie na teren O.W. „Kala” psa lub innego zwierzęcia , należy uzgodnić z właścicielem Ośrodka lub osoba upoważnioną.</li>
        <li>W ośrodku obowiązuje cisza nocna trwająca w godzinach 23<sup>00</sup> - 7<sup>00</sup>.</li>
        <li>Klient może organizować uroczystości w wynajmowanym pokoju tylko po uprzednim uzyskaniu zgody kierownictwa i w granicach czasowych określonych tą zgodą ale nie dłużej niż do godz 22<sup>00</sup>.</li>
        <li>Gość ponosi pełną odpowiedzialności materialną za wszelkiego rodzaju uszkodzenia lub zniszczenia przedmiotów wyposażenia i urządzeń technicznych (również zagubienie kompletu kluczy) powstałe z jego winy lub winy odwiedzających. <br>Za zniszczenia wykryte po opuszczeniu pokoju po wcześniejszej konsultacji z najemcami zostaną oni obciążeni kosztami naprawy.</li>
        <li>Osoby korzystające z wyżywienia w stołówce O.W. „Kala” proszone są o dostosowanie się do godzin podawanych posiłków, oraz regulaminu stołówki wywieszonego obok jadłospisu.</li>
        <li>Zadatek przepada w całości w przypadku odwołania przez klienta rezerwacji pobytowej. Jednocześnie informujemy, że w przypadku skrócenia pobytu po dokonaniu meldunku nie dokonujemy zwrotów.</li>
        <li>W obiekcie zabronione jest:</li>
        <li>zapraszanie i przyjmowanie gości (osób nie będących klientami ośrodka) w pokojach po godz. 22<sup>00</sup> zachowanie gości i osób korzystających z usług ośrodka nie powinno zakłócać spokojnego pobytu innych gości,<br> kierownictwo oraz pracownicy mogą odmówić bowiem dalszego świadczenia usług osobie, która narusza tę zasadę,</li>
        <li>zabrania się przestawiania mebli w wynajmowanych pokojach oraz wynoszenia ich na zewnątrz pokoju bez uzgodnienia tego z właścicielem Ośrodka.</li>
        <li>Zastrzegamy sobie prawo do odmowy zakwaterowania osobom:</li>
        <li>będącym pod widocznym wpływem alkoholu lub środków odurzających,</li>
        <li>które zachowują się agresywnie, w sposób powszechnie uznany za niestosowny.</li>
        <li>Osoby naruszające zasady niniejszego regulaminu zobowiązane będą do opuszczenia ośrodka bez zwrotów kosztów.</li>
        <li>Przedmioty osobistego użytku pozostawione przez wyjeżdżającego gościa, będą odesłane na jego koszt pod wskazany adres. W przypadku nie otrzymania takiej dyspozycji przedmioty te przechowane zostaną przez miesiąc , a następnie zostaną zniszczone.</li>
        <li>O.W. „Kala” udostępnia bezpłatnie dla gości wczasowych internet bezprzewodowo WiFi na terenie ośrodka, lecz nie odpowiada za jakość połączenia.</li>
        <li>Świadczymy usługi zgodnie ze swoją kategorią, w przypadku zastrzeżeń, reklamacji dotyczących co do jakości usług, gość proszony jest o zgłoszenie ich nie później niż dobę od momentu meldunku, <br>reklamacje składane w dniu wykwaterowania nie będą rozpatrywane. Jednocześnie informujemy, że nie odpowiadamy za niedogodności spowodowane z przyczyn od nas nie zależnych Np. przerwy w dostawie prądu czy wody.</li>
    </ol>
    <p>
        Regulamin O.W. „Kala” podaje się do wiadomości poprzez zamieszczenie na stronie www.owkala.pl , oraz do indywidualnego zapoznania się przez klienta przy czynnościach meldunkowych w Recepcji.
    </p>
    <p>
        Regulamin niniejszy zatwierdzony został przez właściciela O.W. „ Kala” i obowiązuje od dnia 30.11.2010 r.
    </p>
</section>

<style>
    @media (min-width: 992px) {
        #regulations {
            margin: auto;
            width: 45%;
        }
    }
    #regulations {
        font-family: 'Segoe Print';
        position: relative;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
        line-height: 33px;
        margin-bottom: 100px;
    }
    #regulations p {
        font-size: 16px;
        color: #8f8f8f;
        line-height: 31px;
        font-weight: 400;
    }
    #regulations ol {
        display: block;
        list-style-type: decimal;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;
        unicode-bidi: isolate;
    }
    header {
        height: 100vh;
        overflow: hidden;
        box-shadow: inset 0 -5px 20px #000;
        margin-bottom: 80px;
    }
    header .image {
        background-image: url('/regulamin/ptak.webp');
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
    @media (max-width: 370px) {
        .description h1 {
            font-size: 2em;
        }
    }
</style>