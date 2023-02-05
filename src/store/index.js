import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index.js';
import requestsModule from './modules/requests/index.js';
import AuthModule from './modules/auth/index.js';

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
    auth: AuthModule,
  },
});

export default store;
