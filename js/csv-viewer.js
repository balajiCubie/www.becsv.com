function ieReadLocalFile(that,callback){if(!that.value)return;if(that.value.length<=0)return;var request;if(window.XMLHttpRequest&&false){request=new XMLHttpRequest();}
else{request=new ActiveXObject("Msxml2.XMLHTTP");}
var fn=that.value;request.open('get',fn,true);request.onreadystatechange=function()
{if(request.readyState==4&&(request.status==200||request.status==0)){callback(request.responseText);}}
request.send();}
function readLocalFile(that,callback)
{var reader=new FileReader();if(that.files&&that.files[0]){var reader=new FileReader();reader.onload=function(e){callback(e.target.result);};reader.readAsText(that.files[0]);}}
function loadTextFile(f,callback)
{(navigator.appName.search('Microsoft')>-1)?ieReadLocalFile(f,callback):readLocalFile(f,callback);};function clearAll()
{(document.getElementById('frm1')).reset();assignText("");}
function assignText(s){document.getElementById('txt1').value=s;reprocessCsv();}
function parseAndSort()
{parseAndOptions(CSV);showGrid();}
function reloadCsv()
{var s="";var o=$("#dataTable").handsontable("getData");if(CSV.table.length>0)return;CSV.autodetect=false;CSV.delimiter="\t";try{for(var j=0;j<o.length-1;j++)
{o[j].pop();for(var k=0;k<o[j].length;k++){if(!o[j][k])continue;o[j][k]=(""+o[j][k]).toCsv("\t");}
s+=o[j].join("\t")+"\n";}}
catch(e)
{}
assignText(s);}
function reprocessCsv(){_.delay(parseAndSort,300);}
function showGrid()
{var resizeTimeout;var availableWidth=null;var availableHeight=null;var $window=$(window);var dataTable=$('#dataTable');var calculateSize=function(){var offset=dataTable.offset();availableWidth=720;availableHeight=700;};$("#dataTable").handsontable({data:(document.getElementById('txt1').value=="")?[[]]:CSV.table||[],startRows:15,startCols:(1>CSV.maxColumnsFound)?CSV.maxColumnsFound:1,minCols:1,minRows:1,manualColumnResize:true,manualColumnMove:true,columnSorting:true,cells:function(row,col,prop){if(!CSV)return;if(!CSV.statsCnt)return;if(col>=CSV.statsCnt.length)return;if(CSV.statsCnt[col].fieldType=="I"||CSV.statsCnt[col].fieldType=="N"){this.type="numeric";if(CSV.statsCnt[col].fieldDecs>0)this.format="0."+"0".repeat(CSV.statsCnt[col].fieldDecs);}},colHeaders:(document.getElementById('txt1').value==""||!CSV.isFirstRowHeader)?[]:CSV.arHeaderRow,rowHeaders:true,contextMenu:true,scrollH:'auto',scrollV:'auto',stretchH:'all',minSpareRows:1,minSpareCols:1,autoWrapRow:true,width:function(){if(!availableWidth){calculateSize();}
return availableWidth;},height:function(){if(!availableHeight)calculateSize();return availableHeight;}});var cols=[];var setit=false;if(CSV.table.length>0){for(j=0;j<CSV.table[0].length;j++){cols.push({});if(j<CSV.statsCnt.length&&(CSV.statsCnt[j].fieldType=="N"||CSV.statsCnt[j].fieldType=="I")){cols[j].type="numeric";setit=true;}}
if(setit){$("#dataTable").handsontable("updateSettings",{columns:cols});}}
$("#dataTable").handsontable("selectCell",0,0);$("#dataTable").handsontable("render");}