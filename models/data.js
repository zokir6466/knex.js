const knex = require("./dbConnect");

async function name() {
    const result = await knex
        .select()
        .from('uzbek_text')

    return result    
}

module.exports = name