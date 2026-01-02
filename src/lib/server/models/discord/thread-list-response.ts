import { type InferOutput, array, object } from 'valibot';
import { ThreadChannel } from './thread-channel';
import { ThreadMember } from './thread-member';

export const ThreadListResponse = object({
  threads: array(ThreadChannel),
  members: array(ThreadMember),
});

export type ThreadListResponse = InferOutput<typeof ThreadListResponse>;
