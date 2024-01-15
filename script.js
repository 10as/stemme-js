console.log("koblet");

var stem = document.getElementById("stem");
var names = ""

if(sessionStorage.getItem("name")==undefined||sessionStorage.getItem("name")==null){   
    names = prompt("hva heter du?")
    document.getElementById("hallo").innerHTML="velkommen "+names+", her kan du stemme"
}else{
    names = sessionStorage.getItem("name")
    document.getElementById("hallo").innerHTML="hei igjen "+names+", takk for at du stemte"
}

if(sessionStorage.getItem("H") == undefined || sessionStorage.getItem("H") == undefined  || sessionStorage.getItem("H") == undefined ){
    sessionStorage.setItem("H", 0);
    sessionStorage.setItem("M", 0);
    sessionStorage.setItem("A", 0);
}

function tellStemmen(){  
    if(sessionStorage.getItem("name")==null){
        if(names != null){
        var stemme = document.querySelector('input[name="parti"]:checked').value;
        sessionStorage.setItem(stemme, Number(sessionStorage.getItem(stemme))+1);       
        sessionStorage.setItem("name", names)
        window.location.href = "resultat.htm"; 
        }else{
            nullstemme()  
        }
    }else{
        window.alert("du har allerede brukt din stemme");
        window.location.href = "resultat.htm"; 
    }
}

function nullstemme(){  
    window.alert("du har ikke logget inn");
    switchUser();
}



function switchUser(){
    sessionStorage.setItem("name", null);
    names = prompt("hva heter du?")
    sessionStorage.removeItem("name")
    document.getElementById("hallo").innerHTML="velkommen "+names+", her kan du stemme"

}

function seStemme(){
    var h = sessionStorage.getItem("H");
    var m = sessionStorage.getItem("M");
    var a = sessionStorage.getItem("A");

    gh= document.getElementById("h");
    gm= document.getElementById("m");
    ga= document.getElementById("a");

    let lo = document.getElementById("lo");
    let me = document.getElementById("me");
    let sh = document.getElementById("sh");

    lo.innerHTML = h
    me.innerHTML = m
    sh.innerHTML = a
    
    let all = Number(h)+Number(m)+Number(a);
    let biggest = Math.max(h, m, a)
    let prosent = 100/biggest;

    h = Number(h)*prosent;
    h = h +"%"
    
    m = Number(m)*prosent;
    m = m +"%"
    
    a = Number(a)*prosent;
    a = a +"%"
    
    gh.style.height = h;
    gm.style.height = m;
    ga.style.height = a;
}   