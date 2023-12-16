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
        <img src ="https://ugc.futurelearn.com/uploads/images/d5/6d/d56d20b4-1072-48c0-b832-deecf6641d49.jpg" class ="smallogo">
        <h1>${itm.title}</h1>
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
      })
      console.log(filterjob);
      this.renderJobList(filterjob);
    })
  }
  
  async init() {
    const data = await dataService.getData("/data/dummy.json");
    console.log(data);
    this.jobListingData = data;
    this.renderSearchBar();
    this.renderJobList(this.jobListingData.jobs);
    this.eventbind();
  }
}

