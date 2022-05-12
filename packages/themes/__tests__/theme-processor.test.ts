import { ThemeProcessor } from '../src/utils/theme-processor';

test('Included and excluded themes #1', () => {
    const themeProcessor = new ThemeProcessor();
    themeProcessor.setIncludedThemes(['light', 'dark', 'acid']);
    themeProcessor.setExcludedThemes(['acid']);
    const generatedThemes = themeProcessor.generate();

    expect(generatedThemes).not.toHaveProperty('[data-theme="acid"]');
});

test('Included and excluded themes #2', () => {
    const themeProcessor = new ThemeProcessor();
    themeProcessor.setExcludedThemes(['acid', 'autumn', 'cmyk']);
    const generatedThemes = themeProcessor.generate();

    expect(generatedThemes).not.toHaveProperty('autumn');
});

test('Main/Dark theme #1', () => {
    const themeProcessor = new ThemeProcessor();
    themeProcessor.setExcludedThemes(['dark']);
    themeProcessor.generate();

    expect(themeProcessor.darkTheme).toBeUndefined();
});

test('Main/Dark theme #2', () => {
    const themeProcessor = new ThemeProcessor();
    themeProcessor.setDarkTheme('acid');
    themeProcessor.setExcludedThemes(['dark']);
    themeProcessor.generate();

    expect(themeProcessor.darkTheme).toBeDefined();
});

test('Theme colors #1', () => {
    const themeProcessor = new ThemeProcessor();
    const generatedThemes = themeProcessor.generate();

    expect(generatedThemes).toHaveProperty(
        ['[data-theme="light"]', '--primary'],
        '259 94% 51%',
    );
    expect(generatedThemes).toHaveProperty(
        ['[data-theme="light"]', '--primary-focus'],
        '259 94% 41%',
    );
    expect(generatedThemes).toHaveProperty(
        ['[data-theme="light"]', '--primary-content'],
        '0 0% 100%',
    );
});

test('Theme colors #2', () => {
    const themeProcessor = new ThemeProcessor();
    const generatedThemes = themeProcessor.generate();

    expect(generatedThemes).toHaveProperty(
        [':root', '--primary'],
        '259 94% 51%',
    );
});
