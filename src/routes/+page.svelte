<script>
  import { onMount } from 'svelte';
  import CustomizationPanel from '$lib/components/panels/customization/customization-panel.svelte';
  import PreviewPanel from '$lib/components/panels/preview-panel.svelte';

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
