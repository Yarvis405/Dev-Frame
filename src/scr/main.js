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
  //console.(theme)

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
    status: 200,
    repos: [],

    async init() {
      const thumbnail = `https://raw.githubusercontent.com/${props.user}`;
      const path = `refs/heads/master`;
      const altPath = `refs/heads/main`
      const res = await fetch(`${props.api}/${props.user}/repos`)
      const data = await res.json();
      //console.log(data);

      data.forEach(repo => {
        if (repo.private !== true && repo.disabled !== true) {
          this.repos.push({
            id: repo.node_id,
            owner: repo.owner.login,
            name: repo.name.replaceAll('-', ' ').replaceAll('_', ' '),
            description: repo.description,
            uri: repo.svn_url, //project link;
            host: repo.homepage || "", //if the project is hosted where;
            thumbnail: `${thumbnail}/${repo.name}/${path || altPath}/thumbnail.webp` //extract from raw.githubusercountent.com
          })
        }
      })
    },

  }
}



const formHandler = props => {
  return {
    form: props.mail,
    status: {
      isSent: false,
      message: '',
      devMessage: ''
    },
    tries: 0,

    compose(host) {
      //formSubmit api composed mail
      host = '5d3d0e16608cd5ebb31494f00030b0f7';

      console.log(this.$refs.contactForm)

      document.querySelector("#contactForm").addEventListener("submit", e => {
        const contactForm = e.target;
        console.log(e.target)

        const toHost = new FormData(contactForm);
        toHost.append('_subject', `You Have Recived a New Request #${this.form.service}`)
        toHost.append('message', /*{image log}*/ `\n${location.origin} ${new Date()} \n\n A ${this.form.service} service have been requested by ${this.form.email}`)
        /*Optional if no mail is given it defaults to no reply.
        //toHost.append('email', host)
        //toHost.append('_replyto', this.form.email)
        //toHost.append('_next', 'https://devframe.vercel.app/lega/terms.html')
        */

        console.log(toHost)

        /*
        fetch(`https://formsubmit.co/5d3d0e16608cd5ebb31494f00030b0f7`, {
          method: 'POST',
          body: toHost,

        }).then(res => {
          console.log("here")
          if (res.status == 0 || res.ok) {
            this.status = {
              isSent: true,
              devMessage: "Your request have been successfully made."
            }

            console.log(this.status.devMessage)

          } else {
            this.status = {
              isSent: false,
              devMessage: "Failed to complete your request."
            }

            console.log(this.status.devMessage)

            //console.log(this.status.devMessage)
            //localStorage.setItem('status', JSON.stringify(this.status))

            this.tries++

            if (this.tries < 2) {
              this.tries = 0;
              return
            }
          }

          this.form.email = '';
          this.form.service = '';
        });*/
      })
    },

    mounted() {
      console.log("hello")
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
    githubAPIWrapper,
    formHandler
  }).mount()

  document.addEventListener("click", changeTheme)
}

//===================================================================

