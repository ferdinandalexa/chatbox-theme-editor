<script>
  import { getContext, onDestroy } from "svelte";
  import { storeKeys } from "$lib/stores/chat-styles";

  import { getRandomNumber } from "$lib/utils/getRandomNumber";

  import { animate } from "$lib/actions/animate";

  import RegularMessage from "$lib/components/messages/regular-message.svelte";
  import Sponsor from "$lib/components/messages/sponsor.svelte";
  import Superchat from "$lib/components/messages/superchat.svelte";

  const animation = getContext(storeKeys.animation);

  /** @typedef {import('$lib/types/messages').ListTypeMessages} ListTypeMessages */

  /** @type {Array<ListTypeMessages>}   */
  const messagesType = [
    {
      component: RegularMessage,
    },
    {
      component: RegularMessage,
      props: {
        authorType: "owner",
      },
    },
    {
      component: RegularMessage,
      props: {
        authorType: "moderator",
      },
    },
    {
      component: RegularMessage,
      props: {
        authorType: "member",
      },
    },
    {
      component: Sponsor,
    },
    {
      component: Superchat,
    },
  ];

  /**@type {Array<ListTypeMessages>}*/
  let listOfMessages = [];
  /** @type {number}*/
  let intervalId;

  intervalId = setInterval(() => {
    const randomIndex = getRandomNumber(0, messagesType.length - 1);
    listOfMessages = [...listOfMessages, messagesType[randomIndex]];
  }, 3_000);

  $: totalDuration = $animation.hideOldMessages
    ? parseInt($animation.timeOnChat) + parseInt($animation.animationTime) * 2
    : parseInt($animation.animationTime) * 2;
  $: stepsPercentage = $animation.animationTime / totalDuration;

  onDestroy(() => {
    clearInterval(intervalId);
  });
</script>

{#each listOfMessages as { component, props }}
  <div
    use:animate={{
      type: $animation.type,
      steps: stepsPercentage,
      duration: totalDuration,
      hasOut: $animation.hideOldMessages,
    }}
  >
    <svelte:component this={component} {...props} />
  </div>
{/each}
