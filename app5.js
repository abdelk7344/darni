var allNums, onesect, k, a, b, currentQ2S, boxId, currentArray, orderId, clicked_id, date, currentDates, allDates, firebase, allQ2s;
// var apikey = config.API_KEY;

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCvJk4AUvWPmp6WOTEmF460hWKjuNZZKY8",
    authDomain: "darni-b44c7.firebaseapp.com",
    databaseURL: "https://darni-b44c7.firebaseio.com",
    projectId: "darni-b44c7",
    storageBucket: "",
    messagingSenderId: "408544589504",
    appId: "1:408544589504:web:7b1883bd19dc7356"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Get a reference to the database service
$(document).ready(function() {
    showSales()
});

var database = firebase.database();
$(window).on("load", function(e) {

    showSales()
    var today = new Date();
    date = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear();
    var ref3 = database.ref("/quotetosales")
    ref3.on("value", gotData3, errData3)


});

function addSales() {
    var newsale = $("#newSaleNum").val();
    if (newsale.length == 0) {
        return
    }
    firebase.database().ref("sales/" + newsale).set([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    firebase.database().ref("dates/" + newsale).set([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    firebase.database().ref("quotetosales/" + newsale).set(0)
    console.log(newsale)
    showSales()
    var ref3 = database.ref("/quotetosales")
    ref3.on("value", gotData3, errData3)

}

function showSales() {
    var ref = database.ref("/sales");
    var ref2 = database.ref("/dates")
    ref2.on("value", gotData2, errData2)
    ref.on("value", gotData, errData)
}

function showDiv() {
    var x = document.getElementById("checklist1");
    var checked = 0;
    for (i = 0; currentArray.length > i; i++) {
        checked += currentArray[i]
    }
    $('#progBar').attr('value', (checked / 60) * 100);
}

function reply_click(orginal_clicked) {
    var ref3 = database.ref("/quotetosales")
    ref3.on("value", gotData3, errData3)
    var checked = 0;
    boxId = orginal_clicked;

    if (($(document.getElementById(boxId)).prop("checked") == true)) {
        currentArray[boxId] = 1
        if (boxId == "5") {
            assignLevel()
        }
        currentDates[boxId] = date;
        firebase.database().ref("sales/" + clicked_id).update(currentArray)
        firebase.database().ref("dates/" + clicked_id).update(currentDates)
        var ref3 = database.ref("/quotetosales")
        ref3.on("value", gotData3, errData3)
        if (boxId == "15") {
            getSalesNumber()
        }
        for (i = 0; currentArray.length > i; i++) {
            checked += currentArray[i]
            if (currentDates[i] !== 0) {
                document.getElementById(60 + i).innerHTML = currentDates[i];
                document.getElementById(60 + i).style.fontStyle = "italic";
            }
        }
        $(document.getElementById('progBar')).attr('value', (checked / 60) * 100);
        console.log(checked)
        if (checked == 60) {
            console.log("delete")
            var confirm = prompt("Are you DONE with this order?! Type yes or no");
            if (confirm.toLowerCase() == "yes") {
                firebase.database().ref("sales/" + clicked_id).remove()
                firebase.database().ref("quotetosales/" + clicked_id).remove()
                var ref3 = database.ref("quotetosales/")
                ref3.on("value", gotData3, errData3)
                window.location.replace(window.location.pathname + window.location.search + window.location.hash);
            }
            else {
                alert("You Need To Uncheck What Has Not Yet Been Completed")

            }


        }
        showSales()
    }
    else if (($(document.getElementById(boxId)).prop("checked") == false)) {

        currentArray[boxId] = 0
        currentDates[boxId] = 0;
        firebase.database().ref("sales/" + clicked_id).update(currentArray)
        firebase.database().ref("dates/" + clicked_id).update(currentDates)
        var ref3 = database.ref("/quotetosales")
        ref3.on("value", gotData3, errData3)
        for (i = 0; currentArray.length > i; i++) {
            checked += currentArray[i];
        }
        $('#progBar').attr('value', (checked / 60) * 100);

        showSales()

    }
}

function reply_click_2(clicked_id_2) {
    $("#header2").empty()
    var ref3 = database.ref("/quotetosales")
    ref3.on("value", gotData3, errData3)
    clicked_id = clicked_id_2;
    currentArray = allNums[clicked_id];
    currentDates = allDates[clicked_id]
    currentQ2S = allQ2s[clicked_id]
    if (currentQ2S !== 0) {
        document.getElementById(clicked_id).innerHTML = currentQ2S;
        $("#header2").text('You are currently viewing quote order ' + clicked_id);
        $("#header").text('You are currently viewing sales order ' + currentQ2S);
    }
    else {
        $("#header").text('You are currently viewing quote order ' + clicked_id);
    }
    for (var i = 0; i < currentArray.length; i++) {
        document.getElementById(i).checked = currentArray[i]
        if (currentDates[i] !== 0) {
            document.getElementById(60 + i).innerHTML = currentDates[i];
            document.getElementById(60 + i).style.fontStyle = "italic";
        }
        else {
            document.getElementById(60 + i).innerHTML = "";
        }
    }
}

function gotData(data) {
    $('#container').empty();
    allNums = data.val();
    var keys = Object.keys(allNums);
    for (var i = 0; keys.length > i; i++) {
        k = keys[i]
        var num = allNums[k]
        $("#container").append('<center><button style="float: left;  margin-left: 30px; margin-top:30px;color:orange;" id="' + k + '" type="button" class="btn btn-secondary" onclick="reply_click_2(this.id);showDiv();">' + k + '</button></center>');

    }
}

function errData(err) {
    console.log(err)
}

function gotData2(data) {
    allDates = data.val();
    var keys = Object.keys(allDates);
    for (var i = 0; keys.length > i; i++) {
        a = keys[i]
        var cdate = allDates[a]
    }
}

function errData2(err) {
    console.log(err)
}

function gotData3(data) {
    allQ2s = data.val()
    var keys = Object.keys(allQ2s);
    for (var i = 0; keys.length > i; i++) {
        b = keys[i]
        var Q2S = allQ2s[b]
        if (Q2S !== 0) {
            document.getElementById(b).innerHTML = Q2S;
            document.getElementById(b).style.color = "white";
        }
        else {
            document.getElementById(b).innerHTML = b;
            document.getElementById(b).style.color = "orange";
        }
    }

}

function errData3(err) {
    console.log(err)
}

function assignLevel() {
    var level = prompt("Is this job level 1? Please enter yes or no.");
    if (level.toLowerCase() == "yes") {
        for (var i = 5; i < 44; i++) {
            currentArray[i] = 1
            currentDates[i] = "N/A"
            document.getElementById(i).checked = currentArray[i]
        }
    }
    else if (level.toLowerCase() == "no") {
        currentArray[5] = 1
    }
    else {
        alert("I did not understand what you have written down. Please try again.")
        currentArray[5] = 0
    }
}

function getSalesNumber() {
    $("#header2").empty()
    $("#header").empty()
    var quotetosales = prompt("Please Enter the Sales Number");
    if (quotetosales.length < 25) {
        firebase.database().ref("quotetosales/" + clicked_id).set(quotetosales)
        document.getElementById(clicked_id).innerHTML = quotetosales;
        document.getElementById(clicked_id).style.color = "white";
        $("#header2").text('You are currently viewing quote order ' + clicked_id);
        $("#header").text('You are currently viewing sales order ' + quotetosales);
    }
    else {
        alert("You did not enter 5 characters!")
    }

}
