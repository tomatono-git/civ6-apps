# メモ civ6-utils

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
