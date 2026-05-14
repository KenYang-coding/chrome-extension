import { globalState } from '@/hooks/use-global-data';

export enum ConversationTypeEnum {
  WEB = 'WEB',
  SHARE = 'SHARE',
  API = 'API',
  EMBED = 'EMBED',
  WIDGET = 'WIDGET',
  APP = 'APP',
  TRAIN = 'TRAIN',
  C = 'C',
  CHAT = 'CHAT',
  DINGTALK = 'DINGTALK',
  WHATSAPP_META = 'WHATSAPP_META',
  WHATSAPP_ENGAGELAB = 'WHATSAPP_ENGAGELAB',
  DISCORD = 'DISCORD',
  SLACK = 'SLACK',
  ZAPIER = 'ZAPIER',
  DATA_PARSE = 'DATA_PARSE',
  FLOW_COMPONENT = 'FLOW_COMPONENT',
  AI_SEARCH = 'AI_SEARCH',
  TELEGRAM = 'TELEGRAM',
  DATABASE_EXTRACT = 'DATABASE_EXTRACT',
  DATABASE_AI_CREATE_FIELDS = 'DATABASE_AI_CREATE_FIELDS',
  DATABASE_AI_GENERATE_RECORDS = 'DATABASE_AI_GENERATE_RECORDS',
  WXKF = 'WXKF',
  LIVECHAT = 'LIVECHAT',
  CHAT_QUESTION_TAG = 'CHAT_QUESTION_TAG',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM',
  SO_BOT = 'SO_BOT',
  WORKFLOW_CHAT = 'WORKFLOW_CHAT',
  LINE = 'LINE',
  ZOHO_SALES_IQ = 'ZOHO_SALES_IQ',
}

export interface ConversionTypeForm {
  conversationType: ConversationTypeEnum;
}

export interface RespObject<T> {
  data: T;
  code: number;
  message: string;
}

export function subscribeBrowserExtension(params: ConversionTypeForm): EventSource {
  const query = `conversationType=${params.conversationType}`;
  const url = `${process.env.PUBLIC_API_URL}/v1/browser/extension/subscribe?${query}`;
  const eventSource = new EventSource(url, { withCredentials: true });
  return eventSource;
}

export function closeConversation(conversation_id: string): Promise<RespObject<void>> {
  const url = `${process.env.PUBLIC_API_URL}/v1/human/close`;
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${globalState.config.api_key}`,
    },
    body: JSON.stringify({ conversation_id, timestamp: Date.now() }),
  }).then((res) => res.json());
}

export interface ConversationOption {
  conversationType: ConversationTypeEnum;
  childrenList: Array<{
    channelName: string;
    channelId: string;
  }>;
}

export function getConversationList(params: { conversationTypeList: ConversationTypeEnum[] }): Promise<RespObject<ConversationOption[]>> {
  const url = `${process.env.PUBLIC_API_URL}/v1/conversation/option`;
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${globalState.config.api_key}`,
    },
    body: JSON.stringify(params),
  }).then((res) => res.json());
}
