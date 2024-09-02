let APIKey="ad8dd24a";
let searchinput=document.getElementById("searchinput");
let searchbtn=document.getElementById("searchbtn");
const getdata= async(movie)=>{
   try{
    let fetchData = await fetch(`https://www.omdbapi.com/?apikey=${APIKey}&t=${movie}`);
    let jsondata= await fetchData.json();
    console.log(jsondata);
    document.querySelector(".card").innerHTML=""
    searchinput.value="";
    let div=document.createElement("div");
    div.classList.add("movieCard");
    div.innerHTML=`
     <img src=${jsondata.Poster} alt="">
         <div class="cardText">
            <h1>${jsondata.Title}</h1>
             <p class="rating">Rating : <span>${jsondata.Ratings[0].Value}</span></p>
             <a href="">${jsondata.Genre}</a>
            <p>Release : <span>${jsondata.Released}</span></p>
            <p>Duration : <span>${jsondata.Runtime}</span></p>
            <p>Discription : <span>${jsondata.Plot}</span></p>
           

            
         </div>`
         document.querySelector(".card").appendChild(div)
   
   }
   catch(error){
         document.querySelector(".card").innerHTML="<h1>Enter valid movie name</h1>"
   }
   
}
searchbtn.addEventListener("click",function(){
    let moviename=searchinput.value;
    if(moviename!=""){
        getdata(moviename)
    }
    else{
      document.querySelector(".card").innerHTML="<h1>First search Movie Name</h1>"
    }
})

