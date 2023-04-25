<script>
  import Root from '$lib/components/messages/root.svelte';
</script>

<Root>
  <div id="chat-container">
    <yt-live-chat-renderer>
      <yt-live-chat-item-list-renderer>
        <div id="item-offset">
          <div id="items">
            <slot />
            <yt-live-chat-viewer-engagement-message-renderer />
          </div>
        </div>
      </yt-live-chat-item-list-renderer>
    </yt-live-chat-renderer>
  </div>
</Root>

<style>
  #chat-container {
    overflow: hidden;
    margin: 0;
    background-color: var(--g-background, hsla(216, 100%, 88%, 0.4));
  }

  yt-live-chat-renderer {
    background-color: transparent;
  }

  #chat-container,
  yt-live-chat-renderer {
    height: 100%;
  }

  #item-offset {
    height: 100%;
  }

  yt-live-chat-item-list-renderer #items {
    position: absolute;
    overflow: hidden;
    padding: 0;
    inset-block-end: calc(var(--g-padding, 2rem) - var(--g-gap, 2rem));
    inset-inline: var(--g-padding, 2rem);
  }

  yt-live-chat-item-list-renderer #items {
    overflow: hidden;
  }
</style>
