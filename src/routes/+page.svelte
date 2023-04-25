<script>
  import { onMount, setContext } from 'svelte';
  import {
    animationStyles,
    generalStyles,
    regularMessageStyles,
    sponsorStyles,
    timing,
    storeKeys
  } from '$lib/stores/chat-styles';
  import CustomizationPanel from '$lib/components/panels/customization/customization-panel.svelte';
  import PreviewPanel from '$lib/components/panels/preview-panel.svelte';

  setContext(storeKeys.general, generalStyles);
  setContext(storeKeys.regularMessage, regularMessageStyles);
  setContext(storeKeys.sponsor, sponsorStyles);
  setContext(storeKeys.animation, animationStyles);
  setContext(storeKeys.time, timing);

  onMount(() => {
    Coloris({
      el: '.coloris',
      themeMode: 'dark'
    });
  });
</script>

<div class="grid">
  <CustomizationPanel />
  <PreviewPanel />
</div>

<style>
  .grid {
    display: grid;
    overflow: hidden;
    height: 100%;
    grid-template-columns: 22.5rem 1fr;
  }
</style>
