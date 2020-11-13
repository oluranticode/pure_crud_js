var selectedRow = null;

function submitHandler(){
    var fullName = document.getElementById("fullName").value;
    var salary = document.getElementById("salary").value;
    var sCode = document.getElementById("sCode").value;
    var city = document.getElementById("city").value;

    if( fullName == "" || salary == "" || sCode == "" || city == ""  ) {
        alert("please fill up all empty fields!") 
    } else {
        var readData = inputData();
        if (selectedRow == null)
        insertNewRecord(readData);
        else 
        updateData(readData);
        resetForm();
    } 
}

function inputData(){
    var readData = {};
    readData["fullName"] = document.getElementById("fullName").value;
    readData["salary"] = document.getElementById("salary").value;
    readData["sCode"] = document.getElementById("sCode").value;
    readData["city"] = document.getElementById("city").value;
   return readData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.salary;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.sCode;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;

    //Edit and Delete
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onEdit(this)" >Edit</a>
                            <a onClick="onDelete(this)" >Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("sCode").value = "";
    document.getElementById("city").value ="";
    selectedRow = null;
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[1].innerHTML;;
    document.getElementById("sCode").value = selectedRow.cells[2].innerHTML;;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;;

}

function updateData(readData) {
    selectedRow.cells[0].innerHTML = readData.fullName;
    selectedRow.cells[1].innerHTML = readData.salary;
    selectedRow.cells[2].innerHTML = readData.sCode;
    selectedRow.cells[3].innerHTML = readData.city;

}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}