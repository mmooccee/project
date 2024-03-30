import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faEnvelope, faMoon, faSun, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin, faTwitter,faDiscord } from '@fortawesome/free-brands-svg-icons'

library.add(faUserSecret,faFacebook,faLinkedin,faGithub,faTwitter,faDiscord, faMoon, faSun, faEnvelope)


createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app');

