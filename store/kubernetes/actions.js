import { M_SET_IMAGES } from "@/store/kubernetes/mutation-types";

const A_LIST_IMAGES = 'listDockerImages';

export default {
  async [A_LIST_IMAGES]({ commit }) {
    let response =  await this.$api.get('/api/v1/docker/images/fetch/', {
        headers: {
          Authorization: `Bearer ${this.$auth.strategy.token.get().split(' ')[1]}`
        }
      }
    )
    commit(M_SET_IMAGES, response.data.data)
  },
}
