const fs = require('fs');

const getTodos = async() => {

fs.readFile('database.json', (err, data) => {
    if (err) throw err;
    console.log("json", JSON.parse(data))
    return JSON.parse(data);
});
}

module.exports = {
    getTodos,
}