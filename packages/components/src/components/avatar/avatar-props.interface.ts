import type { StringKeyOf } from 'type-fest';
import type { Screen } from '../../types';
import type { AvatarStatus } from './avatar-status.enum';

export interface AvatarProps extends svelte.JSX.HTMLAttributes<HTMLDivElement> {
    /**
     * @default undefined
     */
    status?: StringKeyOf<typeof AvatarStatus>;
}

export interface AvatarClassProps extends Pick<AvatarProps, 'status'> {}
