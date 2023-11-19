function assignText(s){document.getElementById("txtLatCol").value="";document.getElementById("txtLongCol").value="";if((document.getElementById('chkReplaceAccents')).checked)s=s.removeDiacritics();document.getElementById('txt1').value=s;parseAndOptions(CSV);setupSortDD();guessLatLon();document.getElementById('btnRun').click();}
function genit(){if(CSV.mySortNeeded)parseAndOptions(CSV);guessLatLon();document.getElementById('txta').value=csvToKml(CSV,document.getElementById('txtNameCol').value,document.getElementById('txtDescCol').value,document.getElementById('txtLatCol').value,document.getElementById('txtLongCol').value,document.getElementById('txtDescCol2').value);if(document.getElementById("txtLatCol").value==""&&document.getElementById("txtLongCol").value==""){alert("Please enter the Latitude and Longitude Field #s");}
saveCsv();}
function guessLatLon()
{var j;var lat=document.getElementById("txtLatCol").value;var lon=document.getElementById("txtLongCol").value;if(CSV.table.length<1)return true;for(j=1;j<=CSV.arHeaderRow.length;j++){if(CSV.statsCnt[j-1].fieldType=="N")
{if(lat==""&&CSV.arHeaderRow[j-1]&&CSV.arHeaderRow[j-1].match(/lat/i)){lat=j;}
else if(lon==""&&CSV.arHeaderRow[j-1]&&CSV.arHeaderRow[j-1].match(/lon|lng/i)){lon=j;}}
if(lat!=""&&lon!="")break;}
if(lat!=""){document.getElementById("txtLatCol").value=lat;}
if(lon!=""){document.getElementById("txtLongCol").value=lon;}
return true;}
function runExample()
{document.getElementById("txtLatCol").value="";document.getElementById("txtLongCol").value="";document.getElementById('txt1').value=getExampleKml();parseAndOptions(CSV);setupSortDD();guessLatLon();document.getElementById('btnRun').click();}