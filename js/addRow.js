function addRow(tableID) {
	var table = document.getElementById(tableID);
	var rowCount = table.rows.length;
	var row = table.insertRow(rowCount);

	var colCount = table.rows[1].cells.length;

	for(var i=0; i<colCount; i++) {

		var newcell	= row.insertCell(i);

		newcell.innerHTML = table.rows[1].cells[i].innerHTML;

		if(newcell.children.length != 0) {
			if(newcell.childNodes[0].type == "text") {
				newcell.childNodes[0].value = "";
			}
			else if (newcell.childNodes[0].type == "select-one") {
				newcell.childNodes[0].selectedIndex = 0;
			}
			else newcell.childNodes[0].value = "";
		}
	}

	// clear any data
    table.rows[rowCount].cells[1].innerHTML = "";
    table.rows[rowCount].cells[2].innerHTML = "";
    table.rows[rowCount].cells[3].innerHTML = "";
}