import { type InferOutput, number, object, optional, string } from 'valibot';
import { Channel } from '$lib/server/models/discord/channel';
import { Snowflake } from '$lib/server/models/discord/snowflake';
import { ThreadMetadata } from '$lib/server/models/discord/thread-metadata';

export const ThreadChannel = object({
  ...Channel.entries,
  parent_id: Snowflake,
  owner_id: Snowflake,
  name: optional(string()),
  message_count: optional(number()),
  member_count: optional(number()),
  rate_limit_per_user: optional(number()),
  thread_metadata: ThreadMetadata,
  total_message_sent: optional(number()),
});

export type ThreadChannel = InferOutput<typeof ThreadChannel>;
