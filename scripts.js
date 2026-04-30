/* 
   1) Contact Page (Validation)
*/
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill all required fields.");
        return false;
    }

    return true;
}


/* 
   2) Projects Page (Show/Hide)
 */
function toggleDescription(id) {
    var element = document.getElementById(id);

    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}


/* 
   3) CV Page (Mouse Hover)
 */
window.onload = function() {

    addDate();

    var quote = document.getElementById("quote");

    if (quote) {
        quote.addEventListener("mouseover", function() {
            quote.style.backgroundColor = "#ffc0cb";
        });

        quote.addEventListener("mouseout", function() {
            quote.style.backgroundColor = "";
        });
    }

};


/* 
   4) Home Page (On Load)
 */
function addDate() {

    var p = document.createElement("p");
    var text = document.createTextNode("Page loaded on: " + new Date());

    p.appendChild(text);

    var footer = document.querySelector("footer");
    if (footer) {
        footer.appendChild(p);
    }
}
