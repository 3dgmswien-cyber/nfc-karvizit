'use strict';
function escapeVCard(s){return String(s).replace(/\\/g,'\\\\').replace(/\r\n|\r|\n/g,'\\n').replace(/;/g,'\\;').replace(/,/g,'\\,');}
function phoneValue(p){return String(p.telefon||'').replace(/[\s()-]/g,'');}
function validPhone(s){return /^\+[1-9][0-9]{6,14}$/.test(s);}
function cardURL(id){const u=new URL('index.html',location.href);u.searchParams.set('k',id);return u.href;}
function foldLine(line){let out='',part='',bytes=0;for(const c of line){const n=new TextEncoder().encode(c).length;if(bytes+n>75){out+=part+'\r\n';part=' ';bytes=1;}part+=c;bytes+=n;}return out+part;}
function vcard(p,url){const e=escapeVCard;return ['BEGIN:VCARD','VERSION:3.0','N:'+e(p.soyisim)+';'+e(p.isim)+';;;','FN:'+e(p.isim+' '+p.soyisim),'ORG:3D GMS Wien',...(!p.ornek&&validPhone(phoneValue(p))?['TEL;TYPE=CELL:'+phoneValue(p)]:[]),'URL:'+e(url),'END:VCARD'].map(foldLine).join('\r\n')+'\r\n';}
function downloadFile(name,content,type){const url=URL.createObjectURL(new Blob([content],{type}));const a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);}
async function copyText(value){if(navigator.clipboard&&window.isSecureContext){try{await navigator.clipboard.writeText(value);return true;}catch{}}return false;}
function el(tag,text,cls){const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n;}
