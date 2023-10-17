export default {
    input: "src/index.js",
    output: {
        file: "dist/bundle.js",
        format: "cjs",
        globals: { "styled-components": "styled" }
    },
    plugins: [
        peerDepsExternal(),
        autoExternal(),
        resolve({
            extensions: [
                ".ts",
                ".tsx"
            ]
        }),
        images(),
        babel({
            exclude: "node_modules/**"
        }),
    ],
}