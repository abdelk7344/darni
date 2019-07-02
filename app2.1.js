var Skeys, allQ2s;
var firebaseConfig = {
    apiKey: "AIzaSyCvJk4AUvWPmp6WOTEmF460hWKjuNZZKY8",
    authDomain: "darni-b44c7.firebaseapp.com",
    databaseURL: "https://darni-b44c7.firebaseio.com",
    projectId: "darni-b44c7",
    storageBucket: "",
    messagingSenderId: "408544589504",
    appId: "1:408544589504:web:7b1883bd19dc7356"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

$(document).ready(function() {
    showSales()
});


function showSales() {
    var ref = database.ref("/sales");
    ref.on("value", gotData, errData)


}

function gotData(data) {
    $('.block').remove();

    var allNums = data.val();
    var keys = Object.keys(allNums)

    for (var i = 0; keys.length > i; i++) {
        var k = keys[i]
        var num = allNums[k]
       
       
        var sr = ((num[0] + num[1] + num[2] + num[3] + num[4] + num[5] + num[6]) / num.length) * 500
        var pr = ((num[7] + num[8] + num[9] + num[10] + num[11] + num[12] + num[13] + num[14] + num[15] + num[16] + num[17] + num[18] + num[19] + num[20]) / num.length) * 500
        var er = ((num[21] + num[22] + num[23] + num[24] + num[25] + num[26] + num[27] + num[28] + num[29] + num[30]) / num.length) * 500
        var qr = ((num[31] + num[32] + num[33] + num[34] + num[35] + num[36] + num[37] + num[38] + num[39] + num[40] + num[41] + num[42] + num[43] + num[44] + num[45]) / num.length) * 500
        var p = ((num[46] + num[47] + num[48] + num[49] + num[50] + num[51] + num[52] + num[53] + num[54] + num[55] + num[56] + num[57] + num[58] + num[59] + num[60] + num[61]) / num.length) * 500
       
       
        var mother = document.createElement('div');
        mother.id = 'block';
        mother.className = 'block';
        mother.classList.add("progress")
        document.getElementsByTagName('body')[0].appendChild(mother).style.width = "50%";


        var name = document.createElement('p');
        name.innerHTML = "quote: " + k;
        name.className = 'move'



        var innerDiv1 = document.createElement('div');
        innerDiv1.className = 'block-2';
        innerDiv1.classList.add("progressbar")
        $(innerDiv1).attr('aria-valuenow', sr).css('width', sr);
        if (sr > 41.61) {
            innerDiv1.style.backgroundColor = "#D3D3D3"
        }
        else {
            innerDiv1.style.backgroundColor = "#E88D61"
        }



        var innerDiv2 = document.createElement('div');
        innerDiv2.className = 'block-2';
        innerDiv2.classList.add("progress-bar")
        $(innerDiv2).attr('aria-valuenow', sr).css('width', pr);
        if (pr > 116.61) {
            innerDiv2.style.backgroundColor = "#D3D3D3"
        }
        else {
            innerDiv2.style.backgroundColor = "#4AB0CF"
        }



        var innerDiv3 = document.createElement('div');
        innerDiv3.className = 'block-2';
        innerDiv3.classList.add("progress-bar")
        $(innerDiv3).attr('aria-valuenow', sr).css('width', er);
        if (er > 83.31) {
            innerDiv3.style.backgroundColor = "#D3D3D3"
        }
        else {
            innerDiv3.style.backgroundColor = "#00A911"
        }



        var innerDiv4 = document.createElement('div');
        innerDiv4.className = 'block-2';
        innerDiv4.classList.add("progress-bar")
        $(innerDiv4).attr('aria-valuenow', sr).css('width', qr);
        if (qr == 125) {
            innerDiv4.style.backgroundColor = "#D3D3D3"
        }
        else {
            innerDiv4.style.backgroundColor = "#DE66A2"
        }



        var innerDiv5 = document.createElement('div');
        innerDiv5.className = 'block-2';
        innerDiv5.classList.add("progressbar")
        $(innerDiv5).attr('aria-valuenow', sr).css('width', p);
        if (p > 133.31) {
            innerDiv5.style.backgroundColor = "#D3D3D3"
        }
        else {
            innerDiv5.style.backgroundColor = "#4D1370"
        }



        mother.appendChild(name)
        mother.appendChild(innerDiv1);
        mother.appendChild(innerDiv2);
        mother.appendChild(innerDiv3);
        mother.appendChild(innerDiv4);
        mother.appendChild(innerDiv5);
    }
}

function errData(err) {
    console.log(err)
}
