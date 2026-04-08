import sys
sys.stdout.reconfigure(encoding='utf-8')

path = r'C:\GitHub\grove-launch-site\observations\index.html'
with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Keep everything before Section 5 (line 724 is comment start, 0-indexed 723)
keep_before = lines[:723]

# Footer section
footer = [
    '<section class="section" style="background:var(--bg2); border-top:1px solid var(--border);">\n',
    '  <div class="section-inner" style="text-align:center;">\n',
    '    <div style="font-family:var(--serif); font-style:italic; font-size:15px; color:var(--text-dim); margin-bottom:8px;">&ldquo;Design is philosophy expressed through constraint.&rdquo;</div>\n',
    '    <div style="font-family:var(--mono); font-size:10px; color:var(--amber-dim); letter-spacing:0.15em;"><a href="/" style="color:var(--amber-dim); text-decoration:none;">THE GROVE FOUNDATION</a> &middot; INDIANAPOLIS &middot; CC BY 4.0</div>\n',
    '  </div>\n',
    '</section>\n',
]

# Keep script tag onwards (line 853 is <script>, 0-indexed 852)
keep_after = lines[852:]

out = keep_before + footer + keep_after

with open(path, 'w', encoding='utf-8') as f:
    f.writelines(out)

print(f'Done: {len(lines)} -> {len(out)} lines')
