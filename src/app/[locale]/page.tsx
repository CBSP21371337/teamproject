import { useTranslations } from "next-intl";
import Image from "next/image";
import logoimg from "../../assets/Main/logoblack.png";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <>
      <main className="lg:px-[160px] sm:px-[40px] px-[16px] bg-gray-50 h-[100vh]">
        <div className="flex md:flex-row flex-col items-start justify-between md:pt-32 pt-12 md:text-left text-center">
          <aside className="max-w-[550px] md:mr-20">
            <h2 className="md:text-5xl text-3xl animate pop delay-1">{t("title")}</h2>
            <p
              className="pt-5 animate pop"
              dangerouslySetInnerHTML={{ __html: t("title") }}
            ></p>
          </aside>
          <aside className="md:w-auto w-full md:block flex items-center justify-center md:pt-0 pt-10">
            <Image src={logoimg} width={"600"} height={"600"} alt="" className="animate pop delay-2 "/>
          </aside>
        </div>
      </main>
    </>
  );
}
