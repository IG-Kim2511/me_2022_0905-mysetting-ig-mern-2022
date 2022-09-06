
// 🦄react -  package.json 예제 코드

{
    // server.js
    "main": "server.js",
    
    // script
    "scripts": {
      "start": "node backend/server",
      
      "server": "nodemon backend/server",
      "client": "npm start --prefix frontend",
  
      "dev": "concurrently \"npm run server\" \"npm run client\""
    },


    // homepage
    "homepage": "https://github.com/IG-Kim2511/udemy-traversy-2022-0901-ecommerce-mern-classnote-2#readme",


    // dependencies
    "dependencies": {
      "express": "^4.18.1"
    },

    // devDependencies
    "devDependencies": {
      "concurrently": "^7.3.0",
      "nodemon": "^2.0.19"
    }







    //  (기본 코드...)
    "name": "udemy-traversy-2022-0901-ecommerce-mern-classnote-2",
    "version": "1.0.0",
    "description": "MERN shopping cart",
       
    "repository": {
        "type": "git",
        "url": "git+https://github.com/IG-Kim2511/udemy-traversy-2022-0901-ecommerce-mern-classnote-2.git"
      },
      "author": "",
      "license": "ISC",
      "bugs": {
        "url": "https://github.com/IG-Kim2511/udemy-traversy-2022-0901-ecommerce-mern-classnote-2/issues"
      },

  }
  