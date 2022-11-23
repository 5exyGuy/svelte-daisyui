const { PreprocessorGroup } = require("./binding");

module.exports.preprocessor = function (options) {
    const group = new PreprocessorGroup(options);
    return {
        markup: group.markup.bind(group),
        script: group.script.bind(group),
        style: group.style.bind(group),
    };
};
