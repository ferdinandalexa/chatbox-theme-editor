<script>
  import { storeKeys } from '$lib/stores/chat-styles';
  import {
    generalFields,
    regularMessageFields,
    sponsorFields,
    superchatFields,
    membershipFields,
    animationFields
  } from '$lib/stores/initialValues';
  import Set from '$lib/components/panels/customization/set.svelte';
</script>

<div class="customization-panel">
  <Set name="General" storeKey={storeKeys.general} fields={generalFields} />
  <Set
    name="Regular Message"
    storeKey={storeKeys.regularMessage}
    fields={regularMessageFields}
  />
  <Set name="Sponsors" storeKey={storeKeys.sponsor} fields={sponsorFields} />
  <Set
    name="Superchat"
    storeKey={storeKeys.superchat}
    fields={superchatFields}
    disabled
  />
  <Set
    name="Membership"
    storeKey={storeKeys.membership}
    fields={membershipFields}
    disabled
  />
  <Set
    name="Animations"
    storeKey={storeKeys.animation}
    fields={animationFields}
  />
</div>

<style>
  .customization-panel {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #212121;
    color: white;
    padding: 1rem;
    overflow-y: scroll;
  }

  .customization-panel {
    --sb-track-color: #242424;
    --sb-thumb-color: #424242;
    --sb-size: 8px;

    scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);
  }

  .customization-panel::-webkit-scrollbar {
    width: var(--sb-size);
  }

  .customization-panel::-webkit-scrollbar-track {
    background: var(--sb-track-color);
    border-radius: 8px;
  }

  .customization-panel::-webkit-scrollbar-thumb {
    background: var(--sb-thumb-color);
    border-radius: 8px;
  }
</style>
