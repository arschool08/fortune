/****************
 * おみくじアプリで使うJavaScript
 ***************/

// 画面を初期設定する
let shokiSettei = () => {

  // おみくじ結果パネルを隠す
  kakusuPanel(kekkaPanel);

  // 戻るボタンを隠す
  kakusuPanel(modoruButton);

  // タイトル画面のおみくじ画像を設定する
  setteiHomeImage('shogi.png');

}

// おみくじの中身
let omikujiNakami = [
  { // だいきち吉の設
    kekkaTitle: '王将', // おみくじの結果のタイトル文
    kekkaSetsumei: '今日はいい日', // おみくじの結果につける説明文
    kekkaImage: 'ousyu.png' //おみくじの結果に表示する画像
  },
  { // 凶の設定
    kekkaTitle: '歩兵', //おみくじの結果のタイトル文
    kekkaSetsumei: '今日は良くない日', // おみくじの結果につける説明
    kekkaImage: 'huhyou.png' //おみくじの結果に表示する画像
  },
  { // の設
    kekkaTitle: '角行', // おみくじの結果のタイトル文
    kekkaSetsumei: '今日はいいこともあれば良くない事がある', // おみくじの結果につける説明文
    kekkaImage: 'kaku.png' //おみくじの結果に表示する画像
  }
  
];

// おみくじを引く
let hikuOmikuji = () => {

  // 始めの画面のおみくじ画像を隠す
  kakusuPanel(omikujiImage);

  // 「おみくじを引く」ボタンを隠す
  kakusuPanel(hikuButton);

  // おみくじの中身の数までが出るサイコロをふる
  let saikoroMe = furuSaikoro(omikujiNakami.length);

  // 出て来たサイコロの目からおみくじの結果を得る
  let omikujiKekka = omikujiNakami[saikoroMe];

  // おみくじの結果からタイトルを画面に貼り付ける
  setteiKekkaTitle(omikujiKekka.kekkaTitle);

  // おみくじの結果から説明を画面に貼り付ける
  setteiKekkaSetsumei(omikujiKekka.kekkaSetsumei);

  // おみくじの結果から画像を画面に貼り付ける
  setteiKekkaImage(omikujiKekka.kekkaImage);

  // おみくじの結果画面を表示する
  miseruPanel(kekkaPanel);

  // 「戻る」ボタンを表示する
  miseruPanel(modoruButton);

}

// 読み込み終わったら初期設定を実行する
shokiSettei();
