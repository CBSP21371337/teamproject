<section id="opinions">
    <div class="ratebox">
        <div class="googlebg"></div>
        <div class="rate">
            4.3/5
        </div>
    </div>
    <div class="ratebox">
        <div class="facebookbg"></div>
        <div class="rate">
            5/5
        </div>
    </div>
    <div class="ratebox">
        <div class="bookingbg"></div>
        <div class="rate">
            8.6/10
        </div>
    </div>
    <div class="ratebox">
        <div class="userbg"></div>
        <a href="/ksiega-gosci"><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.186 22.686H22.686V22.186V13.936C22.686 13.273 22.9494 12.6371 23.4182 12.1682C23.8871 11.6994 24.523 11.436 25.186 11.436C25.849 11.436 26.4849 11.6994 26.9538 12.1682C27.4226 12.6371 27.686 13.273 27.686 13.936V22.186V22.686H28.186H36.436C37.099 22.686 37.7349 22.9494 38.2038 23.4182C38.6726 23.8871 38.936 24.523 38.936 25.186C38.936 25.849 38.6726 26.4849 38.2038 26.9538C37.7349 27.4226 37.099 27.686 36.436 27.686H28.186H27.686V28.186V36.436C27.686 37.099 27.4226 37.7349 26.9538 38.2038C26.4849 38.6726 25.849 38.936 25.186 38.936C24.523 38.936 23.8871 38.6726 23.4182 38.2038C22.9494 37.7349 22.686 37.099 22.686 36.436V28.186V27.686H22.186H13.936C13.273 27.686 12.6371 27.4226 12.1682 26.9538C11.6994 26.4849 11.436 25.849 11.436 25.186C11.436 24.523 11.6994 23.8871 12.1682 23.4182C12.6371 22.9494 13.273 22.686 13.936 22.686H22.186ZM42.3241 7.67588C37.7295 3.08124 31.4978 0.5 25 0.5C18.5022 0.5 12.2705 3.08124 7.67588 7.67588C3.08124 12.2705 0.5 18.5022 0.5 25C0.5 31.4978 3.08124 37.7295 7.67588 42.3241C12.2705 46.9188 18.5022 49.5 25 49.5C31.4978 49.5 37.7295 46.9188 42.3241 42.3241C46.9188 37.7295 49.5 31.4978 49.5 25C49.5 18.5022 46.9188 12.2705 42.3241 7.67588Z" fill="white" stroke="black"/></svg></a>
    </div>
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
    #opinions .ratebox {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #opinions a {
        position: absolute;
    }
    #opinions .rate {
        display: flex;
        position: absolute;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        -webkit-text-stroke: 1px rgb(49, 49, 49);
    }
    #opinions .googlebg {
        background-image: url('/main/opinions/google.png');
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        filter: blur(1.2px);
    }
    #opinions .facebookbg {
        background-image: url('/main/opinions/facebook.png');
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        filter: blur(1.2px);
    }
    #opinions .bookingbg {
        background-image: url('/main/opinions/booking.png');
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        filter: blur(1.2px);
    }
    #opinions .userbg {
        background-image: url('/main/opinions/dodajopinie.png');
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        filter: blur(1.2px);
    }
    #opinions svg {
        margin: auto;
    }
</style>