<yt-live-chat-paid-message-renderer style="color: #fff">
  <div id="header" style="background-color: rgba(208,0,0,1);">
    <yt-img-shadow id="author-photo">
      <div
        style="display: block; background-color: white; width: 100%; height: 100%;"
      />
    </yt-img-shadow>
    <div id="header-content">
      <div id="author-name">ferdinandalexa</div>
      <div id="purchase-amount">$5.00</div>
    </div>
  </div>

  <div id="content" style="background-color: rgba(230,33,23,1);">
    <div id="message" dir="auto">Thanks for all your work, keep it up!</div>
  </div>
</yt-live-chat-paid-message-renderer>

<!-- {#if isPlay}
  {@const steps = stepsPercentage}
  {@const duration = totalDuration}
{/if} -->

<!-- <button
  bind:this={button}
  on:click={() => {
    handleClick(totalDuration);
  }}
>
  Play animation
</button> -->

<style>
  yt-live-chat-paid-message-renderer {
    display: block;
    padding: 0;
    overflow: hidden;
    border-radius: 5px;
    margin-bottom: var(--g-gap, 2px);
    width: var(--g-messagesWidth, max-content);
    max-width: 100%;
    animation: var(--a-type) var(--a-duration);
    animation-fill-mode: both;

    font-size: 16px;
  }

  yt-live-chat-paid-message-renderer :is(#header, #content) {
    padding: 12.5px;
  }

  yt-live-chat-paid-message-renderer #header {
    display: flex;
    gap: 10px;
    font-family: var(--g-ff-header, sans-serif);
  }

  yt-live-chat-paid-message-renderer :is(#author-name, #purchase-amount) {
    display: var(--g-messageBreakline);
  }

  yt-live-chat-paid-message-renderer #author-name {
    font-weight: 700;
  }

  yt-live-chat-paid-message-renderer #purchase-amount {
    margin-top: 4px;
    font-size: 14px;
  }

  yt-live-chat-paid-message-renderer #content {
    font-family: var(--g-ff-content, sans-serif);
  }
</style>
