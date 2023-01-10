import sass from 'sass';
import postcss from 'postcss';
import { globalifyPlugin } from '.';

export function compileGeneratedStyles(content: string, stylesPath?: string) {
    const sassResult = sass.compileString(content, {
        style: 'compressed',
        loadPaths: stylesPath ? [stylesPath] : [],
    });
    const postcssResult = postcss([globalifyPlugin]).process(sassResult.css);
    return postcssResult.css;
}
