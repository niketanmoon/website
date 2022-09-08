import { all } from "redux-saga/effects";

function* root() {
  yield all(
    []
    // [fork(modMarketSagas)]
  );
}

export default root;
