const A_DELETE_IMAGE = 'deleteDockerImage';

export default {
  async [A_DELETE_IMAGE]({ commit }, { imageId }) {
    const data = {
      id: imageId
    }
    return await this.$api.post('/api/v1/docker/images/delete/', data, {
        headers: {
          Authorization: `Bearer ${this.$auth.strategy.token.get().split(' ')[1]}`
        }
      }
    )
  },
}

