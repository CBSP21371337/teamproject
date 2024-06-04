<script>
    let opinie = [
        {link: 'https://www.google.com/travel/search?ts=CAEaIAoAEhwSFAoHCOgPEAUYHBIHCOgPEAUYHRgBMgQIABAA&qs=MiZDaGdJc0p5M2hmV3E2XzZDQVJvTEwyY3ZNWFJvZHpFMWRtNFFBUTgCQhwiGgoWQ0lITTBvZ0tFSUNBZ0lDVXFkX3JNZxAB&utm_campaign=sharing&utm_medium=link_btn&utm_source=htls', logo: '', opinia: '4.3/5', nazwa: 'Google'},
        {link: 'https://www.booking.com/Share-eKEqpJ', logo: '', opinia: '8.6/10', nazwa: 'Booking'},
        {link: '', logo: '', opinia: '9/10', nazwa: 'Księga Gości'}
    ]
</script>

<section class="discover">
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
</section>

<style>
    .discover{
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