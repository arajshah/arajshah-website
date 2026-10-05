const configured = process.env.SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');
export const siteUrl = new URL(configured).origin;
export const isPublicSite = !new URL(siteUrl).hostname.match(/^(localhost|127\.0\.0\.1)$/);
