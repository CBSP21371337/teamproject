<script>
    let arrivalicon = '<path d="M13.8947 19.4286L8.8421 14.8571V18.2857H2.52632V14.8571H0V24H2.52632V20.5714H8.8421V24L13.8947 19.4286ZM21.4737 2.28571H20.2105V0H17.6842V2.28571H7.57895V0H5.05263V2.28571H3.78947C2.4 2.28571 1.26316 3.31429 1.26316 4.57143V12.5714H3.78947V9.14286H21.4737V20.5714H16.1684L13.6421 22.8571H21.4737C22.8632 22.8571 24 21.8286 24 20.5714V4.57143C24 3.31429 22.8632 2.28571 21.4737 2.28571ZM3.78947 6.85714V4.57143H21.4737V6.85714H3.78947Z" fill="white"/>'
    let departureicon = '<path d="M2.52632 9.14286H20.2105V12.5714H22.7368V4.57143C22.7368 3.31429 21.6 2.28571 20.2105 2.28571H18.9474V0H16.4211V2.28571H6.31579V0H3.78947V2.28571H2.52632C1.13684 2.28571 0 3.31429 0 4.57143V20.5714C0 21.8286 1.13684 22.8571 2.52632 22.8571H7.57895V20.5714H2.52632V9.14286ZM20.2105 4.57143V6.85714H2.52632V4.57143H20.2105ZM16.4211 18.2857H10.1053V20.5714H16.4211V24L21.4737 19.4286L16.4211 14.8571V18.2857ZM21.4737 14.8571V24H24V14.8571H21.4737Z" fill="white"/>'
    let magnifiericon = '<path fill="currentColor" fill-rule="evenodd" d="M11.5 7a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-.82 4.74a6 6 0 1 1 1.06-1.06l2.79 2.79a.75.75 0 1 1-1.06 1.06z" clip-rule="evenodd"/>'
    let scroll = 0
    let pspeed = 0.4
</script>

<svelte:window bind:scrollY={scroll} />

<section id="header">
    <div class="image" style:transform={`translate3d(0, ${scroll * pspeed}px, 0)`}></div>
    <div id="reservation">
        <div class="arrival">
            <input placeholder='Przyjazd'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">{@html arrivalicon}</svg>
        </div>
        <div class="departure">
            <input placeholder="Wyjazd">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">{@html departureicon}</svg>
        </div>
        <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">{@html magnifiericon}</svg></button>
    </div>
</section>

<style>
    #reservation {
        z-index: 3;
        position: absolute;
        bottom: 8%;
        left: 50%;
        transform: translate(-50%);
        display: grid;
        grid-template-columns: 1fr 1fr auto;
        gap: 20px;
        align-items: center;
        background-color: #243245;
        padding: 15px;
        border-radius: 10px;
        margin: 20px auto;
        width: 90%;
        max-width: 600px;
        box-shadow: 4px 5px 13px black;
    }
    #reservation .arrival, .departure {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: white;
        border-style: solid;
        border-width: 0px 0px 2px 0px;
    }
    #reservation button {
        padding: 10px 20px;
        background-color: #f0f0f0;
        color: #243245;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
    }
    #reservation input {
        height: 40px;
        outline: none;
        background-color: transparent;
        min-width: 50px;
        max-width: 150px;
        font-size: clamp(0.55rem, 0.375rem + 2vw, 1.125rem);
        letter-spacing: 2px;
    }
    @media (max-width: 540px) {
        #reservation button {
            padding: 8px 16px;
        }
        #reservation input {
            width: 100%;
            max-width: none;
            letter-spacing: normal;
        }
    }
    #header {
        height: 100vh;
        overflow: hidden;
        box-shadow: inset 0 -5px 20px #000;
    }
    #header .image {
        background-image: url('/main/header/osr.webp');
        background-size: cover;
        background-position: center;
        filter: brightness(0.8);
        z-index: 1;
        height: 100vh;
        position: relative;
    }
</style>