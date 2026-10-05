import type { Metadata } from 'next';
import {profile} from '@/content/site';
import {siteUrl,isPublicSite} from '@/content/url';
import './globals.css';
export const metadata:Metadata={metadataBase:new URL(siteUrl),title:'Araj Shah',description:profile.description,authors:[{name:profile.name}],...(isPublicSite?{alternates:{canonical:'/'}}:{}),openGraph:{title:'Araj Shah',description:profile.description,type:'website',locale:'en_US',siteName:'Araj Shah',...(isPublicSite?{url:siteUrl}:{}),images:[{url:'/images/araj-shah.jpg',width:400,height:400,alt:'Araj Shah'}]},twitter:{card:'summary',title:'Araj Shah',description:profile.description,images:['/images/araj-shah.jpg']},robots:{index:isPublicSite,follow:true},icons:{icon:'/icon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
