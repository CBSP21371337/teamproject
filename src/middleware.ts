import createMiddleware from 'next-intl/middleware';

const middleware = createMiddleware({
  locales: ['pl', 'en', 'de'],
  defaultLocale: 'pl'
});

export default middleware;

export const config = {
  matcher: ['/', '/(de|pl|en)/:page*']
};
