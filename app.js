$(document).ready(() => {

    $("#searchMovie").click(() => {
        var searchedMovie = $("#movieInput").val()
        getMovies(searchedMovie)
    })

})

/*function getMovies(search) {
    $.ajax({
        url: 'https://www.omdbapi.com/?&apikey=f2905585&s=star wars ' + search,
        dataType: 'jsonp',
        success: function(results){
            console.log(results);
        }
    });
}

function getChar() {
    $.ajax({
        url: 'https://swapi.co/api/people/1',
        dataType: 'jsonp',
        success: function(results){
            console.log(results)
        }
    });
}*/

function getMovies(search) {
    $("#tl").empty()
    $.ajax({
        url: 'https://www.omdbapi.com/?s=star wars ' + search + '&type=movie&apikey=8685e8d0',
        dataType: 'jsonp',
        success: function(results){
            var selectedMovie = results.Search
            $.each(selectedMovie, function(i,movie) {
                getTitleData(movie, movie.Title)
               
            })
            
            /*for (var i in selectedMovie) {
                $("#tl").append("<button class='btn'>" + selectedMovie[i].Title + "</button")
                var ay = [];
                ay.push(selectedMovie[i].Title)
                console.log(ay.length)
                $(".btn").click(() => {
                    $.ajax({
                        url: "https://www.omdbapi.com/?t=" + selectedMovie[i] + '&apikey=8685e8d0',
                        dataType: 'jsonp',
                        success: function(results){
                            console.log(results);
                        }
                    });
                })
            }*/
        }
    });
}

function getTitleData(movie, title) {
    
        $.ajax({
            url: "https://www.omdbapi.com/?t=" + title + '&apikey=8685e8d0',
            dataType: 'jsonp',
            success: function(results){
                
                if (movie.Poster === "N/A") {
                    $("#tl").append("<ul><li><img src='a.jpeg'></li><li>titulo: " 
                    + movie.Title + "</li><li>año: " 
                    + movie.Year + "</li><li><a href='http://www.imdb.com/title/" 
                    + movie.imdbID + "'>imbd link</a></li><li>" 
                    + results.Plot + "</li></ul>")
                   } else {
                    $("#tl").append("<ul><li><img src='" 
                    + movie.Poster + "'></li><li>titulo: " 
                    + movie.Title + "</li><li>año: " 
                    + movie.Year + "</li><li><a href='http://www.imdb.com/title/" 
                    + movie.imdbID + "'>imbd link</a></li><li>" 
                    + results.Plot + "</li></ul>")
                   }
                
                /*if (results.Plot != "N/A") {
                    console.log(results.Plot);
                }*/
                }
        });
    
}