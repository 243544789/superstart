export default {
  addAsync(context, n) {
    setTimeout(() => {
      context.commit('add', n)
    }, 1000)
  }
}
