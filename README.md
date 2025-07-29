# Signed Transaction Project

## 概要
このプロジェクトは、署名付きトランザクションを生成するためのツールを提供します。主に TypeScript を使用して実装されており、暗号通貨やブロックチェーン関連のアプリケーションで利用可能です。

## ファイル構成
- **package.json**: プロジェクトの依存関係とスクリプトを管理。
- **params.json**: トランザクション生成に必要なパラメータを格納。
- **src/**: ソースコードディレクトリ。
  - **createParams.ts**: トランザクションパラメータを生成するロジック。
  - **genSignedTransaction.ts**: 署名付きトランザクションを生成するロジック。

## 必要条件
- Node.js (バージョン 16 以上)
- npm または yarn

## インストール
以下の手順でプロジェクトをセットアップしてください。

1. リポジトリをクローンします:
   ```bash
   git clone <リポジトリURL>
   cd signed-transaction
   ```

2. 必要な依存関係をインストールします:
   ```bash
   npm install
   ```

## 使用方法
1. `params.json` ファイルを編集して、必要なトランザクションパラメータを設定します。
   - 以下のコマンドを実行して、任意のパラメータを生成することも可能です。
   ```bash
   npm run create-params
   ```
2. 以下のコマンドを実行して署名付きトランザクションを生成します:

    ```bash
    npm run signed ./params.json
    ```
   
## ブロードキャスト

今回は、https://infura.io を利用してブロードキャストのためのエンドポイントを取得します。

（アカウント作成をして、PROJECT_ID を取得するまでの手順は省略）

```bash
curl https://mainnet.infura.io/v3/{PROJECT_ID} \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc":"2.0",
    "method":"eth_sendRawTransaction",
    "params":["{SIGNED_TRANSACTION}"],
    "id":1
  }'
```

実行結果（例）

```bash
{"jsonrpc":"2.0","id":1,"result":"0x000000..."}
```