import { buildAlertStyles } from './components/alert-style.builder';

export const SCRIPT_REGEX = /<script(\s[^]*?)?>([^]*?)<\/script>/g;
export const STYLE_REGEX = /<style(\s[^]*?)?>([^]*?)<\/style>/g;
export const SVELTE_COMMENT_REGEX = /<!--[^]*?-->/g;

export const MAIN_MODULE_NAME = '@svelte-daisyui/core';

export const COMPONENT_STYLE_BUILDERS = [buildAlertStyles];
