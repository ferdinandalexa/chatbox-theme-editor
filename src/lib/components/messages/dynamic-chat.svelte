<script>
  import { onDestroy, onMount } from 'svelte';
  import { storeKeys, styleStores } from '$lib/stores/chat-styles';

  import { getRandomNumber } from '$lib/utils/getRandomNumber';

  import { animate } from '$lib/actions/animate';

  import RegularMessage from '$lib/components/messages/regular-message.svelte';
  import Sponsor from '$lib/components/messages/sponsor.svelte';
  import Superchat from '$lib/components/messages/superchat.svelte';

  const animation = styleStores[storeKeys.animation];
  const timing = styleStores[storeKeys.time];

  /** @typedef {import('$lib/types/messages').ListTypeMessages} ListTypeMessages */
  /** @typedef {import('$lib/types/animations').AnimateProps} AnimateProps */

  /** @type {Array<ListTypeMessages>}   */
  const messagesType = [
    {
      component: RegularMessage
    },
    {
      component: RegularMessage,
      props: {
        authorType: 'owner'
      }
    },
    {
      component: RegularMessage,
      props: {
        authorType: 'moderator'
      }
    },
    {
      component: RegularMessage,
      props: {
        authorType: 'member'
      }
    },
    {
      component: Sponsor
    },
    {
      component: Superchat
    }
  ];
  /** @type {Array<ListTypeMessages>} */
  let listOfMessages = [];
  /** @type {AnimateProps} */
  let animateOpts;
  /** @type {ReturnType<typeof setTimeout>} */
  let intervalId;

function initiallizeListMesssages () {
  const randomIndex = getRandomNumber(0, messagesType.length - 1);
  listOfMessages = [messagesType[randomIndex]];
}

  intervalId = setInterval(() => {
    const randomIndex = getRandomNumber(0, messagesType.length - 1);
    listOfMessages = [...listOfMessages, messagesType[randomIndex]];
  }, 3_000);

  $: {
    animateOpts = {
      type: $animation.type,
      hideOldMessages: $animation.hideOldMessages,
      duration: $timing.totalTime,
      animationTimeRatio: $timing.animationTimeRatio
    };

    listOfMessages = [];
    initiallizeListMesssages();
  }

  onMount(() => {
    initiallizeListMesssages();
  });

  onDestroy(() => {
    clearInterval(intervalId);
  });
</script>

{#each listOfMessages as { component, props }}
  <div use:animate={animateOpts}>
    <svelte:component this={component} {...props} />
  </div>
{/each}
