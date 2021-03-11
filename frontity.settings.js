const settings = {
  "name": "hello-frontity",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
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
          "homepage": "sample-page",
          "url": "https://scrowbridge.bitlampsites.com/wpd/final/wordpress/",
          "postTypes": [
            {
              type: "books",
              endpoint: "books",
              archive: "/book"
            }
          ],

        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
