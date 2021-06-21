
const storyApi = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"

const detailApi = "https://hacker-news.firebaseio.com/v0/item/"

export const getStoryIDs = (size) =>
    fetch(`${storyApi}`)
        .then(res => res.json())
        .then(data => data.slice(0, size))
        .catch(error => console.log(error))

export const getStoryDetails = (id) =>
    fetch(`${detailApi}${id}.json?print=pretty`)
        .then(res => res.json())
        .catch(error => console.log(error))