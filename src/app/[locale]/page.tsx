import { getIntl } from "../../lib/intl";
import styles from "./globals.css";
import { i18n } from "../../../i18n-config";
import { Metadata, ResolvingMetadata } from "next";

type RouteProps = {
  params: { locale: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  props: RouteProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const intl = await getIntl(props.params.locale);

  return {
    title: intl.formatMessage({ id: "page.home.head.title" }),
    description: intl.formatMessage({
      id: "page.home.head.meta.description",
    }),
    alternates: {
      canonical: "https://example.pl",
      languages: {
        pl: "http://example.pl",
        en: "http://example.pl/en",
        de: "http://example.pl/de",
        "x-default": "http://example.pl",
      },
    },
  };
}

type HomeProps = {
  params: { locale: string };
};

export default async function Home({ params: { locale } }: HomeProps) {
  const intl = await getIntl(locale);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          {intl.formatMessage({ id: "page.home.title" })}
        </h1>

        <p className={styles.description}>
          {intl.formatMessage({ id: "page.home.description" })}
        </p>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  const locales = i18n.locales;

  return locales.map((locale) => ({
    locale: locale,
  }));
}