function assignText(s)
{
   if((document.getElementById('chkReplaceAccents')).checked)s = s.removeDiacritics();
   document.getElementById('txt1').value = s;
   parseAndOptions(CSV);
   setupSortDD();
   document.getElementById('btnRun').click();
}
function runit()
{
   if(CSV.mySortNeeded)parseAndOptions(CSV);
   document.getElementById('txta').value = csvToYaml( CSV );
   saveCsv();
}
function runExample()
{
   document.getElementById('txt1').value=getExampleCsv();
   parseAndOptions(CSV);
   setupSortDD();    
   document.getElementById('btnColsReset').click();
   document.getElementById('btnRun').click();
}
function csvToYaml(oCsv)
{
  var j=0,k,col;
  var hdr;
  var s="---\n";
  var a = [];
  var x = 0;
  var v = "";
  var fheader = "";
  var addXSpaces = "   ";
  
  oCsv = oCsv || CSV; 
            
  if (oCsv.table.length===0) return s;
  a = getFldPosArr(oCsv);
  hdr=getCsvHeader(oCsv);
  for(j=0;j<oCsv.table.length;j++) // each row
  {
     s += "-\n";
     if(csvRedQuery && csvRedQuery.query!="") {
        v=temHandler(oCsv, csvRedQuery.query, j, j );
        if (v.toString().left(5)=="false") continue;   
     }
     for (x = 0; x < a.length; x++) { // for each field
         fheader = "";
         k = a[x]-1;
         if(k>=oCsv.table[j].length)v="";
         else v = oCsv.table[j][k];

         if(k>=oCsv.arHeaderRow.length)fheader="Field-" + (k+1);
         else fheader = oCsv.arHeaderRow[k].replace(/\r\n|\r|\n/g, '_');

         s+= "    " + fheader + ": " + v.toYaml() + "\n";
     }
  }

  return s; 
}

