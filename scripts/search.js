// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

import {searchNews ,appendNews} from "./fetch.js"


let query = JSON.parse(localStorage.getItem("searched_input")) 
console.log(query);



let showData = () =>{
searchNews(query).then((data) =>{
    console.log(data);
let results = document.getElementById("results")
 
//  window.location.href = "search.html";
 results.innerHTML = null;
  appendNews(data.articles,results)    
})
  
}

showData();

