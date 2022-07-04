const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const { addMovie, listMovie, updateMovie, deleteMovie } = require("./movie/functions")

const app = async (yargsObj) => {
    try {
        await sequelize.sync({alter: true});
        if (yargsObj.add) {
            //ADD SOMETHING TO MOVIE TABLE
            await addMovie({title: yargsObj.title, actor: yargsObj.actor})
        } else if (yargsObj.list) {
            //list contents of movie table
            await listMovie ()
        } else if (yargsObj.update) {
            //update one entry in the movie table
            
            const criteria = { title: yargsObj.update };
            let update = {};
            if (yargsObj.title) {
                update = { ...update, title: yargsObj.title }
            }
            if (yargsObj.actor) {
                update = { ...update, actor: yargsObj.actor }
            }

            await updateMovie(criteria, update);
        
        } else if (yargsObj.delete) {
            // delete entry from movie table
            {
                await deleteMovie({ title: yargsObj.title })
            }
        } else {
            console.log("Incorrect command")
        }
    } catch (error) {
        console.log(error);
    } finally {
        await sequelize.close();
    }
}

app(yargs.argv);