<script>
  import { onMount, setContext } from "svelte";
  import {
    animationStyles,
    generalStyles,
    regularMessageStyles,
    sponsorStyles,
    storeKeys,
  } from "$lib/stores/chat-styles";
  import CustomizationPanel from "$lib/components/panels/customization/customization-panel.svelte";
  import PreviewPanel from "$lib/components/panels/preview-panel.svelte";

  setContext(storeKeys.general, generalStyles);
  setContext(storeKeys.regularMessage, regularMessageStyles);
  setContext(storeKeys.sponsor, sponsorStyles);
  setContext(storeKeys.animation, animationStyles);

  onMount(() => {
    Coloris({
      el: ".coloris",
      themeMode: "dark",
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
    grid-template-columns: 22.5rem 1fr;
    height: 100%;
    overflow: hidden;
  }
</style>
