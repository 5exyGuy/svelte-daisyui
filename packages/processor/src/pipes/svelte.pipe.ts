import { Pipe, type PipeData } from './pipe';

export class SveltePipe extends Pipe {
    public async process({ source }: PipeData): Promise<string> {
        const sassImportsRegex =
            /\@import([\s]+)['"]([^'"]*).(scss|scss)['"];/gi;
        const sassImports = [...source.matchAll(sassImportsRegex)];

        for (const sassImport of sassImports) {
            const value = sassImport[0];
            const cssImport = value.replace(/.s(c|a)ss/gi, '.css');
            source = source.replace(/(\s+)lang=['"]([^\s]+)['"](\s*)/gi, '');
            source = source.replace(value, cssImport);
        }

        return source;
    }
}
