<script>
  /** @typedef {import('$lib/types/messages').AUTHOR_TYPES | null } AuthorType */
  /** @type {AuthorType} */
  export let authorType = null;
</script>

<yt-live-chat-text-message-renderer author-type={authorType}>
  <yt-img-shadow id="author-photo">
    <div
      style="display: block; background-color: white; width: 100%; height: 100%;"
    />
  </yt-img-shadow>

  <div class="content">
    <span class="timestamp">12:00</span>

    <yt-live-chat-author-chip>
      <span class="author-name">ferdinandalexa</span>
      <span class="author-badges">
        <yt-live-chat-author-badge-renderer type={authorType}>
          <yt-icon class="style-scope yt-live-chat-author-badge-renderer">
            <svg
              viewBox="0 0 16 16"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              style="pointer-events: none; display: block; width: 100%; height: 100%; fill: currentColor"
            >
              <g class="style-scope yt-icon">
                <path
                  d="M9.64589146,7.05569719 C9.83346524,6.562372 9.93617022,6.02722257 9.93617022,5.46808511 C9.93617022,3.00042984 7.93574038,1 5.46808511,1 C4.90894765,1 4.37379823,1.10270499 3.88047304,1.29027875 L6.95744681,4.36725249 L4.36725255,6.95744681 L1.29027875,3.88047305 C1.10270498,4.37379824 1,4.90894766 1,5.46808511 C1,7.93574038 3.00042984,9.93617022 5.46808511,9.93617022 C6.02722256,9.93617022 6.56237198,9.83346524 7.05569716,9.64589147 L12.4098057,15 L15,12.4098057 L9.64589146,7.05569719 Z"
                  class="style-scope yt-icon"
                />
              </g>
            </svg>
          </yt-icon>
        </yt-live-chat-author-badge-renderer>
      </span>
    </yt-live-chat-author-chip>

    <span class="message">
      This is how it looks like a {authorType ?? ''} user message.
    </span>
  </div>
</yt-live-chat-text-message-renderer>

<style>
  yt-live-chat-text-message-renderer {
    background-color: var(--rm-background);
    display: flex;
    gap: 10px;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: var(--g-gap);
    width: var(--g-messagesWidth);
    max-width: 100%;
    font-size: 16px;
    height: max-content;
  }

  yt-live-chat-text-message-renderer,
  yt-live-chat-text-message-renderer:is([author-type], [is-highlighted]) {
    --t-color: var(--rm-authorDefault-color);
  }

  yt-live-chat-text-message-renderer:is(
      [author-type="owner"],
      [is-highlighted]
    ) {
    --t-color: var(--rm-authorOwner-color);
  }

  yt-live-chat-text-message-renderer:is(
      [author-type="moderator"],
      [is-highlighted]
    ) {
    --t-color: var(--rm-authorModerator-color);
  }

  yt-live-chat-text-message-renderer:is(
      [author-type="member"],
      [is-highlighted]
    ) {
    --t-color: var(--rm-authorMember-color);
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

  .content {
    display: inline-block;
  }

  .timestamp {
    display: none;
  }

  yt-live-chat-author-chip {
    display: inline-flex;
    align-items: baseline;
    padding: 0;
    margin-bottom: 2.5px;
    font-family: var(--g-ff-header);
    margin-right: 2.5px;
  }

  yt-live-chat-author-chip::after {
    content: ":";
    color: var(--t-color);
    font-weight: bold;
    margin-inline: 0.25rem;
  }

  .author-name {
    color: var(--t-color);
    background-color: transparent;
    padding: 0;
    font-weight: 700;
    vertical-align: middle;
  }

  .author-badges {
    display: var(--rm-badgesDisplay);
    color: var(--t-color);
    margin-left: 5px;
  }

  yt-icon {
    display: inline-block;
    margin: 0;
    vertical-align: initial;
    --size: 16px;
    width: var(--size);
    height: var(--size);
  }

  .message {
    display: var(--g-messageBreakline);
    line-height: 1.5;
    font-family: var(--g-ff-content);
    color: var(--rm-textColor);
    vertical-align: baseline;
  }
</style>
