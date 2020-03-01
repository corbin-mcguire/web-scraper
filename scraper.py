import requests
from bs4 import BeautifulSoup

retiring_soon_url = "https://www.lego.com/en-us/categories/retiring-soon"
retiring_soon_page = requests.get(retiring_soon_url)

soup = BeautifulSoup(retiring_soon_page.content, "html.parser")

print(soup)
