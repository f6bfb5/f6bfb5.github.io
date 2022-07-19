---
title: "AutoHotKey 筆記"
date: 2022-06-11T23:36:19.000Z
summary: ""
tags: Toolbox
---

## Introduction

- ~~2022 年才開始研究 AHK~~
- AutoHotKey 是可以自由自動化與客製化 Windows 操作的腳本引擎
- 亦可儲存變數、處理條件分歧、遞迴與呼叫函式達成更複雜的操作
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

|     |                 |
| --- | --------------- |
| `^` | `Ctrl`          |
| `+` | `Shift`         |
| `!` | `Alt`           |
| `#` | `Win`           |
| `&` | Combination key |

- left of `::`: Keys to trigger function
- right of `::`: Function content
- `return`: Function end
- [Hotkeys](https://www.autohotkey.com/docs/Hotkeys.htm)
- [Commands](https://ahkwiki.net/Commands_Category)

## Write script

### Remap Keyboard

- 除了鍵盤按鍵外，滑鼠按鍵或手把按鍵也可以 remap
- 可以使用 `#IfWinActive` 或 `#IfWinExist` 只於特定程式 remap 按鍵
  - 可利用 AHK 附屬的 Window Spy 觀察個別程式的詳細資訊
- [使用例 - AutoHotkey Wiki](https://ahkwiki.net/Examples)

### Hotstring

- 以指定的文字輸入，而非組合按鍵去觸發操作
- Example:

  ```ahk
  ::kita-::
  Clipboard = ｷﾀ━━━━━━(ﾟ∀ﾟ)━━━━━━ !!!!!
  Send,^v
  Return
  ```

- 輸入完畢後，還需要**輸入終止文字才會觸發**
  - 預設的終止文字為 `-()[]{}':;"/\,.?!{Enter}{Space}{Tab}`
  - 可使用 `#Hotstring EndChars` 修改終止文字，例如改為 `*` 便不須輸入終止文字
- 可設定是否要取代原始輸入文字，或是否要無視大小寫差異
  - 可使用 `#Hotstring` 統一進行設定，或於指令裡個別設定
  - 個別設定的情況，須於指定前方的 `:` 之間加入參數
  - Example: `:*:btw::by the way`

### Mouse and Keyboard Input

- `Send, Keys`
  - 一般模式，會將以 `{}` 包住的特殊按鍵，或是如 `^c` 的修飾按鍵轉換成特殊功能
- `SendRaw, Keys`
  - 原始輸入模式，直接依照參數內容送出，一般模式下使用 `{Raw}` 標注也會變為此模式
- `SendInput, Keys`, `SendPlay, Keys`, `SendEvent, Keys`
  - 使用不同實作方式送出按鍵
  - `Send` 預設為 `SendEvent`，使用 WindowAPI 的 `keybd_event` 和 `mouse_event`
- 大小寫會視為不同按鍵，如 `Send, ABC` 與 `Send, abc` 會依其大小寫送出
- 修飾按鍵：

|     |       |
| --- | ----- |
| `^` | Ctrl  |
| `+` | Shift |
| `!` | Alt   |
| `#` | Win   |

- [特殊按鍵](https://ahkwiki.net/Send#.E7.89.B9.E6.AE.8A.E3.82.AD.E3.83.BC.E5.90.8D.E4.B8.80.E8.A6.A7)（一部）：

|                      |                                       |
| -------------------- | ------------------------------------- |
| `{LCtrl}`            | 左側 Ctrl 鍵                          |
| `{LWin}`             | 左側 Win 鍵                           |
| `{LButton}`          | 滑鼠左鍵                              |
| `{RButton}`          | 滑鼠右鍵                              |
| `{MButton}`          | 滑鼠中鍵                              |
| `{Click[, options]}` | 進行點擊操作，options 與 `Click` 相同 |

- `Click[, Button, up/down, x, y, count, rel]`
- Button:
  - 可省略為 `L`, `R`, `M`, `WU`, `WD`

|             |                |
| ----------- | -------------- |
| `LEFT`      | 左鍵（預設值） |
| `RIGHT`     | 右鍵           |
| `MIDDLE`    | 中鍵           |
| `WheelUp`   | 滾輪上滑       |
| `WheelDown` | 滾輪下滑       |
| `X1`        | 擴充鍵 1       |
| `X2`        | 擴充鍵 2       |

- up/down:
  - `Down`/`D` 會保持按住不放
  - `Up`/`U` 會於按下後放開
- Count: 設為 0 則會只移動鼠標
- Rel: 設定為 `Relative` 或 `Rel` 則會改為以現在鼠標位置為起點

### Process

- `Run, Target[, WorkingDir, Max|Min|Hide/UseErrorLevel, OutputVarPID]`

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
- [AutoHotkey のススメ](https://qiita.com/ryoheiszk/items/092cc5d76838cb5a13f1)
