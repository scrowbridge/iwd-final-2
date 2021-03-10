const settings = {
  "name": "final-frontity",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Nicholas Sparks Books",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "books",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "About",
              "/author-bio"
            ],
            [
              "Books",
              "/book"
            ],
            [
              "Contact Us",
              "/contact"
            ],
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "homepage": "sample-page",
          "url": "https://scrowbridge.bitlampsites.com/wpd/final/wordpress",
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