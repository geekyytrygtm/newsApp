const axios = require("axios")
const options = {
    Authorization: "Bearer "+process.env.NEWS_API_KEY
}

const agent = new https.Agent({  
   rejectUnauthorized: false
});

class CommonService {
    constructor() {}    

    async getTopHeadlines(){
        try {
            const apiUrl = "https://newsapi.org/v2/top-headlines?country=uk"+"&apiKey="+options["Authorization"]
            const news = await axios.get(apiUrl);
            console.log("news", news)
            return news;
        } catch (error) {
            console.log(error);
            //=> 'Internal server error ...'
        }
    }

    async getNewsSearchResult(params){}
}

module.exports = new CommonService()