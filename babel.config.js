module.exports = {
    presets: ["@babel/typescript", ["@babel/preset-env", {modules: false}],
        ["@babel/preset-react", {runtime: "automatic"}],
        ],
}