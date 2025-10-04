# エンジニアコミュニティランディングページ

https://globis-tech-guild.github.io/

## プロジェクト概要
- Vite + React 18 + TypeScript を採用したシングルページ構成のランディングサイトです。
- Tailwind CSS v4 系とカスタム CSS トークンでテーマを管理し、Radix UI ベースの shadcn/ui コンポーネントを活用しています。
- Node.js 20 系を前提とした npm プロジェクトで、ビルド成果物は `build/` ディレクトリに出力されます。

## 推奨実行環境
- Node.js 20.x（GitHub Actions と同じバージョン）
- npm 10.x（Node.js 20 に同梱）
- macOS / Linux / Windows いずれも可

## 主要ディレクトリ
- `src/` : アプリケーション本体。`main.tsx` で React アプリをマウントし、`App.tsx` がページ全体を組み立てます。
- `src/components/` : セクション単位の UI（`Header`/`HeroSection`/`AboutSection`/`ActivitiesSection`/`Footer`）と補助的なコンポーネント群。
- `src/components/ui/` : Radix UI + shadcn/ui 由来の再利用コンポーネントを TypeScript でラップしたもの。フォーム、メニュー、ダイアログなどの基盤となります。
- `src/components/figma/` : Figma からエクスポートした画像にフォールバックを提供するユーティリティ。
- `src/assets/` : 画像やアイコンなどの静的アセット。
- `src/styles/globals.css` : デザイントークンやダークモード変数を定義するグローバルスタイルレイヤー。
- `src/guidelines/Guidelines.md` : ブランドとデザインのガイドラインをまとめた補足資料。
- `public/` : ルートに配置される静的ファイル（例: `ogp-image.html`）。
- `build/` : `npm run build` で生成される配信用成果物。GitHub Pages へのデプロイ対象です。

## エントリポイントとページ構成
- `main.tsx` で `createRoot` を呼び出し、`App.tsx` を `#root` に描画します。
- `App.tsx` はサイト全体をレイアウトし、Hero → About → Activities の順でセクションを配置。デザインは Tailwind ユーティリティクラスとカスタム CSS 変数で調整されています。
- 各セクションは `src/components/` 内の独立したコンポーネントで管理し、UI レイヤーの責務を明確に分離しています。

## スタイルと UI コンポーネント
- Tailwind CSS v4 の新しいレイヤー構文（`@layer`, `@theme`, `@custom-variant` など）を使用し、`globals.css` で配色や余白、タイポグラフィを一元管理しています。
- `clsx` と `class-variance-authority` を組み合わせ、状態に応じたクラス切り替えを安全に行います。
- UI 部品は Radix UI のアクセシブルなプリミティブをラップした shadcn/ui 実装をベースにしており、必要な部品は `src/components/ui/` からインポートできます。

## Vite 設定とビルド
- `vite.config.ts` で `@vitejs/plugin-react-swc` を利用し、React 18 + JSX/SWC に最適化。
- 依存ライブラリを特定バージョンに固定するためのエイリアス（例: `@radix-ui/react-dialog@1.1.6` → `@radix-ui/react-dialog`）を多数設定し、ビルドの安定性を確保しています。
- ビルドターゲットは `esnext`。出力先 `build/` は GitHub Pages デプロイと `gh-pages` CLI の両方で再利用されます。
- 開発サーバーはポート `3000` を使用し、自動でブラウザを開きます。

## デプロイフロー
### 自動デプロイ（GitHub Pages）
- `.github/workflows/deploy.yml` が main ブランチへの push / pull request をトリガーに実行されます。
- `build` ジョブ: リポジトリをチェックアウト → Node.js 20 をセットアップ → `npm ci` → `npm run build` → Pages 用アーティファクトをアップロード。
- `deploy` ジョブ: `actions/deploy-pages@v4` で GitHub Pages に公開し、成功/失敗を Slack に通知。Slack 連携には `SLACK_WEBHOOK_URL` シークレットが必要です。
- Pages 環境 URL はワークフロー完了時の `steps.deployment.outputs.page_url` で確認できます。

### 手動デプロイ（ローカルから gh-pages）
1. `npm install` または `npm ci` で依存関係をインストール。
2. `npm run build` で最新の `build/` を生成。
3. `npm run deploy` で `gh-pages` パッケージを使い、`build/` ディレクトリを GitHub Pages 用ブランチへ公開。
4. 初回実行時は GitHub CLI 認証またはリポジトリへの write 権限を持つトークンが必要です。

## コマンドリファレンス
| コマンド | 説明 |
| --- | --- |
| `npm install` | 開発環境で依存パッケージをインストールします。 |
| `npm ci` | lock ファイルを厳密に反映して依存関係を再インストール（CI 向け）。 |
| `npm run dev` | Vite 開発サーバーを起動し、`http://localhost:3000` を自動で開きます。 |
| `npm run build` | 本番用に最適化した静的ファイルを `build/` に生成します。 |
| `npm run preview` | 生成済みの `build/` をローカルでプレビューするためのサーバーを起動します。 |
| `npm run deploy` | `gh-pages` を利用して `build/` ディレクトリを GitHub Pages に公開します。 |

## 開発のヒント
- 画像クレジットは `src/Attributions.md` にまとまっているため、素材変更時は同ファイルも更新してください。
- 追加で shadcn/ui コンポーネントを生成する場合は既存のコードスタイルに合わせ、必要に応じて `src/components/ui/` に配置します。
- デザインガイドライン（`src/guidelines/Guidelines.md`）を参考にしつつ、Tailwind のカスタムプロパティを変更することでテーマを簡単に調整できます。
