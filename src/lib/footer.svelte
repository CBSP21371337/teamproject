<script>
  const instagram = `<path d="M11.4286 22.8571C17.7404 22.8571 22.8571 17.7404 22.8571 11.4286C22.8571 5.11674 17.7404 0 11.4286 0C5.11674 0 0 5.11674 0 11.4286C0 17.7404 5.11674 22.8571 11.4286 22.8571Z" fill="white"/><path d="M14.4791 18H8.52089C6.5795 18 5 16.4207 5 14.4791V8.52089C5 6.57934 6.5795 5 8.52089 5H14.4791C16.4207 5 18 6.57934 18 8.52089V14.4793C18 16.4207 16.4207 18 14.4791 18ZM8.52089 6.08339C7.17685 6.08339 6.08339 7.17685 6.08339 8.52089V14.4793C6.08339 15.8233 7.17685 16.9168 8.52089 16.9168H14.4791C15.8231 16.9168 16.9166 15.8233 16.9166 14.4793V8.52089C16.9166 7.17685 15.8231 6.08339 14.4791 6.08339H8.52089Z" fill="#3586FF"/><path d="M11.502 14.75C9.7099 14.75 8.25195 13.2919 8.25195 11.5C8.25195 9.70779 9.7099 8.25 11.502 8.25C13.294 8.25 14.752 9.70779 14.752 11.5C14.752 13.2919 13.294 14.75 11.502 14.75ZM11.502 9.33339C10.3073 9.33339 9.33534 10.3053 9.33534 11.5C9.33534 12.6949 10.3073 13.6666 11.502 13.6666C12.6967 13.6666 13.6686 12.6949 13.6686 11.5C13.6686 10.3053 12.6968 9.33339 11.502 9.33339Z" fill="#3586FF"/><path d="M14.9523 8.7916C15.3636 8.7916 15.697 8.45817 15.697 8.04686C15.697 7.63555 15.3636 7.30212 14.9523 7.30212C14.541 7.30212 14.2075 7.63555 14.2075 8.04686C14.2075 8.45817 14.541 8.7916 14.9523 8.7916Z" fill="#3586FF"/>`
  const google = `<path d="M12.5071 13.6V9.34857H23.4225C23.5858 10.0686 23.7141 10.7429 23.7141 11.6914C23.7141 18.2171 19.2476 22.8571 12.5187 22.8571C6.08142 22.8571 0.856934 17.7371 0.856934 11.4286C0.856934 5.12 6.08142 0 12.5187 0C15.6674 0 18.303 1.13143 20.3205 2.98286L17.0085 6.13714C16.1689 5.36 14.6995 4.44571 12.5187 4.44571C8.65868 4.44571 5.50999 7.58857 5.50999 11.44C5.50999 15.2914 8.65868 18.4343 12.5187 18.4343C16.9852 18.4343 18.6295 15.4057 18.9327 13.6114H12.5071V13.6Z" fill="white"/>`
  const facebook = `<path d="M22.8571 11.4572C22.8571 5.13283 17.7371 0 11.4286 0C5.12 0 0 5.13283 0 11.4572C0 17.0025 3.93143 21.6198 9.14286 22.6853V14.8944H6.85714V11.4572H9.14286V8.59291C9.14286 6.38167 10.9371 4.58289 13.1429 4.58289H16V8.02005H13.7143C13.0857 8.02005 12.5714 8.53562 12.5714 9.16577V11.4572H16V14.8944H12.5714V22.8571C18.3429 22.2843 22.8571 17.4035 22.8571 11.4572Z" fill="white"/>`
  const booking = `<g clip-path="url(#clip0_110_15)"><path d="M23.4284 11.0677C23.4284 17.1802 18.3117 22.8571 11.9999 22.8571C5.68803 22.8571 0.571289 17.1802 0.571289 11.0677C0.571289 4.95516 5.68803 0 11.9999 0C18.3117 0 23.4284 4.95516 23.4284 11.0677Z" fill="white"/><path d="M10.9591 15.048L9.11816 15.0461V12.8448C9.11816 12.3745 9.3006 12.1297 9.70309 12.0738H10.9591C11.8549 12.0738 12.4343 12.6385 12.4343 13.5526C12.4343 14.4914 11.8695 15.047 10.9591 15.048ZM9.11816 9.1106V8.53117C9.11816 8.02417 9.33269 7.78304 9.80302 7.75187H10.7455C11.5532 7.75187 12.0373 8.23504 12.0373 9.0446C12.0373 9.6607 11.7054 10.3804 10.7749 10.3804H9.11816V9.1106ZM13.3099 11.3073L12.9771 11.1203L13.2677 10.8718C13.606 10.5812 14.1726 9.92749 14.1726 8.7998C14.1726 7.0725 12.8331 5.95856 10.7602 5.95856H8.39477V5.95764H8.12523C7.51096 5.98056 7.01862 6.48024 7.01221 7.09818V16.899H10.8069C13.1109 16.899 14.598 15.6448 14.598 13.7021C14.598 12.656 14.1176 11.7621 13.3099 11.3073Z" fill="#0C3B7C"/><path d="M15.5864 15.5451C15.5864 14.7964 16.1903 14.1907 16.9343 14.1907C17.6801 14.1907 18.2868 14.7964 18.2868 15.5451C18.2868 16.2928 17.6801 16.8995 16.9342 16.8995C16.1903 16.8995 15.5864 16.2928 15.5864 15.5451Z" fill="#00BAFC"/></g><defs><clipPath id="clip0_110_15"><rect width="22.8571" height="22.8571" fill="white" transform="translate(0.571289)"/></clipPath></defs>`
  let ikony = [
    {link: 'https://www.instagram.com/ow.kala', logo: instagram},
    {link: 'https://g.co/kgs/dL4CMUa', logo: google},
    {link: 'https://www.facebook.com/kalapobierowo', logo: facebook},
    {link: 'https://www.booking.com/hotel/pl/osrodek-wczasowy-kala', logo: booking}
  ];
</script>
<footer>
  <div class="waves">
    <div class="wave" id="wave1"></div>
    <div class="wave" id="wave2"></div>
    <div class="wave" id="wave3"></div>
    <div class="wave" id="wave4"></div>
  </div>
  <div class="footer-container" style="overflow: hidden; padding: auto">
      <div class="footer-box">
        <a href="/">
          <img src="/footer/kalalogo.webp" alt="Logo kala" class="logo">
        </a>
          <ul class="social-icon">
            {#each ikony as {link, logo}}
              <li class="social-icon__item">
                <a class="social-icon__link" href={link}><svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">{@html logo}</svg></a>
              </li>
            {/each}
          </ul>
      </div>
      <div class="footer-box footer-line">
        <div class="inline">
          <svg class="top" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.06024 0L9.45108 2.43195L14.4578 0.45153V6.28437H13.012V2.51018L10.1205 3.6541V6.28437H8.6747V3.59028L5.78313 1.98934V10.3509L7.13349 11.0989L6.40482 12.284L5.00675 11.5092L0 13.4896V2.80251L5.06024 0ZM4.33735 10.2871V1.98934L1.44578 3.59028V11.431L4.33735 10.2871ZM11.5663 8.34302C11.039 8.34302 10.5334 8.54183 10.1606 8.89573C9.78776 9.24963 9.57831 9.72962 9.57831 10.2301C9.57831 11.0893 10.1096 11.9141 10.7458 12.5783C11.04 12.8858 11.3364 13.1369 11.5663 13.316C11.7961 13.1376 12.0925 12.8858 12.3867 12.5783C13.0229 11.9141 13.5542 11.0893 13.5542 10.2301C13.5542 9.72962 13.3448 9.24963 12.972 8.89573C12.5991 8.54183 12.0935 8.34302 11.5663 8.34302ZM11.5663 15L11.1651 14.7468L11.1636 14.7461L11.1607 14.744L11.152 14.7386L11.1231 14.7193C10.9742 14.6197 10.8288 14.5153 10.6872 14.4064C10.3268 14.1294 9.98872 13.827 9.6759 13.502C8.95663 12.7513 8.13253 11.6032 8.13253 10.2301C8.13253 9.36563 8.4943 8.53656 9.13825 7.92528C9.7822 7.314 10.6556 6.97058 11.5663 6.97058C12.4769 6.97058 13.3503 7.314 13.9943 7.92528C14.6382 8.53656 15 9.36563 15 10.2301C15 11.6032 14.1759 12.7513 13.4566 13.502C13.0202 13.9545 12.5352 14.3625 12.0094 14.7193L11.9805 14.7386L11.9718 14.744L11.9689 14.7461L11.5663 15ZM10.6627 9.71545H12.4699V11.0879H10.6627V9.71545Z" fill="#FFE81E"/></svg>
          <h4>ADRES</h4>
        </div>
        <div class="footermove">
          <a href="https://maps.app.goo.gl/teNF2gZ1h68BXJ9w8" target="_blank">
            Ośrodek&nbsp;Wczasowy&nbsp;"KALA"<br> ul.&nbsp;Moniuszki 5<br> 72-346&nbsp;Pobierowo
          </a>
        </div>
      </div>
      <div class="footer-box footer-line">
        <div class="inline">
          <svg class="top" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.10526 12.6667L12.0526 15.1667V12.6667H13.6316C14.2597 12.6667 14.8621 12.4033 15.3063 11.9344C15.7505 11.4656 16 10.8297 16 10.1667V3.5C16 2.83696 15.7505 2.20107 15.3063 1.73223C14.8621 1.26339 14.2597 1 13.6316 1H4.15789C3.52975 1 2.92733 1.26339 2.48317 1.73223C2.039 2.20107 1.78947 2.83696 1.78947 3.5V7.25M1 16C1 15.558 1.16635 15.134 1.46246 14.8215C1.75857 14.5089 2.16018 14.3333 2.57895 14.3333H4.15789C4.57666 14.3333 4.97827 14.5089 5.27438 14.8215C5.57049 15.134 5.73684 15.558 5.73684 16M4.94737 11.8333C4.94737 12.2754 4.78102 12.6993 4.4849 13.0118C4.18879 13.3244 3.78718 13.5 3.36842 13.5C2.94966 13.5 2.54805 13.3244 2.25194 13.0118C1.95583 12.6993 1.78947 12.2754 1.78947 11.8333C1.78947 11.3913 1.95583 10.9674 2.25194 10.6548C2.54805 10.3423 2.94966 10.1667 3.36842 10.1667C3.78718 10.1667 4.18879 10.3423 4.4849 10.6548C4.78102 10.9674 4.94737 11.3913 4.94737 11.8333Z" stroke="#FFE81E" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <h4>KONTAKT</h4>
        </div>
        <div class="footermove">
          <a href="tel:+48602469714">(+48) 602 469 714</a><br>
          <a href="mailto:recepcja@owkala.pl">recepcja@owkala.pl</a>
        </div>
      </div>
  </div>
  <p style="text-align: center;">&copy; 2024 Ośrodek Wczasowy "KALA" Wszelkie prawa zastrzeżone.</p>
</footer>

<style>
  .footer-line {
    padding-left: 38px;
  }
  .footermove {
    padding-left: 32px;
    text-decoration: underline;
  }
  .inline .top {
    margin-top: 3px;
    margin-right: 7px;
    width: 25px;
    height: 25px;
  }
  .inline {
    display: flex;
  }
  footer .logo {
    margin: auto;
    margin-bottom: 15px;
    width: 230px;
    height: 67px;
  }
  footer {
    z-index: 2;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    background: #333;
    position: relative;
    width: 100%;
    background: #3586ff;
    padding: 20px 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
  }
  .footer-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1200px;
  }
  .footer-box {
    flex: 1;
    min-width: 300px;
    margin: 20px 0;
    text-align: left;
  }
  .footer-box h4 {
    font-size: 20px;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
  .social-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
  }
  .social-icon__item {
    list-style: none;
  }
  .social-icon__link {
    font-size: 2rem;
    color: #fff;
    margin: 0 10px;
    display: inline-block;
    transition: 0.5s;
  }
  .social-icon__link svg {
    width: 35px;
    height: 35px;
  }
  .social-icon__link:hover {
    transform: translateY(-5px);
  }
  footer p {
    text-align: center;
    font-size: 1em;
    font-weight: 300;
  }
  .wave {
    position: absolute;
    top: -40px;
    left: 0;
    width: 100%;
    height: 100px;
    background: url("/footer/wave.svg");
    background-size: 1000px 100px;
  }
  .wave#wave1 {
    z-index: -10;
    opacity: 1;
    bottom: 0;
    animation: animateWaves 4.5s linear infinite;
  }
  .wave#wave2 {
    z-index: -9;
    opacity: 0.5;
    bottom: 10px;
    animation: animate 4s linear infinite !important;
  }
  .wave#wave3 {
    z-index: -10;
    opacity: 0.2;
    bottom: 15px;
    animation: animateWaves 3.5s linear infinite;
  }
  .wave#wave4 {
    z-index: -9;
    opacity: 0.7;
    bottom: 20px;
    animation: animate 3s linear infinite;
  }
  @keyframes animateWaves {
    0% {
      background-position-x: 1000px;
    }
    100% {
      background-position-x: 0px;
    }
  }
  @keyframes animate {
    0% {
      background-position-x: -1000px;
    }
    100% {
      background-position-x: 0px;
    }
  }
  @media (max-width: 700px) {
    .footer-container {
      flex-direction: column;
      align-items: center;
    }
    .footer-box {
      margin: 20px 0;
    }
  }
</style>