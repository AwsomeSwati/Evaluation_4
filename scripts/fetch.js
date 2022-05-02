let searchNews = async (value)  =>{
    
    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value}`)
       
        let data = await  res.json();
        console.log(data);
        return data;
    }
    catch(err){
        console.log("err:",err)
    }
};


 let searchCountryNews = async (v) => {
    

    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${v}`)
       
        let data = await  res.json();
        console.log(data);
        return data;
    }
    catch(err){
        console.log("err:",err)
    }
 }

let appendNews = (data,results) =>{

    data.forEach(({title,urlToImage,description,content})=>{

       
    
        let news_div = document.createElement("div");
        news_div.setAttribute("class","news");

        let img_div = document.createElement("div");

        let img = document.createElement("img");
        img.src = urlToImage;

        img_div.append(img)

       let info_div = document.createElement("div");

       let title1 = document.createElement("h3");
       title1.innerText = title;

       let p = document.createElement("p");
       p.innerText = description;

        info_div.append(title1,p)

        news_div.append(img_div,info_div);

        let data1 = {
            urlToImage,
            title,
            content
        }

        news_div.onclick = () =>{
            showVideo(data1);  // we want the fn to run on div click only
            }
 
      results.append(news_div);



    });

    
    const showVideo = (x)=> {
        window.location.href = "news.html"
        localStorage.setItem("news" , JSON.stringify(x));
        
        }
    
}

export {searchNews , appendNews , searchCountryNews}