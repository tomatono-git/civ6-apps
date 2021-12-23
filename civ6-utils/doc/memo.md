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

## ターミナルをWSLにする

C:\Users\[UserName]\AppData\Roaming\Code\User\settings.json

```json
{
    "terminal.integrated.defaultProfile.windows": "Ubuntu-20.04 (WSL)",
    "terminal.integrated.profiles.windows": {
        "PowerShell": {
            "source": "PowerShell",
            "icon": "terminal-powershell"
        },
        "Command Prompt": {
            "path": [
                "${env:windir}\\Sysnative\\cmd.exe",
                "${env:windir}\\System32\\cmd.exe"
            ],
            "args": [],
            "icon": "terminal-cmd"
        },
        "Git Bash": {
            "source": "Git Bash"
        },
        "Ubuntu-20.04 (WSL)": {
            "path": "C:\\WINDOWS\\System32\\wsl.exe",
            "args": [
                "-d",
                "Ubuntu-20.04"
            ]
        }
    },
}
```
