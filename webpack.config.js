const path = require("path"); //전역변수

module.exports = {
  //파일을 읽어들이기 시작하는 진입점 설정
  entry: "./js/main.js",
  //결과물(번들)을 반환하는 설정
  output: {
    path: path.resolve(__dirname, "dist"), //dist 폴더에 번들을 담는다
    filename: "main.js", //main.js 폴더가 dist 폴더에 들어가게됨
    clean: true, //다시 빌드를 했을때 원래 파일은 삭제된다
  },
};
