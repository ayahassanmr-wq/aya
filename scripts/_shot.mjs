import puppeteer from 'puppeteer-core';
const [url,out,sel,w=1440,h=900]=process.argv.slice(2);
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const p=await b.newPage();await p.setViewport({width:+w,height:+h});
await p.goto(url,{waitUntil:'networkidle0'});await new Promise(r=>setTimeout(r,4500));
const y=await p.evaluate(s=>document.querySelector(s).getBoundingClientRect().top+scrollY,sel);
await p.mouse.move(700,400);let d=0;while(d<y-40){await p.mouse.wheel({deltaY:200});d+=200;await new Promise(r=>setTimeout(r,60));}
await new Promise(r=>setTimeout(r,1500));await p.screenshot({path:out});await b.close();
