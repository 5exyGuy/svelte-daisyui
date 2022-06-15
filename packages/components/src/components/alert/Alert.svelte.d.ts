/// <reference types="svelte" />
import type { SvelteComponentTyped } from 'svelte';
import type { AlertProps } from './alert-props.interface';

export default class Alert extends SvelteComponentTyped<AlertProps, {}, { default: {} }> {}
