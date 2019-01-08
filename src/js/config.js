// jQuery は webpack でロードしている
const PLUGIN_ID = kintone.$PLUGIN_ID;

const $form = $('.js-submit-settings');
const $checkbox = $('#js-checkbox-enabled');

const getSettingsUrl = () => {
  return '/k/admin/app/flow?app=' + kintone.app.getId();
};

const config = kintone.plugin.app.getConfig(PLUGIN_ID);
// 設定文字列を boolean に変換
$checkbox.prop('checked', config.enabled == 'true');

$form.on('submit', e => {
  e.preventDefault();
  kintone.plugin.app.setConfig(
    // 設定は文字列で保存
    { enabled: $checkbox.prop('checked') ? 'true' : 'false' },
    () => {
      alert('アプリを更新してプラグイン設定を反映してください');
      window.location.href = getSettingsUrl();
    }
  );
});
