let input = document.querySelector('#searchInput');
let button = document.querySelector('#searchBtn');
let result = document.querySelector('#searchResults');
button.addEventListener('click', fetchAPIdata);

function fetchAPIdata(){
    let url = 'https://itunes.apple.com/search?term=' + input.value;
    let fetchedData = fetch(url)
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            let addHTML = '';

            if(data.results.length === 0){
                alert('NO RESULTS FOUND!')
            }

            data.results.forEach((song) => {
                addHTML += 
                `
                <div class = "col s3 m3 l3">
                    <div class="card">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" src="${song.artworkUrl100}">
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">${song.trackName}<i class="material-icons right">more_vert</i></span>
                            <p>${song.artistName}</a></p>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">${song.trackName}<i class="material-icons right">close</i></span>
                            <audio controls><source src="${song.previewUrl}" type="audio/mpeg"></audio>
                            <p>${song.collectionName}</p>
                        </div>
                    </div>
                </div>
                `
            })
            result.innerHTML = addHTML;
        })
        .catch((error) => console.log(error));
}

function resetInput(){

}