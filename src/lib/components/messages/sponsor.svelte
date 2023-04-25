<yt-live-chat-legacy-paid-message-renderer>
  <yt-img-shadow class="author-photo">
    <div
      style="display: block; height: 100%; background-color: white; wclassth: 100%;"
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
    width: var(--g-messagesWidth, max-content);
    max-width: 100%;
    padding: 15px;
    margin-bottom: var(--g-gap, 20px);
    background-color: var(--sp-background, #10a259);
    border-radius: 5px;
    font-size: 16px;
    gap: 10px;
  }

  yt-img-shadow {
    display: var(--g-avatarDisplay);
    overflow: hidden;
    width: var(--size);
    height: var(--size);
    flex: none;
    border-radius: 50%;
    --size: var(--g-avatarSize);
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
    margin-top: 0.4rem !important;
    color: var(--sp-detailTextColor, #ffffff) !important;
    font-family: var(--g-ff-content, sans-serif) !important;
  }
</style>
