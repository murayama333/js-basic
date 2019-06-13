# JavaScript入門 - DOM

## DOM

DOMはHTML（XML）文書内の要素を操作するAPIです。ブラウザで実行可能なJavaScriptにおいては以下のようなAPIが提供されています。

+ document.getElementById
  + id属性による要素の指定
+ document.getElementsByClassName
  + class属性による要素の指定（戻り値は要素の配列）
+ document.getElementsByTagName
  + 要素名による要素の指定（戻り値は要素の配列）
+ document.createElement
  + 要素の作成
+ document.querySelector
  + セレクタによる要素の指定
+ document.querySelectorAll
  + セレクタによる要素の指定（戻り値は要素の配列）

> Document Object Model (DOM) は、W3Cから勧告されている HTML文書やXML文書をアプリケーションから利用するためのAPIである。 Level 1 から Level 3 まで勧告されている。 XMLを読み込む別のAPIであるSAXと異なり、XMLデータをツリー構造として扱う事ができる。ただし、通常の場合対象のXML文書を全て読み込んでからの扱いを前提とするため動作速度が遅かったり、メモリーの使用量が大きくなる欠点もある。 W3CではAPIの仕様を定義しているのみで、特定のプログラム言語を対象としたものではない。 DOMの実装は各メーカーに委ねられており、DOMを実装したXMLパーサが各メーカーから提供されている。 - Wikipedia

## サンプルプログラム


### dom.html

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <title>JavaScript Samples</title>
  </head>
  <body>
    <h3 id="header">Fruits List</h3>
    <hr>
    <ul id="list">
      <li class="red">Apple</li>
      <li class="yellow">Banana</li>
      <li class="red">Cherry</li>
    </ul>
    <form>
      <input type="text" id="item" />
      <input type="button" onclick="add()" />
    </form>
    <script type="text/javascript" src="dom1.js"></script>
  </body>
</html>
```

---

### form.html

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <title>JavaScript Samples</title>
    <script type="text/javascript">
    </script>
  </head>
  <body>
    <h3 id="header">Form</h3>
    <hr>
    <form>
      <input type="text" id="num1" value="Hello World" />
      <input type="button" value="show" />
      <div id="result"></div>
    </form>
  </body>
</html>
```
