# Minimal GitHub Pages (Jekyll) Starter

「Markdown を書く → push → 自動公開」な最小構成です。  
GitHub Pages の公式テーマ **Cayman** を `remote_theme` で使うため、Gemfile は不要です。

## 使い方（最速）

### A. ユーザーサイトで公開（おすすめ）
- リポジトリ名: `YOURNAME.github.io`（例: `yriica.github.io`）
- 公開URL: `https://YOURNAME.github.io/`
1. このスターターを unzip して中身を新規リポジトリにコピー
2. `baseurl` は空のままでOK（`_config.yml`）
3. GitHub の **Settings → Pages** で「Build and deployment: GitHub Actions」を選択
4. main ブランチに push すると自動で公開

### B. プロジェクトページで公開（例: `yriica/yriica`）
- 公開URL: `https://YOURNAME.github.io/REPO`（例: `https://yriica.github.io/yriica`）
1. このスターターを `yriica` リポジトリに配置
2. `_config.yml` の `baseurl` を `"/yriica"` に変更
3. **Settings → Pages** で「GitHub Actions」を選択
4. main ブランチへ push → 自動公開

> 補足: `YOURNAME/YOURNAME` リポジトリは GitHub プロフィール README 用の特別枠です。  
> Pages 自体は動きますが、ユーザーサイトを作るなら **`YOURNAME.github.io`** を使うのが慣例です。

## 編集方法
- 記事は `_posts/` に `YYYY-MM-DD-title.md` 形式で追加します
- トップの文章は `index.md`
- 設定は `_config.yml`（タイトル、説明、baseurlなど）

## よくある躓き
- ページのリンクが 404 → `baseurl` の設定ミスかキャッシュです。`/REPO` をつけ忘れていないか確認
- テーマが反映されない → `remote_theme` と `jekyll-remote-theme` プラグインが有効か確認
- Actions が失敗 → 権限 `pages: write` が workflow にあるか確認（本スターターは設定済み）

## ライセンス
MIT
