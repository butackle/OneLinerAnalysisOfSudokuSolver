こちらのツイートの js 部分を作者の方の許可を得て ts にしてみました。

<blockquote class="twitter-tweet"><p lang="und" dir="ltr">cat sudoku | node -e &#39;console.log((f=&gt;(u=&gt;u(u))(x=&gt;f(y=&gt;x(x)(y))))(f=&gt;a=&gt;((a,b)=&gt;<a href="https://t.co/HchfZt1HxI">https://t.co/HchfZt1HxI</a>(x=&gt;x[3]).includes(&quot;*&quot;)?f(<a href="https://t.co/HchfZt1HxI">https://t.co/HchfZt1HxI</a>(x=&gt;x[3]!==&quot;*&quot;?x:[...x.slice(0,4),[...Array(9)].map((v,i)=&gt;String(i+1)).filter(y=&gt;!b[0][x[0]].concat(b[1][x[1]])</p>&mdash; Hidekazu Toriumi (@hid_tori) <a href="https://twitter.com/hid_tori/status/1221415626465349635?ref_src=twsrc%5Etfw">January 26, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<blockquote class="twitter-tweet"><p lang="es" dir="ltr">.concat(b[2][x[2]]).includes(y))]).map(x=&gt;x.length===4?x:x[4].length===1?[x[0],x[1],x[2],x[4][0]]:x.slice(0,4))):a)(a,a.reduce((x,y)=&gt;(x[0][y[0]].push(y[3]),x[1][y[1]].push(y[3]),x[2][y[2]].push(y[3]),x),[...Array(3)].map(x=&gt;[...Array(9)].map(y=&gt;[])))</p>&mdash; Hidekazu Toriumi (@hid_tori) <a href="https://twitter.com/hid_tori/status/1221415683289780225?ref_src=twsrc%5Etfw">January 26, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">.map(x=&gt;<a href="https://t.co/arw3HcPYXo">https://t.co/arw3HcPYXo</a>(y=&gt;y.filter(z=&gt;z!==&quot;*&quot;)))))(require(&quot;fs&quot;).readFileSync(&quot;/dev/stdin&quot;,&quot;utf8&quot;).trim().split(&quot;\n&quot;).map((v,i)=&gt;[i,v]).map(x=&gt;[x[0],[...x[1].split(&quot;&quot;).entries()]]).flatMap(x=&gt;x[1].map(y=&gt;[x[0],...y]))</p>&mdash; Hidekazu Toriumi (@hid_tori) <a href="https://twitter.com/hid_tori/status/1221415737375412224?ref_src=twsrc%5Etfw">January 26, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">.map(x=&gt;[x[0],x[1],Math.floor(x[0]/3)%3*3+Math.floor(x[1]/3),x[2]])).reduce((x,y)=&gt;(x[y[0]].push(y[3]),x),[...Array(9)].map(x=&gt;[])).map(x=&gt;x.join(&quot;&quot;)).join(&quot;\n&quot;))&#39;</p>&mdash; Hidekazu Toriumi (@hid_tori) <a href="https://twitter.com/hid_tori/status/1221415770795728898?ref_src=twsrc%5Etfw">January 26, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

# ファイルについて

```shell
.
├── README.md       # コレ
├── .gitignore
├── modifiedScripts # tsにしたりしてるところ
│   ├── .dockerignore        # コンテナに入れないファイルとか書いてある
│   ├── .prettierignore      # prettierで整形しないファイルとかが書いてある
│   ├── Dockerfile           # 開発時に使うコンテナの諸々が入っている
│   ├── docker-compose.yml   # 開発時に起動するDockerの設定が入っている
│   ├── js                   # tsをビルドしたjsファイルが入っている
│   ├── package-lock.json    # npmパッケージの諸々
│   ├── package.json         # スクリプトの設定だったりprettierの設定だったり。
│   ├── sudoku               # 下記の「sudokuファイルについて」を参照
│   └── ts            # typescriptが書いてあるスクリプト群
│       ├── @types    #　型ファイル入れ
│       ├── src              # sudokuファイルを書き直した部分が入っている
│       │   ├── component    # 色々な関数などが書かれたスクリプトが入ってる
│       │   ├── constant.ts  # 定数の設定とかを書いてる
│       │   ├── index.ts     # mainが入ってる
│       │   └── output.ts    # mainで実行した値を出力するためのスクリプト
│       ├── test         # テストするためのスクリプトが置いてある
│       │   ├── debug.ts # 処理を試すときに使っていた残骸
│       │   └── index.ts # 出来た処理が正しいか検証するスクリプト
│       ├── tsconfig.json  # tsの設定が書いてある
│       └── watch  # ファイル監視のためのスクリプト
└── originalScripts       # 基になったjsファイルにまつわるものが置いてある
    ├── format.js         # 1行になったjsを整形したもの
    ├── original.js       # 元の1行js
    ├── original.sh       # 元の1行ワンライナー(実行エラー)
    └── original_play.sh  # 上記を実行エラーしないように改変したワンライナー
```

# 開発するとき

下記の手順を実行すれば、編集すると js 変換とテスト実行が走るようになっているはず。

```
cd ./modifiedScripts/
npm install
docker-compose up
```

# コミット時

たぶん prettier が整形するよ

# sudoku ファイルについて

シェル芸勉強会の４４回の問題・回答を元にファイルを作成しています。
https://b.ueda.tech/?post=20191026_shellgei_44

sudoku ファイルに関しては、このコミット時点の vol.44/sudoku のファイルを転載しています。
https://github.com/ryuichiueda/ShellGeiData/commit/64ea9581686bff2e07a574de1b23c1a4662a84e2#diff-6082819e984a17c39454178ae3eb73f5

# LICENSE

http://butackle.github.io/license/LICENSE.txt
