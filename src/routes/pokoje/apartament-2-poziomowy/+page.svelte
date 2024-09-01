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
  ];
  const lozko = '<svg style="margin: auto;" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M15 20H7v-3.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-.75c0-.946-.731-1.5-1.687-1.735a2.363 2.363 0 0 1-.123-.033c-.448-.137-3.287-.985-4.44-.982A1.75 1.75 0 0 0 7 14.75V12a3 3 0 1 0-6 0v15a2 2 0 0 0 2 2h1v1.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V29h18v1.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V29h1a2 2 0 0 0 2-2v-7.504a3.5 3.5 0 0 0-3.5-3.5h-11a1.5 1.5 0 0 0-1.5 1.5zM4 11a1 1 0 0 1 1 1v10h10v.5a.5.5 0 0 0 .5.5H29v4H3V12a1 1 0 0 1 1-1"/></svg>'
  let lista = [
    { logo: lozko, nazwa: "Łóżko" },
    { logo: lozko, nazwa: "do 4 os" },
    { logo: lozko, nazwa: "do 4 os" },
    { logo: lozko, nazwa: "do 4 os" },
    { logo: lozko, nazwa: "do 4 os" },
    { logo: lozko, nazwa: "do 4 os" },
  ]
</script>

<Header {MainHeader} />
<section id="example">
    <div class="galeria">
    <Gallery images={apartament} />
    </div>
    <section class="sekcjalista">
        <div class="listabox">
            <ul class="lista">
                {#each lista as {logo, nazwa}}
                <li>
                    <div class="eqbx">{@html logo}<br> {nazwa}</div>
                </li>
                {/each}
            </ul>
        </div>
    </section>
    <div class="firscase">
        <p>
            Przykładowa(Komfortowy pokój, idealny dla 5 osób dorosłych z tarasem)<br>
            Pokoje (przykład) są wyposażone w 4 oddzielne łóżka z możliwością łączenia, <br>oraz telewizor, stolik z krzesłami, oraz szafę, oraz łazienkę z prysznicem
        </p>
        <br>
    </div>
    <div class="firstcase">
        <div class="scndcase">
            <div class="impt">
                <h3><b>WAŻNE INFORMACJE</b></h3>
                <p>
                    Odebranie kluczy od pokoju jest możliwe <span class="important"><b>nie wcześniej</b></span> niż przed godziną 16<sup>00</sup>.<br>
                    Wymeldowanie wraz z oddaniem kluczy powinno nastąpić nie później niż przed godziną 10<sup>00</sup>.
                </p>
            </div>
            <div class="animals" style="margin-left: 3%;">
                <h3><b>Zwierzęta</b></h3>
                <p>Zwierzęta są akceptowane, lecz z uprzednią opłatą 40 zł za dzień.</p>
            </div>
        </div>
    </div>


</section>

<style>
    .eqbx {
        padding: 20% 0 20% 0;
        text-align: center;
        width: 100%;
        background-color: white;
        border: 2px solid black;
        margin-left: 10%;
    }
    .sekcjalista {
        margin: 30px auto 30px auto;
        width: 100%;
        padding: 1px 0 1px 0;
        background-color: rgba(68, 68, 68, 0.753);
        max-width: 1200px;
        margin: auto;
    }
    .listabox {
        position: relative;
        width: 100%;
        margin: 0 auto 0 auto;
        padding: 0 20px 0 20px;
    }
    .galeria {
        display: flex;
        margin: auto;
        padding: 20px;
    }
    #example .important {
        color: red; 
        font-weight: 500;
    }
    .firstcase {
        padding: 8px 0 8px 0;
        margin-bottom: 100px;
        background-color: rgb(98, 105, 64);
    }
    .firscase {
        max-width: 1200px;
        padding: 20px;
        margin: auto;
    }
    .scndcase {
        margin: auto;
        width: 61%;
        display: flex;
    }
    @media screen and (max-width: 1100px) {
        .scndcase {
            width: 100%;
            padding: 0 20px 0 20px;
        }
    }
    .lista {
        display: flex;
        letter-spacing: 0.06em;
        font-weight: 400;
        font-size: 18px;
    }
    .lista li {
        display: flex;
        align-items: center;
        width: 20%;
        margin: 20px 0;
    }
    @media screen and (max-width: 700px) {
        .lista {
            flex-direction: column;
            width: 100%;
        }
        .lista li {
            width: 100%;
        }
        .eqbx {
            margin: 0;
        }
    }
    @media screen and (max-width: 1239px) {
        .listabox {
            padding: 0 30px 0 30px;
        }
    }
</style>