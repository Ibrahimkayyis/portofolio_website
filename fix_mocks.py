import os

assets_dir = r"e:\E-LEARNING\portofolio_website\assets"

# These are the mock files that have broken React imports
mock_files = [
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

# Use a minimal valid ES module that doesn't import anything
# These are dummy stubs - they export default null function via the bundled react-vendor
dummy_stub = """// Stub module - page not available in downloaded build
export default function() { return null; }
"""

print("Fixing mock files to remove broken React import...")
for file in mock_files:
    path = os.path.join(assets_dir, file)
    if os.path.exists(path):
        with open(path, 'w', encoding='utf-8') as f:
            f.write(dummy_stub)
        print(f"Fixed: {file}")

print("Done!")
