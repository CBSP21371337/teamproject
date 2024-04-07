import * as React from "react";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

interface ContactItemProps {
  icon: string;
  children: React.ReactNode;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, children }) => (
  <div className="flex gap-5 justify-center">
    <Image src={icon} alt="" className="shrink-0 aspect-auto w-[50px]" />
    <div>{children}</div>
  </div>
);

const contactItems = [
  {
    icon: "/wmap.svg",
    content: (
      <>
        Ul. Moniuszki 5<br /> 72-346, Pobierowo
      </>
    ),
  },
  {
    icon: "/wmail.svg",
    content: <div className="my-auto">recepcja@owkala.pl</div>,
  },
  {
    icon: "/wphone.svg",
    content: <div className=" my-auto">(+48) 602-469-714</div>,
  },
];

const links = ["Strona Główna", "Kontakt", "Pokoje", "FAQ"];

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col px-4 py-8 w-full bg-neutral-900 max-md:max-w-full">
      <div className="justify-between max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex grow justify-center items-center self-stretch px-16 py-px max-md:px-5 max-md:max-w-full">
              <div className="flex flex-col items-center px-1 max-w-full w-[360px]">
                <Image
                  src="/sus.png"
                  alt="Logo"
                  className="max-w-full aspect-[3.57] w-[266px]"
                />
                <p className="self-stretch mt-6 text-xl text-center text-zinc-400">
                  Wyjątkowy ośrodek wczasowy oferujący <br /> doskonałe wakacyjne
                  doświadczenia.
                </p>
                <div className="flex gap-1.5 mt-10">
                  <Image
                    src="/wgoogle.svg"
                    alt="Google"
                    className="shrink-0 aspect-square fill-sky-500 w-[30px]"
                  />
                  <Image
                    src="/wdot.svg"
                    alt="Dot"
                    className="shrink-0 my-auto aspect-square w-[15px]"
                  />
                  <Image
                    src="/winstagram.svg"
                    alt="Instagram"
                    className="shrink-0 aspect-square fill-sky-500 w-[30px]"
                  />
                  <Image
                    src="/wdot.svg"
                    alt="Dot"
                    className="shrink-0 my-auto aspect-square w-[15px]"
                  />
                  <Image
                    src="/wfacebook.svg"
                    alt="Facebook"
                    className="shrink-0 aspect-square fill-sky-500 w-[30px]"
                  />
                  <Image
                    src="/wdot.svg"
                    alt="Dot"
                    className="shrink-0 my-auto aspect-square w-[15px]"
                  />
                  <Image
                    src="/wbooking.svg"
                    alt="Booking"
                    className="shrink-0 aspect-square fill-sky-500 w-[30px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex justify-center items-center self-stretch px-16 my-auto text-xl text-center text-white max-md:px-5 max-md:mt-3 max-md:max-w-full">
              <div className="flex flex-col max-w-full w-[500px]">
                {contactItems.map((item, index) => (
                  <ContactItem key={index} icon={item.icon}>
                    {item.content}
                  </ContactItem>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex grow justify-center items-center self-stretch px-16 text-xl text-center text-zinc-400 max-md:px-5 max-md:max-w-full">
              <div className="flex flex-col items-center">
                <h2 className="text-1xl font-bold text-white capitalize">
                  Linki
                </h2>
                {links.map((link, index) => (
                  <div key={index} className={index === 0 ? "self-stretch mt-5" : "mt-5"}>
                    {link}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-center mt-2.5 text-l text-center text-zinc-600 max-md:max-w-full">
        © Ośrodek Wczasowy Kala. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  );
};

export default Footer;