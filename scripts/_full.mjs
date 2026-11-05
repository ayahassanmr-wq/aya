import puppeteer from 'puppeteer-core';
const [url,out,w=1440,h=900]=process.argv.slice(2);
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const p=await b.newPage();await p.setViewport({width:+w,height:+h});
await p.goto(url,{waitUntil:'networkidle0'});await new Promise(r=>setTimeout(r,4500));
await p.mouse.move(+w/2,300);
const H=await p.evaluate(()=>document.documentElement.scrollHeight);
for(let y=0;y<H;y+=300){await p.mouse.wheel({deltaY:300});await new Promise(r=>setTimeout(r,90));}
await new Promise(r=>setTimeout(r,1500));
await p.evaluate(()=>{window.scrollTo(0,0);document.querySelectorAll('[data-sp]').forEach(e=>e.style.setProperty('--sp','1'));});
await new Promise(r=>setTimeout(r,800));
await p.screenshot({path:out,fullPage:true});await b.close();
