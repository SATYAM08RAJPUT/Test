class Sidebar {
    constructor(data){
        this.data = data;
    }
    randersidebar(){
        const render = sidebarData.map((itm) => {
            return `<div class ="mainside">
            <div class ="sidebar">
            <h3>${itm.heading}</h3>
        <div><input type="${itm.type}">${itm.fulltime}</div>
        <div><input type="${itm.type}">${itm.parttime}</div>
        <div><input type="${itm.type}">${itm.Student}</div>
        <div><input type="${itm.type}">${itm.Internship}</div>
        <div><input type="${itm.type}">${itm.Freelance}</div>
        </div>
        <div class ="sidesecond">
        <h3>${itm.headingsecond}</h3>
        <div><input type="${itm.type}">${itm.front}</div>
        <div><input type="${itm.type}">${itm.backend}</div>
        <div><input type="${itm.type}">${itm.iosdeveloepr}</div>
        <div><input type="${itm.type}">${itm.parttime}</div>
        <div>
        <div class ="sidethree">
        <h3>${itm.headingthree}</h3>
        <div><input type ="${itm.type}">${itm.freher}<div>
        <div><input type ="${itm.type}">${itm.twofour}<div>
        <div><input type ="${itm.type}">${itm.senior}<div>
        <div><input type ="${itm.type}">${itm.moreSenior}<div>
        </div>
        <div>`
        }).join("")
        document.getElementById('sidebar').innerHTML = render 
    }
}

const sidebarData = [
    {
        heading: "Job Types",
        type: "checkbox",
        fulltime: "Full time",
        parttime: "Part Time",
        Student: "Student's",
        Internship: "Internship",
        Freelance: "Freelance",
        headingsecond: "Job Roles",
        front: "Front-end-Developer",
        backend: "Back-end-Developer",
        iosdeveloepr: "Ios Developer",
        headingthree: "Experience",
        freher: "Fresher",
        twofour: "2-4",
        senior: "10-12",
        moreSenior: "Over 15+"
    }
]
const sidebr = new Sidebar()
sidebr.randersidebar()