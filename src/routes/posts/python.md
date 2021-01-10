---
title: "[編程] Python"
path: /cse-python
date: 2020-02-12 13:23:37
published: false
tags: ["CSE"]
series: false
cover_image: "cover2.png"
canonical_url: false
description: ""
---

## 為什麼 Python 的 main 函式要寫成 `if __name__ == '__main__':` ？

- [python の if \_\_name\_\_ == '\_\_main\_\_':は何のためにあるのか。 - Qiita](https://qiita.com/suiru_nakamura/items/dca13669abdf29404f38)

若我們寫了一支沒有 `if name == 'main'` 的 Python 檔案

```python
def main():
  print ("Hello")

main()
```

使用 `python hello.py` 執行仍然可以正常運作，但在其它檔案作為外部引入 `import hello` 的時候，也會顯示「Hello」

```python
import hello
> Hello
```

這是因為在 Python 中在引入檔案時，會先執行裡頭的內容，例如這支檔案就會執行 `main() => print("hello")` 的處理

所以為了在引入檔案時，不要做出意圖之外的程式行為，才會加上 `if name == 'main'` 的分歧敘文

```python
def main():
  print("Hello")

if __name__ == "__main__":
  main()
```

如此 if 之內的部份在 import 時就不會執行了

### 背後原因

name 是 Python 中的特殊變數，會儲存 Python 的模組名稱，在 `import hello` 時，`hello.py` 中的 name 就會被 Python 自動設定為 `'hello'`

使用 `python hello.py` 執行時，`hello.py` 中的 name 就會是於 Python 直接執行檔案時所設定的 `'main'`

所以 `if name == 'main'` 能夠判別「這支 `hello.py` 檔案是以 `python hello.py` 所直接執行的（＝不是經由 import 造成的舉動）」

## Asyncio

```py
import asyncio

async def main():
  print('Hello...)
  await asyncio.sleep(1)
  print('...World!')

asyncio.run(main())
```

## Python 調用 C++ dll

## [Streamlit](https://www.streamlit.io/)

## 使用 Pyinstaller 封裝 Python 程式

### 安裝

`pip install pyinstaller`

### 封裝

- `pyinstaller`
- `pyi-makespec`
- 封裝成一個資料夾：`pyinstaller my-script.py`
- 封裝成一個檔案：`pyinstaller --onefile my-script.py`

執行程式位於 `dist` 資料夾裡

## 資源

- [Python Gossip](https://openhome.cc/Gossip/Python/)
- [Python でゼロからでもサービス開発・公開できる学習ロードマップ](https://qiita.com/Saku731/items/52a3bbacd002f26f408e)
- [撥開 Python, pip, site-packages 的藍色蜘蛛網 💢](https://medium.com/@will.wang/%E6%92%A5%E9%96%8B-python-pip-site-packages-%E7%9A%84%E8%97%8D%E8%89%B2%E8%9C%98%E8%9B%9B%E7%B6%B2-90e398bb3785)
- [Awesome Python](https://github.com/vinta/awesome-python)
- [PyCharm](https://www.jetbrains.com/pycharm/)
- [pythonanywhere](https://www.pythonanywhere.com/)
- [pipenv](https://pipenv.readthedocs.io/en/latest/)
- [onelivesleft/PrettyErrors: Prettify Python exception output to make it legible.](https://github.com/onelivesleft/PrettyErrors)
- [空行讓 Python 更簡潔](https://iapyeh.readthedocs.io/en/latest/blogs/technical/docs_style_review_twisted.html)
- [Python のコードをきれいに書くコツ](https://qiita.com/yinawekuky/items/28d973a653e9825ed582)
- [【まとめ】Python を高高速速で復習する](https://qiita.com/KeisukeKakuda/items/ef24baa58ed55967d666)
