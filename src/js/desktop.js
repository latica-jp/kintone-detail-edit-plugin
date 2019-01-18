// jQuery は webpack でロードしている
const PLUGIN_ID = kintone.$PLUGIN_ID;

kintone.events.on('app.record.index.show', event => {
  const config = kintone.plugin.app.getConfig(PLUGIN_ID);
  if (config.enabled !== 'true') return;

  // いちばん左の列の横幅を拡げる
  $('#view-list-data-gaia th:first-child').attr({ style: 'width: 77px;' });

  // 詳細画面へのリンクを含むセル（＝いちばん左の列のセル）の配列を取得
  const $detailColumsCells = $('td[class*="detail-action-"]');
  // 詳細編集画面へのリンクボタンを追加する
  $detailColumsCells.each((_, element) => {
    const $detailEditLink = createDetailEditLinkButton(element);
    $(element).append($($detailEditLink));
  });

  return event;
});

/**
 * 詳細編集画面へのリンクボタンを作成する
 * @element {object} 詳細画面へのリンクを収容するセル
 */
const createDetailEditLinkButton = element => {
  // 詳細編集画面へのリンクを作成
  const $detailEditLink = $('<a></a>').append(
    $('<span></span>', { class: 'recordlist-edit-icon-gaia' })
  );
  // 詳細画面へのリンクの参照を取得する
  const $detailLinkRef = $(element).find('a.recordlist-show-gaia');
  // 詳細編集画面へのリンクの href を生成してリンクに適用する
  $detailEditLink.attr({
    href: `${$detailLinkRef.attr('href')}&mode=edit`,
    class: $detailLinkRef.attr('class'),
  });

  return $detailEditLink;
};
