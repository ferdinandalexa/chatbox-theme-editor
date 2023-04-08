/** @typedef {("owner" | "moderator" | "member") | null } AuthorType */

/**
 * @param {AuthorType} [authorType]
 * @return {string}
*/
export function RegularMessage(authorType) {
  return `
  <yt-live-chat-text-message-renderer author-type=${authorType ?? ''}>
    
    <yt-img-shadow id="author-photo">
      <div style="display: block; background-color: white; width: 100%; height: 100%;"></div>
    </yt-img-shadow>

    <div id="content">
      <span id="timestamp">12:00</span>
      
      <yt-live-chat-author-chip>
        <span id="author-name" type=${authorType ?? ''}>ferdinandalexa</span>
        <span id="author-badges">
          <yt-live-chat-author-badge-renderer type=${authorType ?? ''}>
            <yt-icon class="style-scope yt-live-chat-author-badge-renderer">
              <svg viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%; fill: currentColor">
                <g class="style-scope yt-icon">
                  <path d="M9.64589146,7.05569719 C9.83346524,6.562372 9.93617022,6.02722257 9.93617022,5.46808511 C9.93617022,3.00042984 7.93574038,1 5.46808511,1 C4.90894765,1 4.37379823,1.10270499 3.88047304,1.29027875 L6.95744681,4.36725249 L4.36725255,6.95744681 L1.29027875,3.88047305 C1.10270498,4.37379824 1,4.90894766 1,5.46808511 C1,7.93574038 3.00042984,9.93617022 5.46808511,9.93617022 C6.02722256,9.93617022 6.56237198,9.83346524 7.05569716,9.64589147 L12.4098057,15 L15,12.4098057 L9.64589146,7.05569719 Z" class="style-scope yt-icon">
                  </path>
                </g>
              </svg>
            </yt-icon>
          </yt-live-chat-author-badge-renderer>
        </span>
      </yt-live-chat-author-chip>
      
      <span id="message">
        This is how it looks like a ${authorType ?? ''} user message.
      </span>
    </div>
    
  </yt-live-chat-text-message-renderer>
  `
}