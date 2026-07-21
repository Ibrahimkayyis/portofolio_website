import os

assets_dir = r"e:\E-LEARNING\portofolio_website\assets"

missing_files = [
    "CVPage-2yl5QBSC.js",
    "RecommendationsPage-kKQwTA-k.js",
    "SpeakingPage-Dmwo5Uqr.js",
    "ProjectsPage-DbJPDB1s.js",
    "CaseStudiesPage-MifwwhJt.js",
    "CaseStudyPage-Dd0lUl_g.js",
    "HirePage-DMabncX2.js",
    "NotFound-BaK05_xZ.js",
    "ArticlePage-CClwPZh1.js",
    "ArticlesPage-BwxR91me.js",
    "MarkdownContent-BYFusbC5.js",
    "RouteSuggestion-CLZVYTnw.js",
    "arrow-left-B-YyplZK.js"
]

print("Creating mock React components for missing subpage bundles...")

dummy_component = """import React from 'react';
export default function DummyComponent() {
  return null;
}
"""

for file in missing_files:
    file_path = os.path.join(assets_dir, file)
    if not os.path.exists(file_path):
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(dummy_component)
        print(f"Created mock: {file}")

print("All mock files created!")
