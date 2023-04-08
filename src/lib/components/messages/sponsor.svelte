<script>
  import { getContext } from "svelte";
  import { storeKeys } from "$lib/stores/chat-styles";

  const generalStyles = getContext(storeKeys.general);
</script>

<yt-live-chat-legacy-paid-message-renderer>
  <yt-img-shadow class="author-photo">
    <div
      style="display: block; background-color: white; wclassth: 100%; height: 100%;"
    />
  </yt-img-shadow>

  <div class="content">
    <div class="event-text">NEW SPONSOR!</div>
    <div class="detail-text">
      Welcome <span class="mention">ferdinandalexa</span>!
    </div>
  </div>
</yt-live-chat-legacy-paid-message-renderer>

<style>
  yt-live-chat-legacy-paid-message-renderer {
    display: flex;
    background-color: var(--sp-background, #10a259);
    gap: 10px;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: var(--g-gap, 20px);
    width: var(--g-messagesWidth, max-content);
    max-width: 100%;
    font-size: 16px;
  }

  yt-img-shadow {
    flex: none;
    display: var(--g-avatarDisplay);
    --size: var(--g-avatarSize);
    width: var(--size);
    height: var(--size);
    overflow: hidden;
    border-radius: 50%;
  }

  yt-live-chat-legacy-paid-message-renderer
    .content
    :is(.event-text, .mention) {
    font-weight: 700;
    line-height: 1.5;
  }

  yt-live-chat-legacy-paid-message-renderer .event-text {
    color: var(--sp-eventTextColor, #ffffff) !important;
    font-family: var(--g-ff-header, sans-serif) !important;
  }

  yt-live-chat-legacy-paid-message-renderer .detail-text {
    font-family: var(--g-ff-content, sans-serif) !important;
    color: var(--sp-detailTextColor, #ffffff) !important;
    margin-top: 0.4rem !important;
  }
</style>
