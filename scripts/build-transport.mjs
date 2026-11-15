import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { format as formatWithPrettier, resolveConfig } from 'prettier';
import ts from 'typescript';

// This small source-owned override is built after Fern, not hand-edited into
// generated output. Check mode detects a plain Fern regeneration that omits it.
const sourcePath = new URL('../src/transport/make-request.ts', import.meta.url);
const source = await readFile(sourcePath, 'utf8');
const banner = '// Generated from apps/navigator/api/sdk/src/transport/make-request.ts. Do not edit.\n';
const options = { target: ts.ScriptTarget.ES2022, strict: true, removeComments: false };
for (const [directory, module, jsExt, dtsExt] of [
  ['esm', ts.ModuleKind.ESNext, 'mjs', 'd.mts'],
  ['cjs', ts.ModuleKind.CommonJS, 'js', 'd.ts'],
]) {
  const compilerOptions = { ...options, module };
  const outputs = [
    [jsExt, ts.transpileModule(source, { compilerOptions, fileName: sourcePath.pathname, reportDiagnostics: true })],
    [
      dtsExt,
      ts.transpileDeclaration(source, { compilerOptions, fileName: sourcePath.pathname, reportDiagnostics: true }),
    ],
  ];
  for (const [extension, result] of outputs) {
    if (result.diagnostics?.length) {
      throw new Error(
        ts.formatDiagnosticsWithColorAndContext(result.diagnostics, {
          getCurrentDirectory: () => process.cwd(),
          getCanonicalFileName: (name) => name,
          getNewLine: () => '\n',
        }),
      );
    }
    const path = new URL(`../generated/${directory}/core/fetcher/makeRequest.${extension}`, import.meta.url);
    const filePath = fileURLToPath(path);
    const generated = banner + result.outputText;
    const contents =
      directory === 'cjs'
        ? await formatWithPrettier(generated, { ...((await resolveConfig(filePath)) ?? {}), filepath: filePath })
        : generated;
    if (process.argv.includes('--check')) {
      if ((await readFile(path, 'utf8')) !== contents)
        throw new Error(`Stale transport customization: ${path.pathname}`);
    } else {
      await writeFile(path, contents);
    }
  }
}
