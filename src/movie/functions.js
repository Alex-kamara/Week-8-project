const Movie = require("./table");

exports.addMovie = async (movieObj) => {
    try {
        const response = await Movie.create(movieObj);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

exports.listMovie = async (movieObj) => {
    try {
        const listMovie = await Movie.findAll(movieObj)
        console.log("All Movies", JSON.stringify(listMovie, null, 2));
    } catch (error) {
        console.log(error);
    }
};

exports.updateMovie = async (whereObj, updateObj) => {
    try {
        await Movie.update(updateObj, { where: whereObj });
    } catch (error) {
        console.log(error);
    }
};

exports.deleteMovie = async (movieObj) => {
    try {
        await Movie.destroy({
            where: movieObj,
        });
    } catch (error) {
        console.log(error);
    }
};