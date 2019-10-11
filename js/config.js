var config = {
	load_data: function() {
		data = localStorage.getItem("config_data");

		if (data != null) {
			try {
				config.data = JSON.parse(data);
			}
			catch (SyntaxError) {
				alert("Error: Wrong data structure!");
			}
		}

	},

	save_data: function(new_data) {
		localStorage.setItem("config_data", JSON.stringify(new_data));
	},

	reset_data: function() {
		localStorage.removeItem("config_data");
	},

    data: {
        timetable: [
			{
				day: "Monday",
				schedule: [
					{start: "07:50", end: "08:35", subject: "Physics", room: 321},
					{start: "08:40", end: "09:25", subject: "Geography", room:304},
					{start: "09:40", end: "10:25", subject: "German", room: 329},
					{start: "10:30", end: "11:15", subject: "History", room: 304},
					{start: "11:30", end: "12:15", subject: "Biology", room: 113},
					{start: "12:15", end: "13:00", subject: "Computer Science", room:312},
					{start: "13:00", end: "13:15", subject: "", room: ""},
					{start: "13:15", end: "14:00", subject: "Maths", room:329},
					{start: "14:00", end: "14:45", subject: "Music", room:211},
					{start: "14:45", end: "15:30", subject: "", room: ""}
				]
			}, // Monday

			{
				day: "Tuesday",
				schedule: [
                    {start: "07:50", end: "08:35", subject: "Physics", room: 321},
					{start: "08:40", end: "09:25", subject: "Geography", room:314},
					{start: "09:40", end: "10:25", subject: "German", room: 327},
					{start: "10:30", end: "11:15", subject: "History", room: 304},
					{start: "11:30", end: "12:15", subject: "Biology", room: 113},
					{start: "12:15", end: "13:00", subject: "Computer Science", room:312},
					{start: "13:00", end: "13:15", subject: "", room: ""},
					{start: "13:15", end: "14:00", subject: "Maths", room:329},
					{start: "14:00", end: "14:45", subject: "Music", room:211},
					{start: "14:45", end: "15:30", subject: "", room: ""}
				]
			}, // Tuesday

			{
				day: "Wednesday",
				schedule: [
                    {start: "07:50", end: "08:35", subject: "Physics", room: 321},
					{start: "08:40", end: "09:25", subject: "Geography", room:304},
					{start: "09:40", end: "10:25", subject: "German", room: 329},
					{start: "10:30", end: "11:15", subject: "History", room: 304},
					{start: "11:30", end: "12:15", subject: "Biology", room: 113},
					{start: "12:15", end: "13:00", subject: "Computer Science", room:312},
					{start: "13:00", end: "13:15", subject: "", room: ""},
					{start: "13:15", end: "14:00", subject: "Maths", room:329},
					{start: "14:00", end: "14:45", subject: "Music", room:211},
					{start: "14:45", end: "15:30", subject: "", room: ""}
				]
			}, // Wednesday

			{
				day: "Thursday",
				schedule: [
                    {start: "07:50", end: "08:35", subject: "Physics", room: 321},
					{start: "08:40", end: "09:25", subject: "Geography", room:304},
					{start: "09:40", end: "10:25", subject: "German", room: 329},
					{start: "10:30", end: "11:15", subject: "History", room: 304},
					{start: "11:30", end: "12:15", subject: "Biology", room: 113},
					{start: "12:15", end: "13:00", subject: "Computer Science", room:312},
					{start: "13:00", end: "13:15", subject: "", room: ""},
					{start: "13:15", end: "14:00", subject: "Maths", room:329},
					{start: "14:00", end: "14:45", subject: "Music", room:211},
					{start: "14:45", end: "15:30", subject: "", room: ""}
				]
			}, // Thursday

			{
				day: "Friday",
				schedule: [
                    {start: "07:50", end: "08:35", subject: "Physics", room: 321},
					{start: "08:40", end: "09:25", subject: "Geography", room:304},
					{start: "09:40", end: "10:25", subject: "German", room: 329},
					{start: "10:30", end: "11:15", subject: "History", room: 304},
					{start: "11:30", end: "12:15", subject: "Biology", room: 113},
					{start: "12:15", end: "13:00", subject: "Computer Science", room:312},
					{start: "13:00", end: "13:15", subject: "", room: ""},
					{start: "13:15", end: "14:00", subject: "Maths", room:329},
					{start: "14:00", end: "14:45", subject: "Music", room:211},
					{start: "14:45", end: "15:30", subject: "", room: ""}
				]
			} // Friday
            ,
            {
				day: "Saturday",
				schedule: [
                    {start: "07:50", end: "08:35", subject: "Physics", room: 321},
					{start: "08:40", end: "09:25", subject: "Geography", room:304},
					{start: "09:40", end: "10:25", subject: "German", room: 329},
					{start: "10:30", end: "11:15", subject: "History", room: 304},
					{start: "11:30", end: "12:15", subject: "Biology", room: 113},
					{start: "12:15", end: "13:00", subject: "Computer Science", room:312},
					{start: "13:00", end: "13:15", subject: "", room: ""},
					{start: "13:15", end: "14:00", subject: "Maths", room:329},
					{start: "14:00", end: "14:45", subject: "Music", room:211},
					{start: "14:45", end: "15:30", subject: "", room: ""}
				]
			} //Saturday
		], //Timetable Array

        color: {
			"History":			"#552200",
			"Biology": 			"#337732",
			"German":			"#0055AA",
			"English": 			"#FF8800",
			"Computer Science":	"#447777",
			"Maths": 			"#009922",
			"Music": 			"#DD2222",
			"Physics": 			"#0088FF",
			"Religion": 		"#AA00DD",
			"Geography":		"#FFCC00",
			"Sport":			"#222222",
		} // Color Object

    } //Data Object

} //Config Object
