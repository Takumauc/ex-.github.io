const scores = [13, 67, 18, 54, 30, 22, 89, 49, 21, 65]

function scorenig(score) {
  if(score===100) {
      console.log("秀");
  } else if(score>=60) {
      console.log("良");
  } else {
      console.log("不可");
  }
}

// ここにscoresの各要素をループして、それぞれのscoringの結果を表示するプログラムを書く
scores.forEach((score) => {
    scorenig(score)
    console.log(score);
  })
