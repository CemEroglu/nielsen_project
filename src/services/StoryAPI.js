
const storyApi = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"


export const getSomeElements = (size) =>
    fetch(`${storyApi}`)
        .then(res => res.json())
        .then(data=>data.slice(0,size))
        .catch(error => console.log(error))
