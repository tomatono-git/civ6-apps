# WSL

## wsl2

wsl2のインストール

```sh
wsl --install
```

自動でインストールされるUbuntuが気に入らなければ、アプリと機能からアンインストールしてMicfosoft Storeからインストールする。

## VSCode のターミナルをWSLにする

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

## node 環境構築

wslに入る

```powershell
wsl
```

nvm のインストール

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

インストール後は`exit`でWSLを終了して、`wsl`でもう一度入りなおす。

現在インストールされている Node のバージョンを一覧表示。（まだ何もない）

```sh
nvm ls
```

```sh
nvm install 17.3.0
```
