// Ude Import export (MANDATORY)
import { navbar } from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();



let news1 = JSON.parse(localStorage.getItem("news")) 
console.log(news1);

let detailed_news = document.getElementById("detailed_news")

detailed_news.innerHTML = null;
//   appendNews1(news1,detailed_news) 


 let  appendNews1 = (data,detailed_news) =>{
   
    let div = document.createElement("div");
    div.setAttribute("id","newsDiv")
    let img = document.createElement("img");
    img.src = data.urlToImage;


    let title1 = document.createElement("h3");
       title1.innerText = data.title;

       let p = document.createElement("p");
       p.innerText = data.content;

       div.append(img, title1,p)
       detailed_news.append(div)
  }
 
  appendNews1(news1,detailed_news)