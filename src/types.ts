export enum LinkImageSource {
  Github = "/images/logos/github.png",
  ItchIo = "/images/logos/itch.io.png",
  GoogleDrive = "/images/logos/GoogleDrive.png"
}

export enum Platform {
  Windows = "Windows",
  Mac = "Mac",
  Linux = "Linux",
  iOS = "iOS",
  Android = "Android",
  YouTube = "YouTube"
}

export enum GameEngine {
  Unity = "Unity",
  Unreal = "Unreal",
  Tactile = "Tacticle Board Game",
  NA = "N/A",
  DaVinciResolve = "Edited in DaVinci Resolve"
}

export enum MediaType {
  Image = "image",
  YouTube = "youtube",
}

export interface MediaItem {
  source: string;
  type: MediaType;
}

export interface AboutMeData {
  name: string;
  role: string;
  description: string;
  introduction: string;
  image: string;
  cvUri: string;
  links: {
    //github: string;
    //itchIO: string;
    linkedIn: string;
  };
}

export interface Game {
  name: string;
  description: string;
  genres: string[];
  source?: { name: string; url: string };
  links: { source: LinkImageSource; url: string }[];
  media: MediaItem[];
  platforms: Platform[];
  engine: GameEngine;
}