<script>
    import Gallery from '$lib/components/gallery.svelte';
    let images = [
      '/jadalnia/stolowka.webp',
      '/jadalnia/54a.jpg',
      '/jadalnia/53.jpg',
      '/jadalnia/54.jpg',
      '/jadalnia/52.jpg',
      '/jadalnia/51.jpg',
      '/jadalnia/55.jpg',
      '/jadalnia/66.jpg',
    ];
    import Header from "$lib/components/header.svelte";
    let MainHeader = {
        image: '/jadalnia/stolowka.webp',
        title: 'Jadalnia',
        subtitle: 'Pobyt w Ośrodku Wczasowym KALA to rozkosz dla podniebienia!',
    }
</script>

<Header {MainHeader} />

<section>
    <h2>Po całym dniu kąpieli morskich zapraszamy do skorzystania z naszej tradycyjnej domowej kuchni polskiej, <br>gdzie skosztują Państwo naszych najlepszych specjałów.</h2>
    <Gallery {images} />
</section>

<style>
    section {
        margin-top: 50px;
        margin-bottom: 50px;
    }
    section h2 {
        text-align: center;
        font-weight: 500;
        font-size: 20px;
    }
</style>