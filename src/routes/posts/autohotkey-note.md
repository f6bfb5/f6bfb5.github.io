---
title: "AutoHotKey 筆記"
date: 2022-06-11T23:36:19.000Z
summary: ""
tags: Toolbox
---

## Introduction

- ~~2022 年才開始研究 AHK~~
- AutoHotKey 是可以自由自動化與客製化 Windows 操作的腳本引擎
- [下載](https://www.autohotkey.com/download/ahk-install.exe)

## Basic instruction

- Example:

  ```ahk
  ^+r::Reload ; Ctrl + Shift + r

  !x::ExitApp ; Alt + x

  ^!f::       ; Ctrl + Alt + f
  MouseGetPos, xpos, ypos
  MsgBox, The cursor is at X%xpos% Y%ypos%.
  return
  ```

- `^`: `Ctrl`
- `+`: `Shift`
- `!`: `Alt`
- left of `::`: Keys to trigger function
- right of `::`: Function content
- `return`: Function end
- [Hotkeys](https://www.autohotkey.com/docs/Hotkeys.htm)

## Write script

- Window Spy
- `x := "string"`
- `#IfWinActive`
- `#IfWinExist`

## Snippet

### Xonar Essence STX - Switch Speaker and Headphone

- [AutoHotKey script](https://www.amazon.com/review/R17HDTKPBDSYSX?ASIN=B001OV789U)

```
^+q::
xonar_window := "Xonar Essence STX Audio Center"
2s := "2スピーカー"
h := "ヘッドフォン"

equalizer_window := "Equalizer APO 1.2.1 Configuration Editor"

DetectHiddenText, On
Run, "C:\Program Files\ASUS Xonar Essence STX Audio\Customapp\AsusAudioCenter.exe"
WinWait, %xonar_window%
IfWinNotActive, %xonar_window%, , WinActivate, %xonar_window%
WinWaitActive, %xonar_window%
WinGetText, vText, %xonar_window%
IfInString, vText, %2s%, ControlSend, ComboBox5, {Home}
; IfInString, vText, 2 Speakers, ControlSend, ComboBox5, h
else IfInString, vText, %h%, ControlSend, ComboBox5, 2
; else IfInString, vText, Headphone, ControlSend, ComboBox5, 2
WinClose

Run, Editor.exe, C:\Program Files\EqualizerAPO
WinWait, %equalizer_window%
IfWinNotActive, %equalizer_window%, , WinActivate, %equalizer_window%
WinWaitActive, %equalizer_window%
Click, LEFT, 78, 128
WinClose
Return
```

## Community script

- [[AutoHotkey Programming Tools] + Featured Scripts - AutoHotkey Community](https://www.autohotkey.com/boards/viewtopic.php?t=4161)
- [QuickSwitch - Use opened file manager folders in File dialogs](https://www.autohotkey.com/boards/viewtopic.php?style=19&t=102377)

## Ref

- [AutoHotkeyJp](https://sites.google.com/site/autohotkeyjp/)