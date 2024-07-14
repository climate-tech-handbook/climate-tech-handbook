#!/usr/bin/env python
# coding: utf-8

# In[3]:


""" The scripts for web scraping the podcast collection of MCJ Collective """

import os
import time
import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
# Using pip3 install all the packages!
# Install chromedriver with homebrew


MAIN_URL = 'https://www.mcjcollective.com/media/podcast' # The URL of podcast collection
SAVE_DIR = 'your_save_dir' # The directory

# Ensure the save directory exists
if not os.path.exists(SAVE_DIR):
    os.makedirs(SAVE_DIR)

# Set up Selenium
service = webdriver.ChromeService(executable_path = '/opt/homebrew/bin/chromedriver') # For MACOS
driver = webdriver.Chrome(service=service)
driver.get(MAIN_URL)

# Click "Load More" until it disappears or TimeoutException occurs
while True:
    try:
        load_more_button = WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.CLASS_NAME, "loadMoreButton")))
        time.sleep(15)  # wait a bit before clicking
        load_more_button.click()
        time.sleep(15)  # Wait for page to load after each click
    except TimeoutException:
        break

# Fetch the page's final state and parse with BeautifulSoup
soup = BeautifulSoup(driver.page_source, 'html.parser')
driver.quit()

# Find all "read more" links
read_more_links = [a['href'] for a in soup.find_all('a', class_='summary-read-more-link')]
read_more_links


# In[7]:


l = len(read_more_links)
l


# In[13]:

# Fetch the podcast overview from MCJ links
read_more_links = ['/my-climate-journey-podcast/caprock',
 '/my-climate-journey-podcast/elise-joshi',
 '/my-climate-journey-podcast/lumen',
 '/my-climate-journey-podcast/chris-hook',
 '/my-climate-journey-podcast/solarsquare',
 '/my-climate-journey-podcast/rebecca-carland',
 '/my-climate-journey-podcast/tobias-ruckstuhl-bim-adisa',
 '/my-climate-journey-podcast/david-holtzclaw',
 '/my-climate-journey-podcast/david-helgason',
 '/my-climate-journey-podcast/ari-matusiak',
 '/my-climate-journey-podcast/reunion',
 '/my-climate-journey-podcast/christian-hernandez',
 '/my-climate-journey-podcast/julia-souder',
 '/my-climate-journey-podcast/electra',
 '/my-climate-journey-podcast/ctvc',
 '/my-climate-journey-podcast/mary-macpherson',
 '/my-climate-journey-podcast/fabian-heilemann',
 '/my-climate-journey-podcast/776',
 '/my-climate-journey-podcast/robert-blake',
 '/my-climate-journey-podcast/john-tough',
 '/my-climate-journey-podcast/janelle-kellman',
 '/my-climate-journey-podcast/andes',
 '/my-climate-journey-podcast/ian-smith',
 '/my-climate-journey-podcast/mario-molina',
 '/my-climate-journey-podcast/alyssa-thomas',
 '/my-climate-journey-podcast/jonah-goldman',
 '/my-climate-journey-podcast/vanessa-kerry',
 '/my-climate-journey-podcast/lightship',
 '/my-climate-journey-podcast/david-aronoff',
 '/my-climate-journey-podcast/bill-caesar',
 '/my-climate-journey-podcast/windfall-bio',
 '/my-climate-journey-podcast/ben-kortlang',
 '/my-climate-journey-podcast/danielle-deiseroth',
 '/my-climate-journey-podcast/steve-simon',
 '/my-climate-journey-podcast/alan-leung',
 '/my-climate-journey-podcast/alcemy',
 '/my-climate-journey-podcast/james-lindsay',
 '/my-climate-journey-podcast/antti-vihavainen',
 '/my-climate-journey-podcast/christof-franzsen',
 '/my-climate-journey-podcast/irena-spazzapan',
 '/my-climate-journey-podcast/giana-amador',
 '/my-climate-journey-podcast/aubrey-streit-krug',
 '/my-climate-journey-podcast/vikram-raju',
 '/my-climate-journey-podcast/adam-minter',
 '/my-climate-journey-podcast/watershed',
 '/my-climate-journey-podcast/sebastian-heitmann',
 '/my-climate-journey-podcast/scott-moore',
 '/my-climate-journey-podcast/mark-martin',
 '/my-climate-journey-podcast/rob-day-capital-series',
 '/my-climate-journey-podcast/sara-harari',
 '/my-climate-journey-podcast/regrow',
 '/my-climate-journey-podcast/temple-fennell',
 '/my-climate-journey-podcast/michael-liebreich',
 '/my-climate-journey-podcast/rondo-energy',
 '/my-climate-journey-podcast/melissa-cheong',
 '/my-climate-journey-podcast/narendra-taneja',
 '/my-climate-journey-podcast/arcadia',
 '/my-climate-journey-podcast/sandy-guitar',
 '/my-climate-journey-podcast/brandon-smith',
 '/my-climate-journey-podcast/julie-pullen',
 '/my-climate-journey-podcast/rick-zullo',
 '/my-climate-journey-podcast/jessica-morse',
 '/my-climate-journey-podcast/wattcarbon',
 '/my-climate-journey-podcast/amy-francetic-capital-series',
 '/my-climate-journey-podcast/michael-thomas',
 '/my-climate-journey-podcast/arbor',
 '/my-climate-journey-podcast/hampus-jakobsson',
 '/my-climate-journey-podcast/lori-lodes',
 '/my-climate-journey-podcast/nathanael-johnson',
 '/my-climate-journey-podcast/mohammed-barkeshli',
 '/my-climate-journey-podcast/katrina-erwin-glennys-navarrete',
 '/my-climate-journey-podcast/enode',
 '/my-climate-journey-podcast/will-tickle',
 '/my-climate-journey-podcast/jay-taneja',
 '/my-climate-journey-podcast/sarah-hinkfuss',
 '/my-climate-journey-podcast/lucas-joppa',
 '/my-climate-journey-podcast/john-bissell-rich-riley',
 '/my-climate-journey-podcast/recurrent',
 '/my-climate-journey-podcast/mark-robinson',
 '/my-climate-journey-podcast/alana-guzzetta',
 '/my-climate-journey-podcast/minesense',
 '/my-climate-journey-podcast/grant-mulligan',
 '/my-climate-journey-podcast/lucy-piper',
 '/my-climate-journey-podcast/syzygy',
 '/my-climate-journey-podcast/jacqueline-van-den-ende-carbon-equity',
 '/my-climate-journey-podcast/will-steger',
 '/my-climate-journey-podcast/dylan-welch',
 '/my-climate-journey-podcast/john-kinney',
 '/my-climate-journey-podcast/scythe',
 '/my-climate-journey-podcast/robert-piconi',
 '/my-climate-journey-podcast/byfusion',
 '/my-climate-journey-podcast/martin-wainstein',
 '/my-climate-journey-podcast/nth-cycle',
 '/my-climate-journey-podcast/zach-gallant',
 '/my-climate-journey-podcast/mill',
 '/my-climate-journey-podcast/eric-goff-jaden-crawford',
 '/my-climate-journey-podcast/pano-convective-capital',
 '/my-climate-journey-podcast/jigar-shah-ajay-kochhar',
 '/my-climate-journey-podcast/quaise',
 '/my-climate-journey-podcast/james-sedlak',
 '/my-climate-journey-podcast/diego-sae-gil-sam-gill',
 '/my-climate-journey-podcast/impossible-metals',
 '/my-climate-journey-podcast/alex-blumberg',
 '/my-climate-journey-podcast/peter-reinhardt',
 '/my-climate-journey-podcast/simon-moores',
 '/my-climate-journey-podcast/virridy',
 '/my-climate-journey-podcast/tonya-hicks',
 '/my-climate-journey-podcast/impulse',
 '/my-climate-journey-podcast/minor-andreasen',
 '/my-climate-journey-podcast/made-of-air',
 '/my-climate-journey-podcast/david-kirtley',
 '/my-climate-journey-podcast/therma',
 '/my-climate-journey-podcast/brittany-heller',
 '/my-climate-journey-podcast/sublime-systems',
 '/my-climate-journey-podcast/jonathan-strauss',
 '/my-climate-journey-podcast/microbyre',
 '/my-climate-journey-podcast/larry-coons',
 '/my-climate-journey-podcast/fyto',
 '/my-climate-journey-podcast/katharine-wilkinson',
 '/my-climate-journey-podcast/vespene-energy',
 '/my-climate-journey-podcast/ira-pearl',
 '/my-climate-journey-podcast/forum-mobility',
 '/my-climate-journey-podcast/alejandro-carrillo',
 '/my-climate-journey-podcast/taj-eldridge',
 '/my-climate-journey-podcast/helio',
 '/my-climate-journey-podcast/jill-tauber',
 '/my-climate-journey-podcast/odyssey-energy-solutions',
 '/my-climate-journey-podcast/felicia-marcus',
 '/my-climate-journey-podcast/sealed',
 '/my-climate-journey-podcast/vikas-gupta-geert-van-de-wouw',
 '/my-climate-journey-podcast/vesta',
 '/my-climate-journey-podcast/leah-stokes',
 '/my-climate-journey-podcast/coda-farm-technologies',
 '/my-climate-journey-podcast/scott-arnold',
 '/my-climate-journey-podcast/sue-brown',
 '/my-climate-journey-podcast/the-cool-down',
 '/my-climate-journey-podcast/josh-svaty',
 '/my-climate-journey-podcast/sweep',
 '/my-climate-journey-podcast/david-roberts',
 '/my-climate-journey-podcast/shellworks',
 '/my-climate-journey-podcast/sam-steyer-andy-martinez',
 '/my-climate-journey-podcast/michele-demers',
 '/my-climate-journey-podcast/ample',
 '/my-climate-journey-podcast/genevieve-guenter',
 '/my-climate-journey-podcast/synop',
 '/my-climate-journey-podcast/camila-thorndike',
 '/my-climate-journey-podcast/climate-robotics',
 '/my-climate-journey-podcast/matthias-schmelzer',
 '/my-climate-journey-podcast/rollie-williams',
 '/my-climate-journey-podcast/alex-trembath',
 '/my-climate-journey-podcast/cemvita-factory',
 '/my-climate-journey-podcast/rebecca-dell',
 '/my-climate-journey-podcast/lithos-carbon-eion-carbon',
 '/my-climate-journey-podcast/timothe-parrique',
 '/my-climate-journey-podcast/pique-action',
 '/my-climate-journey-podcast/jonh-dees',
 '/my-climate-journey-podcast/vibrant-planet',
 '/my-climate-journey-podcast/benji-backer',
 '/my-climate-journey-podcast/epoch-biodesign',
 '/my-climate-journey-podcast/ketan-joshi',
 '/my-climate-journey-podcast/zero-acre-farms',
 '/my-climate-journey-podcast/cris-stainbrook',
 '/my-climate-journey-podcast/one',
 '/my-climate-journey-podcast/marcius-extavour',
 '/my-climate-journey-podcast/calwave',
 '/my-climate-journey-podcast/kerry-bowie',
 '/my-climate-journey-podcast/bolt',
 '/my-climate-journey-podcast/craig-shapiro-tomas-alvarez-belon',
 '/my-climate-journey-podcast/myst',
 '/my-climate-journey-podcast/jamie-alexander',
 '/my-climate-journey-podcast/sense',
 '/my-climate-journey-podcast/rachel-slaybaugh',
 '/my-climate-journey-podcast/mazi-mobility',
 '/my-climate-journey-podcast/alison-smart-spencer-glendon',
 '/my-climate-journey-podcast/flowcarbon',
 '/my-climate-journey-podcast/emma-stewart',
 '/my-climate-journey-podcast/seabound',
 '/my-climate-journey-podcast/stephan-nicoleau',
 '/my-climate-journey-podcast/electric-hydrogen',
 '/my-climate-journey-podcast/tony-fadell',
 '/my-climate-journey-podcast/flux-marine',
 '/my-climate-journey-podcast/joel-armin-hoiland',
 '/my-climate-journey-podcast/wildtype',
 '/my-climate-journey-podcast/gerald-butts',
 '/my-climate-journey-podcast/planetary',
 '/my-climate-journey-podcast/johanna-wolfson',
 '/my-climate-journey-podcast/dance',
 '/my-climate-journey-podcast/katie-dykes',
 '/my-climate-journey-podcast/rubi',
 '/my-climate-journey-podcast/cam-hosie',
 '/my-climate-journey-podcast/tae-technologies',
 '/my-climate-journey-podcast/stacy-kauk',
 '/my-climate-journey-podcast/projectcanary',
 '/my-climate-journey-podcast/renee-lertzman',
 '/my-climate-journey-podcast/basigo',
 '/my-climate-journey-podcast/gabriel-kra',
 '/my-climate-journey-podcast/fleetzero',
 '/my-climate-journey-podcast/virginia-sentance',
 '/my-climate-journey-podcast/outlast-earth',
 '/my-climate-journey-podcast/david-antonioli',
 '/my-climate-journey-podcast/compound-foods',
 '/my-climate-journey-podcast/sean-osullivan',
 '/my-climate-journey-podcast/air-company',
 '/my-climate-journey-podcast/nicole-systrom',
 '/my-climate-journey-podcast/weavegrid',
 '/my-climate-journey-podcast/hanson-shah',
 '/my-climate-journey-podcast/moment-energy',
 '/my-climate-journey-podcast/jules-kortenhorst',
 '/my-climate-journey-podcast/waterplan',
 '/my-climate-journey-podcast/rama-variankaval',
 '/my-climate-journey-podcast/prime-roots',
 '/my-climate-journey-podcast/phil-graves',
 '/my-climate-journey-podcast/antora-energy',
 '/my-climate-journey-podcast/elizabeth-lewis',
 '/my-climate-journey-podcast/terawatt-infrastructure',
 '/my-climate-journey-podcast/caroline-spears',
 '/my-climate-journey-podcast/open-forest-protocol',
 '/my-climate-journey-podcast/jason-jacobs-returns',
 '/my-climate-journey-podcast/everledger',
 '/my-climate-journey-podcast/jake-levine',
 '/my-climate-journey-podcast/sustaincert',
 '/my-climate-journey-podcast/kentaro-kawamori',
 '/my-climate-journey-podcast/olio',
 '/my-climate-journey-podcast/alex-laskey',
 '/my-climate-journey-podcast/soluna',
 '/my-climate-journey-podcast/katie-auth',
 '/my-climate-journey-podcast/toucan',
 '/my-climate-journey-podcast/ryan-panchadsaram',
 '/my-climate-journey-podcast/boston-metal',
 '/my-climate-journey-podcast/scott-jacobs',
 '/my-climate-journey-podcast/dave-snydacker',
 '/my-climate-journey-podcast/dispatch-goods',
 '/my-climate-journey-podcast/nancy-pfund',
 '/my-climate-journey-podcast/brimstone-energy',
 '/my-climate-journey-podcast/shuchi-talati',
 '/my-climate-journey-podcast/cervest',
 '/my-climate-journey-podcast/collin-mclelland',
 '/my-climate-journey-podcast/twelve',
 '/my-climate-journey-podcast/ross-koningstein',
 '/my-climate-journey-podcast/carbon-collective',
 '/my-climate-journey-podcast/brian-janous',
 '/my-climate-journey-podcast/carbo-culture',
 '/my-climate-journey-podcast/chase-lochmiller',
 '/my-climate-journey-podcast/nithio',
 '/my-climate-journey-podcast/stuart-landesberg',
 '/my-climate-journey-podcast/michael-dorsey',
 '/my-climate-journey-podcast/quidnet-energy',
 '/my-climate-journey-podcast/chakrabarti-hunt',
 '/my-climate-journey-podcast/runwise',
 '/my-climate-journey-podcast/ion-yadigaroglu',
 '/my-climate-journey-podcast/wattbuy',
 '/my-climate-journey-podcast/cisco-devries',
 '/my-climate-journey-podcast/orbillion',
 '/my-climate-journey-podcast/amy-duffuor',
 '/my-climate-journey-podcast/cloud-to-street',
 '/my-climate-journey-podcast/dominic-falcao',
 '/my-climate-journey-podcast/banyan-infrastructure',
 '/my-climate-journey-podcast/lila-preston',
 '/my-climate-journey-podcast/clean-crop-technologies',
 '/my-climate-journey-podcast/thomas-jonas',
 '/my-climate-journey-podcast/energetic-insurance',
 '/my-climate-journey-podcast/pat-sapinsley',
 '/my-climate-journey-podcast/goodr',
 '/my-climate-journey-podcast/michael-terrell',
 '/my-climate-journey-podcast/terraformation',
 '/my-climate-journey-podcast/costas-samaras',
 '/my-climate-journey-podcast/carbicrete',
 '/my-climate-journey-podcast/graeme-pitkethly',
 '/my-climate-journey-podcast/ncx',
 '/my-climate-journey-podcast/mira-inbar',
 '/my-climate-journey-podcast/scott-clavenna',
 '/my-climate-journey-podcast/mary-powell',
 '/my-climate-journey-podcast/donnel-baird',
 '/my-climate-journey-podcast/jim-kapsis',
 '/my-climate-journey-podcast/garry-cooper',
 '/my-climate-journey-podcast/arch-rao',
 '/my-climate-journey-podcast/heirloom',
 '/my-climate-journey-podcast/jimmy-samartzis',
 '/my-climate-journey-podcast/winzent-feather',
 '/my-climate-journey-podcast/bruce-friedrich',
 '/my-climate-journey-podcast/remora',
 '/my-climate-journey-podcast/caroline-cochran',
 '/my-climate-journey-podcast/eliza-nemser',
 '/my-climate-journey-podcast/irving-fain',
 '/my-climate-journey-podcast/bill-weihl',
 '/my-climate-journey-podcast/val-miftakhov',
 '/my-climate-journey-podcast/scifi-foods',
 '/my-climate-journey-podcast/mike-hall',
 '/my-climate-journey-podcast/lyndall-schreiner',
 '/my-climate-journey-podcast/erin-burns',
 '/my-climate-journey-podcast/swift-solar',
 '/my-climate-journey-podcast/erin-burns-w5m2a',
 '/my-climate-journey-podcast/andy-towne',
 '/my-climate-journey-podcast/scott-stringer',
 '/my-climate-journey-podcast/noya',
 '/my-climate-journey-podcast/alicia-barton',
 '/my-climate-journey-podcast/fiona-spruill',
 '/my-climate-journey-podcast/kate-gordon',
 '/my-climate-journey-podcast/charm-industrial',
 '/my-climate-journey-podcast/sarah-saltzer',
 '/my-climate-journey-podcast/anshuman-bapna',
 '/my-climate-journey-podcast/julia-collins',
 '/my-climate-journey-podcast/universal-hydrogen',
 '/my-climate-journey-podcast/andrew-savage',
 '/my-climate-journey-podcast/beacon-power-services',
 '/my-climate-journey-podcast/ron-gonen',
 '/my-climate-journey-podcast/living-carbon',
 '/my-climate-journey-podcast/aaron-ratner',
 '/my-climate-journey-podcast/wright-electric',
 '/my-climate-journey-podcast/john-lochner',
 '/my-climate-journey-podcast/camus-energy',
 '/my-climate-journey-podcast/mark-frayman',
 '/my-climate-journey-podcast/patch',
 '/my-climate-journey-podcast/jeremy-freeman-danny-cullenward',
 '/my-climate-journey-podcast/phoenix-tailings',
 '/my-climate-journey-podcast/dave-riess',
 '/my-climate-journey-podcast/emrgy',
 '/my-climate-journey-podcast/josh-felser',
 '/my-climate-journey-podcast/unspun',
 '/my-climate-journey-podcast/nili-gilbert',
 '/my-climate-journey-podcast/iseechange',
 '/my-climate-journey-podcast/rob-niven',
 '/my-climate-journey-podcast/droneseed',
 '/my-climate-journey-podcast/nathaniel-stinnett-2',
 '/my-climate-journey-podcast/amp-robotics',
 '/my-climate-journey-podcast/amy-francetic',
 '/my-climate-journey-podcast/melissa-lott',
 '/my-climate-journey-podcast/jon-goldberg-julio-friedmann',
 '/my-climate-journey-podcast/david-hardy',
 '/my-climate-journey-podcast/rodrigo-prudencio',
 '/my-climate-journey-podcast/adam-browning',
 '/my-climate-journey-podcast/andrei-cherny',
 '/my-climate-journey-podcast/daniel-kammen',
 '/my-climate-journey-podcast/michael-skelly',
 '/my-climate-journey-podcast/nicolas-pinkowski',
 '/my-climate-journey-podcast/jason-bordoff',
 '/my-climate-journey-podcast/tim-latimer',
 '/my-climate-journey-podcast/bryce-smith',
 '/my-climate-journey-podcast/nan-ransohoff-ryan-orbuch',
 '/my-climate-journey-podcast/sean-casten',
 '/my-climate-journey-podcast/andrew-salzberg',
 '/my-climate-journey-podcast/gene-berdichevsky-jigar-shah',
 '/my-climate-journey-podcast/philip-behn',
 '/my-climate-journey-podcast/may-boeve',
 '/my-climate-journey-podcast/phil-bredesen',
 '/my-climate-journey-podcast/katie-rae',
 '/my-climate-journey-podcast/rebecca-henderson',
 '/my-climate-journey-podcast/maggie-thomas',
 '/my-climate-journey-podcast/mindy-lubber',
 '/my-climate-journey-podcast/danny-kennedy',
 '/my-climate-journey-podcast/tobi-lutke',
 '/my-climate-journey-podcast/sonia-aggarwal',
 '/my-climate-journey-podcast/davida-herzl',
 '/my-climate-journey-podcast/varun-sivaram',
 '/my-climate-journey-podcast/mark-lewis',
 '/my-climate-journey-podcast/timothy-hade',
 '/my-climate-journey-podcast/alex-dewar',
 '/my-climate-journey-podcast/brenden-millstein',
 '/my-climate-journey-podcast/bill-brady',
 '/my-climate-journey-podcast/anne-simpson',
 '/my-climate-journey-podcast/ken-caldeira',
 '/my-climate-journey-podcast/kurt-house',
 '/my-climate-journey-podcast/elizabeth-muller',
 '/my-climate-journey-podcast/jacqueline-patterson',
 '/my-climate-journey-podcast/robyn-beavers',
 '/my-climate-journey-podcast/naomi-oreskes',
 '/my-climate-journey-podcast/dawn-lippert',
 '/my-climate-journey-podcast/kingsmill-bond',
 '/my-climate-journey-podcast/rich-sorkin',
 '/my-climate-journey-podcast/jeffrey-schub',
 '/my-climate-journey-podcast/daniel-huppmann',
 '/my-climate-journey-podcast/alessandra-biaggi',
 '/my-climate-journey-podcast/zahra-hirji',
 '/my-climate-journey-podcast/david-heinemeier-hansson',
 '/my-climate-journey-podcast/harry-saunders',
 '/my-climate-journey-podcast/rob-hanson',
 '/my-climate-journey-podcast/matt-eggers',
 '/my-climate-journey-podcast/phil-duffy',
 '/my-climate-journey-podcast/david-keith',
 '/my-climate-journey-podcast/bj-fogg',
 '/my-climate-journey-podcast/clay-dumas',
 '/my-climate-journey-podcast/jigar-shah',
 '/my-climate-journey-podcast/gary-cohen',
 '/my-climate-journey-podcast/tim-freundlich',
 '/my-climate-journey-podcast/akshat-rathi',
 '/my-climate-journey-podcast/joey-bergstein',
 '/my-climate-journey-podcast/stephen-fenberg',
 '/my-climate-journey-podcast/shreya-dave',
 '/my-climate-journey-podcast/david-perry',
 '/my-climate-journey-podcast/jonathan-foley',
 '/my-climate-journey-podcast/barney-schauble',
 '/my-climate-journey-podcast/marilyn-waite',
 '/my-climate-journey-podcast/gene-berdichevsky',
 '/my-climate-journey-podcast/shayle-kann',
 '/my-climate-journey-podcast/jason-jacobs',
 '/my-climate-journey-podcast/sam-fankhauser',
 '/my-climate-journey-podcast/julio-friedmann',
 '/my-climate-journey-podcast/ilan-gur',
 '/my-climate-journey-podcast/lara-pierpoint',
 '/my-climate-journey-podcast/shawn-murphy',
 '/my-climate-journey-podcast/david-burt',
 '/my-climate-journey-podcast/melinda-hanson',
 '/my-climate-journey-podcast/ken-kimmell',
 '/my-climate-journey-podcast/paulina-jaramillo',
 '/my-climate-journey-podcast/justin-guay',
 '/my-climate-journey-podcast/phil-giudice',
 '/my-climate-journey-podcast/bill-nussey',
 '/my-climate-journey-podcast/kelly-wanser',
 '/my-climate-journey-podcast/albert-wenger',
 '/my-climate-journey-podcast/ramya-swaminathan',
 '/my-climate-journey-podcast/mark-reynolds',
 '/my-climate-journey-podcast/ted-nordhaus',
 '/my-climate-journey-podcast/deepika-nagabhushan',
 '/my-climate-journey-podcast/emily-reichert',
 '/my-climate-journey-podcast/josh-bushinsky',
 '/my-climate-journey-podcast/dan-lashof',
 '/my-climate-journey-podcast/todd-allen',
 '/my-climate-journey-podcast/josh-freed',
 '/my-climate-journey-podcast/joseph-majkut',
 '/my-climate-journey-podcast/steve-oldham',
 '/my-climate-journey-podcast/john-larsen',
 '/my-climate-journey-podcast/nat-keohane',
 '/my-climate-journey-podcast/kathy-hannun',
 '/my-climate-journey-podcast/jessica-lovering',
 '/my-climate-journey-podcast/jim-mcdermott',
 '/my-climate-journey-podcast/david-buzby',
 '/my-climate-journey-podcast/gregg-dixon',
 '/my-climate-journey-podcast/andrew-beebe',
 '/my-climate-journey-podcast/bill-weihl-ep29',
 '/my-climate-journey-podcast/austin-whitman',
 '/my-climate-journey-podcast/marshall-moutenot',
 '/my-climate-journey-podcast/armond-cohen',
 '/my-climate-journey-podcast/rob-day',
 '/my-climate-journey-podcast/diego-saez-gil',
 '/my-climate-journey-podcast/noah-deich',
 '/my-climate-journey-podcast/alicia-seiger',
 '/my-climate-journey-podcast/pat-brown',
 '/my-climate-journey-podcast/saul-griffith',
 '/my-climate-journey-podcast/matt-rogers',
 '/my-climate-journey-podcast/joshua-posamentier',
 '/my-climate-journey-podcast/adele-morris',
 '/my-climate-journey-podcast/kiran-bhatraju',
 '/my-climate-journey-podcast/rich-powell',
 '/my-climate-journey-podcast/susanne-brooks',
 '/my-climate-journey-podcast/bret-kugelmass',
 '/my-climate-journey-podcast/alex-flint',
 '/my-climate-journey-podcast/nathaniel-stinnett',
 '/my-climate-journey-podcast/gustaf-alstromer',
 '/my-climate-journey-podcast/matthew-nordan',
 '/my-climate-journey-podcast/gary-yohe',
 '/my-climate-journey-podcast/dan-yates',
 '/my-climate-journey-podcast/bob-mumgaard',
 '/my-climate-journey-podcast/sarah-kearney',
 '/my-climate-journey-podcast/sanchali-pal',
 '/my-climate-journey-podcast/pam-templer',
 '/my-climate-journey-podcast/joseph-stagner',
 '/my-climate-journey-podcast/daniel-hullah']


# In[9]:


lens = len(read_more_links)


# In[1]:


HEAD_URL = 'https://www.mcjcollective.com'
for index, link in enumerate(read_more_links):
    # For relative links, construct the full URL
    #if not link.startswith('https'):
    if not link.startswith('https://'):
        link = HEAD_URL + '/' + link.strip('/')
    time.sleep(5)
    # Fetch and parse the podcast detail page
    response = requests.get(link)
    detail_soup = BeautifulSoup(response.text, 'html.parser')

    # Extract content from all <p> tags
    scripts = detail_soup.find_all('p')
    
    # Extract the overview
    # scripts = detail_soup.find_all('ul', {"data-rte-list": "default"})
    
    content = '\n'.join([script.text for script in scripts])

    # Create a filename based on the podcast title or URL
    title = detail_soup.title.text if detail_soup.title else link.split('/')[-1]
    title = title+str(index)
    filename = f"{title}.txt".replace(' ', '_').replace('/', '_')  # Format the title to a valid filename

    # Save the content to a file
    with open(os.path.join(SAVE_DIR, filename), 'w', encoding='utf-8') as file:
        file.write(content)

print(f"Scraped content saved to {SAVE_DIR}")


# In[2]:


"""
Fetch podcast overviews and turn them into csv file.
"""

import os
import time
import requests
from bs4 import BeautifulSoup
import csv


MAIN_URL = 'https://www.mcjcollective.com/media/podcast' # The URL of podcast collection
SAVE_DIR = 'your_save_dir'

# Ensure the save directory exists
if not os.path.exists(SAVE_DIR):
    os.makedirs(SAVE_DIR)


HEAD_URL = 'https://www.mcjcollective.com'
podcast_data = []  # List to store podcast information

for index, link in enumerate(missed_episodes):
    # For relative links, construct the full URL
    if not link.startswith('https://'):
        link = HEAD_URL + '/' + link.strip('/')
    time.sleep(5)

    # Fetch and parse the podcast detail page
    response = requests.get(link)
    detail_soup = BeautifulSoup(response.text, 'html.parser')

    # Extract the title
    title = detail_soup.title.text if detail_soup.title else link.split('/')[-1]

    # Extract the overview
    scripts = detail_soup.find_all('ul', {"data-rte-list": "default"})
    overview = '\n'.join([script.text for script in scripts])

    # Add title, link, and overview to the list
    podcast_data.append((title, link, overview))

# Write the data to a CSV file
csv_filename = os.path.join(SAVE_DIR, 'podcasts_data.csv')
with open(csv_filename, 'w', newline='', encoding='utf-8') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(['Title', 'URL', 'Overview'])  # Write header
    writer.writerows(podcast_data)  # Write podcast data

print(f"Scraped content saved to {csv_filename}")


# In[5]:


missed_episodes = [
    '/my-climate-journey-podcast/daniel-hullah',
    '/my-climate-journey-podcast/joseph-stagner',
    '/my-climate-journey-podcast/pam-templer',
    '/my-climate-journey-podcast/sanchali-pal',
    '/my-climate-journey-podcast/sarah-kearney',
    '/my-climate-journey-podcast/bob-mumgaard',
    '/my-climate-journey-podcast/dan-yates'
]


# In[14]:


import os
import time
import requests
from bs4 import BeautifulSoup
import csv

MAIN_URL = 'https://www.mcjcollective.com/media/podcast'
SAVE_DIR = 'your_save_directory'

# Ensure the save directory exists
os.makedirs(SAVE_DIR, exist_ok=True)

HEAD_URL = 'https://www.mcjcollective.com'
podcast_data = []


for index, link in enumerate(read_more_links):
    full_link = link if link.startswith('https://') else HEAD_URL + '/' + link.strip('/')
    time.sleep(5)  # Be polite with the number of requests

    try:
        response = requests.get(full_link)
        response.raise_for_status()
        detail_soup = BeautifulSoup(response.text, 'html.parser')

        title = detail_soup.title.text if detail_soup.title else 'No Title Found'

        # Find the iframe within the page
        iframe = detail_soup.find('iframe')
        if iframe and 'src' in iframe.attrs:
            iframe_src = iframe['src']
            # Add the extracted iframe src to the podcast data
            podcast_data.append((title, full_link, iframe_src))
        else:
            # If no iframe is found, append an indication that no audio URL was found
            podcast_data.append((title, full_link, 'No Audio URL Found'))

    except requests.HTTPError as http_err:
        print(f"HTTP error occurred: {http_err}")
    except Exception as err:
        print(f"An error occurred: {err}")


csv_filename = os.path.join(SAVE_DIR, 'podcasts_audio_new.csv')
with open(csv_filename, 'w', newline='', encoding='utf-8') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(['Title', 'URL', 'Audio URL'])
    writer.writerows(podcast_data)

print(f"Scraped content saved to {csv_filename}")


# In[ ]:




