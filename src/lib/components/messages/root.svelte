<script>
  import { storeKeys, styleStores } from '$lib/stores/chat-styles';

  const generalStyles = styleStores[storeKeys.general];
  const regularMessage = styleStores[storeKeys.regularMessage];
  const sponsor = styleStores[storeKeys.sponsor];
  const animation = styleStores[storeKeys.animation];
</script>

<div
  class="root"
  style="
  --g-background: {$generalStyles.background};
  --g-padding: {$generalStyles.padding / 10}rem;
  --g-ff-header: {$generalStyles.headerFont};
  --g-ff-content: {$generalStyles.bodyFont};
  --g-gap: {$generalStyles.marginBottom}px;
  --g-messagesWidth: {$generalStyles.fullWidth ? '100%' : 'max-content'};
  --g-messageBreakline: {$generalStyles.breakline ? 'inline' : 'block'};
  --g-avatarDisplay: {$generalStyles.avatarDisplay ? 'inline-block' : 'none'};
  --g-avatarSize: {$generalStyles.avatarSize}px;
  --rm-badgesDisplay: {$regularMessage.badgesDisplay ? 'inline-block' : 'none'};
  --rm-background: {$regularMessage.background};
  --rm-textColor: {$regularMessage.messageColor};
  --rm-authorDefault-color: {$regularMessage.colorDefault};
  --rm-authorOwner-color: {$regularMessage.colorOwner};
  --rm-authorModerator-color: {$regularMessage.colorModerator};
  --rm-authorMember-color: {$regularMessage.colorMember};
  --sp-background: {$sponsor.background};
  --sp-eventTextColor: {$sponsor.eventColor};
  --sp-detailTextColor: {$sponsor.detailColor};
  --a-type: {$animation.type};
  --a-duration: {parseInt($animation.duration) * 2 +
    parseInt($animation.keepOnChat)}ms;
"
>
  <slot />
</div>

<style>
  .root {
    position: relative;
    height: 100%;
  }
</style>
