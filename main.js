var name_of_people = [];

function submit() {
    var GuestName = document.getElementById("guestname").value;
    name_of_people.push(GuestName);
    console.log(GuestName);
    console.log(name_of_people);
    var lenght_of_name = name_of_people.length;
    console.log(lenght_of_name);
    document.getElementById("name_of_people").innerHTML = name_of_people.toString();
}

function namesearch() {
    var s = document.getElementById("s1").value;
    var found = 0;
    for (j = 0; j < name_of_people.length; j++) {

        if (s == name_of_people[j]) {
            found = found + 1;
        }
    }
    document.getElementById("p2").innerHTML = "name found " + found + " time/s";
    console.log("found name" + found + "time/s");
}

function sorting() {
    name_of_people.sort();
    var i = name_of_people.join("<br>");
    console.log(name_of_people);
    document.getElementById("Sorted").innerHTML = i.toString();
}

function shownames() {
    var i = name_of_people.join("<br>");
    console.log(name_of_people);
    document.getElementById("p1").innerHTML = i.toString();
    document.getElementById("sort").style.display = "block";
}