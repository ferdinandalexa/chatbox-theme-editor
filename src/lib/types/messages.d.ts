import type { SvelteComponent } from "svelte";

type AUTHOR_TYPES = 'owner' | 'moderator' | 'member'

interface RegularMessageProps {
  authorType?: AUTHOR_TYPES;
}


interface ListTypeMessages {
  component: SvelteComponent<T>
  props?: RegularMessageProps
}

export type { RegularMessageProps, AUTHOR_TYPES, ListTypeMessages }