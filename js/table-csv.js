function assignText(s){document.getElementById('txt1').value=s;document.getElementById('btnRun').click();}
function runit(){var delimiter=radiovalue(document.getElementById('frm1').outsep);var noMultiLines=document.getElementById('chkNoBreaks').checked;if(delimiter=="o")delimiter=document.getElementById("outSepOtherVal").value;var whichTable=document.getElementById('selTabNum').value;whichTable=whichTable||"0";var bQuotes=(document.getElementById('chkCsvQuotes')).checked;var removeTags=(document.getElementById('chkRemoveTags')).checked;var html=document.getElementById('divHtml');html.innerHTML=document.getElementById('txt1').value.replace(/<script/gmi,"<xxxxx");var s="";var cells;var value;var tbl=html.getElementsByTagName('table');var cnt=tbl.length;var re=new RegExp("<\/?\\w+((\\s+\\w+(\\s*=\\s*(?:\".*?\"|'.*?'|[^'\">\\s]+))?)+\\s*|\\s*)\/?>",'igm');for(var j=0;j<tbl.length;j++){if((""+(j+1))!=whichTable&&whichTable!="0")continue;rows=tbl[j].getElementsByTagName('tr');for(var k=0;k<rows.length;k++){if('querySelectorAll'in document){cells=rows[k].querySelectorAll('td,th');}else{cells=rows[k].getElementsByTagName('td');if(!cells||cells.length==0){cells=rows[k].getElementsByTagName('th');}}
for(var n=0;n<cells.length;n++){value=cells[n].innerHTML;if(value==null)value="";else value+="";value=value.replace(/\r\n|\r|\n/gmi,' ');if(noMultiLines)value=value.replace(/\n|<br>|<br\/>|<br \/>/gmi,' ');else value=value.replace(/\n|<br>|<br\/>|<br \/>/gmi,'\n');if(removeTags)value=value.replace(re,'');value=_.unescape(value);value=value.replace(/&nbsp;/gmi," ");value=value.trim();if(bQuotes){s+='"'+value.replace(/"/gmi,'""')+'"'+delimiter;}
else{s+=value.toCsv(delimiter,'"')+delimiter;}}
s=s.slice(0,delimiter.length*-1);s+="\n";}}
document.getElementById('txta').value=s;if(cnt<1&&document.getElementById('txt1').value.trim()!=""){window.alert('No TABLE tag found in HTML. Please check your input.');}
s="<select id=\"selTabNum\" class=\"form-control\"  onchange=\"document.getElementById('btnRun').click()\">";s+="<option value=0>-All-</option>"
for(j=0;j<cnt;j++){s+="<option value=\""+(j+1)+"\" ";if((j+1)==whichTable)s+=" selected";s+=">"+getOrdinal(j+1)+"</option>";}
s+="</select>";document.getElementById("spanTabNum").innerHTML=s;document.getElementById('spanCount').innerHTML="(Tables found: "+cnt+")";}