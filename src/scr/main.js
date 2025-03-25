import { createApp as create } from '/src/res/lib/petite-vue/petite-vue.es.js';
//'https://cdn.jsdelivr.net/npm/petite-vue@0.4.1/+esm';

//console.log(create)

//===================================================================
//DOM objects
const dark = document.getElementById("dark")
const darkLabel = document.getElementById("theme")

//===================================================================

//===================================================================
const changeTheme = (props = {}) => {
  //console.log(dark.checked)
  document.cookie = JSON.stringify({ theme: dark.checked })
  const { theme } = JSON.parse(document.cookie)
  //console.log(theme)

  const toDark = document.querySelectorAll(/*props.elements ||*/ ".mainContainer, .fontPrimary, titleHead, .fontSecondary, .projectCard");

  const color = props.color || {
    //light
    background: "#ffffffff",
    foreground: "#ffffffb5",
    fontPrimary: "#000000ff",
    fontSecondary: "#000000b5",

    //dark
    dark_background: "#000000ff",
    dark_foreground: "#000000b5",
    dark_fontPrimary: "#ffffffff",
    dark_fontSecondary: "#ffffffb5"
  }

  if (theme) {

    //map the elements and apply a style to each
    toDark.forEach(element => {
      darkLabel.innerHTML = "☼";
      darkLabel.style.color = "white";
      if (element.className == "mainContainer" || element.className == "card projectCard") {
        element.style.background = color.dark_background
        if (element.className != "mainContainer") {
          element.style.background = color.dark_foreground;
          element.style.boxShadow = `0 0 12px .5px ${color.dark_fontSecondary}`
        } else if (element.tagName.search("header" || "footer")) {
          element.style.borderColor = color.dark_fontSecondary
        }
        //console.log(element.children)
      } else if (element.className.search("fontPrimary")) {
        element.style.color = color.dark_fontPrimary;
      } else if (element.className.search("fontSecondary")) {
        element.style.color = color.dark_fontSecondary;
      }
    })
  } else {

    darkLabel.innerHTML = "☾";
    darkLabel.style.color = "black";
    toDark.forEach(element => {
      if (element.className == "mainContainer" || element.className == "card projectCard") {
        element.style.background = color.background
        if (element.className != "mainContainer") {
          element.style.background = color.foreground;
          element.style.boxShadow = `0 0 12px .5px ${color.fontSecondary}`
        } else if (element.tagName.search("header" || "footer")) {
          element.style.borderColor = color.fontSecondary
        }
      } else if (element.className.search("fontPrimary")) {
        element.style.color = color.fontPrimary;
        //console.log(element.parentElement)
      } else if (element.className.search("fontSecondary")) {
        element.style.color = color.fontSecondary;
      }
    })
  }
}

changeTheme()

//===================================================================

//WRAPPER============================================================

const githubAPIWrapper = props => {
  return {
    api: props.api,
    user: props.user,
    repos: [],

    async init() {
      const thumbnail = `https://raw.githubusercontent.com/${props.user}`;
      const path = `refs/heads/master`;
      const res = await fetch(`${props.api}/${props.user}/repos`);
      const data = await res.json();
      //console.log(data);

      data.forEach(repo => {
        if (repo.private !== true) {
          this.repos.push({
            id: repo.node_id,
            owner: repo.owner.login,
            name: repo.name.replaceAll('-', ' ').replaceAll('_', ' '),
            description: repo.description,
            uri: repo.svn_url, //project link;
            host: repo.homepage || "", //if the project is hosted where;
            thumbnail: `${thumbnail}/${repo.name}/${path || 'refs/heads/main'}/thumbnail.webp` //extract from raw.githubusercountent.com
          })
        }
      })
    }
  }
}

/*
create({
  githubAPIWrapper
}).mount()
*/
//===================================================================


//===================================================================
window.onload = () => {
  dark.checked = true

  create({
    githubAPIWrapper
  }).mount()

  document.addEventListener("click", changeTheme)
}

//===================================================================

