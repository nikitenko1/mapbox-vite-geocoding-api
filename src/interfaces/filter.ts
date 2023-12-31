export type FilterOpts = "hotel" | "gas station" | "supermarket" | "fast food";

// https://docs.mapbox.com/api/search/geocoding/#point-of-interest-category-coverage
// Expand to see a list of common POI categories:
// advertising, marketing
// airport
// amusement park, theme park
// assisted living service, assisted, assisted living, home
// athletic field, sports field
// bagel, donut
// bar, alcohol
// base, military
// beach
// beauty, hair, salon, barber
// beer, wine, spirit, alcohol, booze
// bicycle, bike, cycle
// boating
// bookstore, book shop
// bowling, bowl, bowling alley
// brewery, beer
// bus station, bus stop, bus
// campground, rv park
// candy store, candy, candies, confectionary, chocolatier, chocolate
// car rental, truck rental
// car wash, detail, car detail, car wax
// casinos, gaming
// cemetery, graveyard, mausoleum
// clothing, accessories, apparel
// college, university
// combat sports, boxing, martial arts, fighting
// computer, electronic
// contractor, repair
// dance
// day care, preschool, daycare, child care
// department store, big box store, department
// dog park
// drug services, alcohol services, clinic
// dry cleaning, laundry, dry cleaner, laundry service, laundromat
// education, school
// embassy, foreign
// er, emergency room
// fast food
// fire stations, fire house, fire department
// florist, flowers, flower shop
// forest, woods
// funeral service, funeral home
// furniture, decor
// garden
// gas station, fuel, gas
// gift, novelty
// glasses, optical
// government agency
// gun range
// home improvement, repairman, handyman, repair
// hospital, clinic, medical center
// hotel, motel
// houseware, home goods
// ice cream parlor, ice cream
// insurance
// jewelry, watches, accessories
// juice bar, smoothie, juice
// lake
// landmark
// legal, lawyer, law, law office
// lodging
// massage, masseuse
// meat, seafood, butcher, deli
// miniature golf, minigolf
// mountain
// museum
// music, show venue, concert, concert hall
// natural park
// newsstand, newspaper, news, magazine
// night club, disco
// notary, notary public
// nursery, garden, garden center
// outdoors
// painting, art
// park
// parking, parking lot
// pet, petshop, dog, cat
// pharmacy
// photo, frame, framing
// photography, photo service
// physical therapy, rehabilitation
// pizza, restaurant
// police station, law enforcement
// port, ferry
// post office, mail
// professional cleaning, cleaning
// rail station, train station
// real estate agent, realtor, real estate agency
// rest area, rest stop, pitstop
// restaurant
// scuba diving, pool
// shoes, apparel
// shopping center, mall, shopping mall
// spa
// sporting good, sports store
// storage, storage facility, storage lot
// supermarket, groceries, grocery, market, super
// swimming pool, pool, swim club
// tailor
// tattoo, tattooing
// theater, movie theater, cinema
// tour, travel agent
// tourist information, services, tourism, information
// toy, toy shop
// utility companies, utilities, utility, public utility, electricity, natural gas, water, sewage, power company
// vehicle maintenance, car maintenance, vehicle repair, car repair
// winery, vineyard, wine tasting
// zoo, aquarium, wildlife sanctuary
