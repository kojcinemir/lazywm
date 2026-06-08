# LazyWM

LazyWM is a fast, keyboard-driven tiling window manager for Windows 11 / 10. It
automatically arranges windows across workspaces and monitors while keeping
navigation, layouts, and appearance fully configurable.

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/9afe81e0-ff34-4fd1-889c-4899aad73d5d" />


## Features

- Automatic BSP window tiling
- Independent workspaces on multiple monitors
- Tiled and stacked workspace modes
- Keyboard navigation with Vim keys or arrow keys
- Searchable application switcher
- Configurable taskbar workspace indicator
- Active-window borders and built-in color schemes
- Persistent tiled and floating application rules
- Animated workspace transitions
- TOML configuration with live reloading

## Requirements

- Windows 11
- [.NET 10 Desktop Runtime](https://dotnet.microsoft.com/download/dotnet/10.0)

The full .NET SDK is not required.

## Install

1. Install the [.NET 10 Desktop Runtime](https://dotnet.microsoft.com/download/dotnet/10.0).
2. Download and extract the LazyWM package to a permanent folder.
3. Keep the included `Config` folder beside `lazywm.exe`.
4. Double-click `lazywm.exe` to launch LazyWM in the background.

To start LazyWM automatically when you sign in, place a shortcut to
`lazywm.exe` in the Windows `shell:startup` folder.

## Essential Hotkeys

| Action | Shortcut |
| --- | --- |
| Focus a window | `ALT+H/J/K/L` or `ALT+Arrow` |
| Swap a window | `ALT+SHIFT+H/J/K/L` or `ALT+SHIFT+Arrow` |
| Switch workspace | `ALT+1..8` |
| Move window to workspace | `ALT+SHIFT+1..8` |
| Resize the active split | `ALT+[` / `ALT+]` |
| Toggle stacked mode | `ALT+SHIFT+S` |
| Cycle a stacked window | `ALT+S` |
| Open the application switcher | `ALT+SHIFT+SPACE` |
| Reload configuration | `ALT+CTRL+R` |
| Exit cleanly and restore windows | `ALT+CTRL+O` |

Always exit using `ALT+CTRL+O` so LazyWM can restore managed windows to a
visible state before closing.

## Configuration

Configuration files are stored in the `Config` folder beside the executable:

- `config.toml`: logging, animations, and mouse behavior
- `HotKeyConfig.toml`: commands and application shortcuts
- `WorkspaceConfig.toml`: layouts, gaps, and workspace defaults
- `WorkspaceIndicatorConfig.toml`: taskbar indicator layout and colors
- `WindowBorderConfig.toml`: active-window border appearance
- `AppSwitcherConfig.toml`: application switcher dimensions and styling
- `FloatingRulesConfig.toml`: persistent tiled and floating application rules

Press `ALT+CTRL+R` to reload configuration while LazyWM is running.

---

Copyright (c) 2026 Emir Kojcin. All rights reserved.
