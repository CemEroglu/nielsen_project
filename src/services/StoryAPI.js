
const storyApi = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
//const detailApi = "https://hacker-news.firebaseio.com/v0/item/26857743.json?print=pretty"
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
            return {
                "id": id,
                "descendants":data.descendants,
                "score":data.score
            }
        })
        .catch(error => console.log(error))
