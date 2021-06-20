
const storyApi = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"

const detailApi = "https://hacker-news.firebaseio.com/v0/item/"

export const getSomeElements = (size) =>
    fetch(`${storyApi}`)
        .then(res => res.json())
        .then(data => data.slice(0, size))
        .catch(error => console.log(error))

export const getElementsDetails = (id) =>
    fetch(`${detailApi}${id}.json?print=pretty`)
        .then(res => res.json())
        .then(data => {
            let descendant = data.descendants !== undefined ? data.descendants : "Unknown";
            let score = data.score !== undefined ? data.score : "Unknown";
            return {
                "id": id,
                "descendants": descendant,
                "score": score
            }
        })
        .catch(error => console.log(error))