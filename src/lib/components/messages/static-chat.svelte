<script>
  import RegularMessage from "$lib/components/messages/regular-message.svelte";
  import Sponsor from "$lib/components/messages/sponsor.svelte";
  import Superchat from "$lib/components/messages/superchat.svelte";
</script>

<RegularMessage />
<RegularMessage authorType="owner" />
<RegularMessage authorType="moderator" />
<RegularMessage authorType="member" />
<Sponsor />
<Superchat />
