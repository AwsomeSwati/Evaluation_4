// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

 import {searchCountryNews ,appendNews} from "./fetch.js"


let search = (e) =>{

    if(e.key === "Enter"){
  
 let query = document.getElementById("search_input").value

 localStorage.setItem("searched_input",JSON.stringify(query))
 window.location.href="search.html"

}
}

document.getElementById("search_input").addEventListener("keydown",search);

let categories = document.getElementById("sidebar").children;

function cSearch() {

    console.log(this.id);


    searchCountryNews(this.id).then((data) => {
        console.log(data);
        let results = document.getElementById("results");
         results.innerHTML = null;
          appendNews(data.articles,results) 
    });


};

for(let el of categories){
    el.addEventListener("click",cSearch);
}

