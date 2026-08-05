export type CityType = "city" | "neighborhood";
export type Region = "Orange County" | "Los Angeles";

export interface City {
  slug: string;
  name: string;
  type: CityType;
  region: Region;
  county: string;
  monthlySearchVolume: number;
  priority: "tier1" | "tier2" | "tier3";
  nearbyAreas: string[];
  localFlavor: string;
  climate: string;
  typicalHomes: string;
  permitNotes: string;
}

export const cities: City[] = [
  {
    slug: "irvine",
    name: "Irvine",
    type: "city",
    region: "Orange County",
    county: "Orange",
    monthlySearchVolume: 1_200_000,
    priority: "tier1",
    nearbyAreas: ["Tustin", "Lake Forest", "Portola Springs", "North Tustin"],
    localFlavor: "With Irvine's master-planned communities and HOA-maintained aesthetics",
    climate: "Irvine's mild Mediterranean climate with warm, dry summers and cool winters",
    typicalHomes: "Modern master-planned homes, townhomes, and luxury estates within HOA communities",
    permitNotes:
      "Irvine has strict HOA requirements - most exterior projects need architectural committee approval before city permits",
  },
  {
    slug: "costa-mesa",
    name: "Costa Mesa",
    type: "city",
    region: "Orange County",
    county: "Orange",
    monthlySearchVolume: 522_000,
    priority: "tier1",
    nearbyAreas: ["Newport Beach", "Huntington Beach", "Irvine"],
    localFlavor: "With Costa Mesa's eclectic mix of mid-century homes and coastal living",
    climate: "Costa Mesa's coastal climate with ocean breezes and mild year-round temperatures",
    typicalHomes: "Mid-century ranch homes, newer developments, and Eastside Costa Mesa estates",
    permitNotes:
      "Costa Mesa requires permits for retaining walls over 4 feet and most hardscape projects altering drainage",
  },
  {
    slug: "orange",
    name: "Orange",
    type: "city",
    region: "Orange County",
    county: "Orange",
    monthlySearchVolume: 459_000,
    priority: "tier1",
    nearbyAreas: ["Tustin", "North Tustin", "Irvine", "Lake Forest"],
    localFlavor: "With Orange's charming Old Towne historic district and established neighborhoods",
    climate: "Orange's inland warmth with hotter summers than coastal OC cities",
    typicalHomes: "Historic Craftsman and ranch homes in Old Towne, newer tract homes in Orange Hills",
    permitNotes:
      "Old Towne Orange has historic preservation rules - check if your property falls within the historic district",
  },
  {
    slug: "huntington-beach",
    name: "Huntington Beach",
    type: "city",
    region: "Orange County",
    county: "Orange",
    monthlySearchVolume: 391_000,
    priority: "tier1",
    nearbyAreas: ["Costa Mesa", "Newport Beach", "Irvine"],
    localFlavor: "With Huntington Beach's iconic surf culture and salt-air coastal environment",
    climate: "Huntington Beach's ocean-adjacent climate means salt air exposure - material selection matters",
    typicalHomes: "Beachfront properties, mid-century ranch homes, and newer Seacliff developments",
    permitNotes:
      "Huntington Beach enforces water-efficient landscaping ordinances for new and renovated landscapes",
  },
  {
    slug: "newport-beach",
    name: "Newport Beach",
    type: "city",
    region: "Orange County",
    county: "Orange",
    monthlySearchVolume: 370_000,
    priority: "tier1",
    nearbyAreas: ["Corona Del Mar", "Costa Mesa", "Irvine", "Laguna Beach"],
    localFlavor: "With Newport Beach's luxury coastal estates and high-end outdoor living expectations",
    climate: "Newport Beach's premium coastal climate is ideal for year-round outdoor entertaining",
    typicalHomes: "Luxury waterfront estates, Balboa Island cottages, and Newport Coast hilltop homes",
    permitNotes:
      "Newport Beach has strict coastal development permits near the shoreline - projects in the coastal zone require additional review",
  },
  {
    slug: "mission-viejo",
    name: "Mission Viejo",
    type: "city",
    region: "Orange County",
    county: "Orange",
    monthlySearchVolume: 329_000,
    priority: "tier1",
    nearbyAreas: ["Ladera Ranch", "Rancho Santa Margarita", "Laguna Niguel", "Lake Forest"],
    localFlavor: "With Mission Viejo's family-oriented neighborhoods and lake community lifestyle",
    climate: "Mission Viejo's warm inland climate with occasional Santa Ana wind events",
    typicalHomes: "1970s-80s planned community homes with established yards and mature landscaping",
    permitNotes:
      "Mission Viejo's numerous HOAs often have landscaping guidelines - check CC&Rs before starting",
  },
  {
    slug: "lake-forest",
    name: "Lake Forest",
    type: "city",
    region: "Orange County",
    county: "Orange",
    monthlySearchVolume: 265_000,
    priority: "tier2",
    nearbyAreas: ["Mission Viejo", "Irvine", "Laguna Hills", "Rancho Santa Margarita"],
    localFlavor: "With Lake Forest's suburban charm and mix of established and newer communities",
    climate: "Lake Forest's foothills location brings slightly warmer summers than coastal OC",
    typicalHomes: "Mix of 1970s-era homes and newer Baker Ranch developments",
    permitNotes: "Lake Forest requires grading permits for projects that alter natural drainage patterns",
  },
  {
    slug: "laguna-niguel",
    name: "Laguna Niguel",
    type: "city",
    region: "Orange County",
    county: "Orange",
    monthlySearchVolume: 196_000,
    priority: "tier2",
    nearbyAreas: ["Dana Point", "Laguna Beach", "Mission Viejo", "San Juan Capistrano"],
    localFlavor: "With Laguna Niguel's hillside homes and panoramic ocean-to-canyon views",
    climate: "Laguna Niguel's elevated terrain catches ocean breezes while staying warmer than the coast",
    typicalHomes: "Hillside homes with sloped yards - retaining walls and tiered landscaping are common",
    permitNotes:
      "Hillside properties in Laguna Niguel often require engineered plans for retaining walls and grading",
  },
  {
    slug: "san-clemente",
    name: "San Clemente",
    type: "city",
    region: "Orange County",
    county: "Orange",
    monthlySearchVolume: 173_000,
    priority: "tier2",
    nearbyAreas: ["Dana Point", "San Juan Capistrano"],
    localFlavor: "With San Clemente's Spanish Colonial charm and laid-back coastal lifestyle",
    climate:
      "San Clemente's southernmost OC location provides some of the warmest coastal weather in the county",
    typicalHomes: "Spanish-style homes, beach cottages, and Talega community developments",
    permitNotes:
      "San Clemente's coastal zone overlay requires extra review for properties near the bluff or shoreline",
  },
  {
    slug: "san-juan-capistrano",
    name: "San Juan Capistrano",
    type: "city",
    region: "Orange County",
    county: "Orange",
    monthlySearchVolume: 131_000,
    priority: "tier2",
    nearbyAreas: ["Dana Point", "Laguna Niguel", "San Clemente", "Rancho Mission Viejo"],
    localFlavor: "With San Juan Capistrano's rich mission heritage and equestrian ranch properties",
    climate: "San Juan Capistrano's inland valley warmth and creekside properties demand smart drainage design",
    typicalHomes: "Historic adobes, equestrian estates, and newer master-planned homes",
    permitNotes:
      "Properties near the historic district or San Juan Creek may have additional environmental review requirements",
  },
  {
    slug: "aliso-viejo",
    name: "Aliso Viejo",
    type: "city",
    region: "Orange County",
    county: "Orange",
    monthlySearchVolume: 110_000,
    priority: "tier2",
    nearbyAreas: ["Laguna Niguel", "Laguna Beach", "Laguna Hills", "Mission Viejo"],
    localFlavor: "With Aliso Viejo's newer master-planned layout and canyon-edge properties",
    climate: "Aliso Viejo's sheltered canyon location stays warm with limited coastal fog",
    typicalHomes: "1990s-2000s planned community homes, townhomes, and condos with compact yards",
    permitNotes:
      "Aliso Viejo's Aliso Viejo Community Association oversees many common areas - verify property boundaries before work begins",
  },
  {
    slug: "laguna-hills",
    name: "Laguna Hills",
    type: "city",
    region: "Orange County",
    county: "Orange",
    monthlySearchVolume: 108_000,
    priority: "tier2",
    nearbyAreas: ["Laguna Niguel", "Aliso Viejo", "Mission Viejo", "Lake Forest"],
    localFlavor: "With Laguna Hills' mature tree-lined streets and established family neighborhoods",
    climate: "Laguna Hills' transitional coastal-to-inland climate supports a wide range of plant palettes",
    typicalHomes: "Established 1970s-80s single-family homes with larger lots than newer OC developments",
    permitNotes:
      "Laguna Hills has standard OC permit requirements - walls over 42 inches and significant grading need permits",
  },
  {
    slug: "laguna-beach",
    name: "Laguna Beach",
    type: "city",
    region: "Orange County",
    county: "Orange",
    monthlySearchVolume: 102_000,
    priority: "tier2",
    nearbyAreas: ["Aliso Viejo", "Laguna Niguel", "Dana Point", "Newport Beach"],
    localFlavor: "With Laguna Beach's artistic heritage, steep canyon lots, and dramatic ocean views",
    climate: "Laguna Beach's marine layer and salt air influence require corrosion-resistant materials",
    typicalHomes: "Hillside homes on steep lots, artist cottages, and multi-million dollar oceanfront estates",
    permitNotes:
      "Laguna Beach has some of OC's strictest building codes - design review board approval is required for most exterior changes",
  },
  {
    slug: "dana-point",
    name: "Dana Point",
    type: "city",
    region: "Orange County",
    county: "Orange",
    monthlySearchVolume: 91_000,
    priority: "tier2",
    nearbyAreas: ["San Clemente", "Laguna Niguel", "San Juan Capistrano"],
    localFlavor: "With Dana Point's harbor views and blufftop living",
    climate: "Dana Point's ocean-adjacent microclimate keeps temperatures moderate but brings salt-air exposure",
    typicalHomes: "Blufftop homes, Monarch Beach estates, and Lantern District bungalows",
    permitNotes:
      "Dana Point's coastal zone properties require California Coastal Commission review for significant outdoor projects",
  },
  {
    slug: "rancho-santa-margarita",
    name: "Rancho Santa Margarita",
    type: "city",
    region: "Orange County",
    county: "Orange",
    monthlySearchVolume: 86_000,
    priority: "tier2",
    nearbyAreas: ["Mission Viejo", "Coto de Caza", "Ladera Ranch", "Lake Forest"],
    localFlavor: "With Rancho Santa Margarita's foothill location and active outdoor community",
    climate: "Rancho Santa Margarita's inland foothills position means hotter, drier summers than coastal OC",
    typicalHomes: "1990s master-planned homes with moderate yards backing to open space and trails",
    permitNotes:
      "Santa Margarita Water District enforces water-efficient landscape requirements for new installations",
  },
  {
    slug: "corona-del-mar",
    name: "Corona Del Mar",
    type: "neighborhood",
    region: "Orange County",
    county: "Orange",
    monthlySearchVolume: 55_000,
    priority: "tier3",
    nearbyAreas: ["Newport Beach", "Laguna Beach", "Irvine"],
    localFlavor: "With Corona Del Mar's village atmosphere and some of Newport's most prestigious addresses",
    climate: "Corona Del Mar's prime coastal location delivers consistent ocean breezes and mild temperatures",
    typicalHomes: "Luxury coastal homes, many with custom-designed outdoor living spaces and ocean views",
    permitNotes:
      "Falls under Newport Beach permitting - coastal zone properties require additional Coastal Commission review",
  },
  {
    slug: "north-tustin",
    name: "North Tustin",
    type: "city",
    region: "Orange County",
    county: "Orange",
    monthlySearchVolume: 48_000,
    priority: "tier3",
    nearbyAreas: ["Tustin", "Orange", "Irvine"],
    localFlavor: "With North Tustin's large estate lots and mature citrus-grove heritage",
    climate: "North Tustin's slightly elevated inland position means warmer days and excellent sun exposure",
    typicalHomes: "Large lot estate homes, many on half-acre+ parcels with room for extensive outdoor projects",
    permitNotes:
      "North Tustin is unincorporated Orange County - permits go through OC Public Works rather than a city office",
  },
  {
    slug: "portola-springs",
    name: "Portola Springs",
    type: "neighborhood",
    region: "Orange County",
    county: "Orange",
    monthlySearchVolume: 40_000,
    priority: "tier3",
    nearbyAreas: ["Irvine", "Lake Forest", "Tustin"],
    localFlavor: "With Portola Springs' newer Irvine homes and young-family community feel",
    climate: "Portola Springs' elevation in the Irvine foothills brings slightly warmer summers",
    typicalHomes: "Newer 2010s-era homes with compact modern yards, many with Irvine Company HOA oversight",
    permitNotes: "Falls under City of Irvine permitting plus Irvine Company HOA architectural review",
  },
  {
    slug: "ladera-ranch",
    name: "Ladera Ranch",
    type: "city",
    region: "Orange County",
    county: "Orange",
    monthlySearchVolume: 38_000,
    priority: "tier3",
    nearbyAreas: ["Mission Viejo", "San Juan Capistrano", "Rancho Mission Viejo"],
    localFlavor: "With Ladera Ranch's award-winning master-planned design and active community lifestyle",
    climate: "Ladera Ranch sits in a warm inland valley ideal for drought-tolerant landscape design",
    typicalHomes: "2000s master-planned homes with front-yard HOA restrictions but creative backyard potential",
    permitNotes:
      "Ladera Ranch LARMAC HOA has detailed landscaping guidelines - pre-approval required for most exterior changes",
  },
  {
    slug: "rancho-mission-viejo",
    name: "Rancho Mission Viejo",
    type: "city",
    region: "Orange County",
    county: "Orange",
    monthlySearchVolume: 31_000,
    priority: "tier3",
    nearbyAreas: ["Ladera Ranch", "San Juan Capistrano", "Mission Viejo"],
    localFlavor: "With Rancho Mission Viejo's brand-new communities and resort-style amenities",
    climate: "Rancho Mission Viejo's inland valley location is warm and dry - drought-tolerant design is essential",
    typicalHomes: "Brand-new construction (2015+) with compact lots and strict HOA landscape standards",
    permitNotes: "RMV HOA has very specific approved plant palettes and hardscape material guidelines",
  },
  {
    slug: "tustin",
    name: "Tustin",
    type: "city",
    region: "Orange County",
    county: "Orange",
    monthlySearchVolume: 0,
    priority: "tier3",
    nearbyAreas: ["Irvine", "North Tustin", "Orange", "Costa Mesa"],
    localFlavor: "With Tustin's mix of historic Old Town character and modern Tustin Legacy developments",
    climate: "Tustin's central OC location offers moderate temperatures with warm, dry summers",
    typicalHomes: "Older homes in Old Town Tustin, newer Tustin Legacy condos, and Columbus Grove developments",
    permitNotes:
      "Tustin requires permits for walls over 42 inches and any work affecting drainage or grading",
  },
  {
    slug: "coto-de-caza",
    name: "Coto de Caza",
    type: "city",
    region: "Orange County",
    county: "Orange",
    monthlySearchVolume: 16_000,
    priority: "tier3",
    nearbyAreas: ["Rancho Santa Margarita", "Mission Viejo", "Ladera Ranch"],
    localFlavor: "With Coto de Caza's gated exclusivity and sprawling estate properties",
    climate: "Coto de Caza's inland canyon location means hot, dry summers and fire-season Santa Ana winds",
    typicalHomes: "Luxury gated estates on large lots, many with pools, sport courts, and extensive outdoor living",
    permitNotes:
      "Coto de Caza is unincorporated OC with its own HOA - both county permits and HOA approval required",
  },
  {
    slug: "newport-coast",
    name: "Newport Coast",
    type: "neighborhood",
    region: "Orange County",
    county: "Orange",
    monthlySearchVolume: 0,
    priority: "tier2",
    nearbyAreas: ["Newport Beach", "Corona Del Mar", "Laguna Beach"],
    localFlavor:
      "With Newport Coast's gated enclaves, ocean-view lots, and luxury outdoor entertaining culture",
    climate:
      "Newport Coast's bluffside coastal climate is mild year-round but exposed to marine moisture and salt air",
    typicalHomes:
      "Custom and semi-custom estates in gated communities with pools, view decks, and outdoor kitchens",
    permitNotes:
      "Projects may require Newport Beach coastal review plus HOA design approval in gated communities",
  },
  {
    slug: "balboa-island",
    name: "Balboa Island",
    type: "neighborhood",
    region: "Orange County",
    county: "Orange",
    monthlySearchVolume: 0,
    priority: "tier3",
    nearbyAreas: ["Newport Beach", "Corona Del Mar", "Lido Isle"],
    localFlavor:
      "With Balboa Island's walkable village character and compact, high-value waterfront parcels",
    climate:
      "Balboa Island's bayfront setting is mild and humid with marine exposure that affects material longevity",
    typicalHomes:
      "Tight-lot custom homes, bayfront properties, and upscale remodels with efficient outdoor layouts",
    permitNotes:
      "Falls under Newport Beach permitting; shoreline-adjacent work may trigger coastal and floodplain constraints",
  },
  {
    slug: "lido-isle",
    name: "Lido Isle",
    type: "neighborhood",
    region: "Orange County",
    county: "Orange",
    monthlySearchVolume: 0,
    priority: "tier3",
    nearbyAreas: ["Newport Beach", "Balboa Island", "Corona Del Mar"],
    localFlavor:
      "With Lido Isle's private-island prestige and highly curated architectural style",
    climate:
      "Lido Isle's harbor microclimate is temperate with salt-air corrosion risk for metal fixtures and lighting",
    typicalHomes:
      "Luxury custom homes with compact courtyards, rooftop terraces, and premium hardscape finishes",
    permitNotes:
      "In addition to city permits, homeowners should expect strict design review from neighborhood associations",
  },
  {
    slug: "newport-heights",
    name: "Newport Heights",
    type: "neighborhood",
    region: "Orange County",
    county: "Orange",
    monthlySearchVolume: 0,
    priority: "tier3",
    nearbyAreas: ["Newport Beach", "Costa Mesa", "Corona Del Mar"],
    localFlavor:
      "With Newport Heights' elevated streets, mature trees, and close-to-coast lifestyle",
    climate:
      "Newport Heights benefits from coastal moderation with occasional marine layer and consistent afternoon breezes",
    typicalHomes:
      "A mix of older coastal homes, modern rebuilds, and family properties with medium-sized yards",
    permitNotes:
      "Uses Newport Beach permitting standards, including drainage compliance and review for major exterior alterations",
  },
  {
    slug: "eastside-costa-mesa",
    name: "Eastside Costa Mesa",
    type: "neighborhood",
    region: "Orange County",
    county: "Orange",
    monthlySearchVolume: 0,
    priority: "tier3",
    nearbyAreas: ["Costa Mesa", "Newport Beach", "Irvine"],
    localFlavor:
      "With Eastside Costa Mesa's blend of coastal convenience, design-forward remodels, and active family neighborhoods",
    climate:
      "Eastside Costa Mesa enjoys mild coastal influence while still seeing warm summer afternoons inland from the beach",
    typicalHomes:
      "Renovated mid-century homes, newer infill builds, and compact lots with high expectations for curb appeal",
    permitNotes:
      "Costa Mesa permits are required for grading and drainage-impacting hardscape work; older lots may need utility coordination",
  },
  {
    slug: "laguna-canyon",
    name: "Laguna Canyon",
    type: "neighborhood",
    region: "Orange County",
    county: "Orange",
    monthlySearchVolume: 0,
    priority: "tier3",
    nearbyAreas: ["Laguna Beach", "Aliso Viejo", "Laguna Niguel"],
    localFlavor:
      "With Laguna Canyon's art-centric identity and hillside homes tucked into natural open space",
    climate:
      "Laguna Canyon combines marine influence with canyon heat pockets, requiring resilient plant palettes and irrigation zoning",
    typicalHomes:
      "Hillside homes and custom properties on irregular lots where retaining and drainage planning are common",
    permitNotes:
      "Laguna Beach review can be strict in canyon and hillside zones, often requiring geotechnical and design review for major exterior changes",
  },
  {
    slug: "santa-monica",
    name: "Santa Monica",
    type: "city",
    region: "Los Angeles",
    county: "Los Angeles",
    monthlySearchVolume: 443_000,
    priority: "tier1",
    nearbyAreas: ["Brentwood", "Pacific Palisades", "Beverly Hills"],
    localFlavor: "With Santa Monica's oceanfront prestige and environmentally conscious community values",
    climate: "Santa Monica's marine layer keeps summers cool - ideal for lush, coastal-friendly plantings",
    typicalHomes: "Craftsman bungalows, modern new builds, and luxury condos with rooftop outdoor spaces",
    permitNotes:
      "Santa Monica has aggressive water conservation ordinances and requires water-efficient landscaping for all new projects",
  },
  {
    slug: "sherman-oaks",
    name: "Sherman Oaks",
    type: "neighborhood",
    region: "Los Angeles",
    county: "Los Angeles",
    monthlySearchVolume: 298_000,
    priority: "tier1",
    nearbyAreas: ["Encino", "Tarzana", "Woodland Hills"],
    localFlavor:
      "With Sherman Oaks' San Fernando Valley heat and desire for functional outdoor shade and cooling",
    climate:
      "Sherman Oaks sits in the Valley - expect 100F+ summer days, making shade structures and heat-tolerant materials essential",
    typicalHomes: "Mid-century ranch homes south of the Boulevard, newer homes in the hills with canyon views",
    permitNotes:
      "Falls under LA City permits - hillside properties south of Ventura Blvd may require additional grading review",
  },
  {
    slug: "beverly-hills",
    name: "Beverly Hills",
    type: "city",
    region: "Los Angeles",
    county: "Los Angeles",
    monthlySearchVolume: 221_000,
    priority: "tier1",
    nearbyAreas: ["Brentwood", "Santa Monica", "Encino", "Hidden Hills"],
    localFlavor: "With Beverly Hills' world-renowned luxury standards and discerning homeowner expectations",
    climate: "Beverly Hills' basin-to-hills topography creates microclimates - flats are warmer, hillsides catch ocean air",
    typicalHomes: "Iconic estates, modern mega-mansions, and flats-area traditional homes with manicured grounds",
    permitNotes:
      "Beverly Hills has its own building department with premium standards - expect thorough plan review and inspections",
  },
  {
    slug: "encino",
    name: "Encino",
    type: "neighborhood",
    region: "Los Angeles",
    county: "Los Angeles",
    monthlySearchVolume: 177_000,
    priority: "tier2",
    nearbyAreas: ["Tarzana", "Sherman Oaks", "Woodland Hills", "Calabasas"],
    localFlavor: "With Encino's spacious Valley lots and mature oak-shaded properties",
    climate:
      "Encino's Valley floor gets hot summers, but mature oaks provide natural canopy many homeowners want to complement",
    typicalHomes: "Large ranch homes on generous lots, many with pools and room for full outdoor living buildouts",
    permitNotes:
      "Encino has protected oak trees - any work within the drip line of a coast live oak requires an oak tree permit from LA",
  },
  {
    slug: "tarzana",
    name: "Tarzana",
    type: "neighborhood",
    region: "Los Angeles",
    county: "Los Angeles",
    monthlySearchVolume: 130_000,
    priority: "tier2",
    nearbyAreas: ["Encino", "Woodland Hills", "Calabasas", "Sherman Oaks"],
    localFlavor: "With Tarzana's residential tranquility and generous lot sizes in the western Valley",
    climate: "Tarzana shares the Valley's hot, dry summers - fire-resistant landscaping is both practical and encouraged",
    typicalHomes: "Ranch homes, split-levels, and hillside properties with expansive backyards",
    permitNotes:
      "Falls under LA City - properties in Very High Fire Hazard Severity Zones need fire-resistant plant selections",
  },
  {
    slug: "brentwood",
    name: "Brentwood",
    type: "city",
    region: "Los Angeles",
    county: "Los Angeles",
    monthlySearchVolume: 130_000,
    priority: "tier2",
    nearbyAreas: ["Santa Monica", "Pacific Palisades", "Beverly Hills"],
    localFlavor: "With Brentwood's upscale village atmosphere and tree-lined canyon estates",
    climate: "Brentwood's canyon location provides cooler temperatures than the Valley with occasional marine layer",
    typicalHomes: "Canyon estates, modern farmhouse rebuilds, and traditional homes on quiet tree-lined streets",
    permitNotes:
      "Many Brentwood properties are in hillside or fire zones - expect additional requirements for grading and vegetation management",
  },
  {
    slug: "calabasas",
    name: "Calabasas",
    type: "city",
    region: "Los Angeles",
    county: "Los Angeles",
    monthlySearchVolume: 81_000,
    priority: "tier2",
    nearbyAreas: ["Hidden Hills", "Agoura Hills", "Woodland Hills", "Tarzana"],
    localFlavor: "With Calabasas' celebrity cachet and gated-community luxury outdoor living",
    climate: "Calabasas' foothill position means hot summers and elevated fire risk - material and plant choices matter",
    typicalHomes: "Gated community estates, custom hilltop homes, and luxury Mediterranean-style properties",
    permitNotes: "Calabasas has its own building department and strict hillside development standards",
  },
  {
    slug: "porter-ranch",
    name: "Porter Ranch",
    type: "neighborhood",
    region: "Los Angeles",
    county: "Los Angeles",
    monthlySearchVolume: 73_000,
    priority: "tier2",
    nearbyAreas: ["Woodland Hills", "Sherman Oaks", "Encino"],
    localFlavor:
      "With Porter Ranch's newer hilltop developments and panoramic San Fernando Valley views",
    climate: "Porter Ranch's elevated position at the Valley's northwest edge brings wind exposure and dry heat",
    typicalHomes:
      "Newer planned community homes (Shapell, Porter Ranch Development) with modern layouts and compact yards",
    permitNotes: "Falls under LA City - newer developments may still have active CC&Rs with landscape restrictions",
  },
  {
    slug: "agoura-hills",
    name: "Agoura Hills",
    type: "city",
    region: "Los Angeles",
    county: "Los Angeles",
    monthlySearchVolume: 63_000,
    priority: "tier2",
    nearbyAreas: ["Calabasas", "Woodland Hills", "Hidden Hills"],
    localFlavor: "With Agoura Hills' Santa Monica Mountains backdrop and nature-integrated neighborhoods",
    climate: "Agoura Hills' foothill setting means significant fire risk - defensible space landscaping is critical",
    typicalHomes:
      "1980s-90s suburban homes, many backing to open space and trails with wildlife-friendly yards",
    permitNotes:
      "Agoura Hills has its own building department and enforces brush clearance / defensible space requirements",
  },
  {
    slug: "woodland-hills",
    name: "Woodland Hills",
    type: "neighborhood",
    region: "Los Angeles",
    county: "Los Angeles",
    monthlySearchVolume: 0,
    priority: "tier3",
    nearbyAreas: ["Tarzana", "Calabasas", "Encino", "Porter Ranch"],
    localFlavor: "With Woodland Hills' wide Valley streets and some of LA's hottest recorded temperatures",
    climate: "Woodland Hills holds LA's heat records - shade structures, heat-resistant pavers, and smart irrigation are must-haves",
    typicalHomes:
      "Ranch homes, 1960s-70s custom builds, and newer hillside construction along Mulholland",
    permitNotes:
      "Falls under LA City - hillside properties near Mulholland may require geotechnical reports for hardscape projects",
  },
  {
    slug: "venice",
    name: "Venice",
    type: "neighborhood",
    region: "Los Angeles",
    county: "Los Angeles",
    monthlySearchVolume: 0,
    priority: "tier2",
    nearbyAreas: ["Santa Monica", "Mar Vista", "Beverly Hills"],
    localFlavor:
      "With Venice's creative coastal identity, dense residential lots, and indoor-outdoor living culture",
    climate:
      "Venice's marine climate is mild and breezy, with coastal moisture that can affect material and finish durability",
    typicalHomes:
      "Historic bungalows, modern architectural homes, and compact urban lots prioritizing functional outdoor space",
    permitNotes:
      "LA City permits apply; some areas near the coast and canals may have additional overlays affecting project scope",
  },
  {
    slug: "studio-city",
    name: "Studio City",
    type: "neighborhood",
    region: "Los Angeles",
    county: "Los Angeles",
    monthlySearchVolume: 0,
    priority: "tier2",
    nearbyAreas: ["Sherman Oaks", "Encino", "Hollywood Hills"],
    localFlavor:
      "With Studio City's blend of canyon homes and boulevard-adjacent neighborhoods focused on livable outdoor upgrades",
    climate:
      "Studio City experiences warm Valley summers with cooler canyon pockets, favoring layered shade and efficient irrigation",
    typicalHomes:
      "Traditional homes on tree-lined streets, hillside properties, and newer modern rebuilds with curated outdoor areas",
    permitNotes:
      "Falls under LA City; hillside lots can trigger extra review for grading, retaining walls, and stormwater compliance",
  },
  {
    slug: "bel-air",
    name: "Bel Air",
    type: "neighborhood",
    region: "Los Angeles",
    county: "Los Angeles",
    monthlySearchVolume: 0,
    priority: "tier2",
    nearbyAreas: ["Brentwood", "Beverly Hills", "Westwood"],
    localFlavor:
      "With Bel Air's estate-scale lots, privacy-first design priorities, and high-end outdoor amenity expectations",
    climate:
      "Bel Air's hillside microclimates vary by elevation and exposure, requiring site-specific plant and drainage strategies",
    typicalHomes:
      "Large custom estates with long driveways, expansive terraces, and multi-zone outdoor living areas",
    permitNotes:
      "Many properties fall in hillside and fire-prone zones; expect detailed plan review and strict construction logistics requirements",
  },
  {
    slug: "westwood",
    name: "Westwood",
    type: "neighborhood",
    region: "Los Angeles",
    county: "Los Angeles",
    monthlySearchVolume: 0,
    priority: "tier3",
    nearbyAreas: ["Brentwood", "Bel Air", "Beverly Hills"],
    localFlavor:
      "With Westwood's mix of institutional anchors, multifamily pockets, and single-family enclaves near the Westside core",
    climate:
      "Westwood has a mild Westside climate with warm summers and occasional marine layer influence from nearby coastal corridors",
    typicalHomes:
      "Condominiums, apartments, and single-family homes with smaller landscaped footprints and high utility demands",
    permitNotes:
      "Projects follow LA City code; denser parcels often require extra coordination for access, staging, and tree protection",
  },
  {
    slug: "mar-vista",
    name: "Mar Vista",
    type: "neighborhood",
    region: "Los Angeles",
    county: "Los Angeles",
    monthlySearchVolume: 0,
    priority: "tier3",
    nearbyAreas: ["Venice", "Santa Monica", "Westwood"],
    localFlavor:
      "With Mar Vista's residential feel, community gardens, and strong preference for practical, low-water outdoor upgrades",
    climate:
      "Mar Vista receives moderate coastal influence with cooler evenings and manageable year-round growing conditions",
    typicalHomes:
      "Post-war single-family homes and modern infill projects with compact to medium backyards",
    permitNotes:
      "LA City permits govern most work; hardscape and drainage changes must satisfy local stormwater and grading requirements",
  },
  {
    slug: "hollywood-hills",
    name: "Hollywood Hills",
    type: "neighborhood",
    region: "Los Angeles",
    county: "Los Angeles",
    monthlySearchVolume: 0,
    priority: "tier3",
    nearbyAreas: ["Studio City", "Beverly Hills", "Sherman Oaks"],
    localFlavor:
      "With Hollywood Hills' iconic hillside homes, dramatic topography, and view-oriented outdoor living",
    climate:
      "Hollywood Hills sees sun-exposed slopes and runoff-heavy winter events, making erosion and drainage control critical",
    typicalHomes:
      "Hillside contemporary homes, classic mid-century properties, and narrow-lot builds with multi-level terraces",
    permitNotes:
      "Hillside ordinances frequently apply; retaining walls, grading, and access constraints often require engineered plans",
  },
  {
    slug: "pacific-palisades",
    name: "Pacific Palisades",
    type: "neighborhood",
    region: "Los Angeles",
    county: "Los Angeles",
    monthlySearchVolume: 38_000,
    priority: "tier3",
    nearbyAreas: ["Santa Monica", "Brentwood", "Beverly Hills"],
    localFlavor: "With Pacific Palisades' canyon-to-coast setting and village-like community feel",
    climate:
      "Pacific Palisades' coastal canyons bring marine air and fire risk - a unique combination requiring thoughtful design",
    typicalHomes:
      "Canyon homes, Riviera estates, and Alphabet Streets cottages - many with challenging hillside lots",
    permitNotes:
      "Many properties are in both the coastal zone and fire hazard zones - dual permitting requirements are common",
  },
  {
    slug: "hidden-hills",
    name: "Hidden Hills",
    type: "city",
    region: "Los Angeles",
    county: "Los Angeles",
    monthlySearchVolume: 4_000,
    priority: "tier3",
    nearbyAreas: ["Calabasas", "Agoura Hills", "Woodland Hills"],
    localFlavor: "With Hidden Hills' ultra-private gated equestrian estates and A-list clientele",
    climate: "Hidden Hills' valley-edge position is warm and dry with Santa Ana wind exposure",
    typicalHomes:
      "Multi-acre equestrian estates with expansive grounds, pools, sport courts, and guest houses",
    permitNotes:
      "Hidden Hills is its own city with a very small building department - projects move slowly, plan ahead",
  },
];

export const PSEO_CITIES = cities;

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getCitiesByRegion(region: Region): City[] {
  return cities.filter((c) => c.region === region);
}

export function getCitiesByPriority(priority: City["priority"]): City[] {
  return cities.filter((c) => c.priority === priority);
}

export function getNearbyCities(city: City): City[] {
  return cities.filter((c) => city.nearbyAreas.includes(c.name));
}

export function getAllCitySlugs(): string[] {
  return cities.map((c) => c.slug);
}

export function getAllSlugs(): string[] {
  return getAllCitySlugs();
}

