import { RegularMessage } from '$lib/utils/messages/regular-message';
import { Sponsor } from '$lib/utils/messages/sponsor';
import { Superchat } from '$lib/utils/messages/superchat';

/**
 * @param {string} css
 * @return {string}
*/
export function generateChatHTML (css) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Youtube Streaming Chat Preview </title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
        ${css}
      </style>
    </head>
    <body>
      <yt-live-chat-renderer>
        <yt-live-chat-item-list-renderer>
        
        <div id="item-offset">
          <div id="items">

            ${RegularMessage()}
            ${RegularMessage('owner')}
            ${RegularMessage('moderator')}
            ${RegularMessage('member')}
            ${Sponsor()}
            ${Superchat()}

            <yt-live-chat-viewer-engagement-message-renderer>
            </yt-live-chat-viewer-engagement-message-renderer>

          </div>
        </div>
        
        </yt-live-chat-item-list-renderer>
      </yt-live-chat-renderer>
    </body>
  </html>
  `;
}
