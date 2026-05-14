import { globalState } from '@/hooks/use-global-data';

export enum MessageQualityTypeEnum {
  NONE = 'NONE',
  UNRESOLVED = 'UNRESOLVED',
  PARTIALLY_RESOLVED = 'PARTIALLY_RESOLVED',
  FULLY_RESOLVED = 'FULLY_RESOLVED',
}

export interface DevMessageQualityParam {
  answer_id: string;
  quality: MessageQualityTypeEnum;
}

export interface AffectCountVO {
  affectCount?: number;
}

export interface RespObject<T> {
  data: T;
  code: number;
  message: string;
}

export async function messageQuality(body: DevMessageQualityParam) {
  const res = await fetch(`${process.env.PUBLIC_API_URL}/v1/message/quality`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${globalState.config.api_key}`,
    },
    body: JSON.stringify(body),
  });
  return res.json();
}

export async function generateConversationId(user_id: string) {
  const res = await fetch(`${process.env.PUBLIC_API_URL}/v1/conversation`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${globalState.config.api_key}`,
    },
    body: JSON.stringify({ user_id }),
  });
  return res.json();
}
