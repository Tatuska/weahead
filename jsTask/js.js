/**
 * Created by siryog on 2017-04-06.
 */
function edit_row(no)
{
    document.getElementById("edit_button"+no).style.display="none";
    document.getElementById("save_button"+no).style.display="block";

    var project=document.getElementById("project_row"+no);
    var activity=document.getElementById("activity_row"+no);
    var startTime=document.getElementById("start_row"+no);
    var endTime=document.getElementById("end_row"+no);
    var notes=document.getElementById("notes_row"+no);

    var project_data=project.innerHTML;
    var activity_data=activity.innerHTML;
    var start_data=startTime.innerHTML;
    var end_data=endTime.innerHTML;
    var notes_data=notes.innerHTML;

    project.innerHTML="<input type='text' id='project_text"+no+"' value='"+project_data+"'>";
    activity.innerHTML="<input type='text' id='activity_text"+no+"' value='"+activity_data+"'>";
    startTime.innerHTML="<input type='text' id='start_text"+no+"' value='"+start_data+"'>";
    endTime.innerHTML="<input type='text' id='end_text"+no+"' value='"+end_data+"'>";
    notes.innerHTML="<input type='text' id='notes_text"+no+"' value='"+notes_data+"'>";
}

function save_row(no)
{


        var re = /([01][0-9]|2[0-3]):[0-5][0-9]/;




    var project_val=document.getElementById("project_text"+no).value;
    var activity_val=document.getElementById("activity_text"+no).value;
    var start_val=document.getElementById("start_text"+no).value;
    var end_val=document.getElementById("end_text"+no).value;
    var notes_val=document.getElementById("notes_text"+no).value;

    if(!(start_val.match(re) && end_val.match(re)))
        alert("check time");
    else{

    document.getElementById("project_row"+no).innerHTML=project_val;
    document.getElementById("activity_row"+no).innerHTML=activity_val;
    document.getElementById("start_row"+no).innerHTML=start_val;
    document.getElementById("end_row"+no).innerHTML=end_val;
    document.getElementById("notes_row"+no).innerHTML=notes_val;

    document.getElementById("edit_button"+no).style.display="block";
    document.getElementById("save_button"+no).style.display="none";
    }
}

function delete_row(no)
{
    document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
    var projectName=document.getElementById("projectName").value;
    var activityName=document.getElementById("activity").value;
    var startTime=document.getElementById("startTime").value;
    var endTime=document.getElementById("endTime").value;
    var notes=document.getElementById("notes").value;

    var table=document.getElementById("data_table");
    var table_len=(table.rows.length)-1;
    var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='project_row"+table_len+"'>"+projectName+"</td><td id='activity_row"+table_len+"'>"+activityName+"</td><td id='start_row"+table_len+"'>"+startTime+"</td><td id='end_row"+table_len+"'>"+endTime+"</td><td id='notes_row"+table_len+"'>"+notes+"</td>" +
        "<td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

    document.getElementById("projectName").value="";
    document.getElementById("activity").value="";
    document.getElementById("startTime").value="";
    document.getElementById("endTime").value="";
    document.getElementById("notes").value="";
}