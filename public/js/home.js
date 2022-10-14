$(document).ready(function () {
    $("#searchBtn").click(function () {
        // const value = document.getElementById("city").value;
        const value = $("#city").val();
         if(value == ""){
            alert("Please enter a city");
         } else {
            alert(value);
         }
    })
});  