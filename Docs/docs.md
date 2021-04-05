# API DOCS

#### DOCUMENT STRUCTURE

{\
 Title: { type: String, required: true },\
 Description: String,\
 Category: String, `[it can be "PPE", "FAK", "MS"]`\
 ImageURL: String,\
 Price: Number,\
 Quantity: Number,\
}

#### GET ALL PRODUCTS

- GET: /api/allProducts
- RETURN: array with all documents on database

#### GET FIRST 8 IMAGES

- GET: /api/topProducts
- RETURN: array with first 8 documents on database

#### GET CATEGORY LIST

- GET: /api/categoryList
- RETURN: array with all unique categories on database

#### GET SPECIFIC CATEGORY PRODUCTS

- GET: /api/categoryProducts?Category=query
- RETURN: array with all products on the queried category

#### ADD NEW PRODUCTS

- POST: /api/product
- RETURN: create a new document on database (can also take a list of documents and create multiple entries at the same time)

#### SIGN UP USER

- POST: /api/signup
- BODY: {username: 'username', password: 'password'}
- RETURN: create a new user on database and outputs 'Your account has been successfully added.'

#### SEARCH SPECIFIC PRODUCTS

- POST: /api/productSearch
- BODY: {productName: 'productName'}
- RETURN: array of documents that matches product name

#### DELETE ALL PRODUCS FROM DATABASE

- DELETE: /api/product
- RETURN: delete all documents from the database
