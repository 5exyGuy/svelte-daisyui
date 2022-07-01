/// <reference types="svelte" />
import type { SvelteComponentTyped } from 'svelte';
import type { BadgeProps } from './badge-props.interface';

export default class Badge extends SvelteComponentTyped<BadgeProps, {}, { default: {} }> {}
