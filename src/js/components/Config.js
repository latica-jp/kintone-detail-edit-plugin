import { h } from 'hyperapp';

const Config = (state, actions) => (
  <section class="settings">
    <h2 class="settings-heading">レコード詳細編集プラグイン設定</h2>
    <p class="kintoneplugin-desc">
      一覧画面の詳細表示ボタンの横に詳細画面で編集を行うボタンを追加します。
    </p>
    <p class="kintoneplugin-row">
      <div class="kintoneplugin-input-checkbox">
        <span class="kintoneplugin-input-checkbox-item">
          <input
            type="checkbox"
            value="enabled"
            checked={state.enabled}
            onclick={actions.toggleEnabled}
            id="js-checkbox-enabled"
          />
          <label for="js-checkbox-enabled">有効にする</label>
        </span>
      </div>
    </p>
    <p class="kintoneplugin-row">
      <button onclick={actions.submit} class="kintoneplugin-button-normal">
        保存する
      </button>
    </p>
    <div id="hyperapp" />
  </section>
);

export default Config;
