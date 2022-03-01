// Toggle the side navigation

var menu_btn = document.querySelector("#menu-btn");
var sidebar = document.querySelector("#sidebar");
var container = document.querySelector(".my-container");
var footer = document.querySelector("#ft");
menu_btn.addEventListener("click", () => {
    sidebar.classList.toggle("active-nav");
    container.classList.toggle("active-cont");
    footer.classList.toggle("active-ft");

});


$(document).ready(function() {
    $('#customersData').DataTable({
        "ajax": "../js/data.json",
        "columns": [
            { "data": "name" },
            { "data": "address" },
            { "data": "city" },
            { "data": "age" },
            { "data": "last-visit" },
            { "data": "orders" }
        ]
    })
});