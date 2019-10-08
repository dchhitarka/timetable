window.onload = ()=>{
    config.load_data();
    console.log('Hi');
    backup();
    let input = document.getElementById("restore_file");
	input.addEventListener("change", function() {
	    restore();
	});
}

function backup() {
    console.log("Hello");
    var data_string = JSON.stringify(config.data);
    var data_uri = "data:application/json; charset=utf-8," + encodeURIComponent(data_string);

    var file_name = "timetable_data_backup.json";

    var link_element = document.getElementById("backup");
    link_element.setAttribute("href", data_uri);
    link_element.setAttribute("download", file_name);
}

function restore() {
    console.log("H");
    var input = document.getElementById("restore_file");
    var file = input.files[0];
    var x = 0;

    var reader = new FileReader();

    reader.onload = function(e) {
        try {
            var content = e.target.result;
            var content_json = JSON.parse(content);

            config.data = content_json;
            config.save_data(config.data);

            alert("Settings have been restored. Changes will take effect after page refresh.");
        }

        catch(e) {
            alert("There has been an error restoring your data.");
        }
    }

    reader.readAsText(file);
}

function reset() {
    console.log("Reset");
    config.reset_data();
    alert("Data successfully reset.")
}

const save = ()=>{
    config.save_data(config.data);
    alert("General settings have been saved. Changes will take effect after page refresh.");
}
