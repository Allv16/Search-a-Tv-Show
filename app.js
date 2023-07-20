const form = document.querySelector('#searchForm');
const searchField = document.querySelector('#searchField');
const country = document.querySelector('#countryField');
const container = document.querySelector('#container');

const getTvShows = async (query, country) => {
    try{
        const config = { params: { q: query} }
        const response = await axios.get(`https://api.tvmaze.com/search/shows`, config);
        return response.data;
    }catch(e){
        console.log(`There's an error:`,e);
    }
}

const appendShows = (shows) => {
    shows.map((show) => {
        if(show.show.image){
            const img = document.createElement('img');
            const p = document.createElement('p');

            img.src = show.show.image.medium;

            document.body.append(img);
        }
        
        
    })
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    

    const shows = await getTvShows(searchField.value);
    appendShows(shows);
});