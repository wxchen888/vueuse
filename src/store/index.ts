const state = reactive({
  count: 0
});

const store = reactive({
  increment() {
    state.count++;
  },
  decrease() {
    state.count--;
  }
});

export default {
  state: readonly(state),
  increment: store.increment,
  decrease: store.decrease
};
