import fs from 'fs';
import path from 'path';

export class File {
    public readDirRecursively(dir: string): string[] {
        const files = fs.readdirSync(dir);
        const result = [] as string[];
        for (const file of files) {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);
            if (stat.isDirectory())
                result.push(...this.readDirRecursively(filePath));
            else result.push(filePath);
        }
        return result;
    }

    public write(filePath: string, content: string): void {
        const dirName = path.dirname(filePath);

        if (!fs.existsSync(dirName)) fs.mkdirSync(dirName, { recursive: true });

        fs.writeFileSync(filePath, content);
    }

    public read(filePath: string): string {
        const content = fs.readFileSync(filePath, 'utf8');
        return content;
    }

    public remove(filePath: string): void {
        if (!fs.existsSync(filePath)) return;
        fs.unlinkSync(filePath);
    }

    public getExtension(filePath: string): string {
        return path.extname(filePath);
    }

    public getName(filePath: string): string {
        return path.basename(filePath);
    }

    public join(...paths: Array<string>) {
        return path.join(...paths);
    }

    public resolve(...pathSegments: Array<string>) {
        return path.resolve(...pathSegments);
    }

    public getRelative(from: string, to: string) {
        return path.relative(from, to);
    }

    public normalize(p: string) {
        return path.normalize(p);
    }

    public changeExtension(filePath: string, extension: string) {
        return this.join(
            path.dirname(filePath),
            this.getName(filePath).replace(
                this.getExtension(filePath),
                extension,
            ),
        );
    }
}
