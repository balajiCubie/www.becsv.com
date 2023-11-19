function assignText(s){if((document.getElementById('chkReplaceAccents')).checked)s=s.removeDiacritics();document.getElementById('txt1').value=s;parseAndOptions(CSV);setupSortDD();document.getElementById('btnRun').click();}
function parseAndSort()
{parseAndOptions(CSV);setupSortDD();}
function reprocessCsv(){_.delay(parseAndSort,300);}
function run(){_.delay(runit,300);}
function runit(){if(CSV.mySortNeeded)parseAndOptions(CSV);var bSummarize=(document.getElementById('chkSummarize')).checked;var addHeader=(document.getElementById('chkAddHeader')).checked;document.getElementById('diva').innerHTML=csvToTable(CSV,addHeader,document.getElementById('chkLineNumbers').checked,bSummarize);document.getElementById('txta').value=csvToTable(CSV,addHeader,document.getElementById('chkLineNumbers').checked,bSummarize);spinit.stop(document.getElementById('divSpinner'));saveCsv();}
function runExample()
{assignText(getExampleCsv());}