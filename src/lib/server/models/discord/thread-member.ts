import { type InferOutput, number, object } from 'valibot';
import { Snowflake } from './snowflake';
import { Timestamp } from '$lib/server/models/timestamp';

export const ThreadMember = object({
  id: Snowflake,
  user_id: Snowflake,
  join_timestamp: Timestamp,
  flags: number(),
});

export type ThreadMember = InferOutput<typeof ThreadMember>;
