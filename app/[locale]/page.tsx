import { Metadata, ResolvingMetadata } from "next";
import { i18n } from "../../i18n-config";
import { getIntl } from "../../lib/intl";

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
    title: intl.formatMessage({ id: "Navbar.Main" }),
    description: intl.formatMessage({
      id: "Navbar.Main",
    }),
    alternates: {
      canonical: "https://example.pl",
      languages: {
        pl: "http://example.pl/pl",
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
    <div>
      <main>
        <h1>
          {intl.formatMessage(
            { id: "Navbar.Main" },
          )}
        </h1>

        <p>
          {intl.formatMessage({ id: "Navbar.Main" })}
        </p>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  const { locales } = i18n;

  return locales.map((locale) => ({
    locale: locale,
  }));
}