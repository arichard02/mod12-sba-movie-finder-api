import axios from "axios";



// base url for omob api
const BASE_URL = "http://www.omdbapi.com/";





export const searchMovies = async (req, res) => {
    const { title } = req.query;

    if (!title) {
        return res.status(400).json({
            error: "Title query parameter is required"
        });
    }

    // res.send("Search movies route works");

    // api call
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                s: title,
                apikey: process.env.OMDB_API_KEY,
            }

        });

        if (response.data.Response === "False") {
            return res.status(404).json({ 
                error: response.data.Error
            });
        }
    
        res.json(response.data);

    } catch (error) {
        console.error("MESSAGE:", error.message);
console.log("RESPONSE:", error.response?.data);

        res.status(500).json({ error: "Failed to fetch movies"})
    }

}



export const getMovieDetails =  async (req, res) => {
    const { id } = req.params ;

    try {
        const response = await axios.get(BASE_URL, {
            params: {
                i: id,
                apikey: process.env.OMDB_API_Key
            }
        });

        if (response.data.Response === "False") {
            return res.status(404).json({
                error: response.data.Error
            });
        }
        res.json(response.data);

    // } catch (error) {
    //     console.error(error.message);
    //     res.status(500).json({
    //         error: "Failed to fetch movie details"
    //     });

    } catch (error) {
    console.error("FULL ERROR:", error);
    console.error("MESSAGE:", error.message);
    console.error("RESPONSE:", error.response?.data);

    res.status(500).json({
        error: "Failed to fetch movies"
    });

    }
};