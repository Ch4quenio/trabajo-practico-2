fetch("https://api.covid19api.com/summary")
.then(res =>{
  if(res.ok){
    console.log("Vas bien " + res)
    res.json().then(clima =>{
       totalConfirmed.innerHTML = "Coronavirus cases <br>" + clima.Global.TotalConfirmed;
       newDeaths.innerHTML = "New Deaths  <br>" + clima.Global.NewDeaths;
       totalRecovered.innerHTML = "Total Recovered <br>" +  clima.Global.TotalRecovered;
    })
  }
})


var espacio = null;

function encontrarPais(){
  espacio = document.getElementsByName("espacio")[0].value;
  datos2.classList.add("dataCard");
  datos3.classList.add("dataCard");
  datos4.classList.add("dataCard");

  fetch("https://api.covid19api.com/summary")
  .then(res =>{
    if(res.ok){
      console.log("Vas bien " + res)
      res.json().then(clima =>{
        console.log(clima)
        const paisSeleccionado = clima.Countries.filter(pais => {
   if (   pais.Country === espacio) {
return pais
   }


 })
 console.log(paisSeleccionado)
         datos.innerHTML = paisSeleccionado[0].Country;
         datos2.innerHTML = " Coronavirus Cases <br>" + paisSeleccionado[0].TotalConfirmed;
         datos3.innerHTML = "New Deaths  <br>" + paisSeleccionado[0].NewDeaths;
         datos4.innerHTML = "Total Recovered <br>" +  paisSeleccionado[0].TotalRecovered;
         // NEWS API
         var url = `https://newsapi.org/v2/everything?` +
                   `q=Coronavirus ${espacio}&` +
                   'from=2021-08-10&' +
                   'sortBy=popularity&' +
                   'apiKey=41be66c82e154fe8838bd047c7a423db';
``
         var req = new Request(url);
         fetch(req)
         .then(res =>{
           if(res.ok){
             res.json().then(news =>{
               newsH3.innerHTML = "Covid News From  "  + espacio;
// Noticia 1
document.getElementById("img").src=news.articles[0].urlToImage;
  newsTitle.innerHTML = news.articles[0].title;
newsContent.innerHTML = news.articles[0].description;
newsUrl.innerHTML = news.articles[0].url;
news1.classList.add("newsCard");

// Noticia 2
document.getElementById("img2").src=news.articles[2].urlToImage;
newsTitle2.innerHTML = news.articles[2].title;
newsContent2.innerHTML = news.articles[2].description;
newsUrl2.innerHTML = news.articles[2].url;
news2.classList.add("newsCard");

// Noticia 3
document.getElementById("img3").src=news.articles[3].urlToImage;
newsTitle3.innerHTML = news.articles[3].title;
newsContent3.innerHTML = news.articles[3].description;
newsUrl3.innerHTML = news.articles[3].url;
news3.classList.add("newsCard");


             })
           }
         })

      })
    }
    else {
    console.log("Algo no funciona " + res.status)
    }
  })
  .catch(error =>{
    console.error("Ups, Algo fallo" + error)
  })
};

fetch("https://api.covid19api.com/dayone/country/argentina/status/confirmed")
.then(res =>{
  if(res.ok){
    console.log("Vas bien hermano, todo saldra adelante" + res)
    res.json().then(clima =>{

       // datos.innerHTML = clima.Countries[0].Country;
       // datos2.innerHTML = clima.Countries[0].NewDeaths;
    })
  }
  else {
  console.log("Siempre sos asi de pelotudo? " + res.status)
  }
})
.catch(error =>{
  console.error("Ups, Algo fallo" + error)
})

// function getNews(){
//   fetch("https://newsapi.org/v2/top-headlines?country=us&apikey=41be66c82e154fe8838bd047c7a423db")
// }
