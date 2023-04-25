<script>
  import { compressCSS } from '$lib/utils/compressCSS';
  import {
    generalStyles,
    regularMessageStyles,
    sponsorStyles,
    animationStyles,
    timing
  } from '$lib/stores/chat-styles';
  import { generateChatStyles } from '$lib/utils/generateChatStyles';
  import ChatContainer from '$lib/components/messages/chat-container.svelte';
  import DynamicChat from '$lib/components/messages/dynamic-chat.svelte';
  import StaticChat from '../messages/static-chat.svelte';

  /** @type {HTMLButtonElement} */
  let button;
  let isCopied = false;
  let chatSimulationEnabled = false;
  /** @type {ReturnType<typeof setTimeout>} */
  let timeoutId;

  async function handleCopy () {
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

  async function copyStyles () {
    try {
      const chatStyles = generateChatStyles(
        $generalStyles,
        $regularMessageStyles,
        $sponsorStyles,
        $animationStyles,
        $timing
      );
      await navigator.clipboard.writeText(compressCSS(chatStyles));
      await handleCopy();
    } catch (err) {
      console.error('Error copying text: ', err);
    }
  }
</script>

<section>
  <menu>
    <li>
      <button
        bind:this={button}
        on:click={() => {
          chatSimulationEnabled = !chatSimulationEnabled;
        }}
      >
        {chatSimulationEnabled ? 'Disable Live Chat' : 'Enable Live Chat'}
      </button>
    </li>
    <li>
      <button
        class:isCopied
        bind:this={button}
        on:click={() => {
          copyStyles();
        }}
      >
        {isCopied ? 'Copied to clipboard!' : 'Copy styles'}
      </button>
    </li>
  </menu>

  <ChatContainer>
    {#if chatSimulationEnabled}
      <DynamicChat />
    {:else}
      <StaticChat />
    {/if}
  </ChatContainer>
</section>

<style>
  section {
    position: relative;
    width: 100%;
    padding: 2rem;
  }

  section::after {
    position: absolute;
    z-index: -1;
    background-image: url(/checker.png);
    background-position: center;
    background-size: 8rem;
    content: "";
    filter: brightness(25%) contrast(25%);
    inset: 0;
  }

  menu {

    position: absolute;
    z-index: 1;
    right: 1rem;
    bottom: 1rem;
    display: flex;
    gap: 1rem;
  }

  button {
    padding: 1.25rem 1.75rem;
    border: none;
    background-color: #212121;
    border-radius: 0.5rem;
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
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
