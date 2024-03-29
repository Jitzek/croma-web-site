const CONTACTINFO = [
  { type: "study", content: "Mechanical Engineering" },
  {
    type: "student",
    name: "Jelmer Prins",
    email: "jelmer.prins@student.nhlstenden.com",
    linkedin: "https://www.linkedin.com/in/jelmer-prins-846ba2199/",
    github: null,
    picture: null,
    glow: "0 0 10px rgba(255, 255, 255, 0.75)",
    foreground: "#16191E",
    background: null,
    hover: null,
    href: null,
  },
  {
    type: "student",
    name: "Jelte Dotinga",
    email: "jelmer.prins@student.nhlstenden.com",
    linkedin: null,
    github: null,
    picture: "./static/media/contact/profilepictures/Jelte_Dotinga.jpg",
    glow: "0 0 10px rgba(255, 255, 255, 0.75)",
    foreground: "#16191E",
    background: null,
    hover: null,
    href: null,
  },
  {
    type: "student",
    name: "Gerolf Bolding",
    email: null,
    linkedin: null,
    github: null,
    picture: null,
    glow: "0 0 10px rgba(255, 255, 255, 0.75)",
    foreground: "#16191E",
    background: null,
    hover: null,
    href: null,
  },
  {
    type: "student",
    name: "Joop Postma",
    email: "joop.postma@student.nhlstenden.com",
    linkedin: null,
    github: null,
    picture: null,
    glow: "0 0 10px rgba(255, 255, 255, 0.75)",
    foreground: "#16191E",
    background: null,
    hover: null,
    href: null,
  },
  { type: "study", content: "Electrical Engineering" },
  {
    type: "student",
    name: "Fredrik-Otto Lautenbag",
    email: "fredrik.lautenbag@student.nhlstenden.com",
    linkedin: "https://www.linkedin.com/in/fredrik-otto-lautenbag/",
    github: "https://github.com/Fredrik1997",
    picture: null,
    glow: "0 0 10px rgba(255, 255, 255, 0.75)",
    foreground: "#16191E",
    background: null,
    hover: null,
    href: null,
  },
  {
    type: "student",
    name: "Gerjan Mollema",
    email: "gerjan.mollema@studen.nhlstenden.com",
    linkedin: "https://nl.linkedin.com/in/gerjan-mollema-606ba3b4",
    github: "https://github.com/gjmollema",
    picture: null,
    glow: "0 0 10px rgba(255, 255, 255, 0.75)",
    foreground: "#16191E",
    background: null,
    hover: null,
    href: null,
  },
  { type: "study", content: "ICT" },
  {
    type: "student",
    name: "Ido Hiemstra",
    email: "ido.hiemstra@student.nhlstenden.com",
    linkedin: "https://www.linkedin.com/in/ido-hiemstra-653a0b1a9/",
    github: "https://github.com/Drochot",
    picture: null,
    glow: "0 0 10px rgba(255, 255, 255, 0.75)",
    foreground: "#16191E",
    background: null,
    hover: null,
    href: null,
  },
  {
    type: "student",
    name: "Janek van Wolfswinkel",
    email: "janek.van.wolfswinkel@student.nhlstenden.com",
    linkedin: "https://www.linkedin.com/in/janek-van-wolfswinkel/",
    github: "https://github.com/janekvw",
    picture: null,
    glow: "0 0 10px rgba(255, 255, 255, 0.75)",
    foreground: "#16191E",
    background: null,
    hover: null,
    href: null,
  },
  {
    type: "student",
    name: "Joop de Graaf",
    email: "joop.de.graaf@student.nhlstenden.com",
    linkedin: null,
    github: "https://github.com/joop339",
    picture: null,
    glow: "0 0 10px rgba(255, 255, 255, 0.75)",
    foreground: "#16191E",
    background: null,
    hover: null,
    href: null,
  },
  {
    type: "student",
    name: "Chun Cheng (Micky)",
    email: "micky.cheng@student.nhlstenden.com",
    linkedin: "https://www.linkedin.com/in/micky-cheng-8074741a1/",
    github: "https://github.com/melonicedtea",
    picture: null,
    glow: "0 0 10px rgba(60, 50, 80, 1.0)",
    foreground: "#16191E",
    background: "url(./static/media/contact/backgrounds/micky.jpg)",
    hover: "rgba(0, 0, 0, 0.445)",
    href: null,
  },
  {
    type: "student",
    name: "Jitze Jan Kerkstra",
    email: "jitze.kerkstra@student.nhlstenden.com",
    linkedin: "https://www.linkedin.com/in/jitze-jan-kerkstra/",
    github: "https://github.com/Jitzek",
    picture: null,
    glow: "0 0 10px rgba(60, 50, 80, 1.0)",
    foreground: "#16191E",
    background: "url(./static/media/contact/backgrounds/simplistic-mountain-1.jpg)",
    hover: "rgba(0, 0, 0, 0.445)",
    href: null,
  },
  {
    type: "student",
    name: "Jan Vlasman",
    email: "jan.vlasman99@gmail.com",
    linkedin: "https://www.linkedin.com/in/jan-vlasman-8834611a4/",
    github: "https://github.com/AnnoyingDog99",
    picture: null,
    glow: "0 0 10px rgba(50, 200, 200, 0.4)",
    foreground: "#16191E",
    background: "url(./static/media/contact/backgrounds/space.jpg)",
    hover: "rgba(0, 0, 0, 0.445)",
    href: null,
  },
];

function getInfoByName(name) {
    return CONTACTINFO.find(function (info) {
        return info.name == name ? info : null;
    });
}

function getStudyOfStudent(student) {
    var study = 'default';
    for (let i = 0; i < CONTACTINFO.length; i++) {
        if (CONTACTINFO[i].type === 'study') study = CONTACTINFO[i].content;
        if (CONTACTINFO[i] === student) break;
    }
    return study;
}