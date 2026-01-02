import { type InferOutput, boolean, number, object } from 'valibot';
import { Timestamp } from '$lib/server/models/timestamp';

export const ThreadMetadata = object({
  archived: boolean(),
  auto_archive_duration: number(),
  archive_timestamp: Timestamp,
  locked: boolean(),
});

export type ThreadMetadata = InferOutput<typeof ThreadMetadata>;
