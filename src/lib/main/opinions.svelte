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
}
div {
    flex: 1;
    margin: 2px;
    padding: 50px;
    text-align: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: 1px solid black;
    font-size: 40px;
    color: white;
    font-weight: 400;
}
#opinions .google {
    background-image: url('/main/opinions/google.png');
}
#opinions .facebook {
    background-image: url('/main/opinions/facebook.png');
}
#opinions .booking {
    background-image: url('/main/opinions/booking.png');
}
#opinions .user {
    background-image: url('/main/opinions/user.png');
}
#opinions img {
    margin: auto;
}
</style>