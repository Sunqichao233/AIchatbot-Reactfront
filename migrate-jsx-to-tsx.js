import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const targetDir = path.resolve(__dirname, 'src'); // 改成你的 src 目录路径

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (let entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.jsx')) {
      const newFileName = entry.name.replace('.jsx', '.tsx');
      const newPath = path.join(dir, newFileName);

      let content = fs.readFileSync(fullPath, 'utf-8');

      // 自动加个类型模板：React.FC
      if (content.includes('function ') || content.includes('export default')) {
        content = `import React from 'react';\n\n` + content;

        content = content.replace(
          /function (\w+)\s*\((.*?)\)\s*{/,
          'const $1: React.FC<any> = ($2) => {'
        );
      }

      fs.writeFileSync(newPath, content);
      fs.unlinkSync(fullPath);
      console.log(`✅ ${entry.name} → ${newFileName}`);
    }
  }
}

walk(targetDir);
console.log('🎉 所有 .jsx 文件已转换为 .tsx，并初步添加类型');
