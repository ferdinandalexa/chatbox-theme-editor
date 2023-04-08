import { get } from 'svelte/store';

import { generalStyles, regularMessageStyles, sponsorStyles } from "$lib/stores/chat-styles";

const general = get(generalStyles)
const regularMessage = get(regularMessageStyles)
const sponsor = get(sponsorStyles)

/** @typedef {import('$lib/types/fields').Fields} Fields */

/**@type {Array<Fields>} */
const generalFields = [
  {
    field: "Layout",
    inputs: [
      {
        type: "number",
        label: `Box padding`,
        cssProp: "padding",
        props: {
          min: "0",
          max: "20",
        },
        value: general.padding,
        hasDeps: false,
      },
      {
        type: "number",
        label: `Spacing between messages`,
        cssProp: "marginBottom",
        props: {
          min: "0",
          max: "20",
        },
        hasDeps: false,
        value: general.marginBottom,
      },
      {
        type: "color",
        label: `Box background:`,
        cssProp: "background",
        hasDeps: false,
        value: general.background,
      }
    ]
  },
  {
    field: "Fonts",
    inputs: [
      {
        type: "listbox",
        label: "Header font",
        cssProp: "headerFont",
        props: {
          options: [
            'sans-serif',
            'monospace',
          ]
        },
        hasDeps: false,
        value: general.headerFont,
      },
      {
        type: "listbox",
        label: "Body font",
        cssProp: "bodyFont",
        props: {
          options: [
            'sans-serif',
            'monospace',
          ]
        },
        hasDeps: false,
        value: general.bodyFont,
      }
    ]
  },
  {
    field: "Messages Appearence",
    inputs: [
      {
        type: "checkbox",
        label: `Full Width`,
        cssProp: "fullWidth",
        hasDeps: false,
        value: general.fullWidth,
      },
      {
        type: "checkbox",
        label: `One line`,
        cssProp: "breakline",
        hasDeps: false,
        value: general.breakline,
      },
      {
        type: "checkbox",
        label: `Show/hide avatar`,
        cssProp: "avatarDisplay",
        hasDeps: false,
        value: general.avatarDisplay,
      },
      {
        type: "number",
        label: `Avatar size`,
        cssProp: "avatarSize",
        props: {
          min: "18",
          max: "32",
        },
        hasDeps: true,
        deps: 'avatarDisplay',
        value: general.avatarSize,
      },
    ]
  }
]

/**@type {Array<Fields>} */
const regularMessageFields = [
  {
    field: "Layout",
    inputs: [
      {
        type: "checkbox",
        label: `Display badges`,
        cssProp: "badgesDisplay",
        hasDeps: false,
        value: regularMessage.badgesDisplay,
      },
    ]
  },
  {
    field: "General Appearence",
    inputs: [
      {
        type: "color",
        label: `Background color`,
        cssProp: "background",
        hasDeps: false,
        value: regularMessage.background,
      },
      {
        type: "color",
        label: `Message color`,
        cssProp: "messageColor",
        hasDeps: false,
        value: regularMessage.messageColor,
      },
    ]
  },
  {
    field: "Channel Name",
    inputs: [
      {
        type: "color",
        label: `Default`,
        cssProp: "colorDefault",
        hasDeps: false,
        value: regularMessage.colorDefault,
      },
      {
        type: "color",
        label: `Owner`,
        cssProp: "colorOwner",
        hasDeps: false,
        value: regularMessage.colorOwner,
      },
      {
        type: "color",
        label: `Moderator`,
        cssProp: "colorModerator",
        hasDeps: false,
        value: regularMessage.colorModerator,
      },
      {
        type: "color",
        label: `Member`,
        cssProp: "colorMember",
        hasDeps: false,
        value: regularMessage.colorMember,
      },
    ]
  },
]

/**@type {Array<Fields>} */
const sponsorFields = [
  {
    field: "Appearence",
    inputs: [
      {
        type: "color",
        label: `Background`,
        cssProp: "background",
        hasDeps: false,
        value: sponsor.background,
      },
      {
        type: "color",
        label: `Event text color`,
        cssProp: "eventColor",
        hasDeps: false,
        value: sponsor.eventColor,
      },
      {
        type: "color",
        label: `Detail text color`,
        cssProp: "detailColor",
        hasDeps: false,
        value: sponsor.detailColor,
      },
    ]
  }
]

/**@type {Array<Fields>} */
const superchatFields = [
]

/**@type {Array<Fields>} */
const membershipFields = [
]

export { generalFields, regularMessageFields, sponsorFields, superchatFields, membershipFields }