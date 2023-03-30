import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: './lib',
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [typescript()],
}
