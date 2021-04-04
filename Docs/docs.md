API DOCS:

// DOCUMENT STRUCTURE

{
  Title: { type: String, required: true },
  Description: String,
  Category: String, // [it can be "PPE", "FAK", "MS"]
  ImageURL: String,
  Price: Number,
  Quantity: Number,
}


//GET ALL PRODUCTS

GET: /allProducts
RETURN: all documents on the database


// GET FIRST 8 IMAGES

GET: /topProducts
RETURN: all documents on the database


// ADD NEW PRODUCTS

POST: /product
RETURN: create a new database on database (can also take a list of documents and create multiple entries at the same time)


// DELETE ALL PRODUCS FROM DATABASE

DELETE: /product
RETURN: delete all documents from the database