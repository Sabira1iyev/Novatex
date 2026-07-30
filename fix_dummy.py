import codecs
import re

with codecs.open('mobile/src/contants/dummyCode.ts', 'r', 'utf-8') as f:
    content = f.read()

# 1. Clean the beginning and end
content = re.sub(r'^export const dummyCode = [\"\`]*', '', content)
content = re.sub(r'[\"\`]*;?$', '', content.strip())

# 2. Escape for template literal
content = content.replace('\\', '\\\\')  # Escape backslashes
content = content.replace('`', '\\`')      # Escape backticks
content = content.replace('${', '\\${')    # Escape interpolation

final_code = 'export const dummyCode = `\n' + content + '\n`;\n'

with codecs.open('mobile/src/contants/dummyCode.ts', 'w', 'utf-8') as f:
    f.write(final_code)
print('Fixed dummyCode.ts successfully!')
