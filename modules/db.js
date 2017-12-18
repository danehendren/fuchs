const spicedPg = require("spiced-pg");

if (process.env.DATABASE_URL) {
    db = process.env.DATABASE_URL
} else {
    var info = require('../secrets.json')
    var user = info.username;
    var pass = info.password;
    db = spicedPg(`postgres:${user}:${pass}psql@localhost:5432/shop`);
}



exports.getShopProducts = function() {

    const  q = `SELECT * FROM shopItems`
    // const params = [ ]
        return db.query( q )
            .then(( data ) => { return data.rows })
            

}
