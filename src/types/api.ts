/**
 * 消息类型
 */
export enum MessageType {
  QUESTION = 'QUESTION', // 问题
  ANSWER = 'ANSWER', // 答案
  HUMAN = 'HUMAN', // 人工客服
}

/**
 * 消息内容类型
 */
export enum BotMessageContentType {
  Text = 'Text',
  FlowFormText = 'FlowFormText',
  FlowTextText = 'FlowTextText',
  FlowJsonText = 'FlowJsonText',
  FlowCardText = 'FlowCardText',
  ReasoningProcess = 'ReasoningProcess',
  Image = 'Image',
  File = 'File',
  Audio = 'Audio',
  Video = 'Video',
  Document = 'Document',
}

export interface WebhookInitUserInfo {
  phone?: string;
  email?: string;
  user_id?: string;
  user_name?: string;
  anonymous_id?: string;
}

export interface ConversationInitMessageFile {
  content_type: BotMessageContentType;
  url: string;
}

export interface ConversationInitMessage {
  message_type: MessageType;
  text?: string;
  files?: ConversationInitMessageFile[];
}

export interface WebhookConversationInitReq {
  conversation_id?: string;
  body?: ConversationInitMessage[];
  timestamp?: number;
  email?: string;
  bot_id?: string;
  user_info?: WebhookInitUserInfo;
}
