<script>
    const people = `<path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"/>`;
    const handle = `<path fill="currentColor" d="M12 2a10 10 0 1 0 5 18.66a1 1 0 1 0-1-1.73A8 8 0 1 1 20 12v.75a1.75 1.75 0 0 1-3.5 0V8.5a1 1 0 0 0-1-1a1 1 0 0 0-1 .79A4.45 4.45 0 0 0 12 7.5a4.5 4.5 0 1 0 3.3 7.5a3.74 3.74 0 0 0 6.7-2.25V12A10 10 0 0 0 12 2m0 12.5a2.5 2.5 0 1 1 2.5-2.5a2.5 2.5 0 0 1-2.5 2.5"/>`
    const phone = `<path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"/>`
    const calendar = `<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 4.625H7a4 4 0 0 0-4 4v8.75a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-8.75a4 4 0 0 0-4-4m-14 6h18m-4-8v4m-10-4v4m.375 7.515h1.028m7.194 0h1.028m-5.139 0h1.028m-5.139 3.084h1.028m7.194 0h1.028m-5.139 0h1.028"/>`
    const message = `<path fill="currentColor" d="M2 8.994A5.99 5.99 0 0 1 8 3h8c3.313 0 6 2.695 6 5.994V21H8c-3.313 0-6-2.695-6-5.994zM20 19V8.994A4.004 4.004 0 0 0 16 5H8a3.99 3.99 0 0 0-4 3.994v6.012A4.004 4.004 0 0 0 8 19zm-6-8h2v2h-2zm-6 0h2v2H8z"/>`
    
    let form = [
        {type: 'text', name: '', id: '', icon: people, tooltip: 'Imię i nazwisko', displayname: 'Imię i nazwisko'},
        {type: 'email', name: '', id: '', icon: handle, tooltip: 'Adres e-mail', displayname: 'Adres e-mail'},
        {type: 'tel', name: '', id: '', icon: phone, tooltip: 'Telefon', displayname: 'Telefon'},
        {type: '', name: '', id: '', icon: calendar, tooltip: 'Przyjazd - Wyjazd', displayname: 'Przyjazd - Wyjazd'},
        {type: 'text', name: '', id: '', icon: message, tooltip: 'Wiadomość', displayname: 'Wiadomość'}
    ];
</script>

<section id="form">
    <h6 class="visible">
        <span>Kontakt</span>
        <span>Info</span>
    </h6>
    <input class="checkbox" id="visibility" type="checkbox" name="visibility"/>
    <label for="visibility" class="visible"></label>
    <div class="style-3d style-2d">
        <div class="wrap-3d">
            <div class="front">
                <div class="center-wrap">
                    <div class="section">
                        <h4>Formularz kontaktowy</h4>
                        {#each form as { type, name, displayname, id, icon, tooltip }}
                        <label>
                            <div class="form-group">
                                <input type={type} name={name} class="form-style" placeholder={displayname} id={id} maxlength="32">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="input-icon">{@html icon}</svg>
                                <div class="tooltip">
                                    <span class="tooltiptext"><p>{tooltip}</p></span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"/></svg>
                                </div>
                            </div>
                        </label>
                        {/each}
                        <a href="https://owkala.pl" class="btn">wyślij</a>
                    </div>
                </div>
            </div>
            <div class="back"> 
                <div class="center-wrap">
                    <div class="section">
                        <p>
                            <b style="font-size: 20px;">Ośrodek Wczasowy „KALA”</b><br>
                            <a href="https://maps.app.goo.gl/teNF2gZ1h68BXJ9w8" target="_blank">ul. Moniuszki 5, 72-346 Pobierowo</a><br>
                            <b style="font-size: 20px;">Informacja i rezerwacja:</b><br>
                            e-mail: <a href="mailto:recepcja@owkala.pl">recepcja@owkala.pl</a><br>
                            tel./fax: <a href="tel:+48913864292">91 38 64 292</a><br>
                            tel. kom.: <a href="tel:+48602469714">602 469 714</a><br>
                            <b style="font-size: 20px;">Grupy zorganizowane:</b><br>
                            tel. kom.: <a href="tel:+48606446539">606 446 539</a>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2341.852859744738!2d14.929234877105728!3d54.058617321191285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa9d1be2779311%3A0x3cca2c07f8d3fc3b!2sMoniuszki%205%2C%2072-346%20Pobierowo!5e0!3m2!1spl!2spl!4v1716925575949!5m2!1spl!2spl" title="Dojazd Ośrodek Wczasowy KALA" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    @media screen and (min-width: 1025px) {
        #form .style-2d {
            position: relative;
            width: 440px;
            max-width: 100%;
            height: 650px;
            perspective: 800px;
            margin-top: 20px;
            margin-left: auto;
            margin-right: auto;
        }
        #form .front {
            width: 100%;
            height: 100%;
            background-color: #2a2b38;
            background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
            background-position: bottom center;
            background-repeat: no-repeat;
            background-size: 300%;
            position: absolute;
            border-radius: 6px;
            right: 52%;
        }
        #form .back {
            width: 100%;
            height: 100%;
            background-color: #2a2b38;
            background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
            background-position: bottom center;
            background-repeat: no-repeat;
            background-size: 300%;
            position: absolute;
            border-radius: 6px;
            left: 52%;
        }
    }
    @media screen and (max-width: 1024px) {
        #form .front, .back {
            width: 100%;
            height: 100%;
            background-color: #2a2b38;
            background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
            background-position: bottom center;
            background-repeat: no-repeat;
            background-size: 300%;
            position: absolute;
            border-radius: 6px;
            left: 0;
            top: 0;
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
            -webkit-backface-visibility: hidden;
            -moz-backface-visibility: hidden;
            -o-backface-visibility: hidden;
            backface-visibility: hidden;
        }
        #form .back {
            transform: rotateY(180deg);
        }
        [type="checkbox"]:checked,
        [type="checkbox"]:not(:checked){
            position: absolute;
            left: -9999px;
        }
        [type="checkbox"]:checked,
        [type="checkbox"]:not(:checked) {
            position: absolute;
            left: -9999px;
        }
        #form .checkbox:checked + label,
        #form .checkbox:not(:checked) + label {
            z-index: 1;
            position: relative;
            display: block;
            text-align: center;
            width: 60px;
            height: 16px;
            border-radius: 8px;
            padding: 0;
            margin: 10px auto;
            cursor: pointer;
            background-color: #ffeba7;
        }
        #form .checkbox:checked + label:before,
        #form .checkbox:not(:checked) + label:before {
            position: absolute;
            display: block;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            color: #ffeba7;
            background-color: #102770;
            z-index: 20;
            top: -10px;
            left: -10px;
            line-height: 36px;
            text-align: center;
            font-size: 24px;
            transition: all 0.5s ease;
        }
        #form .checkbox:not(:checked) + label:before {
            content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 36 36'%3E%3Cpath fill='gold' d='M21 12H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1M8 10h12V7.94H8Z' class='clr-i-outline clr-i-outline-path-1'/%3E%3Cpath fill='gold' d='M21 14.08H7a1 1 0 0 0-1 1V19a1 1 0 0 0 1 1h11.36L22 16.3v-1.22a1 1 0 0 0-1-1M20 18H8v-2h12Z' class='clr-i-outline clr-i-outline-path-2'/%3E%3Cpath fill='gold' d='M11.06 31.51v-.06l.32-1.39H4V4h20v10.25l2-1.89V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v28a1 1 0 0 0 1 1h8a3.44 3.44 0 0 1 .06-.49' class='clr-i-outline clr-i-outline-path-3'/%3E%3Cpath fill='gold' d='m22 19.17l-.78.79a1 1 0 0 0 .78-.79' class='clr-i-outline clr-i-outline-path-4'/%3E%3Cpath fill='gold' d='M6 26.94a1 1 0 0 0 1 1h4.84l.3-1.3l.13-.55v-.05H8V24h6.34l2-2H7a1 1 0 0 0-1 1Z' class='clr-i-outline clr-i-outline-path-5'/%3E%3Cpath fill='gold' d='m33.49 16.67l-3.37-3.37a1.61 1.61 0 0 0-2.28 0L14.13 27.09L13 31.9a1.61 1.61 0 0 0 1.26 1.9a1.55 1.55 0 0 0 .31 0a1.15 1.15 0 0 0 .37 0l4.85-1.07L33.49 19a1.6 1.6 0 0 0 0-2.27ZM18.77 30.91l-3.66.81l.89-3.63L26.28 17.7l2.82 2.82Zm11.46-11.52l-2.82-2.82L29 15l2.84 2.84Z' class='clr-i-outline clr-i-outline-path-6'/%3E%3Cpath fill='none' d='M0 0h36v36H0z'/%3E%3C/svg%3E");
        }
        #form .checkbox:checked + label:before {
            content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 20 20'%3E%3Cpath fill='gold' d='M12.432 0c1.34 0 2.01.912 2.01 1.957c0 1.305-1.164 2.512-2.679 2.512c-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0M8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141c-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467c1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271c.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20'/%3E%3C/svg%3E");
        }
        #form .checkbox:checked + label:before {
            transform: translateX(44px) rotate(-360deg);
        }
        #form .checkbox:checked ~ .style-3d .wrap-3d {
            transform: rotateY(180deg);
        }
        #form .style-3d {
            position: relative;
            width: 440px;
            max-width: 100%;
            height: 650px;
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
            perspective: 800px;
            margin-top: 20px;
            margin-left: auto;
            margin-right: auto;
        }
        #form .wrap-3d {
            width: 100%;
            height: 100%;
            position:absolute;    
            top: 0;
            left: 0;  
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
            transition: all 600ms ease-out; 
        }
    }
    @media screen and (min-width: 1025px) {
        #form .visible {
            visibility: hidden;
        }
        #form #visibility {
            visibility: hidden;
        }
    }
    #form iframe {
        margin-top: 10px;
        width: 100%;
        max-height: 20rem;
        min-height: 18rem;
    }
    #form .btn {
        margin-top: 1rem;
        border-radius: 4px;
        height: 44px;
        font-size: 13px;
        font-weight: 600;
        text-transform: uppercase;
        -webkit-transition : all 200ms linear;
        transition: all 200ms linear;
        padding: 0 30px;
        letter-spacing: 1px;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-align-items: center;
        -moz-align-items: center;
        -ms-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        -moz-justify-content: center;
        -ms-justify-content: center;
        justify-content: center;
        -ms-flex-pack: center;
        text-align: center;
        border: none;
        background-color: #ffeba7;
        color: #102770;
        box-shadow: 0 8px 24px 0 rgba(255,235,167,.2);
    }
    #form .form-group{ 
        position: relative;
        display: block;
        margin: 0;
        padding: 0;
    }
    #form .form-style {
        padding: 13px 20px;
        padding-left: 55px;
        height: 48px;
        width: 100%;
        font-weight: 500;
        border-radius: 4px;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: 0.5px;
        outline: none;
        color: #c4c3ca;
        background-color: #1f2029;
        border: none;
        -webkit-transition: all 200ms linear;
        transition: all 200ms linear;
        box-shadow: 0 4px 8px 0 rgba(21,21,21,.2);
        min-height: 50.2px;
        max-height: 120px;
    }
    #form .section {
        text-align: center;
    }
    #form .back a {
        color: gray;
        text-decoration: underline;
    }
    #form .section p {
        font-size: 15px; 
        line-height: 30px;
    }
    #form label {
        margin: 2px;
    }
    .tooltip {
        position: absolute;
        top: 8px;
        right: 15px;
        height: 10px;
        font-size: 30px;
        line-height: 48px;
        text-align: right;
        color: fff;
        -webkit-transition: all 200ms linear;
        transition: all 200ms linear;
    }
    #form .tooltiptext {
        font-size: 16px;
        visibility: hidden;
        width: 120px;
        background-color: #1f2029;
        color: #fff;
        text-align: center;
        border-radius: 6px 6px 6px 0px;
        position: absolute;
        z-index: 1;
        bottom: 180%;
        right: -50%;
        margin-left: -20px;
        border: 1px solid black;
    }
    #form .tooltip:hover .tooltiptext {
      visibility: visible;
    }
    #form {
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-size: 15px;
        line-height: 1.7;
        color: #c4c3ca;
        width: 100%;
        margin-bottom: 120px;
    }
    #form a {
        cursor: pointer;
        transition: all 200ms linear;
    }
    #form a:hover {
        text-decoration: none;
    }
    #form p {
        font-weight: 500;
        font-size: 14px;
        line-height: 1.7;
    }
    #form h4 {
        font-weight: 600;
        font-size: 20px;
        padding-bottom: 0.75rem;
    }
    #form h6 {
        transform: translate(-10px);
        text-align: center;
        padding-bottom: 0.75rem;
        margin-bottom: 0px;
    }
    #form h6 span{
        padding: 0 15px;
        text-transform: uppercase;
        font-weight: 600;
    }
    #form .center-wrap{
        position: absolute;
        width: 100%;
        padding: 0 35px;
        top: 50%;
        left: 0;
        transform: translate3d(0, -50%, 35px) perspective(100px);
        z-index: 20;
        display: block;
    }
    #form .form-style:focus,
    #form .form-style:active {
        border: none;
        outline: none;
        box-shadow: 0 4px 8px 0 rgba(21,21,21,.2);
    }
    #form .input-icon {
        position: absolute;
        top: 0;
        left: 18px;
        height: 48px;
        font-size: 24px;
        line-height: 48px;
        text-align: left;
        color: #ffeba7;
        -webkit-transition: all 200ms linear;
        transition: all 200ms linear;
    }
    #form .form-group input:-ms-input-placeholder  {
        color: #c4c3ca;
        opacity: 0.7;
        -webkit-transition: all 200ms linear;
        transition: all 200ms linear;
    }
    #form .form-group input::-moz-placeholder  {
        color: #c4c3ca;
        opacity: 0.7;
        -webkit-transition: all 200ms linear;
        transition: all 200ms linear;
    }
    #form .form-group input:-moz-placeholder  {
        color: #c4c3ca;
        opacity: 0.7;
        -webkit-transition: all 200ms linear;
        transition: all 200ms linear;
    }
    #form .form-group input::-webkit-input-placeholder  {
        color: #c4c3ca;
        opacity: 0.7;
        -webkit-transition: all 200ms linear;
        transition: all 200ms linear;
    }
    #form .form-group input:focus:-ms-input-placeholder  {
        opacity: 0;
        -webkit-transition: all 200ms linear;
        transition: all 200ms linear;
    }
    #form .form-group input:focus::-moz-placeholder  {
        opacity: 0;
        -webkit-transition: all 200ms linear;
        transition: all 200ms linear;
    }
    #form .form-group input:focus:-moz-placeholder  {
        opacity: 0;
        -webkit-transition: all 200ms linear;
        transition: all 200ms linear;
    }
    #form .form-group input:focus::-webkit-input-placeholder  {
        opacity: 0;
        -webkit-transition: all 200ms linear;
        transition: all 200ms linear;
    }
    #form .btn:active,
    #form .btn:focus{  
        background-color: #102770;
        color: #ffeba7;
        box-shadow: 0 8px 24px 0 rgba(16,39,112,.2);
    }
    #form .btn:hover{  
        background-color: #102770;
        color: #ffeba7;
        box-shadow: 0 8px 24px 0 rgba(16,39,112,.2);
    }
</style>