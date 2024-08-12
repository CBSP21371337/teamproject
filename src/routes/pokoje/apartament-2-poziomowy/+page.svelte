<script>
    import Header from "$lib/components/header.svelte";
    let MainHeader = {
        image: '/pokoje/pawilontyl.webp',
        title: 'Example',
        subtitle: 'Pokoj example',
    }
    import Gallery from '../../../lib/components/bigphotogallery.svelte';
    const apartament = [
        '/jadalnia/stolowka.webp',
        '/pokoje/pokojemain/pokojstudio22.webp',
        '/pokoje/pokojemain/domkiletniskowe.webp',
        '/pokoje/pokojemain/domkidrewniane.webp',
        '/pokoje/pokojemain/pokoj2osobowytaras.webp',
        '/pokoje/pokojemain/apartament2poziomowy.webp',
        'https://hubertkajdan.com/wp-content/uploads/2019/06/2019-06-20-Jezioro-Lednickie-010-Pano.jpg',
        'https://hubertkajdan.com/wp-content/uploads/2019/06/2019-06-20-Jezioro-Lednickie-010-Pano.jpg',
        'https://hubertkajdan.com/wp-content/uploads/2019/06/2019-06-20-Jezioro-Lednickie-010-Pano.jpg',
        'https://hubertkajdan.com/wp-content/uploads/2019/06/2019-06-20-Jezioro-Lednickie-010-Pano.jpg',
        'https://hubertkajdan.com/wp-content/uploads/2019/06/2019-06-20-Jezioro-Lednickie-010-Pano.jpg',
        'https://hubertkajdan.com/wp-content/uploads/2019/06/2019-06-20-Jezioro-Lednickie-010-Pano.jpg',
  ];
  const lozko = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M15 20H7v-3.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-.75c0-.946-.731-1.5-1.687-1.735a2.363 2.363 0 0 1-.123-.033c-.448-.137-3.287-.985-4.44-.982A1.75 1.75 0 0 0 7 14.75V12a3 3 0 1 0-6 0v15a2 2 0 0 0 2 2h1v1.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V29h18v1.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V29h1a2 2 0 0 0 2-2v-7.504a3.5 3.5 0 0 0-3.5-3.5h-11a1.5 1.5 0 0 0-1.5 1.5zM4 11a1 1 0 0 1 1 1v10h10v.5a.5.5 0 0 0 .5.5H29v4H3V12a1 1 0 0 1 1-1"/></svg>'
  let lista = [
    { logo: lozko, nazwa: "Łóżko" },
    { logo: lozko, nazwa: "Łóżko" },
    { logo: lozko, nazwa: "Łóżko" },
    { logo: lozko, nazwa: "Łóżko" },
    { logo: lozko, nazwa: "Łóżko" },
    { logo: lozko, nazwa: "Łóżko" },
  ]
</script>

<Header {MainHeader} />
<section id="example">
    <section class="sekcjalista">
        <div class="listabox">
            <ul class="lista">
                {#each lista as {logo, nazwa}}
                <li>
                    <span style="margin-right: 20px; font-size: 25px;">{@html logo}</span>
                    <span>{nazwa}</span>
                </li>
                {/each}
            </ul>
        </div>
    </section>
    <div class="firscase">
        <h1>EXAMPLE</h1>
        <h6>Max (liczba) osobowy</h6>
        <p>
            Przykładowa(Komfortowy pokój, idealny dla 5 osób dorosłych z tarasem)<br>
            Pokoje (przykład) są wyposażone w 4 oddzielne łóżka z możliwością łączenia, <br>oraz telewizor, stolik z krzesłami, oraz szafę, oraz łazienkę z prysznicem
        </p>
    </div>
    <div class="galeria">
        <Gallery images={apartament} />
    </div>
    <div class="firstcase">

        <br>
        <h3>WAŻNE INFORMACJE</h3>
        <h5>Zameldowanie / Wymeldowanie</h5>
        <p>
            Odebranie kluczy od pokoju jest możliwe <span class="important">nie wcześniej</span> niż przed godziną 16<sup>00</sup>.
            Wymeldowanie wraz z oddaniem kluczy powinno nastąpić nie później niż przed godziną 10<sup>00</sup>.
        </p>
        <h3>Zwierzęta</h3>
        <p>Zwierzęta są akceptowane, lecz z uprzednią opłatą (cena) zł za pobyt.</p>
    </div>
</section>

<style>
    .sekcjalista {
        padding-top: 60px;
        padding-bottom: 60px;
        background-color: rgba(68, 68, 68, 0.753);
    }
    .listabox {
        position: relative;
        width: 100%;
        max-width: 1240px;
        margin-right: auto;
        margin-left: auto;
        padding-right: 30px;
        padding-left: 30px;
    }
    .listabox {
        padding-right: 130px;
        padding-left: 130px;
    }
    .galeria {
        max-width: 1200px;
        padding: 20px;
        margin: auto;
    }
    #example .important {
        color: red; 
        font-weight: 500;
    }
    .firscase {
        width: 50%;
        margin: auto;
    }
    .firstcase {
        width: 50%;
        margin: auto;
        margin-bottom: 100px;
    }
    #example h1 {
        font-size: 50px;
    }
    #example h6 {
        font-size: 18px;
    }
    .lista {
        display: flex;
        flex-wrap: wrap;
        list-style-type: disc;
        letter-spacing: 0.06em;
        font-weight: 400;
        font-size: 18px;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;
        unicode-bidi: isolate;
    }
    .lista li {
        display: flex;
        align-items: center;
        width: 25%;
        margin: 20px 0;
        float: left;
    }
    @media screen and (max-width: 1239px) {
        .listabox {
        padding-right: 30px;
        padding-left: 30px;
    }
}
</style>