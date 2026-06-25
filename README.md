# 概要

これは、DrupalCamp Tokyo 2026のセッション「Drupal SDC入門」のデモ用Drupalサイトです。

# 使い方

DDEV + 既存configのインストールでサイトの構築が可能です。

## 前提

- Docker が起動していること
- DDEV がインストールされていること

## 初回構築

```bash
git clone https://github.com/kazukomurata/democamp2026.git democamp2026
cd democamp2026
ddev start
ddev composer install
ddev drush site:install --existing-config --config-dir=../config/default -y
```

インストール後、サイトを開きます。

```bash
ddev launch
```

ブラウザで直接開く場合は、以下のURLです。

```text
https://democamp2026.ddev.site
```

## 再インストール

既存のデータベースを捨てて、`config/default` の設定から入れ直す場合は以下を実行します。

```bash
ddev drush site:install --existing-config --config-dir=../config/default -y
```

