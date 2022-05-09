
async function main(){
  const { MongoClient } = require('mongodb');
  //const uri = "mongodb+srv://Gowtham:87654321@cluster0.jczfa.mongodb.net/sample_airbnb?retryWrites=true&w=majori";
  const uri = "mongodb+srv://gowtham:sirasia@cluster0.pudoe.mongodb.net/sample_airbnb?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  //findListings(client, 10);
  addNewListing(client);
  }
  main().catch(console.error);

  async function addNewListing(client){
    const doc = {
      name: "New Record Gowtham2",
      listing_url: "No bytes, no problem. Just insert a document, in MongoDB",
      summary: "This is a new test record update"
    }
    const collection = client.db('sample_airbnb').collection('listingsAndReviews');
    const result = await collection.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
    res =  await collection.findOne({name: "New Record Gowtham"});
    console.log(res);
    client.close();
  }
  
  async function findListings(client, resultsLimit) {
    const cursor = client
      .db('sample_airbnb')
      .collection('listingsAndReviews')
      .find()
      .limit(resultsLimit);
  
    const results = await cursor.toArray();
    if (results.length > 0) {
      console.log(`Found ${results.length} listing(s):`);
      results.forEach((result, i) => {
        date = new Date(result.last_review).toDateString();
  
        console.log();
        console.log(`${i + 1}. name: ${result.name}`);
        console.log(`   _id: ${result._id}`);
        console.log(`   bedrooms: ${result.bedrooms}`);
        console.log(`   bathrooms: ${result.bathrooms}`);
        console.log(
          `   most recent review date: ${new Date(
            result.last_review
          ).toDateString()}`
        );
      });
    }
    client.close();
  }
  
