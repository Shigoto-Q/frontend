import { notificationTypes } from '@/constants/notifications';
const A_RUN_TASK = 'runTask'

export default {
  async [A_RUN_TASK]({ commit }, { externalTaskId }) {
    const data = {
      externalTaskId: externalTaskId
    }
    return await this.$api.post('/api/v1/task/run/', data, {
        headers: {
          Authorization: `Bearer ${this.$auth.strategy.token.get().split(' ')[1]}`
        }
      }
    )
  }
}

