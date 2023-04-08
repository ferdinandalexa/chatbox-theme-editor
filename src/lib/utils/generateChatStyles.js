/**
 * @param {Object} general
 * @param {string} general.background
 * @param {number} general.padding
 * @param {number} general.marginBottom
 * @param {boolean} general.breakline
 * @param {boolean} general.fullWidth
 * @param {boolean} general.avatarDisplay
 * @param {number} general.avatarSize
 * @param {number} general.headerFont
 * @param {number} general.bodyFont
 * 
 * @param {Object} regularMessage
 * @param {boolean} regularMessage.badgesDisplay
 * @param {string} regularMessage.background
 * @param {string} regularMessage.messageColor
 * @param {string} regularMessage.colorDefault
 * @param {string} regularMessage.colorOwner
 * @param {string} regularMessage.colorModerator
 * @param {string} regularMessage.colorMember
 * 
 * @param {Object} sponsor
 * @param {string} sponsor.background
 * @param {string} sponsor.eventColor
 * @param {string} sponsor.detailColor
*/
export function generateChatStyles(general, regularMessage, sponsor) {
  return `
    /* *** General adjusts *** */
    *, *::before, *::after {
      box-sizing: border-box !important;
    }

    :root {
      font-size: 10px !important;
      letter-spacing: .05ch !important;
      
      --g-ff-header: ${general.headerFont};
      --g-ff-content: ${general.bodyFont};
      --g-ff-username: var(--g-ff-header, sans-serif);
      --g-background: ${general.background};
      --g-padding: ${general.padding / 10}rem;
      --g-gap: ${general.marginBottom / 10}rem;
      --g-messagesWidth: ${general.fullWidth ? '100%' : 'max-content'};
      --g-messageBreakline: ${general.breakline ? 'inline' : 'block'};
      --g-avatarDisplay: ${general.avatarDisplay ? 'inline-block' : 'none'};
      --g-avatarSize: ${general.avatarSize / 10}rem;

      --rm-badgesDisplay: ${regularMessage.badgesDisplay ? "inline-block" : "none"};
      --rm-background: ${regularMessage.background};
      --rm-textColor: ${regularMessage.messageColor};
      --rm-authorDefault-color: ${regularMessage.colorDefault};
      --rm-authorOwner-color: ${regularMessage.colorOwner};
      --rm-authorModerator-color: ${regularMessage.colorModerator};
      --rm-authorMember-color: ${regularMessage.colorMember};

      --sp-background: ${sponsor.background};
      --sp-eventTextColor: ${sponsor.eventColor};
      --sp-detailTextColor: ${sponsor.detailColor};
    }

    body {
      background-color: var(--g-background, hsla(216, 100%, 88%, 0.4)) !important;
      overflow: hidden !important;
      margin: 0 !important;
    }
    
    yt-live-chat-renderer {
      background-color: transparent !important;
    }

    body, yt-live-chat-renderer {
      height: 100% !important;
    }
    
    #item-offset.yt-live-chat-item-list-renderer {
      height: 100% !important;
    }

    yt-live-chat-item-list-renderer #items {
      position: absolute !important;
      inset-block-end: calc(var(--g-padding, 2rem) - var(--g-gap, 2rem)) !important;
      inset-inline: var(--g-padding, 2rem) !important;
      overflow: hidden !important;
      padding: 0 !important;
    }

    /* *** General *** */
    yt-live-chat-text-message-renderer,
    yt-live-chat-text-message-renderer[is-highlighted], 
    yt-live-chat-legacy-paid-message-renderer,
    yt-live-chat-paid-message-renderer {
      margin-bottom: var(--g-gap, 2rem);
      width: var(--g-messagesWidth, max-content) !important;
      max-width: 100% !important;

      font-size: 1.6rem !important;
    }

    yt-live-chat-text-message-renderer,
    yt-live-chat-text-message-renderer[is-highlighted], 
    yt-live-chat-legacy-paid-message-renderer {
      display: flex !important;
      gap: 1rem;
      padding: 1.5rem !important;
      border-radius: 0.5rem !important;
    }

    yt-live-chat-text-message-renderer #content,
    yt-live-chat-text-message-renderer[is-highlighted] #content,
    yt-live-chat-legacy-paid-message-renderer #content,
    yt-live-chat-paid-message-renderer #header-content {
      display: inline-block;
      vertical-align: middle;
      margin-top: 0.125rem !important;
    }

    yt-live-chat-text-message-renderer #message,
    yt-live-chat-text-message-renderer[is-highlighted] #message,
    yt-live-chat-legacy-paid-message-renderer #content :is(#event-text, #detail-text),
    yt-live-chat-paid-message-renderer #header-content :is(#author-name, #purchase-amount) {
      /*Oneline -> inline |Breakline -> inline-block*/
      display: var(--g-messageBreakline, block) !important;
      line-height: 1.5 !important;
    }    

    yt-live-chat-text-message-renderer #author-photo,
    yt-live-chat-text-message-renderer[is-highlighted] #author-photo,
    yt-live-chat-legacy-paid-message-renderer #author-photo,
    yt-live-chat-paid-message-renderer #author-photo {
      --size: var(--g-avatarSize, 2rem);
      display: var(--g-avatarDisplay, inline-block) !important;
      width: var(--size) !important;
      height: var(--size) !important;
      margin: 0 !important;
      overflow: hidden !important;
      border-radius: var(--size) !important;
    }

    yt-icon.yt-live-chat-author-badge-renderer {
      display: inline-block !important;
      margin: 0 !important;
      vertical-align: initial !important;
      --size: 1.6rem;
      width: var(--size) !important;
      height: var(--size) !important;
    }

    /* *** Regular Messages *** */
    yt-live-chat-text-message-renderer,
    yt-live-chat-text-message-renderer[is-highlighted] {
      background-color: var(--rm-background, #212121) !important;
    }

    yt-live-chat-text-message-renderer:is([author-type],[is-highlighted]) {
      --t-color: var(--rm-authorDefault-color);
    }

    yt-live-chat-text-message-renderer:is([author-type="owner"],[is-highlighted]) {
      --t-color: var(--rm-authorOwner-color);
    }
    
    yt-live-chat-text-message-renderer:is([author-type="moderator"],[is-highlighted]) {
      --t-color: var(--rm-authorModerator-color);
    }


    yt-live-chat-text-message-renderer:is([author-type="member"],[is-highlighted]) {
      --t-color: var(--rm-authorMember-color);
    }
    
    yt-live-chat-text-message-renderer #timestamp,
    yt-live-chat-text-message-renderer[is-highlighted] #timestamp {
      display: none !important;
      vertical-align: middle !important;
    }

    yt-live-chat-author-chip {
      display: inline-flex !important;
      align-items: baseline !important;
      padding: 0 !important;
      margin-bottom: 0.25rem;
      font-family: var(--g-ff-header, sans-serif) !important;
      margin-right: 0.25rem !important
    }
    
    yt-live-chat-author-chip::after {
      content: ":" !important;
      color: var(--t-color);
      font-weight: bold !important;
      margin-inline: 0.25rem !important;
    }

    yt-live-chat-text-message-renderer #author-badges,
    yt-live-chat-text-message-renderer[is-highlighted] #author-badges {
      display: var(--rm-badgesDisplay, none) !important;
      color: var(--t-color) !important;
      margin-left: 0.5rem !important;
    }

    yt-live-chat-text-message-renderer #author-name,
    yt-live-chat-text-message-renderer:is([author-type],[is-highlighted]) #author-name {
      color: var(--t-color) !important;
      background-color: transparent !important;
      padding: 0 !important;
      /*font-family: ;*/
      font-weight: 700 !important;
      vertical-align: middle !important;
    }

    yt-live-chat-text-message-renderer #message,
    yt-live-chat-text-message-renderer[is-highlighted] #message {
      font-family: var(--g-ff-content, sans-serif) !important;
      color: var(--rm-textColor, #ffffff) !important;
      vertical-align: baseline !important;
    }    

    /* *** Sponsors *** */
    yt-live-chat-legacy-paid-message-renderer {
      background-color: var(--sp-background, #10a259) !important;
    }

    yt-live-chat-legacy-paid-message-renderer :is(#event-text, .mention) {
      font-weight: 700 !important;
    }
    
    yt-live-chat-legacy-paid-message-renderer #event-text {
      color: var(--sp-eventTextColor, #ffffff) !important;
      font-family: var(--g-ff-header, sans-serif) !important;
    }
    
    yt-live-chat-legacy-paid-message-renderer #detail-text {
      font-family: var(--g-ff-content, sans-serif) !important;
      color: var(--sp-detailTextColor, #ffffff) !important;
      margin-top: 0.4rem !important;
    }

    /* *** Superchat *** */
    yt-live-chat-paid-message-renderer {
      display: block !important;
      padding: 0 !important;
      overflow: hidden !important;
      border-radius: 0.5rem !important;
    }

    yt-live-chat-paid-message-renderer :is(#header, #content){
      padding: 1.25rem !important;
    }
    
    yt-live-chat-paid-message-renderer #header{
      display: flex;
      gap: 1rem;
      font-family: var(--g-ff-header, sans-serif) !important;
    }

    yt-live-chat-paid-message-renderer #author-name {
      font-weight: 700 !important;
    }
    
    yt-live-chat-paid-message-renderer #purchase-amount {
      margin-top: 0.4rem !important;
      font-size: 1.4rem !important;
    }
    
    yt-live-chat-paid-message-renderer #content{
      font-family: var(--g-ff-content, sans-serif) !important;
    }

    /* *** Hidde YT Chat interface *** */
    yt-live-chat-text-message-renderer[is-deleted],
    yt-live-chat-legacy-paid-message-renderer[is-deleted] {
      display: none !important;
    }

    yt-live-chat-header-renderer,
    yt-live-chat-message-input-renderer,
    yt-live-chat-mode-change-message-renderer,
    yt-live-chat-viewer-engagement-message-renderer,
    yt-live-chat-restricted-participation-renderer,
    yt-live-chat-banner-manager,
    yt-live-chat-action-panel-renderer,
    yt-live-chat-renderer #action-panel,
    yt-live-chat-ticker-renderer  {
      display: none !important;
    }

    /* *** Hide scrollbar *** */
    yt-live-chat-item-list-renderer #items,
    yt-live-chat-item-list-renderer #item-scroller {
      overflow: hidden !important;
    }
  `
}