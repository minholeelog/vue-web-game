import Vue from "vue";
import VueRouter from "vue-router";
import NumberBaseball from "../3.숫자야구/NumberBaseball";
import ResponseCheck from "../4.반응속도체크/ResponseCheck";
import LottoGenerator from "../6.로또추첨기/LottoGenerator";
import GameMatcher from "./GameMatcher";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/number-baseball",
      component: NumberBaseball,
    },
    {
      path: "/response-check",
      component: ResponseCheck,
    },
    {
      path: "/lotto-generator",
      component: LottoGenerator,
    },
    {
      path: "/game/:name",
      component: GameMatcher,
    },
  ],
});
