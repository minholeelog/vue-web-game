<template>
  <div>
    <div id="computer" :style="computedStyleObject"></div>
    <div>
      <button @click="onClickButton('바위')">바위</button>
      <button @click="onClickButton('가위')">가위</button>
      <button @click="onClickButton('보')">보</button>
    </div>
    <div>{{ result }}</div>
    <div>현재 {{ score }}점</div>
  </div>
</template>
<script>
const rspCoords = {
  바위: "0",
  가위: "-135px",
  보: "-284px",
};

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
};

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find(function (v) {
    return v[1] === imgCoord;
  })[0];
};

let interval = null;
export default {
  data() {
    return {
      imgCoord: rspCoords.바위,
      result: "",
      score: 0,
    };
  },
  computed: {
    computedStyleObject() {
      return {
        background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0 no-repeat`,
        width: "150px",
        height: "240px",
        overflow: "hidden",
      };
    },
  },
  methods: {
    changeHand() {
      interval = setInterval(() => {
        if (this.imgCoord === rspCoords.바위) {
          this.imgCoord = rspCoords.가위;
        } else if (this.imgCoord === rspCoords.가위) {
          this.imgCoord = rspCoords.보;
        } else if (this.imgCoord === rspCoords.보) {
          this.imgCoord = rspCoords.바위;
        }
      }, 200);
    },
    onClickButton(choice) {
      clearInterval(interval);
      const myScore = scores[choice];
      const cpuScore = scores[computerChoice(this.imgCoord)];
      const diff = myScore - cpuScore;
      if (diff === 0) {
        this.result = "비겼습니다.";
      } else if ([-1, 2].includes(diff)) {
        this.result = "이겼습니다.";
        this.score += 1;
      } else {
        this.result = "졌습니다.";
        this.score -= 1;
      }
      setTimeout(() => {
        interval = setInterval(() => {
          this.changeHand();
        }, 1000);
      });
    },
  },
  beforeCreate() {
    // console.log("before create");
  },
  created() {
    // 컴포넌트가 보여지는 시점(화면에 나타나기 전)
    // console.log("created");
  },
  beforeMount() {
    // console.log("before mount");
  },
  mounted() {
    // 화면에 나타난 이후
    // console.log("mounted");
    this.changeHand();
  },
  beforeUpdate() {
    // console.log("before update");
  },
  updated() {
    // 데이터의 변화로 화면이 다시 그려지는 시점
    // console.log("updated");
  },
  beforeDestroy() {
    // console.log("before destroy");
    clearInterval(interval);
  },
  destroyed() {
    // 컴포넌트 소멸 시점
    // console.log("destroyed");
  },
};
</script>
<style></style>
