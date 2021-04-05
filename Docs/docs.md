# API DOCS

#### DOCUMENT STRUCTURE ####

{\
  Title: { type: String, required: true },\
  Description: String,\
  Category: String, `[it can be "PPE", "FAK", "MS"]`\
  ImageURL: String,\
  Price: Number,\
  Quantity: Number,\
}

#### GET ALL PRODUCTS #### 
* GET: /api/allProducts
* RETURN: array with all documents on database

#### GET FIRST 8 IMAGES ####
* GET: /api/topProducts
* RETURN: array with first 8 documents on database

#### GET CATEGORY LIST ####
* GET: /api/categoryList
* RETURN: array with all unique categories on database

#### ADD NEW PRODUCTS ####
* POST: /api/product
* RETURN: create a new document on database (can also take a list of documents and create multiple entries at the same time)

#### DELETE ALL PRODUCS FROM DATABASE ####
* DELETE: /api/product
* RETURN: delete all documents from the database