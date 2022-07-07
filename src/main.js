import { Inkline, components } from '@inkline/inkline';
import '@inkline/inkline/inkline.scss';
import { createApp } from 'vue';
import VueAxios from 'vue-axios';
import App from '@/App.vue';
import axios from '@/plugins/axios';
import '@/registerServiceWorker';
import router from '@/router';
import store from '@/store';
import '@/main.scss';

createApp(App)
  .use(VueAxios, axios)
  .use(store)
  .use(router)
  .use(Inkline, {
    components,
    colorMode: 'system',
  })
  .mount('#app');
