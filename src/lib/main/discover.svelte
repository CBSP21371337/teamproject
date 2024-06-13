<script>
    let camera = '<g clip-path="url(#clip0_127_334)"><path d="M45.5601 17.6518C45.6874 17.3588 45.7563 17.0432 45.7631 16.7232C45.7699 16.4031 45.7143 16.0848 45.5995 15.7865C45.4847 15.4883 45.3131 15.2158 45.0943 14.9848C44.8755 14.7538 44.614 14.5688 44.3246 14.4403L12.8328 0.393699C10.4362 -0.675173 7.48577 0.518157 6.46214 2.93654L1.13924 15.5141C0.638478 16.7038 0.624025 18.0463 1.09906 19.2468C1.57409 20.4473 2.49981 21.4078 3.67304 21.9176L18.2159 28.2332L15.2293 35.7983H4.8171V28.4772H0V48H4.8171V40.679H15.2293C17.2115 40.679 18.9673 39.4734 19.6995 37.609L22.6428 30.1562L35.1793 35.5982C35.7631 35.852 36.4223 35.8618 37.0133 35.6255C37.6042 35.3892 38.0791 34.9259 38.3345 34.3365L39.086 32.6038L43.1829 34.2633L48 22.0615L44.3005 20.5656L45.5601 17.6518ZM34.8806 30.1611L5.57098 17.4346L10.8891 4.86198L40.1818 17.9276L34.8806 30.1611Z" fill="white"/></g><defs><clipPath id="clip0_127_334"><rect width="48" height="48" fill="white"/></clipPath></defs>'
    let oferta = [
        {ukryj: 'hiddenukryj' ,bgimg: '/main/discover/polozenie.JPG', naglowek: 'Położenie', opis: 'Nasz ośrodek położony jest w malowniczym Pobierowie, nad brzegiem Morza Bałtyckiego. W pobliżu znajdują się piękne plaże, idealne do opalanie się, pływania i spacerów.', ikony: ''},
        {ukryj: 'hiddenukryj' ,bgimg: '/main/discover/apartament2poziomowy.webp', naglowek: 'Wyposażenie', opis: 'W naszych pokojach i apartamentach zapewniamy komfortowe warunki wypoczynku. Do dyspozycji gości jest również parking, bezpłatne WI-FI oraz plac zabaw dla dzieci.', ikony: ''},
        {ukryj: 'hiddenukryj' ,bgimg: '/main/discover/stolowka.webp', naglowek: 'Jadalnia', opis: 'Po całym dniu kąpieli morskich zapraszamy do skorzystania z naszej tradycyjnej domowej kuchni polskiej, gdzie skosztują Państwo naszych najlepszych specjałów.', ikony: ''},
    ]
</script>

<section id="discover">
    <div class="odkryj">
        <h2>Odkryj nasz ośrodek</h2>
        <p>Ośrodek Wypoczynkowy KALA to idealne miejsce na relaksujący pobyt z dala od zgiełku miasta. Położony w samym centrum malowniczej okolicy blisko morza, oferuje naszym Gościom komfortowe warunki pobytu oraz szeroki wachlarz atrakcji!</p>
    </div>
    <div class="oferta">
        {#each oferta as {naglowek, opis, bgimg, ikony, ukryj}}
        <div class="card" style="background-image: url({bgimg})">
            <h2>{naglowek}</h2>
            <p>{opis}</p>
            <div class="ikony"><svg class={ukryj} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">{@html ikony}</svg></div>
        </div>
        {/each}
    </div>
</section>

<style>
    .showpokaz {
        display: block;
    }
    .hiddenukryj {
        display: none;
    }
    .ikony {
        border-radius: 10px;
        background-color: rgba(50, 50, 50, 0.6);
    }
    #discover {
        color: white;
        text-align: center;
        margin-bottom: 50px;
    }
    #discover .odkryj h2 {
        text-transform: capitalize;
        font-size: 35px;
    }
    #discover .odkryj p {
        color: gray;
        font-size: 18px;
    }
    #discover .odkryj {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 40%;
        margin: 50px auto;
    }
    #discover .oferta {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        width: 70%;
        margin: 5px auto;
        gap: 50px;
    }
    #discover .card {
        border: 2px solid white;
        width: 500px;
        height: 250px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 20px 10px;
        transition: all 250ms ease-out;
        user-select: none;
        background-size: cover;
    }
    #discover .card:hover {
        scale: 1.03;
    }
    #discover .card p {
        font-weight: bold;
        color: #ffffff;
        background-color: rgba(50, 50, 50, 0.6);
    }
    #discover .oferta h2 {
        font-size: 25px;
        background-color: rgba(50, 50, 50, 0.6);
    }
    #discover .oferta p {
        font-size: 15px;
    }
</style>