'use client';
import { useState } from 'react';
const stages = [
 {title:'Represent',symbol:'zₜ = e(oₜ)',description:'What structure in an observation is useful for understanding the world?'},
 {title:'Predict',symbol:'ẑₜ₊₁ = f(zₜ, aₜ)',description:'How can a learned model capture the way that structure changes over time?'},
 {title:'Plan & act',symbol:'aₜ = π(zₜ)',description:'How can predictions inform decisions, planning, and control?'},
];
export function ModelDiagram(){
 const [stage,setStage]=useState(0);
 return <div className="model-diagram">
  <div className="diagram-top"><span className="eyebrow">A thread of questions</span><span className="diagram-note">observation → action</span></div>
  <svg viewBox="0 0 800 235" fill="none" aria-hidden="true">
   <defs><marker id="arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0L6 3.5L0 7" stroke="currentColor" fill="none"/></marker></defs>
   <g stroke="currentColor" strokeWidth=".8">
    {Array.from({length:36},(_,i)=><circle key={i} cx={95+(i*31%130)} cy={36+(i*47%140)} r={i%4===0?2.5:1.3} opacity={.3+(i%4)*.15}/>)}
    <ellipse cx="160" cy="105" rx="90" ry="65" transform="rotate(-20 160 105)" opacity=".25"/>
    {Array.from({length:11},(_,i)=><path key={i} d={`M310 ${95+i*6}Q360 ${-15+i*7} 405 ${90+i*4}T492 ${80+i*5}`} opacity=".35"/>)}
    <path className="draw-line" d="M310 115Q360 15 405 110T492 110" strokeWidth="1.5"/>
    <path d="M570 160C602 145 620 103 649 91S700 65 735 34M649 91Q674 113 726 112M649 91Q633 47 660 27M602 132Q643 160 710 175" opacity=".55"/>
    {[[570,160],[602,132],[649,91],[690,66],[735,34],[726,112],[660,27],[710,175]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="4" fill="var(--paper)"/>)}
    <path d="M255 108H291M509 108H552" markerEnd="url(#arrow)"/>
    <path d="M686 199C580 238 294 232 161 199" strokeDasharray="3 6" opacity=".45" markerEnd="url(#arrow)"/>
   </g>
  </svg>
  <div className="diagram-stages" aria-label="Explore research questions">{stages.map((s,i)=><button key={s.title} type="button" aria-pressed={stage===i} onClick={()=>setStage(i)}><span className="stage-number">0{i+1}</span><span>{s.title}</span><span className="formula">{s.symbol}</span></button>)}</div>
  <p className="diagram-caption" aria-live="polite">{stages[stage].description}</p>
 </div>
}
