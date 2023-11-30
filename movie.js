class film{
    constructor(title, studio,rating){
        this.title=title;
        this.studio=studio;
        //this.rating-rating;
        this.setRating(rating);

    }
     setRating(rating){
        if(rating !== null || rating !== undefined)
        {
            this.rating = rating;
        }
        else{
            this.rating= "PG";
        }
     }

getPG(movie) {
    var pgMovie = [];

    for (var i = 0; i < movie.length; i++) {
        var pgAnime = new film(
            movie[i].title,
            movie[i].studio,
           "PG"
        );
            pgMovie.push(pgAnime);
    }

    return pgMovie;
}
}
	
var mv =new film("Casino Royale", "Eon Productions", "PG­13")
console.log(mv);
var movieList = [
    
    {"title": "Mozhi", "studio": "Duet Movies", "rating": "R-17"},
    {"title": "Lakshmi", "studio": "Trident Arts", "rating": "PG-13"},
    {"title": "Happy","studio": "Geetha Arts","rating": "PG-13"}
];
var pgMovieList = mv.getPG(movieList);
console.log(pgMovieList);