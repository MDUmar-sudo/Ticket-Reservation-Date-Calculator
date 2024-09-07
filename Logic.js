/*
    Dark Mode Toggle function
*/
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
/*
    Date calculator function
*/
function dateCalculator(input, days) {
    var travel_date = document.getElementById("travel-date")

    let today = new Date(input);

    // for calculating 120 days advance reservation
    today.setDate(today.getDate() + days);

    // getting date components afte calculation
    let year = today.getFullYear();
    let month = today.getMonth();
    let date = today.getDate();
    let day = today.getDay();

    let day_arr = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
    ];

    let mnth_arr = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];

    date = date < 10 ? "0" + date : date;
    let dt = day_arr[day] + " " + date + " " + mnth_arr[month] + " " + year;
    return dt;

}
/*
    Booking Date Calculator Function
 */
function bookingDateCalculator() {
    let travel_date = document.getElementById("travel-date")

    travel_date.addEventListener("change", function () {
        let input = this.value;
        let dateEntered = new Date(input);
        let booking_date = dateCalculator(dateEntered, -120);
        let booking_text = document.getElementById("booking-date-text");
        let date_text = document.getElementById("date");
        booking_text.innerHTML = "Booking Starts on : ";
        date_text.innerHTML = booking_date + " (08:00 AM IST)";
        booking_text.scrollIntoView();
        let btn = document.getElementById("btn1");
        btn.style.display = 'block';
    });
}
/*
    Add To Calendar Function
 */
function addToCalendar() {
    let calendar_list = document.getElementById("calendar-list");
    calendar_list.classList.toggle("show");
}
/*
    Calendar Links Function
*/
function CalendarLink() {
    let travel_date = document.getElementById("travel-date")

    travel_date.addEventListener("change", function () {
        let input = this.value;
        let journey_date = new Date(input);
        let today = new Date();

        //getting current date and time for 'DTSTAMP'
        let curr_year = today.getFullYear();
        let curr_month = today.getMonth() + 1;
        let curr_date = today.getDate();
        let curr_hour = today.getHours();
        let curr_minute = today.getMinutes();
        let curr_sec = today.getSeconds();

        curr_date = curr_date < 10 ? "0" + curr_date : curr_date;
        curr_month = curr_month < 10 ? "0" + curr_month : curr_month;
        curr_hour = curr_hour < 10 ? "0" + curr_hour : curr_hour;
        curr_minute = curr_minute < 10 ? "0" + curr_minute : curr_minute;
        curr_sec = curr_sec < 10 ? "0" + curr_sec : curr_sec;

        // getting date components before calculation
        let journey_year = journey_date.getFullYear();
        let journey_month = journey_date.getMonth() + 1;
        let journey_dt = journey_date.getDate();

        // for calculating 120 days advance reservation
        journey_date.setDate(journey_date.getDate() - 120);

        // getting date components after calculation
        let year = journey_date.getFullYear();
        let month = journey_date.getMonth() + 1;
        let date = journey_date.getDate();

        let mnth_arr = [
            "",
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ];


        date = date < 10 ? "0" + date : date;
        month = month < 10 ? "0" + month : month;

        // for google, ical & yahoo
        let booking_date = `${year}${month}${date}`;

        // for outlook & office365
        let booking_date2 = `${year}-${month}-${date}`;

        // for ical 'DTSTAMP'
        let curr_dt = `${curr_year}${curr_month}${curr_date}`;
        let curr_time = `${curr_hour}${curr_minute}${curr_sec}`

        // Google Url
        let g = document.getElementById("google");
        g.setAttribute('href', `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${booking_date}T074500/${booking_date}T091500&ctz=Asia/Kolkata&details=Booking%20Starts%20at%208%20AM&location=https%3A%2F%2Fwww.irctc.co.in&text=RailTicketDate%20Alert%3A%20Railway%20Ticket%20Booking%20for%20${journey_dt}%20${mnth_arr[journey_month]}%20${journey_year}%20on%20${date}%20${mnth_arr[month - "0"]}%20${year}`);

        // iCalendar Url
        let i = document.getElementById("ical");
        i.setAttribute('href', `data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0D%0AVERSION:2.0%0D%0APRODID:RailTicketDate%20Alert%3A%20Railway%20Ticket%20Booking%20for%20${journey_dt}%20${mnth_arr[journey_month]}%20${journey_year}%2C%20on%20${date}%20${mnth_arr[month - "0"]}%20${year}%0D%0ABEGIN:VEVENT%0D%0ADTSTART:${booking_date}T074500%0D%0ADTEND:${booking_date}T091500%0D%0ADTSTAMP:${curr_dt}T${curr_time}%0D%0ASUMMARY:RailTicketDate%20Alert%3A%20Railway%20Ticket%20Booking%20for%20${journey_dt}%20${mnth_arr[journey_month]}%20${journey_year}%2C%20on%20${date}%20${mnth_arr[month - "0"]}%20${year}%0D%0ADESCRIPTION:Booking%20Starts%20at%208%20AM%0D%0ALOCATION:https%3A%2F%2Fwww.irctc.co.in%0D%0AUID:44432%0D%0AEND:VEVENT%0D%0AEND:VCALENDAR%0D%0A`);

        // Outlook Url
        let o = document.getElementById("outlook");
        o.setAttribute('href', `https://outlook.live.com/calendar/0/action/compose?allday=false&body=Booking%20Starts%20at%208%20AM&enddt=${booking_date2}T09%3A15%3A00&location=https%3A%2F%2Fwww.irctc.co.in&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=${booking_date2}T07%3A45%3A00&subject=RailTicketDate%20Alert%3A%20Railway%20Ticket%20Booking%20for%20${journey_dt}%20${mnth_arr[journey_month]}%20${journey_year}%2C%20on%20${date}%20${mnth_arr[month - "0"]}%20${year}`);

        // Office365 Url
        let m = document.getElementById("ms_office");
        m.setAttribute('href', `https://outlook.office.com/calendar/0/action/compose?allday=false&body=Booking%20Starts%20at%208%20AM&enddt=${booking_date2}T09%3A15%3A00&location=https%3A%2F%2Fwww.irctc.co.in&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=${booking_date2}T07%3A45%3A00&subject=RailTicketDate%20Alert%3A%20Railway%20Ticket%20Booking%20for%20${journey_dt}%20${mnth_arr[journey_month]}%20${journey_year}%2C%20on%20${date}%20${mnth_arr[month - "0"]}%20${year}`);

        // Yahoo Url
        let y = document.getElementById("yahoo");
        y.setAttribute('href', `https://calendar.yahoo.com/?desc=Booking%20Starts%20at%208%20AM&dur=false&et=${booking_date}T091500Z&in_loc=https%3A%2F%2Fwww.irctc.co.in&st=${booking_date}T074500Z&title=RailTicketDate%20Alert%3A%20Railway%20Ticket%20Booking%20for%20${journey_dt}%20${mnth_arr[journey_month]}%20${journey_year}%2C%20on%20${date}%20${mnth_arr[month - "0"]}%20${year}&v=60`);
    });



}

function responsiveMenu() {
    let hamburger = document.querySelector(".hamburger");
    let nav = document.querySelector(".nav");
    let menuItem1 = document.getElementById("menu-item1");
    let menuItem2 = document.getElementById("menu-item2");

    hamburger.addEventListener("click", () => {
        if (!hamburger.classList.contains('active') && !nav.classList.contains('active')) {
            hamburger.classList.add("active");
            nav.classList.add("active");
        }
        else {
            hamburger.classList.remove("active");
            nav.classList.remove("active");
        }

    })

    menuItem1.addEventListener("click", () => {
        hamburger.classList.remove("active");
        nav.classList.remove("active");
    })
    menuItem2.addEventListener("click", () => {
        hamburger.classList.remove("active");
        nav.classList.remove("active");
    })



}


function mainFunction() {

    // Date calculator
    let date = dateCalculator(new Date(), 120);
    let text = document.getElementById("till-date");
    text.innerHTML = `${date}`;

    // Booking Date Calculator
    bookingDateCalculator();

    // Close the dropdown if the user clicks outside of it
    window.onclick = function (event) {
        if (!event.target.matches('.btn')) {
            var dropdowns = document.getElementsByClassName("calendar-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    // Add to Calendar Options
    CalendarLink();

    // Responsive Hamburger menu
    responsiveMenu();

    // Hides the menu when a click event occurs outside the menu
    let nav = document.getElementById("menu");
    let menu_btn = document.getElementById("menu-btn");
    document.addEventListener("click", (event) => {
        if (!nav.contains(event.target) && !menu_btn.contains(event.target)) {
            nav.classList.remove('active');
            menu_btn.classList.remove("active");
        }
    });


}
mainFunction();

