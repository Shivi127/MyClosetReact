# WebScraping Data
# Document Load
# Parsing
# Extraction
# Transformation

# Pattern, Scrapy, Mechanize, Beautiful Soup, Requests

from bs4 import BeautifulSoup as soup
from urllib.request import urlopen as uReq
 
my_url 			= 			"https://www.forever21.com/us/shop/catalog/category/f21/top_blouses-off-shoulder"

# Open ups the connection
uClient 		=			uReq(my_url)
pageHtml 		= 			uClient.read()

uClient.close()

page_soup 		= 			soup(pageHtml, "html.parser")

# pi_wrapper contains everything
containers	 	=			page_soup.findAll("div",{"class":"pi_wrapper"})
# containers	 	=			page_soup.findAll("img",{"class":"product_image"})

# print (len(containers))
# # pretify organizes the HTML output
# print(soup.prettify(containers[0]))

# # Main Div class that has all the elements present
# container 		= 			containers[0].find("img",{"class":"product_image"})
# # Name of the Product
# print("Product Name:",container.img['alt'])
# # # Url
# print("Product URL",container.img['src'])
# # # Price of the Product
# price			=			containers[0].find('p',{'class':'p_price pt_5'})
# print(len(price))
# print(price.text)


filename		=			"products.csv"
f 				= 			open(filename,'w')

headers 		= 			"Product_Title,	Pricing, ImageURL\n"
f.write(headers)


count = 0
for container in containers:
	if(count < 10):
		count+=1
		pNameContainer 			= container.find("img",{"class":"product_image"})
		ptitle 					= pNameContainer.img['alt'].strip()
		pURL 					= pNameContainer.img['src']
		price					= container.find('p',{'class':'p_price pt_5'}).text.replace('$','')


		# print(type(ptitle))
		# print ("Title", ptitle, "  Price ", price, " URL ",pURL)
		# Writing the products to the file
		f.write(price + ',' + pURL + ',' + ptitle)

	else:
			break

f.close()














