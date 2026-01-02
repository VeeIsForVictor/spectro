import { ChannelType } from './channel';

export interface CreateThreadData {
  name: string;
  auto_archive_duration: 60 | 1440 | 4320 | 10080;
  type?: ChannelType.PublicThread;
  invitable?: boolean;
  rate_limit_per_user?: number;
}
