let key = 'http://www.omdbapi.com/?apikey=[cb2df476]&&apikey=cb2df476';
//const myAPIKey = "cb2df476";
let Moviename = document.getElementById('search');
let btn = document.getElementById('searchBtn');
let result = document.querySelector('.result');
let getmovie = () => {
    let txt = `http://www.omdbapi.com/?t=${Moviename.value}& apiKey=${key}`;
    if(Moviename.value.length <= 0){
        result.innerHTML = `<h3 class="error">Please enter the movie name</h3>`;   
    } else{
        fetch(txt).then((resp) => resp.json()).then((data) => showResult(data)).catch(() =>{
            result.innerHTML = `<h3 class="error">Movie is not found</h3>`;
        })
    }
}
let showResult = (data) => {
    console.log(data);
    result.innerHTML = `<div class="info">
    <div class="ReleasedDate"><span>ReleasedDate:</span>${data.Released}</div>
    <div class="img">
        <img src="${data.Poster}" class="Picture">
    </div>
    
    <h4>${data.Title}</h4>
    <div class="MovieType">
        <div class="genre">
        <span>

        ${data.Genre.split(',').join('</span><span>')}
        </span>
        </div>
        <div class="rating">
            <img src="star.png" width="20" height="20" alt="">
            ${data.imdbRating}
        </div>
        <div class="about"><span>About:</span>${data.Plot}</div>
        <div class="about"><span>Cast by:</span>${data.Actors}</div>
        <div class="about"><span>Director:</span>${data.Director}</div>
    </div>
</div>
  `;  
};


btn.addEventListener('click',() => {
    getmovie();
});

/*<div class="info">
    <div class="ReleasedDate"><span>ReleasedDate:</span>${data.Released}</div>
    <img src="${data.Poster}" class="Picture" >
    <h4>"${data.Title}"</h4>
    <div class="MovieType">
        <div>
            ${data.Genre.split(',').join('</span><span>')}
        </div>
        <div class="rating">
            <img src="star.png" width="14" height="14" alt="">
            ${data.imdbRating}
        </div>
        <div class="about"><span>About:</span>${data.Plot}</div>
        <div class="about"><span>Cast by:</span>${data.Actors}</div>
        <div class="about"><span>Director:</span>${data.Director}</div>
    </div>
</div>


`;*/ 