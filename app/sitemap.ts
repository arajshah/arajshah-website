import type {MetadataRoute} from 'next';
import {siteUrl,isPublicSite} from '@/content/url';
export default function sitemap():MetadataRoute.Sitemap{return isPublicSite?[{url:siteUrl,lastModified:'2026-10-05',changeFrequency:'monthly',priority:1}]:[]}
