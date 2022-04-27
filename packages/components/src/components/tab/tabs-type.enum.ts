import type { StringKeyOf } from '@eztrip/types';

export enum TabsType {
    Bordered = 'bordered',
    Lifted = 'lifted',
    Boxed = 'boxed',
}

export type TabsTypeKey = StringKeyOf<typeof TabsType>;
