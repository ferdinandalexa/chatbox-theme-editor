<script>
  import {
    generalStyles,
    regularMessageStyles,
    sponsorStyles,
  } from "$lib/stores/chat-styles";
  import { generateChatStyles } from "$lib/utils/generateChatStyles";
  import ChatContainer from "$lib/components/messages/chat-container.svelte";
  import RegularMessage from "$lib/components/messages/regular-message.svelte";
  import Sponsor from "$lib/components/messages/sponsor.svelte";
  import Superchat from "$lib/components/messages/superchat.svelte";

  /**@type {HTMLButtonElement}*/
  let button;
  let isCopied = false;
  /**@type {number}*/
  let timeoutId;

  async function handleCopy() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    button.disabled = true;
    isCopied = true;

    return new Promise(() => {
      timeoutId = setTimeout(() => {
        button.disabled = false;
        isCopied = false;
      }, 2000);
    });
  }

  async function copyStyles() {
    try {
      const chatStyles = generateChatStyles(
        $generalStyles,
        $regularMessageStyles,
        $sponsorStyles
      );
      await navigator.clipboard.writeText(chatStyles);
      await handleCopy();
    } catch (err) {
      console.error("Error copying text: ", err);
    }
  }
</script>

<section>
  <button
    class:isCopied
    bind:this={button}
    on:click={() => {
      copyStyles();
    }}
  >
    {isCopied ? "Copied to clipboard!" : "Copy styles"}
  </button>

  <ChatContainer>
    <RegularMessage />
    <RegularMessage authorType="owner" />
    <RegularMessage authorType="moderator" />
    <RegularMessage authorType="member" />
    <Sponsor />
    <Superchat />
  </ChatContainer>
</section>

<style>
  section {
    width: 100%;
    position: relative;
    padding: 2rem;
  }

  section::after {
    content: "";
    position: absolute;
    inset: 0;
    filter: brightness(25%) contrast(25%);
    background-image: url(/checker.png);
    background-size: 8rem;
    background-position: center;
    z-index: -1;
  }

  button {
    position: absolute;
    right: 1rem;
    bottom: 1rem;

    padding: 1.25rem 1.75rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #212121;
    color: #fff;
    font-size: 1rem;
    font-weight: 700;

    z-index: 1;
  }

  button:hover {
    background-color: #313131;
  }

  button:active {
    background-color: #424242;
  }

  button.isCopied {
    background-color: #10a259;
  }
</style>
