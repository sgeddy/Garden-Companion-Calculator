function checkCompatibility(tableID) {

    // Get table and rowcount references
    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;

    // Clear previous data
    document.getElementById("COMPATIBILITY").innerHTML = "";
    document.getElementById("noSelection").innerHTML = "";

    for(var i=1; i<rowCount; i++) {
        var row = table.rows[i];
        row.cells[1].innerHTML = "";
        row.cells[2].innerHTML = "";
        row.cells[3].innerHTML = "";
    }

    // Iterate through rows after the header
    for(var i=1; i<rowCount; i++) {

        var row = table.rows[i];
        var cell = row.cells[0];

        // Store the selected plant name.
        var plantName = table.rows[i].cells[0].children[1].value;

        if (plantName == "Asparagus") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {

                var row2 = table.rows[j];

                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Check if plant name is the same
                if (plantName2 == plantName) {}

                // Check if plant is compatible
                else if (plantName2 == "Basil" || plantName2 == "Beets" || plantName2 == "Lettuce" || plantName2 == "Parsley" || plantName2 == "Spinach" || plantName2 == "Tomatoes") {
                        row.cells[2].innerHTML += plantName2 + "<br>\n";
                        //row2.cells[2].innerHTML += plantName2 + "<br>\n";
                    }
                
                // Check if plant name is left blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("COMPATIBILITY").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to No Interaction
                else {
                    //row2.cells[3].innerHTML += plantName2 + "<br>\n";
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }
        }  
        
        else if (plantName == "Basil") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {

                var row2 = table.rows[j];

                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Check if plant name is the same
                if (plantName2 == plantName) {}

                // Check if plant is compatible
                else if (plantName2 == "Asparagus" || plantName2 == "Eggplant" || plantName2 == "Peppers" || plantName2 == "Tomatoes") {
                    row.cells[2].innerHTML += plantName2 + "<br>\n";
                    //row2.cells[2].innerHTML += plantName2 + "<br>\n";
                }
                
                // Check if plant name is blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("noSelection").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to No Interaction
                else {
                    //row2.cells[3].innerHTML += plantName2 + "<br>\n";
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }
        }  

        else if (plantName == "Beans") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {

                var row2 = table.rows[j];

                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Check if current row is the same plant
                if (plantName2 == plantName) {}

                // Check if plant is compatible
                else if (plantName2 == "Broccoli" || plantName2 == "Cabbage" || plantName2 == "Carrots" || plantName2 == "Cauliflower" || plantName2 == "Celery"
                    || plantName2 == "Corn" || plantName2 == "Cucumbers" || plantName2 == "Eggplant" || plantName2 == "Peas" || plantName2 == "Potatoes" || plantName2 == "Radishes" || plantName2 == "Squash" || plantName2 == "Strawberries" || plantName2 == "Tomatoes") {
                        row.cells[2].innerHTML += plantName2 + "<br>\n";
                        //row2.cells[2].innerHTML += plantName2 + "<br>\n";
                }
                
                // Check if plant is combative
                else if (plantName2 == "Garlic" || plantName2 == "Peppers" || plantName2 == "Onions" || plantName2 == "Sunflowers") {
                    row.cells[1].innerHTML += plantName2 + "<br>\n";
                    //row2.cells[1].innerHTML += plantName2 + "<br>\n";
                }

                // Check if plant name is left blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("noSelection").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to the No Interaction column
                else {
                    //row2.cells[3].innerHTML += plantName2 + "<br>\n";
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }  
        }

        else if (plantName == "Beets") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {

                var row2 = table.rows[j];

                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Do nothing if the plantname for the current row is the same
                if (plantName2 == plantName) {}

                // Check for compatible plants
                else if (plantName2 == "Asparagus" || plantName2 == "Broccoli" || plantName2 == "Cauliflower" || plantName2 == "Lettuce" || plantName2 == "Mint" || plantName2 == "Onions") {
                        row.cells[2].innerHTML += plantName2 + "<br>\n";
                        //row2.cells[2].innerHTML += plantName2 + "<br>\n";
                }
                
                // Check for combative plants
                else if (plantName2 == "Mustard" || plantName2 == "Pole Beans") {
                    row.cells[1].innerHTML += plantName2 + "<br>\n";
                    //row2.cells[1].innerHTML += plantName2 + "<br>\n";
                }

                // Check if plant name is left blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("noSelection").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to the No Interaction column
                else {
                    //row2.cells[3].innerHTML += plantName2 + "<br>\n";
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }  
        }

        else if (plantName == "Borage") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {

                var row2 = table.rows[j];

                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Do nothing if the plantname for the current row is the same
                if (plantName2 == plantName) {}

                // Check for compatible plants
                else if (plantName2 == "Tomatoes") {
                        row.cells[2].innerHTML += plantName2 + "<br>\n";
                        //row2.cells[2].innerHTML += plantName2 + "<br>\n";
                }        

                // Check if plant name is left blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("noSelection").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to the No Interaction column
                else {
                    //row2.cells[3].innerHTML += plantName2 + "<br>\n";
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }  
        }

        else if (plantName == "Broccoli") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {

                var row2 = table.rows[j];

                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Do nothing if the plantname for the current row is the same
                if (plantName2 == plantName) {}

                // Check for compatible plants
                else if (plantName2 == "Beans" || plantName2 == "Beets" || plantName2 == "Celery" || plantName2 == "Cucumbers" || plantName2 == "Mint" || plantName2 == "Onions" || plantName2 == "Potatoes" || plantName2 == "Sage") {
                        row.cells[2].innerHTML += plantName2 + "<br>\n";
                        //row2.cells[2].innerHTML += plantName2 + "<br>\n";
                }
                
                // Check for combative plants
                else if (plantName2 == "Cabbage" || plantName2 == "Cauliflower" || plantName2 == "Lettuce" || plantName2 == "Pole Beans" || plantName2 == "Tomatoes") {
                    row.cells[1].innerHTML += plantName2 + "<br>\n";
                    //row2.cells[1].innerHTML += plantName2 + "<br>\n";
                }

                // Check if plant name is left blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("noSelection").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to the No Interaction column
                else {
                    //row2.cells[3].innerHTML += plantName2 + "<br>\n";
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }  
        }

        else if (plantName == "Brussel Sprouts") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {

                var row2 = table.rows[j];

                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Do nothing if the plantname for the current row is the same
                if (plantName2 == plantName) {}

                // Check for compatible plants
                else if (plantName2 == "Dill" || plantName2 == "Lettuce" || plantName2 == "Mint" || plantName2 == "Radishes" || plantName2 == "Sage" || plantName2 == "Spinach" || plantName2 == "Turnips") {
                        row.cells[2].innerHTML += plantName2 + "<br>\n";
                        //row2.cells[2].innerHTML += plantName2 + "<br>\n";
                }
                
                // Check for combative plants
                else if (plantName2 == "Tomatoes") {
                    row.cells[1].innerHTML += plantName2 + "<br>\n";
                    //row2.cells[1].innerHTML += plantName2 + "<br>\n";
                }

                // Check if plant name is left blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("noSelection").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to the No Interaction column
                else {
                    //row2.cells[3].innerHTML += plantName2 + "<br>\n";
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }  
        }

        else if (plantName == "Cabbage") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {

                var row2 = table.rows[j];

                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Do nothing if the plantname for the current row is the same
                if (plantName2 == plantName) {}

                // Check for compatible plants
                else if (plantName2 == "Beans" || plantName2 == "Celery" || plantName2 == "Cucumbers" || plantName2 == "Dill" || plantName2 == "Kale" || plantName2 == "Lettuce" || plantName2 == "Mint" || plantName2 == "Onions" || plantName2 == "Potatoes" || plantName2 == "Sage" || plantName2 == "Spinach" || plantName2 == "Thyme") {
                        row.cells[2].innerHTML += plantName2 + "<br>\n";
                }
                
                // Check for combative plants
                else if (plantName2 == "Broccoli" || plantName2 == "Cauliflower" || plantName2 == "Strawberries" || plantName2 == "Tomatoes") {
                    row.cells[1].innerHTML += plantName2 + "<br>\n";
                }

                // Check if plant name is left blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("noSelection").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to the No Interaction column
                else {
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }  
        }

        else if (plantName == "Carrots") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {

                var row2 = table.rows[j];

                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Do nothing if the plantname for the current row is the same
                if (plantName2 == plantName) {}

                // Check for compatible plants
                else if (plantName2 == "Beans" || plantName2 == "Lettuce" || plantName2 == "Mint" || plantName2 == "Onions" || plantName2 == "Peas" || plantName2 == "Radishes" || plantName2 == "Rosemary" || plantName2 == "Sage" || plantName2 == "Tomatoes") {
                        row.cells[2].innerHTML += plantName2 + "<br>\n";
                }
                
                // Check for combative plants
                else if (plantName2 == "Dill" || plantName2 == "Parsley") {
                    row.cells[1].innerHTML += plantName2 + "<br>\n";
                }

                // Check if plant name is left blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("noSelection").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to the No Interaction column
                else {
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }  
        }

        else if (plantName == "Cauliflower") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {

                var row2 = table.rows[j];

                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Do nothing if the plantname for the current row is the same
                if (plantName2 == plantName) {}

                // Check for compatible plants
                else if (plantName2 == "Beans" || plantName2 == "Beets" || plantName2 == "Celery" || plantName2 == "Cucumbers" || plantName2 == "Mint" || plantName2 == "Sage" || plantName2 == "Thyme") {
                        row.cells[2].innerHTML += plantName2 + "<br>\n";
                }
                
                // Check for combative plants
                else if (plantName2 == "Broccoli" || plantName2 == "Cabbage" || plantName2 == "Strawberries" || plantName2 == "Tomatoes") {
                    row.cells[1].innerHTML += plantName2 + "<br>\n";
                }

                // Check if plant name is left blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("noSelection").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to the No Interaction column
                else {
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }  
        }

        else if (plantName == "Celery") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {

                var row2 = table.rows[j];

                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Do nothing if the plantname for the current row is the same
                if (plantName2 == plantName) {}

                // Check for compatible plants
                else if (plantName2 == "Beans" || plantName2 == "Broccoli" || plantName2 == "Cabbage" || plantName2 == "Cauliflower" || plantName2 == "Leeks" || plantName2 == "Spinach" || plantName2 == "Tomatoes") {
                        row.cells[2].innerHTML += plantName2 + "<br>\n";
                }
                 
                // Check if plant name is left blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("noSelection").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to the No Interaction column
                else {
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }  
        }

        else if (plantName == "Corn") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {

                var row2 = table.rows[j];

                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Do nothing if the plantname for the current row is the same
                if (plantName2 == plantName) {}

                // Check for compatible plants
                else if (plantName2 == "Beans" || plantName2 == "Cucumbers" || plantName2 == "Lettuce" || plantName2 == "Melons" || plantName2 == "Peas" || plantName2 == "Potatoes" || plantName2 == "Squash" || plantName2 == "Sunflowers") {
                        row.cells[2].innerHTML += plantName2 + "<br>\n";
                }
                
                // Check for combative plants
                else if (plantName2 == "Tomatoes") {
                    row.cells[1].innerHTML += plantName2 + "<br>\n";
                }

                // Check if plant name is left blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("noSelection").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to the No Interaction column
                else {
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }  
        }

        else if (plantName == "Cucumbers") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {

                var row2 = table.rows[j];

                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Do nothing if the plantname for the current row is the same
                if (plantName2 == plantName) {}

                // Check for compatible plants
                else if (plantName2 == "Beans" || plantName2 == "Broccoli" || plantName2 == "Cabbage" || plantName2 == "Cauliflower" || plantName2 == "Corn" || plantName2 == "Lettuce" || plantName2 == "Peas" || plantName2 == "Radishes" || plantName2 == "Sunflowers") {
                        row.cells[2].innerHTML += plantName2 + "<br>\n";
                }
                
                // Check for combative plants
                else if (plantName2 == "Herbs" || plantName2 == "Melons" || plantName2 == "Potatoes") {
                    row.cells[1].innerHTML += plantName2 + "<br>\n";
                }

                // Check if plant name is left blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("noSelection").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to the No Interaction column
                else {
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }  
        }

        else if (plantName == "Cilantro / Coriander") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {

                var row2 = table.rows[j];

                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Do nothing if the plantname for the current row is the same
                if (plantName2 == plantName) {}

                // Check for compatible plants
                else if (plantName2 == "Peppers") {
                        row.cells[2].innerHTML += plantName2 + "<br>\n";
                }

                // Check if plant name is left blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("noSelection").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to the No Interaction column
                else {
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }  
        }

        else if (plantName == "Dill") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {

                var row2 = table.rows[j];

                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Do nothing if the plantname for the current row is the same
                if (plantName2 == plantName) {}

                // Check for compatible plants
                else if (plantName2 == "Brussel Sprouts" || plantName2 == "Cabbage" || plantName2 == "Kale" || plantName2 == "Spinach" || plantName2 == "Tomatoes") {
                        row.cells[2].innerHTML += plantName2 + "<br>\n";
                }
                
                // Check for combative plants
                else if (plantName2 == "Carrots") {
                    row.cells[1].innerHTML += plantName2 + "<br>\n";
                }

                // Check if plant name is left blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("noSelection").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to the No Interaction column
                else {
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }  
        }

        else if (plantName == "Eggplant") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {


                var row2 = table.rows[j];
                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Do nothing if the plantname for the current row is the same
                if (plantName2 == plantName) {}

                // Check for compatible plants
                else if (plantName2 == "Basil" || plantName2 == "Beans" || plantName2 == "Lettuce" || plantName2 == "Mint" || plantName2 == "Peas" || plantName2 == "Potatoes" || plantName2 == "Spinach") {
                        row.cells[2].innerHTML += plantName2 + "<br>\n";
                }

                // Check if plant name is left blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("noSelection").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to the No Interaction column
                else {
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }  
        }

        else if (plantName == "Garlic") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {


                var row2 = table.rows[j];
                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Do nothing if the plantname for the current row is the same
                if (plantName2 == plantName) {}

                // Check for compatible plants
                else if (plantName2 == "Potatoes") {
                        row.cells[2].innerHTML += plantName2 + "<br>\n";
                }

                // Check for combative plants
                else if (plantName2 == "Peas" || plantName2 == "Beans") {
                    row.cells[1].innerHTML += plantName2 + "<br>\n";
                }

                // Check if plant name is left blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("noSelection").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to the No Interaction column
                else {
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }  
        }

        else if (plantName == "Kale") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {

                var row2 = table.rows[j];

                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Do nothing if the plantname for the current row is the same
                if (plantName2 == plantName) {}

                // Check for compatible plants
                else if (plantName2 == "Cabbage" || plantName2 == "Dill" || plantName2 == "Mint" || plantName2 == "Potatoes" || plantName2 == "Rosemary" || plantName2 == "Sage") {
                        row.cells[2].innerHTML += plantName2 + "<br>\n";
                }
                
                // Check for combative plants
                else if (plantName2 == "Strawberries" || plantName2 == "Tomatoes") {
                    row.cells[1].innerHTML += plantName2 + "<br>\n";
                }

                // Check if plant name is left blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("noSelection").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to the No Interaction column
                else {
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }  
        }

        else if (plantName == "Leeks") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {

                var row2 = table.rows[j];

                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Do nothing if the plantname for the current row is the same
                if (plantName2 == plantName) {}

                // Check for compatible plants
                else if (plantName2 == "Celery") {
                        row.cells[2].innerHTML += plantName2 + "<br>\n";
                }
            
                // Check if plant name is left blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("noSelection").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to the No Interaction column
                else {
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }  
        }

        else if (plantName == "Lettuce") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {

                var row2 = table.rows[j];

                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Do nothing if the plantname for the current row is the same
                if (plantName2 == plantName) {}

                // Check for compatible plants
                else if (plantName2 == "Asparagus" || plantName2 == "Beets" || plantName2 == "Brussel Sprouts" || plantName2 == "Cabbage" || plantName2 == "Celery" || plantName2 == "Dill" || plantName2 == "Eggplant" || plantName2 == "Lettuce" || plantName2 == "Mint" || plantName2 == "Onions" || plantName2 == "Peas" || plantName2 == "Peppers" || plantName2 == "Radishes" || plantName2 == "Strawberries" || plantName2 == "Tomatoes") {
                        row.cells[2].innerHTML += plantName2 + "<br>\n";
                }

                // Check if plant name is left blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("noSelection").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to the No Interaction column
                else {
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }  
        }

        else if (plantName == "Melons") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {

                var row2 = table.rows[j];

                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Do nothing if the plantname for the current row is the same
                if (plantName2 == plantName) {}

                // Check for compatible plants
                else if (plantName2 == "Corn" || plantName2 == "Nasturtiums" || plantName2 == "Peas" || plantName2 == "Radishes" || plantName2 == "Sunflowers" || plantName2 == "Tomatoes") {
                        row.cells[2].innerHTML += plantName2 + "<br>\n";
                }
                
                // Check for combative plants
                else if (plantName2 == "Cucumbers" || plantName2 == "Potatoes") {
                    row.cells[1].innerHTML += plantName2 + "<br>\n";
                }

                // Check if plant name is left blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("noSelection").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to the No Interaction column
                else {
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }  
        }

        else if (plantName == "Mint") {
// NEEED TO COMPLETE
        }

        else if (plantName == "Mustard") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {

                var row2 = table.rows[j];

                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Do nothing if the plantname for the current row is the same
                if (plantName2 == plantName) {}

                // Check for combative plants
                else if (plantName2 == "Beets") {
                    row.cells[1].innerHTML += plantName2 + "<br>\n";
                }

                // Check if plant name is left blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("noSelection").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to the No Interaction column
                else {
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }  
        }

        else if (plantName == "Nasturtiums") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {

                var row2 = table.rows[j];

                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Do nothing if the plantname for the current row is the same
                if (plantName2 == plantName) {}

                // Check for compatible plants
                else if (plantName2 == "Melons") {
                        row.cells[2].innerHTML += plantName2 + "<br>\n";
                }

                // Check if plant name is left blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("noSelection").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to the No Interaction column
                else {
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }  
        }

        else if (plantName == "Onions") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {

                var row2 = table.rows[j];

                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Do nothing if the plantname for the current row is the same
                if (plantName2 == plantName) {}

                // Check for compatible plants
                else if (plantName2 == "Beets" || plantName2 == "Broccoli" || plantName2 == "Cabbage" || plantName2 == "Carrots" || plantName2 == "Lettuce" || plantName2 == "Peppers" || plantName2 == "Potatoes" || plantName2 == "Spinach" || plantName2 == "Tomatoes") {
                        row.cells[2].innerHTML += plantName2 + "<br>\n";
                }
                
                // Check for combative plants
                else if (plantName2 == "Beans" || plantName2 == "Peas" || plantName2 == "Sage") {
                    row.cells[1].innerHTML += plantName2 + "<br>\n";
                }

                // Check if plant name is left blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("noSelection").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to the No Interaction column
                else {
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }  
        }

        else if (plantName == "Parsley") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {

                var row2 = table.rows[j];

                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Do nothing if the plantname for the current row is the same
                if (plantName2 == plantName) {}

                // Check for compatible plants
                else if (plantName2 == "Asparagus") {
                        row.cells[2].innerHTML += plantName2 + "<br>\n";
                }
                
                // Check for combative plants
                else if (plantName2 == "Carrots") {
                    row.cells[1].innerHTML += plantName2 + "<br>\n";
                }

                // Check if plant name is left blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("noSelection").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to the No Interaction column
                else {
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }  
        }

        else if (plantName == "Parsnips") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {

                var row2 = table.rows[j];

                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Do nothing if the plantname for the current row is the same
                if (plantName2 == plantName) {}

                // Check for compatible plants
                else if (plantName2 == "Peas") {
                        row.cells[2].innerHTML += plantName2 + "<br>\n";
                }

                // Check if plant name is left blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("noSelection").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to the No Interaction column
                else {
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }  
        }

        else if (plantName == "Peas") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {

                var row2 = table.rows[j];

                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Do nothing if the plantname for the current row is the same
                if (plantName2 == plantName) {}

                // Check for compatible plants
                else if (plantName2 == "Beans" || plantName2 == "Carrots" || plantName2 == "Corn" || plantName2 == "Cucumbers" || plantName2 == "Eggplant" || plantName2 == "Lettuce" || plantName2 == "Melons" || plantName2 == "Mint" || plantName2 == "Parsnips" || plantName2 == "Potatoes" || plantName2 == "Radishes" || plantName2 == "Spinach" || plantName2 == "Turnips") {
                        row.cells[2].innerHTML += plantName2 + "<br>\n";
                }
                
                // Check for combative plants
                else if (plantName2 == "Garlic" || plantName2 == "Onions") {
                    row.cells[1].innerHTML += plantName2 + "<br>\n";
                }

                // Check if plant name is left blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("noSelection").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to the No Interaction column
                else {
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }  
        }

        else if (plantName == "Peppers") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {

                var row2 = table.rows[j];

                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Do nothing if the plantname for the current row is the same
                if (plantName2 == plantName) {}

                // Check for compatible plants
                else if (plantName2 == "Basil" || plantName2 == "Cilantro / Coriander" || plantName2 == "Mint" || plantName2 == "Onions" || plantName2 == "Spinach" || plantName2 == "Tomatoes") {
                        row.cells[2].innerHTML += plantName2 + "<br>\n";
                }
                
                // Check for combative plants
                else if (plantName2 == "Beans") {
                    row.cells[1].innerHTML += plantName2 + "<br>\n";
                }

                // Check if plant name is left blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("noSelection").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to the No Interaction column
                else {
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }  
        }

        else if (plantName == "Pole Beans") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {

                var row2 = table.rows[j];

                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Do nothing if the plantname for the current row is the same
                if (plantName2 == plantName) {}
                
                // Check for combative plants
                else if (plantName2 == "Beets" || plantName2 == "Broccoli") {
                    row.cells[1].innerHTML += plantName2 + "<br>\n";
                }

                // Check if plant name is left blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("noSelection").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to the No Interaction column
                else {
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }  
        }

        else if (plantName == "Potatoes") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {

                var row2 = table.rows[j];

                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Do nothing if the plantname for the current row is the same
                if (plantName2 == plantName) {}

                // Check for compatible plants
                else if (plantName2 == "Beans" || plantName2 == "Broccoli" || plantName2 == "Cabbage" || plantName2 == "Corn" || plantName2 == "Eggplant" || plantName2 == "Garlic" || plantName2 == "Kale" || plantName2 == "Lettuce" || plantName2 == "Onions" || plantName2 == "Peas" || plantName2 == "Radishes") {
                        row.cells[2].innerHTML += plantName2 + "<br>\n";
                }
                
                // Check for combative plants
                else if (plantName2 == "Cucumbers" || plantName2 == "Melons" || plantName2 == "Squash" || plantName2 == "Sunflowers" || plantName2 == "Tomatoes" || plantName2 == "Turnips") {
                    row.cells[1].innerHTML += plantName2 + "<br>\n";
                }

                // Check if plant name is left blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("noSelection").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to the No Interaction column
                else {
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }  
        }

        else if (plantName == "Radishes") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {

                var row2 = table.rows[j];

                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Do nothing if the plantname for the current row is the same
                if (plantName2 == plantName) {}

                // Check for compatible plants
                else if (plantName2 == "Beans" || plantName2 == "Brussel Sprouts" || plantName2 == "Carrots" || plantName2 == "Cucumbers" || plantName2 == "Melons" || plantName2 == "Mint" || plantName2 == "Lettuce" || plantName2 == "Peas" || plantName2 == "Potatoes" || plantName2 == "Spinach" || plantName2 == "Tomatoes") {
                        row.cells[2].innerHTML += plantName2 + "<br>\n";
                }

                // Check if plant name is left blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("noSelection").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to the No Interaction column
                else {
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }  
        }

        else if (plantName == "Rosemary") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {

                var row2 = table.rows[j];

                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Do nothing if the plantname for the current row is the same
                if (plantName2 == plantName) {}

                // Check for compatible plants
                else if (plantName2 == "Carrots" || plantName2 == "Kale") {
                        row.cells[2].innerHTML += plantName2 + "<br>\n";
                }

                // Check if plant name is left blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("noSelection").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to the No Interaction column
                else {
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }  
        }

        else if (plantName == "Sage") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {

                var row2 = table.rows[j];

                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Do nothing if the plantname for the current row is the same
                if (plantName2 == plantName) {}

                // Check for compatible plants
                else if (plantName2 == "Brussel Sprouts" || plantName2 == "Broccoli" || plantName2 == "Cabbage" || plantName2 == "Cauliflower" || plantName2 == "Carrots" || plantName2 == "Kale") {
                        row.cells[2].innerHTML += plantName2 + "<br>\n";
                }

                // Check for combative plants
                else if (plantName2 == "Onions") {
                    row.cells[1].innerHTML += plantName2 + "<br>\n";
                }

                // Check if plant name is left blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("noSelection").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to the No Interaction column
                else {
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }  
        }

        else if (plantName == "Spinach") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {

                var row2 = table.rows[j];

                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Do nothing if the plantname for the current row is the same
                if (plantName2 == plantName) {}

                // Check for compatible plants
                else if (plantName2 == "Asparagus" || plantName2 == "Brussel Sprouts" || plantName2 == "Cabbage" || plantName2 == "Celery" || plantName2 == "Dill" || plantName2 == "Eggplant" || plantName2 == "Lettuce" || plantName2 == "Onions" || plantName2 == "Peas" || plantName2 == "Peppers" || plantName2 == "Radishes" || plantName2 == "Strawberries" || plantName2 == "Tomatoes") {
                        row.cells[2].innerHTML += plantName2 + "<br>\n";
                }

                // Check if plant name is left blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("noSelection").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to the No Interaction column
                else {
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }  
        }

        else if (plantName == "Squash") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {

                var row2 = table.rows[j];

                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Do nothing if the plantname for the current row is the same
                if (plantName2 == plantName) {}

                // Check for compatible plants
                else if (plantName2 == "Beans" || plantName2 == "Mint" || plantName2 == "Corn") {
                        row.cells[2].innerHTML += plantName2 + "<br>\n";
                }

                // Check for combative plants
                else if (plantName2 == "Potatoes") {
                    row.cells[1].innerHTML += plantName2 + "<br>\n";
                }

                // Check if plant name is left blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("noSelection").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to the No Interaction column
                else {
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }  
        }

        else if (plantName == "Strawberries") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {

                var row2 = table.rows[j];

                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Do nothing if the plantname for the current row is the same
                if (plantName2 == plantName) {}

                // Check for compatible plants
                else if (plantName2 == "Beans" || plantName2 == "Lettuce" || plantName2 == "Spinach") {
                        row.cells[2].innerHTML += plantName2 + "<br>\n";
                }

                // Check for combative plants
                else if (plantName2 == "Cabbage" || plantName2 == "Cauliflower" || plantName2 == "Kale") {
                    row.cells[1].innerHTML += plantName2 + "<br>\n";
                }

                // Check if plant name is left blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("noSelection").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to the No Interaction column
                else {
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }  
        }

        else if (plantName == "Sunflowers") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {

                var row2 = table.rows[j];

                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Do nothing if the plantname for the current row is the same
                if (plantName2 == plantName) {}

                // Check for compatible plants
                else if (plantName2 == "Corn" || plantName2 == "Cucumbers" || plantName2 == "Melons" || plantName2 == "Lettuce") {
                        row.cells[2].innerHTML += plantName2 + "<br>\n";
                }

                // Check for combative plants
                else if (plantName2 == "Beans" || plantName2 == "Potatoes") {
                    row.cells[1].innerHTML += plantName2 + "<br>\n";
                }

                // Check if plant name is left blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("noSelection").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to the No Interaction column
                else {
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }  
        }

        else if (plantName == "Thyme") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {

                var row2 = table.rows[j];

                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Do nothing if the plantname for the current row is the same
                if (plantName2 == plantName) {}

                // Check for compatible plants
                else if (plantName2 == "Cabbage" || plantName2 == "Cauliflower" || plantName2 == "Tomatoes") {
                        row.cells[2].innerHTML += plantName2 + "<br>\n";
                }

                // Check if plant name is left blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("noSelection").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to the No Interaction column
                else {
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }  
        }

        else if (plantName == "Tomatoes") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {

                var row2 = table.rows[j];

                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Do nothing if the plantname for the current row is the same
                if (plantName2 == plantName) {}

                // Check for compatible plants
                else if (plantName2 == "Asparagus" || plantName2 == "Basil" || plantName2 == "Beans" || plantName2 == "Borage" || plantName2 == "Carrots" || plantName2 == "Celery" || plantName2 == "Dill" || plantName2 == "Lettuce" || plantName2 == "Melons" || plantName2 == "Mint" || plantName2 == "Onions" || plantName2 == "Parsley" || plantName2 == "Peppers" || plantName2 == "Radishes" || plantName2 == "Spinach" || plantName2 == "Thyme") {
                        row.cells[2].innerHTML += plantName2 + "<br>\n";
                }
                
                // Check for combative plants
                else if (plantName2 == "Broccoli" || plantName2 == "Brussel Sprouts" || plantName2 == "Cabbage" || plantName2 == "Cauliflower"  || plantName2 == "Corn" || plantName2 == "Kale" || plantName2 == "Potatoes") {
                    row.cells[1].innerHTML += plantName2 + "<br>\n";
                }

                // Check if plant name is left blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("noSelection").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to the No Interaction column
                else {
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }  
        }

        else if (plantName == "Turnips") {

            // Iterate through the rows to check compatibility with selected plant
            for(var j=1; j<rowCount; j++) {

                var row2 = table.rows[j];

                // Set the current cell to the Plant Name cell.
                var cell2 = row2.cells[0];
                // Store the selected plant name.
                var plantName2 = cell2.children[1].value;

                // Do nothing if the plantname for the current row is the same
                if (plantName2 == plantName) {}

                // Check for compatible plants
                else if (plantName2 == "Brussel Sprouts" || plantName2 == "Peas") {
                        row.cells[2].innerHTML += plantName2 + "<br>\n";
                }
                
                // Check for combative plants
                else if (plantName2 == "Potatoes") {
                    row.cells[1].innerHTML += plantName2 + "<br>\n";
                }

                // Check if plant name is left blank
                else if (plantName2 == "blank") {
                    var k = j+1;
                    document.getElementById("noSelection").innerHTML += "No plants were selected in row " + k + ".<br>\n";
                }

                // Add plant to the No Interaction column
                else {
                    row.cells[3].innerHTML += plantName2 + "<br>\n";
                }
            }  
        }

        else {}
    }

/*
    var request = new XMLHttpRequest();

    request.open('GET', 'api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=056737c979c0063fc4afb0d2570f7327', true);
    request.onload = function () {

        // Begin accessing JSON data here
        var data = JSON.parse(this.response);

        document.getElementById("COMPATIBILITY").innerHTML += data + "<br>\n";
    }
    // Send request
    request.send();
*/

}