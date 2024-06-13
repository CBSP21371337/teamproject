<script>
    let oceny = [
        {src: '/main/opinions/facebook.png', name: "5 / 5", alt: 'facebook logo', desc: '★★★★★', link: 'https://www.facebook.com/kalapobierowo'},
        {src: '/main/opinions/booking.png', name: "8.6 / 10", alt: 'booking.com logo', desc: '★★★★', link: 'https://www.booking.com/hotel/pl/osrodek-wczasowy-kala.pl.html'},
        {src: '/main/opinions/google.png', name: "4.3 / 5", alt: 'google logo', desc: '★★★★', link: 'https://g.co/kgs/dL4CMUa'},
        {src: '/main/opinions/dodajopinie.png', name: "DODAJ OPINIĘ", alt: 'add review logo', desc: '★ / ★', link: '/ksiega-gosci'},
    ]
</script>

<section class="oferta" style="margin-bottom: 20px;">
    <h1>Opinie</h1>
    <div class="container">
        {#each oceny as {src, name, alt, desc, link}, i}
        <div class="card">
            <a href={link}>
                <img src={src} alt={alt}>
                <h3>{name}</h3>
                <p style="color: gold;">{desc}</p>
            </a>
        </div>
        {/each}
    </div>
</section>

<style>
    .card img {
        margin: auto;
        margin-bottom: 10px;
    }
    h1 {
        font-size: 35px;
        text-transform: capitalize;
        color: white;
        margin: 25px auto;
    }
    .container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 30px;
    }
    .oferta {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        user-select: none;
    }
    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 20%;
        border: 2px solid rgb(122, 121, 121);
        padding: 20px;
        transition: all 250ms ease;
        min-width: 200px;
        text-align: center;
    }
    .card:hover {
        transform: scale(1.05);
    }
    .card img {
        width: 64px;
        height: 64px;
    }
    .card h3 {
        color: white;
        text-transform: uppercase;
        font-weight: 600;
    }
    .card p {
        color: rgb(161, 161, 161);
    }
    @media (max-width: 768px) {
        .container {
            flex-direction: column;
            gap: 20px;
        }
        .card {
            width: 80%;
        }
    }
</style>