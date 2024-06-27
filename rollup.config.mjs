import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/index.ts', // 项目的入口点
    output: {
        file: 'dist/index.js', // 打包后的文件路径
        format: 'cjs' // 输出格式 CommonJS, 适用于Node环境
    },
    plugins: [typescript()] // 使用TypeScript插件
};