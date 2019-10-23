const projectHistory = (
    [
        {
            "key": 0,
            "thumbnail": "th01.png",
            "title": "majorana website",
            "description": "This is the website of my high school. It’s built in ReactJS and SCSS.",
            "links": [
                {
                    "key": 0,
                    "title": "View hosted",
                    "link": "https://parodux-majoranapa.netlify.com"
                },
                {
                    "key": 1,
                    "title": "View source",
                    "link": "https://gitlab.com/xNicklaj/parodux.majoranapa"
                }
            ]
        },
        {
            "key": 1,
            "thumbnail": "Home.jpg",
            "title": "home assistant",
            "description": "This is an Home Assistant project built in Java.",
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
            "description": "An IRC written in Java, composed by both client and server.",
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
)

module.exports = {
    projects: projectHistory
}