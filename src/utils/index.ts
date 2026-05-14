import { ConversationTypeEnum } from '@/api/assistant';
import { supportPlatforms } from '@/config.options';

export function getUserId(tab: chrome.tabs.Tab) {
  if (!tab.url) return;
  const url = new URL(tab.url);
  let user_id = url.pathname.split('/chat/')[1];
  if (!user_id) return;
  if (user_id.includes('?')) user_id = user_id.split('?')[0];
  if (user_id.includes('/')) user_id = user_id.split('/')[0];
  return user_id;
}

export function isLine(tab: chrome.tabs.Tab) {
  const url = new URL(tab.url!);
  const lineItem = supportPlatforms.find((i) => i.type === ConversationTypeEnum.LINE);
  return url.hostname.includes(lineItem!.host);
}

export function getPlatformIcon(conversation_type: string) {
  const platform = supportPlatforms.find((i) => i.type === conversation_type);
  return platform?.integration_icon;
}
