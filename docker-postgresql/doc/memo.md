# docker-postgresql メモ

## 参考

Docker で作る postgres 環境 | Crudzoo
<https://crudzoo.com/blog/docker-postgres>

docker composeを使ってPostgreSQLを構築する | mebee
<https://mebee.info/2020/12/04/post-24686/>

## 環境構築

dockerfile (不要？)

```dockerfile
FROM postgres:11-alpine
ENV LANG ja_JP.utf8
```

docker-compose.yaml

<!-- ```yaml
version: '3'
services:
  db:
    build: .
    ports:
      - 5433:5432
    environment:
      POSTGRES_USER: civ6_mod_dev
      POSTGRES_DB: civ6_mod
      POSTGRES_PASSWORD: pass
``` -->

```yaml
version: '3'

services:
  postgres:
    image: postgres:latest
    restart: always
    environment:
      POSTGRES_USER: civ6_mod_dev
      POSTGRES_PASSWORD: password
      PGPASSWORD: pass
      POSTGRES_DB: civ6_mod
      TZ: "Asia/Tokyo"
    ports:
      - 5432:5432
    volumes:
      - postgres:/var/lib/postgresql/data

  pgadmin:
    image: dpage/pgadmin4
    restart: always
    ports:
      - 81:80
    environment:
      PGADMIN_DEFAULT_EMAIL: tomatono@gmail.com
      PGADMIN_DEFAULT_PASSWORD: pass
    volumes:
      - pgadmin:/var/lib/pgadmin
    depends_on:
      - postgres

volumes:
  postgres:
  pgadmin:
```

## wsl2

wsl2のインストール

```sh
wsl --install
```

## docker 起動

コンテナを構築、作成、起動、アタッチ
(docker-compose.yaml があるディレクトリで下記コマンドを実行)

```sh
docker-compose up -d
```

コンテナを停止

```sh
docker-compose down
```

コンテナに中に入る

```sh
docker-compose exec postgres bash
```

exexコマンドの使用例

```sh
docker-compose exec [コンテナ名] [コマンド]
```

コンテナ名は services で指定した名前。下記だと postgres 。

```yaml
version: '3'
services:
  db:
  ・・・
```

exec コマンドでは service でつけたコンテナ名を指定します。
terminal の表示が bash 4.4# のように変化していればコンテナの中に入れています。
コンテナ内は linux マシンなのでその感覚で扱います

PostgreSQLに接続

```sh
psql -U civ6_mod_dev
```

## コンテナを再構築

キャッシュを使わないでビルド

```sh
docker-compose build --no-cache
```

コンテナを再作成してから起動

```sh
docker-compose up --force-recreate
```

## 設定ファイルなどのパス

```path
/var/lib/docker/volumes/postgres-data/_data
```

## docker image

<https://hub.docker.com/_/postgres>

## PgAdmin

- URL
  <http://localhost:81>
