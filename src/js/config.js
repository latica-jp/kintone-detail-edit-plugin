// jQuery, hyperapp を webpack でロード
import Config from './Components/Config';

const PLUGIN_ID = kintone.$PLUGIN_ID;
const config = kintone.plugin.app.getConfig(PLUGIN_ID);

const state = {
  enabled: config.enabled === 'true',
};

const actions = {
  toggleEnabled: () => state => ({ enabled: !state.enabled }),
  submit: () => state => submitSettings(state),
};

const getSettingsUrl = () => {
  return '/k/admin/app/flow?app=' + kintone.app.getId();
};

const submitSettings = state => {
  kintone.plugin.app.setConfig(
    // 設定は文字列で保存
    { enabled: state.enabled ? 'true' : 'false' },
    () => {
      alert('アプリを更新してプラグイン設定を反映してください');
      window.location.href = getSettingsUrl();
    }
  );
};

hyperapp.app(
  state,
  actions,
  Config,
  document.getElementById('kintone-plugin-config')
);
