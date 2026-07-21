import os
import re

# Target directory is the workspace root
target_dir = r"e:\E-LEARNING\portofolio_website"

# Replacements mapping (case-sensitive and specific patterns first)
replacements = [
    # Full names and usernames
    ("Abdelrahman Saed", "Ibrahim Kayyis"),
    ("Abdelrahman Saeed", "Ibrahim Kayyis"),
    ("Abdelrahman", "Ibrahim"),
    ("binSaed", "Ibrahimkayyis"),
    ("binsaed", "ibrahimkayyis"),
    
    # Emails
    ("me@bnsaed.com", "your.email@example.com"),
    ("contact@bnsaed.com", "your.email@example.com"),
    ("[email protected]", "your.email@example.com"),
    
    # Domain / links
    ("bnsaed.com", "ibrahimkayyis.github.io"),
    ("https://bnsaed.com", "https://ibrahimkayyis.github.io"),
    
    # Location
    ("Cairo, Egypt", "Indonesia"),
    ("Cairo", "Indonesia"),
    ("Egypt", "Indonesia"),
    ("EG", "ID"),
    
    # Languages
    ("Arabic", "Indonesian"),
    ("english, arabic", "english, indonesian"),
    ("English, Arabic", "English, Indonesian"),
    
    # Company placeholders
    ("iStoria", "[Perusahaan Anda]"),
    ("istoria.app", "example.com"),
]

valid_extensions = ('.js', '.html', '.webmanifest', '.json', '.css')

print("Starting combined patching and operator fixing process at root...")

patch_count = 0
operator_count = 0

for root, dirs, files in os.walk(target_dir):
    # Skip git and node_modules folders
    if '.git' in root or 'node_modules' in root:
        continue
    for file in files:
        if file.endswith(valid_extensions):
            # Skip python scripts themselves
            if file in ["patch_and_fix.py", "move_to_root.py", "patch_portfolio.py", "fix_operators.py", "restore_original.py"]:
                continue
                
            file_path = os.path.join(root, file)
            try:
                with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                
                original_content = content
                
                # 1. Apply name/info replacements
                for old, new in replacements:
                    content = content.replace(old, new)
                
                # 2. Fix broken "? ?" operators to "??" in JS files
                if file.endswith('.js'):
                    pattern = r'\?\s+\?'
                    matches = re.findall(pattern, content)
                    if matches:
                        content = re.sub(pattern, '??', content)
                        operator_count += len(matches)
                
                if content != original_content:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(content)
                    print(f"Patched: {file_path}")
                    patch_count += 1
            except Exception as e:
                print(f"Error processing {file_path}: {e}")

print(f"Finished! Patched {patch_count} files and fixed {operator_count} occurrences of '? ?'.")
