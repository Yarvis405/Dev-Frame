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
      host = host || 'ebencharles15@gmail.com';

      const toHost = new FormData();
      toHost.append('_subject', `You Have Recived a New Request #${this.form.service}`)
      toHost.append('message', /*{image log}*/ `\n${location.origin} ${new Date()} \n\n A ${this.form.service} service have been requested by ${this.form.email}`)
      //Optional if no mail is given it defaults to no reply.
      //toHost.append('email', 'no-reply@formsubmit.com')


      const toUser = new FormData();
      toUser.append('_subject', `Your #${this.form.service} request to ${location.origin} have been recived`)
      toUser.append('message', /*{image log}*/ `\n${location.origin}   ${new Date()} \n\n Your ${this.form.service} request have been recived, and it is being revised, you will be contacted soon. \nIn case of any doubts email me me at ${props.host} \n\natt: Eben C.`)
      //Optional if no mail is given it defaults to no reply.
      //toUser.append('email', 'no-reply@formsubmit.com')

      fetch(`https://formsubmit.co/${this.form.email}`, {
        method: 'POST',
        body: toUser,
        headers: {
          'Accept': 'application/json'
        }
      }).then(res => {
        if (res.ok) {
          this.status = {
            isSent: true,
            message: "Your request have been successfully made."
          }

        } else {
          this.status = {
            isSent: false,
            message: "Failed to complete your request."
          }

          //console.log(this.status.message)
          //localStorage.setItem('status', JSON.stringify(this.status))

          this.tries++

          if (this.tries < 2) {
            this.tries = 0;
            return
          }
        }
      });

      if (this.status.isSent) {
        fetch(`https://formsubmit.co/${host}`, {
          method: 'POST',
          body: toHost,
          headers: {
            'Accept': 'application/json'
          }
        }).then(res => {
          if (res.ok) {
            this.status = {
              isSent: true,
              devMessage: "Your request have been successfully made."
            }

          } else {
            this.status = {
              isSent: false,
              devMessage: "Failed to complete your request."
            }

            //console.log(this.status.devMessage)
            //localStorage.setItem('status', JSON.stringify(this.status))

            this.tries++

            if (this.tries < 2) {
              this.tries = 0;
              return
            }
          }
        });
      }
    },

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

