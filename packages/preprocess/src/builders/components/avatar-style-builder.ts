import { AvatarSchema, AvatarStatus, type AvatarProps, type AvatarResponsivePropNames } from '@svelte-daisyui/shared';
import { createStyleBuilder } from '../create-style-builder';

export const AvatarStyleBuilder = createStyleBuilder<AvatarProps, AvatarResponsivePropNames>(
    AvatarSchema,
    (context) => {
        context.useLib('avatar');

        context.uniqueProps.placeholder?.forEach(
            (placeholder) => placeholder && context.includeMixin('avatar', 'placeholder'),
        );
        context.uniqueProps.status?.forEach((status) => context.includeMixin('avatar', 'status', AvatarStatus[status]));
    },
);
