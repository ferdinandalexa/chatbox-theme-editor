import { writable, derived } from 'svelte/store';

function createStyleStore () {
  const { subscribe, set, update } = writable();

  return {
    subscribe,
    set,
    /**
     * @param {Object} newStyles
     */
    update: (newStyles) => update((prevStyles) => {
      return {
        ...prevStyles,
        ...newStyles
      };
    })
  };
}

const generalStyles = createStyleStore();
generalStyles.set({
  background: '#c2daff77',
  padding: 20,
  marginBottom: 20,
  breakline: false,
  fullWidth: false,
  avatarDisplay: true,
  avatarSize: 25,
  headerFont: 'sans-serif',
  bodyFont: 'sans-serif'
});

const regularMessageStyles = createStyleStore();
regularMessageStyles.set({
  badgesDisplay: true,
  background: '#212121',
  messageColor: '#ffffff',
  colorDefault: '#cacaca',
  colorOwner: '#ffd600',
  colorModerator: '#5e84f1',
  colorMember: '#10a259'
});

const sponsorStyles = createStyleStore();
sponsorStyles.set({
  background: '#10a259',
  eventColor: '#ffffff',
  detailColor: '#ffffff'
});

const animationStyles = createStyleStore();
animationStyles.set({
  type: 'slide',
  animationTime: 300,
  hideOldMessages: true,
  timeOnChat: 20_000,
  outEnabled: false
});

const timing = derived(animationStyles, $animation => {
  const totalTime = $animation.hideOldMessages
    ? parseInt($animation.timeOnChat) + parseInt($animation.animationTime) * 2
    : parseInt($animation.animationTime);

  const animationTimeRatio = $animation.animationTime / totalTime;

  return {
    totalTime,
    animationTimeRatio
  };
});

const storeKeys = {
  general: Symbol('general'),
  regularMessage: Symbol('regularMessage'),
  sponsor: Symbol('sponsor'),
  superchat: Symbol('superchat'),
  membership: Symbol('membership'),
  animation: Symbol('animation'),
  time: Symbol('animation time')
};

export { generalStyles, regularMessageStyles, sponsorStyles, animationStyles, timing, storeKeys };
