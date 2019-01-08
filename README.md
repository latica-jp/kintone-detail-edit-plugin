# kintone 詳細編集ボタンプラグイン

kintone の一覧画面に「詳細編集ボタン」を追加表示する kintone プラグインです。

一覧画面から詳細画面を表示 → 編集ボタンをクリックの2クリックを1クリックに短縮します。

## セットアップ

```bash
git clone https://github.com/latica-jp/kintone-detail-edit-plugin.git
cd kintone-detail-edit-plugin
npm install
```

## プラグインのパッケージングとアップロード

ルートディレクトリに`.env` ファイルを作成し、プラグインのアップロード先（kintone ドメイン）とユーザ／パスワードを指定します。

このファイルを作成しない場合、プラグインのアップロード時に対話形式で上記の情報を入力する必要があります。

```
KINTONE_DOMAIN=xxxxx.cybozu.com
KINTONE_USERNAME=xxxxx
KINTONE_PASSWORD=xxxxx
```

ソースコードのビルドとプラグインのパッケージング

```js
npm run build
```

プラグインのアップロード

```
npm run upload
```

上記コマンドの実行後、プラグインの再ビルドを監視して自動再アップロードするモードに入ります。監視モード抜けるには `Ctrl-c` を入力します。

### 開発モード

下記のコマンドを入力すると、ソースコードの変更を監視し、自動的にプラグインのパッケージングとアップロードを行います。開発時に便利です。監視モード抜けるには `Ctrl-c` を入力します。

```
npm run start
```

## 開発メモ

- 下記の開発用テンプレートを使用して作成しました。

  - https://github.com/latica-jp/kintone-plugin-template.git

## Licence

MIT
