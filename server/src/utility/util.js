export default fetchData = async (url)=>{
    const options = {
        Authorization: `${process.env.NEWS_API_KEY}`
    }
    const response = await fetch(url, options);
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    const result = await response.json()
    return result;
}