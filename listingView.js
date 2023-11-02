import dataService from "./dataservice";

export default class ListingView {
  constructor(jobListingData) {
    this.jobListingData = jobListingData
      this.jobListingData = [];
  }

  renderSearchBar() {
      const html = 
      `<div class = "searchbar">
      <input type ="search" placeholder ="Jobs Title or Keywords" id = "jobtile" >
      <input type = "search"  placeholder ="Search Locations" id ="joblocation">
      <input type = "search" placeholder ="Search Salary Range" id ="jobsalry">
      <input type ="button" id= "search" value ="Search Jobs">
      </div> `
      document.getElementById("renderserchdata").innerHTML = html 
  }

  renderJobList(jobListingData) {
      const tpl = jobListingData.map((itm) => {
          return `<div class = "set">
        <img src ="https://i.pinimg.com/736x/76/24/fb/7624fbde994774c646fb6f586c04d875--ios-app-icon-logo-desing.jpg" class ="smallogo">
        <span>${itm.title}</span>
        <div>Company: ${itm.company}</div>
        <div>Location:-${itm.location}</div>
        <div>Salary Range:-${itm.salary}</div>
        <p><b>Job description</b>:-A job description is a written explanation that outlines the essential responsibilities and requirements for a vacant position. Job descriptions should be thorough, clear, and concise and include: A brief introduction to the company and its mission.</p>
      </div>`
      }).join("")
      document.getElementById('renderjobs').innerHTML = tpl;
  }
  eventbind(){
    document.getElementById("search").addEventListener('click',() => {
      const jobtitleserch = document.getElementById("jobtile").value || undefined;
      const joblocationid  = document.getElementById('joblocation').value || undefined;
      const jobSalry  = document.getElementById('jobsalry').value || undefined;
      console.log(jobSalry,jobtitleserch,joblocationid)
      const filterjob =  this.jobListingData.jobs.filter((item) => {
        return item.title.includes(jobtitleserch) || item.location.includes(joblocationid) || item.salary.includes(jobSalry);
        // return item.salary.includes(jobSalry);
      })
      console.log(filterjob)
      this.renderJobList(filterjob)
    })
}
  
  async init() {
    const data = await dataService.getData("dummy.json");
    console.log(data);
    this.jobListingData = data;
    this.renderSearchBar();
    this.renderJobList(this.jobListingData.jobs);
    this.eventbind();
  }
  
}









// function requestfun(event){
//   console.log(event)
//   var serchdata = event.target.value;
//   console.log(serchdata)
//   const filterdata = collectData.jobs.filter((item) => {
//     console.log(item)
//     return item.title.includes(serchdata);
//   })
//   console.log(filterdata);
//   reanderdata(filterdata);
// }

// function searchlocation(event){
//   console.log(event)
//   const serchlocation = event.target.value;
//   console.log(serchlocation)
//   const filterlocation = collectData.jobs.filter((itm) => {
//     console.log(itm)
//     return itm.location.includes(serchlocation)
//   })
//   console.log(filterlocation);
// }

// function searchsalary(event){
//   console.log(event)
//   const serchsaly = event.target.value;
//   console.log(serchsaly)
//   const filtersalary = collectData.jobs.filter((item) => {
//     return item.salary.includes(serchsaly)
//   })
//   console.log(filtersalary);
// }
