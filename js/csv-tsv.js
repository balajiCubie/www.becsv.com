    function assignText(s) {
        document.getElementById('txt1').value = s;
        parseAndOptions(CSV);
        setupSortDD();
        document.getElementById('btnRun').click();
    }
    function runit() {
        var delimiter = radiovalue(document.forms[0].outsep);
        var append = document.getElementById('chkAppend').checked;
        var nobreaks = document.getElementById('chkNoBreaks').checked;
        var bQuotes = (document.getElementById('chkCsvQuotes')).checked;
        if (delimiter == "o") delimiter = document.getElementById("outSepOtherVal").value;
        if (CSV.mySortNeeded) parseAndOptions(CSV);
        if(!append) {
           document.getElementById('txta').value = csvToCsv(CSV, delimiter, document.getElementById('chkHeader').checked, document.getElementById('chkForce').checked, document.getElementById('chkDefaultHeader').checked, nobreaks, bQuotes);
        } else {
           document.getElementById('txta').value += csvToCsv(CSV, delimiter, document.getElementById('txta').value.length==0 && document.getElementById('chkHeader').checked, document.getElementById('chkForce').checked, document.getElementById('chkDefaultHeader').checked, nobreaks, bQuotes);
        }
        saveCsv();
    }
    function runExample()
    {
        document.getElementById('chkHeader').checked = true;
        assignText(getExampleCsv());
        if (document.getElementById("btnColsReset")) document.getElementById("btnColsReset").click();
    }
