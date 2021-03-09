const settings = {
  "name": "hello-frontity",
  "state": {
    "frontity": {
      "url": "https://scrowbridge.bitlampsites.com/wpd/final/wordpress/",
      "title": "Nicholas Sparks Books",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      name: "books"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://scrowbridge.bitlampsites.com/wpd/final/wordpress/",
          "postTypes": [
            {
              type: "books",
              endpoint: "books",
              archive: "/book"
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
