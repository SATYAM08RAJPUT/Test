import Header from './header';
import ListingView from './listingView';

class main {
  constructor(data){
      this.data = data;
  }
 randerList(){
  const tpl = data.map((item) => {
    return `
    <div class ="head">
    <span>${item.logo}</span>
    <span>${item.titleleft}</span>
    <span>${item.titleleftmiddle}</span>
    <span>${item.postjob}</span>
    </div>`
  }).join(" ")
  document.getElementById("copy").innerHTML = tpl;
}}

const dataer = [
  {
    logo: "Projobs",
    titleleft: "Find Jobs",
    titleleftmiddle: "Browse Startup",
    postjob: "Post a Job",
    signup: "Sign Up",
    singin: "Sign In",
  }
]
const workseracher = new Header(dataer);
workseracher.randerList()
const listingView = new ListingView();
listingView.init();



// randerList(joblistingData);




