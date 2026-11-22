// Robots rules: allow all crawlers on the public site, disallow otherwise.
import type {MetadataRoute} from 'next';
import {siteUrl,isPublicSite} from '@/content/url';
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:'*',...(isPublicSite?{allow:'/'}:{disallow:'/'})},...(isPublicSite?{sitemap:`${siteUrl}/sitemap.xml`}:{})}}
