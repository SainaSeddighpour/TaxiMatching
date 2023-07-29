
// async function main() {
//     const { MongoClient, ServerApiVersion } = require('mongodb');
//     const uri = "mongodb+srv://markisaackogan:aOyWeCx4gPJe9qkb@cluster0.su3bq6c.mongodb.net/?retryWrites=true&w=majority";
//     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
//     add(MongoClient, uri);
//     client.connect(err => {
//         const collection = client.db("test").collection("devices");
//         // perform actions on the collection object
//         client.close();
//     });
// }


// async function add(MongoClient, uri) {
//     console.log("reached")
//     MongoClient.connect(uri, function (err, db) {
//         if (err) throw err;
//         var dbo = db.db("mydb");
//         var myobj = { word: "leafy", date: "2023-04-06" };
//         dbo.collection("customers").insertOne(myobj, function (err, res) {
//             if (err) throw err;
//             console.log("1 document inserted");
//             db.close();
//         });
//     });
// }

// main();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://markisaackogan:aOyWeCx4gPJe9qkb@cluster0.su3bq6c.mongodb.net/?retryWrites=true&w=majority";
MongoClient.connect(url, function (err, db) {
    console.log("trace1")
    if (err) throw err;
    var dbo = db.db("mydb");
    var query = { date: "2023-04-09" };
    dbo.collection("customers").find(query).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});