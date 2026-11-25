// Card for one publication: cover image, venue, title, and links.
import Image from 'next/image';
import type {Publication} from '@/content/site';
export function PublicationCard({paper,index}:{paper:Publication;index:number}){return <article className="publication" id={paper.id}>
 <a className="paper-image" href={paper.links[0].href} aria-label={`Read ${paper.title}`}><Image src={paper.image} alt={paper.imageAlt} fill sizes="(max-width: 600px) 90vw, 270px"/><span className="paper-index">0{index+1}</span></a>
 <div className="paper-content"><div className="paper-meta"><span>{paper.venue} · {paper.year}</span>{paper.award&&<span className="award">{paper.award}</span>}</div><h3><a href={paper.links[0].href}>{paper.title}</a></h3><p className="authors">{paper.authors.map((author,i)=><span key={author}>{i>0?', ':''}{author==='Araj Shah'?<strong>{author}</strong>:author}</span>)}</p><p className="paper-summary">{paper.summary}</p><div className="resource-links">{paper.links.map(link=><a key={link.label} href={link.href}>{link.label}<span className="sr-only"> — {paper.title}</span></a>)}</div></div>
 </article>}
