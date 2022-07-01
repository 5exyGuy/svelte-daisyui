/// <reference types="svelte" />
import type { SvelteComponentTyped } from 'svelte';
import type { TooltipProps } from './tooltip-props.interface';

export default class Tooltip extends SvelteComponentTyped<TooltipProps, {}, { default: {} }> {}
