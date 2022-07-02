/// <reference types="svelte" />
import type { SvelteComponentTyped } from 'svelte';
import type { ButtonProps } from './button-props.interface';

export default class Button extends SvelteComponentTyped<ButtonProps, {}, { default: {} }> {}
