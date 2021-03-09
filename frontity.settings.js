const settings = {
  "name": "hello-frontity",
  "state": {
    "frontity": {
      "url": "https://scrowbridge.bitlampsites.com/wpd/final/wordpress/",
      "title": "Test Frontity Blog",
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
          "url": "https://scrowbridge.bitlampsites.com/wpd/final/wordpress/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
