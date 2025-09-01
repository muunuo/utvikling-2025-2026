        document.getElementById("kattBilde").style.display = "none";

        document.getElementById("ja").onclick = function() {
            document.getElementById("kattBilde").style.display = "block";
            console.log("hei")
        }
        document.getElementById("nei").onclick = function() {
            document.getElementById("kattBilde").style.display = "none"
            
        }