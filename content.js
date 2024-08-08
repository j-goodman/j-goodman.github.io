const content = [
    new Article ({
        tags: ['main'],
        link: false,
        body: [
          new Picture ({
            filename: 'sunshine.gif',
            link: false,
            alt: "An animated scene of a mountain at night, the sun rises and yawns, illuminating the scene.",
          }),
          new Block ({
            text: `Hello! I'm John Goodman, I'm an illustrator, animator, and software engineer. You can see some of my work here.
            <br><br>
            I make art, games, and anything that's interactive or animated. I've made a lot of arcade-style 2D games that you can check out here, and you can also get a look at some of my illustration and web design work.`,
          }),
        ]
    }),

    new Article ({
        title: "Map of the Solar System",
        tags: ['art & design'],
        body: [
            new Picture ({
                filename: 'solar-system.png',
                alt: "A map of the solar system.",
            }),
            new Block ({
                title: `Map of the Solar System`,
                text: `A poster of the major and minor planets of the solar system. I wanted to make something here that would give a general sense of where things are without worrying about scale. I always wanted to give a quick easy to remember fact about each of the major planets, which I hope along with the visuals makes this poster more accessible for people of all ages who are interested in outer space.`
            })
        ]
    }),

    new Article ({
        title: "Road Trip",
        tags: ['main', 'games'],
        link: 'https://j-goodman.github.io/roadtrip/',
        body: [
          new Picture ({
            filename: 'roadtrip.png',
            link: 'https://j-goodman.github.io/roadtrip/',
            alt: "A screenshot of a mobile game, it reads 'Destination: Senegal (Western Africa)', then 'You're in Morocco'.",
          }),
          new Block ({
            text: "A daily game you can play on your phone. You start in a random country, and find your way through neighboring countries to somewhere else in the world. Share your results to test your geography skills against your friends. The destination changes every day.",
          }),
        ]
    }),

    new Article ({
        title: "Illustration",
        tags: ['main'],
        link: '#',
        clickEvent: () => {
            const container = document.getElementById("content-container")
            container.innerHTML = ""
            addContent(content, "art & design")
        },
        body: [
            new Picture ({
                filename: 'fashion-fish.png',
                alt: "Two drawings of fish wearing stylish human clothes.",
            }),
            new Block ({
                text: "You can click here to see some examples of my illustration work. I mostly work with brush pens on paper, then I scan the lineart to color digitally in Photoshop. I love making maps and diagrams, as well as drawings of animals and human characters. I also make traditional 2D animation, and I have fun experimenting with other media, most recently linocut.",
            }),
        ]
    }),

    new Article ({
        title: "Exit Interview",
        tags: ['main'],
        link: "https://exitinterview.simplecast.com/",
        body: [
            new Picture ({
                filename: 'exit-interview.png',
                alt: "Cover image for the podcast Exit Interview, a cassette tape with God and the Devil sitting on it.",
            }),
            new Block ({
                title: `Exit Interview`,
                text: `A podcast that I cohost with friends. Each episode of Exit Interview works like a miniature radio play, the episodes are fully improvised, then edited with sound effects and music to make episodes that are each about 30 minutes long.
                <br><br>
                The premise is that when anyone dies, they have to go on a podcast with God and the Devil, who look back on their life and judge whether they should go to Heaven or Hell. If you enjoy character-driven improv comedy you might enjoy the show, check it out wherever you listen to podcasts!`
            })
        ]
    }),

    new Article ({
        title: "Luna 3",
        tags: ['main', 'games'],
        link: "https://j-goodman.github.io/Luna3/",
        body: [
            new Picture ({
                filename: 'luna3.png',
                alt: "An image from the game, a cannon defends a dome city on the moon.",
            }),
            new Block ({
                title: `Luna 3`,
                text: `This was the first computer game I made as an adult after learning Javascript. Some of the coding is a little sloppy in retrospect, but I think it still holds up. It's an arcade-style shooter you can play online, inspired by Missile Command.
                <br><br>
                Like all my games, it's made from scratch with vanilla Javascript and HTML Canvas.`
            })
        ]
    }),

    new Article ({
        title: "Prototype 2D Game Engine",
        tags: ['games', 'main'],
        link: "https://j-goodman.github.io/bean-farmer/",
        body: [
            new Picture ({
                filename: 'bean-farmer.png',
                alt: "An image from the game, a blue blob wields an axe in a grid-based environment with some rocks and plants.",
            }),
            new Block ({
                title: `Bean Farmer`,
                text: `An exploration game where you roam an interactive world, meeting hand-animated creatures, harvesting and planting seeds, and avoiding danger. I built the engine from the ground up in vanilla Javascript and drew all the assets, so everything you see here is 100% original. I see this version as just a prototype, but I'd love to build a more fleshed-out version of it someday.`
            })
        ]
    }),

    new Article ({
        title: "Robotopia",
        tags: ['games'],
        link: "https://j-goodman.github.io/robotopia/",
        body: [
            new Picture ({
                filename: 'robotopia.png',
                alt: "An image from the game, retro pixel graphics depict machines connected by pipes in a barren tundra.",
            }),
            new Block ({
                title: `Robotopia`,
                text: `A 2D tactics game where you play as an AI that's been banished to the frozen arctic and has to build a new robot society from scratch.`
            })
        ]
    }),

    new Article ({
        title: "More Tunnels",
        tags: ['games'],
        link: "https://j-goodman.github.io/MoreTunnels/",
        body: [
            new Picture ({
                filename: 'more-tunnels.png',
                alt: "An image from the game, retro pixel graphics depict a subway worker armed with a hammer battling skeletons.",
            }),
            new Block ({
                title: `More Tunnels`,
                text: `Demo version of a browser based platform game, built from scratch with Javascript and HTML Canvas.`
            })
        ]
    }),

    new Article ({
        title: "Dice",
        tags: ['games'],
        link: "https://j-goodman.github.io/dice/",
        body: [
            new Picture ({
                filename: 'dice.png',
                alt: "An image from a simple dice game.",
            }),
            new Block ({
                title: `Dice`,
                text: `This one's a pretty straightforward HTML dice game, you can try to beat your own score. I wanted to get some experience here building a game just with DOM manipulation rather than rendering it onto a canvas element, which is my usual approach.`
            })
        ]
    }),

    new Article ({
        title: "Typewriter",
        tags: ['tools'],
        link: "https://j-goodman.github.io/typewriter",
        body: [
            new Picture ({
                filename: 'typewriter.png',
                alt: "A screenshot of the typewriter tool, an in-browser tool to simulate writing on a typewriter.",
            }),
            new Block ({
                title: `Typewriter`,
                text: `An interactive typewriter tool where you can create PDF documents with the look of typewritten text. You can use your computer's keyboard, and the delete key works as a whiteout key.`
            })
        ]
    }),

    new Article ({
        title: "Whale's Belly",
        tags: ['art & design'],
        body: [
            new Picture ({
                filename: 'whale-belly.png',
                alt: "A drawing of a man talking on a payphone in the belly of a blue whale.",
            }),
            new Block ({
                title: `Whale's Belly`,
                text: ``
            })
        ]
    }),

    new Article ({
        title: "Map of North America",
        tags: ['art & design', 'main'],
        body: [
            new Picture ({
                filename: 'north-america.png',
                alt: "A hand drawn map of North America.",
            }),
            new Block ({
                title: `Map of North America`,
                text: `A map I made using a brush pen and digital coloring.`
            })
        ]
    }),

    new Article ({
        title: "Cyclops",
        tags: ['art & design'],
        body: [
            new Picture ({
                filename: 'cyclops.gif',
                alt: "An animated figure shrinks away to nothing leaving only an eyeball.",
            }),
            new Block ({
                title: `Cyclops`,
                text: `One of my first hand-drawn animation pieces.`
            })
        ]
    }),

    new Article ({
        title: "Laser Cutter Blueprint",
        tags: ['art & design'],
        link: false,
        body: [
            new Picture ({
                filename: 'catapult-blueprint.png',
                alt: "A blueprint for a small wooden catapult, next to photos of the finished project.",
            }),
            new Block ({
                title: `Laser Cutter Blueprint`,
                text: `A small rubber-band powered wooden catapult I designed for an after-school class I was teaching. I made the design using Adobe Illustrator then cut out the plywood pieces using a laser cutter.`
            })
        ]
    }),

    new Article ({
        title: "Sky Maze",
        tags: ['art & design'],
        link: false,
        body: [
            new Picture ({
                filename: 'sky-maze.png',
                alt: "A hand-drawn maze with pictures of the sun moon and stars in it.",
            }),
            new Block ({
                title: `Sky Maze`,
                text: `A maze you can try to solve.`
            })
        ]
    }),

    new Article ({
        title: "River World",
        tags: ['games', 'art & design'],
        link: "https://j-goodman.github.io/river-world/",
        body: [
            new Picture ({
                filename: 'river-world.png',
                alt: "An ink-and-paper comic book image of a man trapped under a log.",
            }),
            new Block ({
                title: `River World`,
                text: `An illustrated rulebook for a free-to-play tabletop RPG.`
            })
        ]
    }),

    new Article ({
        title: "City Map",
        tags: ['art & design', 'main'],
        body: [
            new Picture ({
                filename: 'ianar-map.png',
                alt: "A poster for a comedy event.",
            }),
            new Block ({
                title: `City Map`,
                text: `A hand-drawn fantasy style map I made of the fictional city of Ianar.`
            })
        ]
    }),

    new Article ({
        title: "Live From the Elevator Poster",
        tags: ['art & design'],
        body: [
            new Picture ({
                filename: 'live-from-the-elevator.png',
                alt: "A poster for a comedy event.",
            }),
            new Block ({
                title: `Live From the Elevator Poster`,
                text: `A poster for a comedy event.`
            })
        ]
    }),

    new Article ({
        title: "Targaryen Family Tree",
        tags: ['art & design'],
        body: [
            new Picture ({
                filename: 'targaryen-list.png',
                alt: "A family tree of House Targaryen from the Song of Ice and Fire books.",
            }),
            new Block ({
                title: `Targaryen Family Tree`,
                text: `Going for a kind of medieval looking thing with this one, a family tree for the Targaryen royal family from Game of Thrones.`
            })
        ]
    }),

    new Article ({
        title: "Thanksgiving Murder Mystery",
        tags: ['art & design'],
        body: [
            new Picture ({
                filename: 'exit-interview-thanksgiving.png',
                alt: "A drawing of a Thanksgiving dinner table with a dead body sprawled on top of it, the diners look on concerned.",
            }),
            new Block ({
                title: `Thanksgiving Murder Mystery`,
                text: `A piece of promo art for a special Thanksgiving episode of Exit Interview.`
            })
        ]
    }),

    new Article ({
        tags: ['art & design'],
        link: false,
        title: "Fashion Fish",
        body: [
          new Picture ({
            filename: 'fashion-fish.png',
            link: false,
            alt: "Two drawings of fish wearing stylish human clothes.",
          }),
          new Block ({
            text: "",
          }),
        ]
    }),

    new Article ({
        title: "Heydays",
        tags: ['art & design', 'main'],
        link: `https://j-goodman.github.io/brouhaha-prospect-park/`,
        body: [
            new Picture ({
                filename: 'heydays.png',
                alt: `A website homepage that reads "The Brouhaha Theater Project Presents".`,
            }),
            new Block ({
                text: `This one's a website I made for a production by the <a href="https://www.brouhahatheatreproject.org/">Brouhaha Theatre Project</a> in Brooklyn. It uses a custom parallax scroll effect I built with vanilla JS and HTML Canvas, with the goal of creating a nice sense of depth to make the viewer feel immersed in the site. Was originally worried it might be difficult to adapt the format of this one to mobile, but I ended up being especially satisfied with the mobile version in the end, since it gives a less obstructed view of the background.`
            })
        ]
    }),

    new Article ({
        title: "Maya Numeral Converter",
        tags: ['tools', 'main'],
        link: "https://j-goodman.github.io/mayanum/",
        body: [
            new Picture ({
                filename: 'maya-numeral-converter.png',
                alt: "A screenshot of a tool to convert standard numbers into Maya numerals.",
            }),
            new Block ({
                title: `Maya Numeral Converter`,
                text: `This is a simple tool I built to convert standard base-ten Arabic numerals into Maya numerals. The Maya numeral system is a base-twenty system that was used by many Mesoamerican societies, and it allowed for advanced mathematics. You can get more information about how Maya numerals work <a href="https://en.wikipedia.org/wiki/Maya_numerals">here</a>.`
            })
        ]
    }),

    new Article ({
        title: "Animation Demo Reel",
        tags: ['art & design'],
        body: [
            new Blank ({
                content: `<iframe src="https://player.vimeo.com/video/382960970" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
            }),
            new Block ({
                text: ``
            })
        ]
    }),

    // new Article ({
    //     title: "Animated Comic System",
    //     tags: ['tools', 'art & design'],
    //     link: "https://j-goodman.github.io/action-president/",
    //     body: [
    //         new Picture ({
    //             filename: 'deeps.png',
    //             alt: "Chalk pastel art of a submersible discovering an underwater statue of a head.",
    //         }),
    //         new Block ({
    //             title: `Animated Comic System`,
    //             text: `This was a concept I was working on for a while for a type of animated comic. The idea is that the animation moves as you scroll down the page, so it's like an animated video in a way, but it's also more like a comic book in the sense that it has text and you can read it at your own pace. Take a look if you're interested.`
    //         })
    //     ]
    // }),

    new Article ({
        title: "Arcos",
        tags: ['games'],
        link: "https://j-goodman.github.io/arcos/",
        body: [
            new Picture ({
                filename: 'arcos.png',
                alt: "Art from the game, the front and back of a card. On the front is a skeleton dressed as an aristocrat and smoking a cigarette.",
            }),
            new Block ({
                title: `Arcos`,
                text: `This one is an interface and a simple opponent AI for a card game I invented called Arcos. The idea is that it's like a rock-paper-scissors game with six choices instead of three. One of the six cards, the King, beats almost all of the other cards, which creates an imbalance that makes the strategy more interesting.`
            })
        ]
    }),

    new Article ({
        title: "House of Hades",
        tags: ['games'],
        link: "https://j-goodman.github.io/house-of-hades/",
        body: [
            new Picture ({
                filename: 'house-of-hades.png',
                alt: "Are screenshot from the game, a text-adventure game where you fight monsters in a labyrinthine haunted house.",
            }),
            new Block ({
                title: `House of Hades`,
                text: `A text adventure game I made a while back, where you explore a labyrinthine haunted house and fight monsters. Not the friendliest interface, but maybe fun in a retro text-based game kind of way.`
            })
        ]
    }),

    new Article ({
        title: "Starbird",
        tags: ['games'],
        link: "https://j-goodman.github.io/starbird",
        body: [
            new Picture ({
                filename: 'starbird.png',
                alt: "A screenshot from the game, an arcade-style shooter where you pilot a spaceship chasing down other ships.",
            }),
            new Block ({
                title: `Starbird`,
                text: `A simple shooter game, you control the spaceship with the left and right arrow keys, and use the up arrow key to try to shoot down the ship you're chasing after.`
            })
        ]
    }),

    new Article ({
        title: "Merchant Marine",
        tags: ['games'],
        link: "https://j-goodman.github.io/merchant-marine",
        body: [
            new Picture ({
                filename: 'merchant-marine.png',
                alt: "A screenshot from the game, a map of a solar system.",
            }),
            new Block ({
                title: `Merchant Marine`,
                text: `A simple commodity trading game built in 72 hours for the 2017 Ludum Dare game jam. Definitely something I'd like to come back to some day and add some features to -- as it stands it's a little bit bare. Currently though, you can travel between planets trying to increase your bottom line by buying and selling goods.`
            })
        ]
    }),

    new Article ({
        title: "Germs",
        tags: ['games'],
        link: "https://j-goodman.github.io/germs2",
        body: [
            new Picture ({
                filename: 'germs.png',
                alt: "A screenshot from the game, a map of a solar system.",
            }),
            new Block ({
                title: `Germs`,
                text: `The idea for this one is to be sort of a petri dish simulator -- I took some inspiration on it from <a href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life">Conway's Game of Life</a>. Each of the individual cells follows a basic set of rules, based on a thirteen character 'DNA string' that sets values like their size, speed, and number of offspring. The autotrophs grow naturally and split when they reach a certain radius, while the heterotrophs move around in search of prey and to avoid predators.`
            })
        ]
    }),

    new Article ({
        tags: ['art & design'],
        link: false,
        title: "Sunshine",
        body: [
          new Picture ({
            filename: 'sunshine.gif',
            link: false,
            alt: "A sun with a face rises and yawns, illuminating some mountains below.",
          }),
          new Block ({
            text: "",
          }),
        ]
    }),

    new Article ({
        tags: ['about me'],
        link: false,
        title: "About Me",
        body: [
          new Picture ({
            filename: 'profile-picture.png',
            link: false,
            alt: "Photo of me, John Goodman.",
          }),
          new Block ({
            text: `I'm John Goodman, I'm an artist, educator, and software engineer. I do some freelance and commission work, so please don't hesitate to reach out by email if you have any questions or if you're interested in commissioning my work.
            <br><br>
            You can see my professional resume <a href="assets/john-goodman-resume.pdf">here</a>.
            <br><br>
            I have an Etsy shop with some digital prints available, which you can visit <a href="https://www.etsy.com/ca/shop/JohnGoodmanArt?ref=shop-header-name&listing_id=1296661328&from_page=listing">here</a>.
            <br><br>
            You can contact me at johncurtisgoodman@gmail.com.`,
          }),
        ]
    }),
]

addContent(content, "main")

const searchParams = new URLSearchParams(window.location.search)
if (searchParams.get("page") === "art") {
    const container = document.getElementById("content-container")
    container.innerHTML = ""
    addContent(content, "art & design")
}