import React from "react";
import { IntlProvider } from "react-intl";

async function getMessages(locale: string) {
  return await import(`../../lang/${locale}.json`);
}

type NavbarContainerProps = {
  locale: string;
  children: React.ReactNode;
};

async function NavbarContainer({ locale, children }: NavbarContainerProps) {
  const messages = await getMessages(locale);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <div className="nav">{children}</div>
    </IntlProvider>
  );
}

export default NavbarContainer;