export function getShows(query){
    return fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
        .then(function (response) {return response.json()})
        .then(function (items) {return items.map(item => item.show)})
}

export function getShowInfo(showId){
    return fetch(`https://api.tvmaze.com/shows/${showId}`)
    .then((response) => {return response.json()});
}