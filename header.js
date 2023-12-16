export default class Header {
    constructor(data){
        this.data = data;
    }
   randerList(){
    const tpl = data.map((item) => {
      return `
      <div class ="head">
      <h2>${item.logo}</h2>
      <a href="#" id="menu-icon"><i style="font-size:30px" class="fa">&#xf0c9;</i></a>
      <span>${item.find}</span>
      <span>${item.compaines}</span>
      <span>${item.history}</span>
      <span>${item.applications}</span>
      </div>
      </div>`
    }).join("")
    document.getElementById("copy").innerHTML = tpl 
  }}
  
  const data = [
    {
      logo: "Jobfind",
      find: "Find Jobs",
      compaines: "Companies",
      history: "History",
      applications: "Applications",
    }
  ]
  // const workserach = new Header(data);
  // workserach.randerList()
  