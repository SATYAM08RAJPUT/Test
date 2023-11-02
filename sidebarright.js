class Rightsidebar{
    constructor(rightbar){
        this.rightbar = rightbar;
    }
    renderrightbar(){
        const right = rightbar.map((itm) => {
            return `<div class ="right">
            <div>${itm.title}</div>
            <input type  ="${itm.serch}" placeholder="${itm.placeholder}">
            <div><button>${itm.btn}</button></div>
            </div>
            `
        }).join('')
        document.getElementById('sidebarright').innerHTML = right;
    }
}
const rightbar = [
    {
        title: "Get New Jobs Alert's By Email",
        serch: "text",
        placeholder: "My Email Address",
        btn: "Activite"
    }
]
const rightlike = new Rightsidebar()
rightlike.renderrightbar();