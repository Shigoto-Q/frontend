export default function ({ $axios, app }, inject) {
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'application/json' // accept json
      },
    },
  });
  api.onRequest((config) => {
    if (app.$auth.loggedIn) {
      const token = app.$auth.strategy.token.get().split(' ')[1];
      api.setToken(token, 'Bearer');
    }
  })

  api.setBaseURL(app.$config.baseURL);
  inject('api', api);
}
