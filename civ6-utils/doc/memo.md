# メモ civ6-utils

## 機能

- ユニットなどの情報を閲覧
- 名称のlocalization
- Modに必要なファイルを自動生成

## Nodeのモジュール

- TypeORM
  - DBアクセスのORマッパー
- yaml
  - 設定ファイルを扱う
- js-yaml
- Express
  - APサーバー
- routing-controllers
  - express.js や koa.js と組み合わせて、TypeScriptでアノテーションを使ったルーティング設定を実現するライブラリ。

## 環境

- サーバー
  - PostgreSQL
  - Node.js
  - Express
  - routing-controllers
- クライアント
  - Angular
- コマンドラインツール
  - データの取り込みなど

Node.jsはWSLに入れる？
VSCodeのコマンドラインをWSLにすれば普通にnodeコマンドが使える？

## DB

### TypeORM

TypeORM - 公式
<https://typeorm.io/#/>

pg, typeorm のインストール。
pg はPostgreSQL用。

```sh
yarn add pg typeorm
```

tsconfig.json に以下の設定がされていること。

```json
"emitDecoratorMetadata": true,
"experimentalDecorators": true,
```

typeorm のプロジェクトを作成

```sh
npx typeorm init --name TypeOrmDemo --database postgres
```
