// Toggle the side navigation

var menu_btn = document.querySelector("#menu-btn");
var sidebar = document.querySelector("#sidebar");
var container = document.querySelector(".my-container");
menu_btn.addEventListener("click", () => {
    sidebar.classList.toggle("active-nav");
    container.classList.toggle("active-cont");
});



let table = new DataTable(documentgetelementbyId("customersData"), {
    "data": [{
            "name": "John",
            "address": "System Information",
            "city": "Tokyo",
            "age": "21",
            "last visit": "2019/02/05",
            "orders": "2100 SAR"
        },
        {
            "name": "Divid",
            "address": "Cyber Scurity",
            "city": "New York",
            "age": "33",
            "last visit": "2020/12/10",
            "orders": "221 SAR"
        },
        {
            "name": "Rihan",
            "address": "Accounting",
            "city": "San Francisco",
            "age": "41",
            "last visit": "2020/2/2",
            "orders": "22233.500 SAR"
        },
        {
            "name": "Colleen",
            "address": "Accounting",
            "city": "New York",
            "age": "39",
            "last visit": "2021/01/01",
            "orders": "8731.40 SAR"
        },
        {
            "name": "Herrod",
            "address": "Sales Assistant",
            "city": "Edinburgh",
            "age": "29",
            "last visit": "2021/06/11",
            "orders": "342 SAR"
        },
        {
            "name": "Airi Satou",
            "address": "Accounting",
            "city": "New York",
            "age": "29",
            "last visit": "2019/03/02",
            "orders": "111.49 SAR"
        },
        {
            "name": "Cedric Kelly",
            "address": "Software Engineer",
            "city": "Edinburgh ",
            "age": "2",
            "last visit": "2022/2/2",
            "orders": "8883 SAR"
        },
        {
            "name": "Tiger Nico",
            "address": "Junior Technical Author",
            "city": "Washington",
            "age": "31",
            "last visit": "2020/08/02",
            "orders": "1000 SAR"
        },
        {
            "name": "Jenny",
            "address": "Javascript Developer",
            "city": "Los Angeles",
            "age": "28",
            "last visit": "2020/04/11",
            "orders": "1231.45 SAR"
        },
        {
            "name": "Jin Tiger",
            "address": "Integration Specialist",
            "city": "Tokyo",
            "age": "38",
            "last visit": "2019/11/10",
            "orders": "905 SAR"
        },
        {
            "name": "Sonya frost",
            "address": "Integration Specialist",
            "city": "Los Angeles",
            "age": "27",
            "last visit": "2021/09/07",
            "orders": "753.89 SAR"
        },
        {
            "name": "Cedric Jin",
            "address": "bb",
            "city": "Tokyo",
            "age": "22",
            "last visit": "2021/09/07",
            "orders": "22 SAR"
        },
        {
            "name": "Charde Marshall",
            "address": "Regional Director",
            "city": "San Francisco",
            "age": "33",
            "last visit": "2008/10/16",
            "orders": "470,600 SAR"
        },
        {
            "name": "Haley Kennedy",
            "address": "Senior Marketing Designer",
            "city": "London",
            "age": "35",
            "last visit": "2012/12/18",
            "orders": "13,500 SAR"
        },
        {
            "name": "Tatyana Fitzpatrick",
            "address": "Regional Director",
            "city": "London",
            "age": "55",
            "last visit": "2010/03/17",
            "orders": "385,750 SAR"
        },
        {
            "name": "Michael Silva",
            "address": "Marketing Designer",
            "city": "London",
            "age": "51",
            "last visit": "2012/11/27",
            "orders": "198,500 SAR"
        },
        {
            "name": "Paul Byrd",
            "address": "Chief Financial Officer (CFO)",
            "city": "New York",
            "age": "59",
            "last visit": "2010/06/09",
            "orders": "725,000 SAR"
        },
        {
            "name": "Gloria Little",
            "address": "Systems Administrator",
            "city": "New York",
            "age": "20",
            "last visit": "2009/04/10",
            "orders": "237,500 SAR"
        },
        {
            "name": "Bradley Greer",
            "address": "Software Engineer",
            "city": "London",
            "age": "28",
            "last visit": "2012/10/13",
            "orders": "132,000 SAR"
        },
        {
            "name": "Dai Rios",
            "address": "Personnel Lead",
            "city": "Edinburgh",
            "age": "39",
            "last visit": "2012/09/26",
            "orders": "217,500 SAR"
        },
        {
            "name": "Jenette Caldwell",
            "address": "Development Lead",
            "city": "New York",
            "age": "37",
            "last visit": "2011/09/03",
            "orders": "345,000 SAR"
        },
        {
            "name": "Yuri Berry",
            "address": "Chief Marketing Officer (CMO)",
            "city": "New York",
            "age": "44",
            "last visit": "2009/06/25",
            "orders": "675,000 SAR"
        },
        {
            "name": "Caesar Vance",
            "address": "Pre-Sales Support",
            "city": "New York",
            "age": "30",
            "last visit": "2011/12/12",
            "orders": "106,450 SAR"
        },
        {
            "name": "Doris Wilder",
            "address": "Sales Assistant",
            "city": "Sydney",
            "age": "33",
            "last visit": "2010/09/20",
            "orders": "85,600 SAR"
        },
        {
            "name": "Angelica Ramos",
            "address": "Chief Executive Officer (CEO)",
            "city": "London",
            "age": "57",
            "last visit": "2009/10/09",
            "orders": "1,200,000 SAR"
        },
        {
            "name": "Gavin Joyce",
            "address": "Developer",
            "city": "Edinburgh",
            "age": "26",
            "last visit": "2010/12/22",
            "orders": "92,575 SAR"
        },
        {
            "name": "Jennifer Chang",
            "address": "Regional Director",
            "city": "Singapore",
            "age": "39",
            "last visit": "2010/11/14",
            "orders": "357,65 SAR"
        },
        {
            "name": "Brenden Wagner",
            "address": "Software Engineer",
            "city": "San Francisco",
            "age": "24",
            "last visit": "2011/06/07",
            "orders": "206,85 SAR"
        },
        {
            "name": "Fiona Green",
            "address": "Chief Operating Officer (COO)",
            "city": "San Francisco",
            "age": "47",
            "last visit": "2010/03/11",
            "orders": "850 SAR"
        },
        {
            "name": "Shou Itou",
            "address": "Regional Marketing",
            "city": "Tokyo",
            "age": "49",
            "last visit": "2011/08/14",
            "orders": "163,00 SAR"
        },
        {
            "name": "Michelle House",
            "address": "Integration Specialist",
            "city": "Sydney",
            "age": "29",
            "last visit": "2011/06/02",
            "orders": "95,400 SAR"
        },
        {
            "name": "Suki Burks",
            "address": "Developer",
            "city": "London",
            "age": "32",
            "last visit": "2009/10/22",
            "orders": "114,500 SAR"
        },
        {
            "name": "Prescott Bartlett",
            "address": "Technical Author",
            "city": "London",
            "age": "36",
            "last visit": "2011/05/07",
            "orders": "145,000 SAR"
        },
        {
            "name": "Gavin Cortez",
            "address": "Team Leader",
            "city": "San Francisco",
            "age": "36",
            "last visit": "2008/10/26",
            "orders": "235,500 SAR"
        },
        {
            "name": "Martena Mccray",
            "address": "Post-Sales support",
            "city": "Edinburgh",
            "age": "40",
            "last visit": "2011/03/09",
            "orders": "324,050 SAR"
        },
        {
            "name": "Unity Butler",
            "address": "Marketing Designer",
            "city": "San Francisco",
            "age": "54",
            "last visit": "2009/12/09",
            "orders": "5,675 SAR"
        },
        {
            "name": "Howard Hatfield",
            "address": "Office Manager",
            "city": "San Francisco",
            "age": "31",
            "last visit": "2008/12/16",
            "orders": "164,500 SAR"
        },
        {
            "name": "Hope Fuentes",
            "address": "Secretary",
            "city": "San Francisco",
            "age": "63",
            "last visit": "2010/02/12",
            "orders": "109,850 SAR"
        },
        {
            "name": "Vivian Harrell",
            "address": "Financial Controller",
            "city": "San Francisco",
            "age": "42",
            "last visit": "2009/02/14",
            "orders": "452,500 SAR"
        },
        {
            "name": "Timothy Mooney",
            "address": "Office Manager",
            "city": "London",
            "age": "32",
            "last visit": "2008/12/11",
            "orders": "136,200 SAR"
        }
    ]
});