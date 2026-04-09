import urllib.request
import re
import sys

urls = [
    "https://www.instagram.com/p/DW6mzBBjEi_/",
    "https://www.instagram.com/p/DW1khrdjMGq/",
    "https://www.instagram.com/p/DWzAa5OjBOY/",
    "https://www.instagram.com/p/DWwfZ-4jNeO/",
    "https://www.instagram.com/p/DWt_BOODOrP/",
    "https://www.instagram.com/p/DWrVCT0ku8b/"
]

headers = {'User-Agent': 'Mozilla/5.0'}

for url in urls:
    req = urllib.request.Request(url, headers=headers)
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        match = re.search(r'<meta property="og:image" content="([^"]+)"', html)
        if match:
            print(match.group(1).replace("&amp;", "&"))
        else:
            print(f"No og:image found for {url}")
    except Exception as e:
        print(f"Error {url}: {e}")
