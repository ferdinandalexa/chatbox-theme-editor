export function Superchat () {
  return `
    <yt-live-chat-paid-message-renderer style="color: #fff">

      <div id="header" style="background-color: rgba(208,0,0,1);">
        <yt-img-shadow id="author-photo">
          <div style="display: block; background-color: white; width: 100%; height: 100%;"></div>
        </yt-img-shadow>
        <div id="header-content">
          <div id="author-name">ferdinandalexa</div>
          <div id="purchase-amount">$5.00</div>
        </div>
      </div>

      <div id="content" style="background-color: rgba(230,33,23,1);">
        <div id="message" dir="auto">
          Thanks for all your work, keep it up!
        </div>
      </div>
      
    </yt-live-chat-paid-message-renderer>
  `;
}
