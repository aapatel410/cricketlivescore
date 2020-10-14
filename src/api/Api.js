const API_KEY = "viqYsABVMMQ6CAcFhuUqgZDpNil1"

//Get All Upcoming Matches from Cric Api
export const getUpcomingMatches = () => {
    const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`

    //return all upcoming data fethed through api
    
    return fetch(url)
            .then((response) => response.json())
            .catch((err) => {console.log("Error: ",err)})




} 



//Get Match  details

export const getMatchDetails = (id) => {
    const url = `https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`

    return fetch(url)
            .then((response) => response.json())
            .catch((err) => console.log(err))

}