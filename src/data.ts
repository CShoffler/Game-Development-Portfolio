import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Colby Shoffler",
  role: "Software Developer, Game Designer",
  introduction: "Aspiring Game Developer with skills in programming and design. Skills in C#, C++, Java, and Unity, as well as in design and project management. Currently attending RIT for Game Design and Development Bachelor.",
  description: "Games have always been an incredibly important medium to me. Creating projects that are able to reach an audience and connect to them in the same way so many games have had a monumental impact on me is my dream. Right now, I'm looking for any roles that are able to help me improve as a developer, working with teams to get hands-on production experience.",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/resume.pdf`,
  links: {
    //github: "https://github.com/NAME",
    //itchIO: "https://NAME.itch.io",
    linkedIn: "https://www.linkedin.com/in/colby-shoffler",
  }
};

export const games: Game[] = [
    {
    name: "Aberration",
    description: "Aberration is a 2-8 player management strategy game where you take on the role of an organization looking to gain control of mysterious entities. The main goal is to successfully contain as many aberrations as possible by using research cards to get ahead. Players can also create chaos by unleashing their contained aberrations onto the board and by sabotaging other players on their turns. For this team project, I had the role of producer and lead card designer. I created the card formatting and template, as well as worked to mechanically and visually design many of the cards seen here. For a closer look, view the Google Drive for the game's Design Document and full card and asset list!",
    genres: ["Strategy", "Card Game"],
    platforms: [Platform.Windows],
    engine: GameEngine.Tactile,
    links: [
      //{ source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      //{ source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
      {source: LinkImageSource.GoogleDrive, url: "https://drive.google.com/drive/folders/1RUI9znYYxzhhDdysaofdzFamisEGytIB?usp=sharing"},
    ],
    media: [
      { source: "/images/games/ABERRATION/aberrationCardExamples.png", type: MediaType.Image },
      //{ source: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: MediaType.YouTube },
      { source: "/images/games/ABERRATION/researchCardExamples.png", type: MediaType.Image },
      { source: "/images/games/ABERRATION/aberrationBoard.png", type: MediaType.Image },
      { source: "/images/games/ABERRATION/finalGameBox.png", type: MediaType.Image },
    ],
  },
  {
    name: "Bite the Bullet",
    description: "Cowboys and Vampires are at war in multiple Gothic and Western inspired battlefields. Pick up items to compete in a fast paced arms race and adapt to opponent’s gameplay decisions in real time. For this project, I was a developer on the game's movement code, menu design, 2D art integration, and level design. Check out the Google Drive link for the game's Design Document and most recent build! (Recommended 1980x1020 screen resolution for demo).",
    genres: ["Platform Fighter", "Party Game"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      //{ source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      //{ source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
      {source: LinkImageSource.GoogleDrive, url: "https://drive.google.com/drive/folders/1XPIiGqEVk4IpJliG2PaMMxUosXq0cQ_N?usp=sharing"},
    ],
    media: [
      { source: "/images/games/BITE_THE_BULLET/titleScreen.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/RwSojpbEs14", type: MediaType.YouTube},
      { source: "/images/games/BITE_THE_BULLET/vampireCastle.png", type: MediaType.Image },
      { source: "/images/games/BITE_THE_BULLET/saloonStage.png", type: MediaType.Image },
      //{ source: "/images/games/BITE_THE_BULLET/Screenshot_4.png", type: MediaType.Image },
    ],
  },
  {
    name: "Video Essays",
    description: "Video essays that showcase editing and production skills, level design concepts, and media analysis.",
    genres: ["Game Design", "Media Analysis"],
    platforms: [Platform.YouTube],
    engine: GameEngine.DaVinciResolve,
    links: [
      //{ source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      //{ source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
      //{source: LinkImageSource.GoogleDrive, url: "https://drive.google.com/drive/folders/1XPIiGqEVk4IpJliG2PaMMxUosXq0cQ_N?usp=sharing"},
    ],
    media: [
      { source: "https://www.youtube.com/embed/lsnGCJqQzok", type: MediaType.YouTube},
      { source: "https://www.youtube.com/embed/niH2Sn7Ghmk", type: MediaType.YouTube},
    ],
  }
];