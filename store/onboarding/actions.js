export default {
  async register(context, data) {
    return new Promise((resolve, reject) => {
      this.$axios.post('/api/v1/users/', data)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
}
