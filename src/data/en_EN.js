const about = {
    "attributes": [
        {
          "label": "name",
          "display": "Name:",
          "value": "Simone Aronica"
        },
        {
          "label": "age",
          "display": "Age:",
          "value": "19"
        },
        {
          "label": "lives-in",
          "display": "Lives in:",
          "value": "Palermo"
        },
        {
          "label": "birth-country",
          "display": "Birth Country:",
          "value": "Italy"
        },
        {
          "label": "profession",
          "display": "Profession:",
          "value": "Student"
        }
    ],
    "back": [
      "Born in Palermo, I’ve always loved progress and everything that is scientific.", 
      "I attended an High School in Palermo that gave me some basics on Computer Science and since then I’ve always studied on my own.",
      "Starting from October 2020 I plan on moving to Turin and frequent the Politecnico di Torino."
    ]
};

const projects = (
  [
      {
          "key": 0,
          "thumbnail": "th01.png",
          "title": "majorana website",
          "sections": "This is the website of my high school. It’s built on the Joomla Framework using PHP and CSS3. The website will be available on https://majoranapa.edu.it starting from September 2020.",
          "links": [
              {
                  "key": 0,
                  "title": "View hosted",
                  "link": "http://sitelab.ceformedsrl.it/5F_ARONICA_SIMONE/index.php"
              }
          ]
      },
      {
          "key": 1,
          "thumbnail": "Home.jpg",
          "title": "home assistant",
          "sections": "This is an Home Assistant project built in Java.",
          "links": [
              {
                  "key": 0,
                  "title": "View source",
                  "link": "https://github.com/xNicklaj/Home-assistant"
              }
          ]  
      },
      {
          "key": 2,
          "thumbnail": "MinIRC.jpg",
          "title": "minIRC",
          "sections": "An IRC written in Java and JavaFX, composed by both client and server. This started as a school project, but soon developed way out of its purpose.",
          "links": [
              {
                  "key": 0,
                  "title": "View server",
                  "link": "https://github.com/xNicklaj/minIRC---server"
              },
              {
                  "key": 1,
                  "title": "View client",
                  "link": "https://github.com/xNicklaj/minIRC"
              }
          ]  
      }

  ]
);

const timeline = (
  [
    {
      "title": "I.T.I. Ettore Majorana",
      "description": "I attended my high school period in a computer science oriented public institute, where I've been taught notions of C, Java, HTML5, CSS, PHP and MySql."
    },
    {
      "title": "Politecnico di Torino",
      "description": "I will attend the Politecnico di Torino starting October 2020 to get a degree in Computer Engineering."
    },
  ]
);

module.exports = {
    about,
    projects,
    timeline
};