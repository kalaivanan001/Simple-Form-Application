var selectedRow = null

function onFormSubmit() {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		    }
       resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["inputName"] = document.getElementById("input_Name").value;
    formData["inputfathname"] = document.getElementById("input_fatherName").value;
    formData["inputAge"] = document.getElementById("input_Age").value;
    formData["inputDate"] = document.getElementById("input_Date").value;
    formData["inputEmail"] = document.getElementById("input_Email").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("formList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.inputName;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.inputfathname;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.inputAge;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.inputDate;
    cell5 = newRow.insertCell(4);
		cell5.innerHTML = data.inputEmail;
    cell5 = newRow.insertCell(5);
        cell5.innerHTML = `<button onClick="onDelete(this)">Delete</button>`;
}



//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('formList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    event.preventDefault();
    document.getElementById("input_Name").value = '';
    document.getElementById("input_fatherName").value = '';
    document.getElementById("input_Age").value = '';
    document.getElementById("input_Date").vaule = '';
    document.getElementById("input_Email").value = '';
    selectedRow = null;
}
