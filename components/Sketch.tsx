export function Sketch({ kind = 'network' }: { kind?: string }) {
  const pts = Array.from({length:22},(_,i)=>({x:55+(i*47%170),y:32+(i*73%130)}));
  return <svg viewBox="0 0 280 195" fill="none" className="sketch" aria-hidden="true">
    <g stroke="currentColor" strokeWidth=".7">
    {kind==='network' ? <>{pts.map((p,i)=><g key={i}>{pts.slice(i+1).filter(q=>Math.hypot(p.x-q.x,p.y-q.y)<65).map((q,j)=><path key={j} d={`M${p.x} ${p.y} L${q.x} ${q.y}`} opacity=".35"/>)}<circle cx={p.x} cy={p.y} r={i%3===0?2.4:1.5} fill="currentColor"/></g>)}<ellipse cx="140" cy="98" rx="106" ry="78" strokeDasharray="2 6" opacity=".3"/></> : <>
    {Array.from({length:kind==='dynamics'?14:5},(_,i)=><path key={i} d={kind==='dynamics'?`M30 ${115+i*3} C80 ${15+i*6},105 ${15+i*2},140 ${75+i*5} S210 ${180-i*6},250 ${75+i*4}`:`M30 ${95+i*12} C70 ${180-i*25},130 ${-10+i*28},250 ${65+i*17}`} opacity={.25+i*.035}/>)}
    <path d="M25 170H260M35 180V15" opacity=".4"/><path className="draw-line" d="M36 145C80 130 87 45 137 81S215 160 251 78" strokeWidth="1.2"/>
    {[ [36,145],[88,102],[137,81],[201,130],[251,78] ].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="3" fill="var(--paper)"/>)}
    </>}
    </g>
  </svg>
}
