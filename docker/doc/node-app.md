# docker-node メモ

## docker 利用方法

コンテナに中に入る

```sh
docker-compose exec app bash
```

ログインユーザーを指定してコンテナに入る。

```sh
docker-compose exec --user node_dev app bash
```

## VSCodeでdockerにリモート接続

devcontainer.jsonの設定をする。

既存のDocker開発環境をVS CodeのRemote Developmentで開発できるようにしてみた | DevelopersIO
<https://dev.classmethod.jp/articles/add-vs-code-remote-development-settings-to-existing-docker-environment/>

### コンテナへの接続

左側の「リモートエクスプローラ」から「Open Folder in Container」を選択。
