<section id="opinions">
    <div class="google">4.3/5</div>
    <div class="facebook">5/5</div>
    <div class="booking">8.6/10</div>
    <div class="user"><a href="/ksiega-gosci"><img src="/main/opinions/plus.svg" alt="dodaj opinię"></a></div>
</section>

<style>
#opinions {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    z-index: 1;
}
#opinions div {
    height: 100px;
    flex: 1;
    margin: 1px;
    text-align: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    font-size: 40px;
    color: white;
    font-weight: 400;
    min-width: 200px;
}
#opinions .google {
    background-image: url('/main/opinions/google.png');
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
}
#opinions a {
    position: absolute;
}
#opinions .facebook {
    background-image: url('/main/opinions/facebook.png');
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
}
#opinions .booking {
    background-image: url('/main/opinions/booking.png');
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
}
#opinions .user {
    background-image: url('/main/opinions/dodajopinie.png');
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
}
#opinions img {
    margin: auto;
}
</style>