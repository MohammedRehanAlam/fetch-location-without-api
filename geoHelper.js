// const colombiaGeoData = geoData.filter(item => item.country === "Colombia");

// Simple database of major cities and landmarks
// 1. Afghanistan
const afghanistanGeoData = [
  { country: "Afghanistan", province: "Badakhshan", lat: 36.8040, lng: 71.3677 },
  { country: "Afghanistan", province: "Badghis", lat: 35.1679, lng: 63.7695 },
  { country: "Afghanistan", province: "Baghlan", lat: 35.7500, lng: 69.0000 },
  { country: "Afghanistan", province: "Balkh", lat: 36.8000, lng: 67.2373 },
  { country: "Afghanistan", province: "Bamyan", lat: 34.7500, lng: 67.2500 },
  { country: "Afghanistan", province: "Daykundi", lat: 33.7251, lng: 66.2197 },
  { country: "Afghanistan", province: "Farah", lat: 32.6071, lng: 62.6710 },
  { country: "Afghanistan", province: "Faryab", lat: 35.9262, lng: 64.6238 },
  { country: "Afghanistan", province: "Ghazni", lat: 33.3149, lng: 68.8290 },
  { country: "Afghanistan", province: "Ghor", lat: 34.1605, lng: 64.9202 },
  { country: "Afghanistan", province: "Helmand", lat: 31.0000, lng: 64.0000 },
  { country: "Afghanistan", province: "Herat", lat: 34.3529, lng: 62.2040 },
  { country: "Afghanistan", province: "Jowzjan", lat: 36.8967, lng: 65.6650 },
  { country: "Afghanistan", province: "Kabul", lat: 34.5553, lng: 69.2075 },
  { country: "Afghanistan", province: "Kandahar", lat: 31.6289, lng: 65.7372 },
  { country: "Afghanistan", province: "Kapisa", lat: 35.0235, lng: 69.6214 },
  { country: "Afghanistan", province: "Khost", lat: 33.3395, lng: 69.9204 },
  { country: "Afghanistan", province: "Kunar", lat: 34.8496, lng: 71.0965 },
  { country: "Afghanistan", province: "Kunduz", lat: 36.7280, lng: 68.8570 },
  { country: "Afghanistan", province: "Laghman", lat: 34.6896, lng: 70.1458 },
  { country: "Afghanistan", province: "Logar", lat: 34.0141, lng: 69.1921 },
  { country: "Afghanistan", province: "Nangarhar", lat: 34.1718, lng: 70.6218 },
  { country: "Afghanistan", province: "Nimruz", lat: 31.0262, lng: 62.4500 },
  { country: "Afghanistan", province: "Nuristan", lat: 35.3258, lng: 70.9391 },
  { country: "Afghanistan", province: "Paktia", lat: 33.7051, lng: 69.3831 },
  { country: "Afghanistan", province: "Paktika", lat: 32.2645, lng: 68.5247 },
  { country: "Afghanistan", province: "Panjshir", lat: 35.3627, lng: 69.4425 },
  { country: "Afghanistan", province: "Parwan", lat: 35.0611, lng: 69.0450 },
  { country: "Afghanistan", province: "Samangan", lat: 36.3155, lng: 67.9640 },
  { country: "Afghanistan", province: "Sar-e Pol", lat: 36.2154, lng: 65.9330 },
  { country: "Afghanistan", province: "Takhar", lat: 36.7363, lng: 69.5342 },
  { country: "Afghanistan", province: "Urozgan", lat: 32.9279, lng: 66.6325 },
  { country: "Afghanistan", province: "Wardak", lat: 34.3499, lng: 68.4316 },
  { country: "Afghanistan", province: "Zabul", lat: 32.1916, lng: 66.1766 },
];

// 2. Albenia
const albaniaGeoData = [
  { country: "Albania", county: "Berat", lat: 40.7058, lng: 19.9526 },
  { country: "Albania", county: "Dibër", lat: 41.5936, lng: 20.2356 },
  { country: "Albania", county: "Durrës", lat: 41.3231, lng: 19.4414 },
  { country: "Albania", county: "Elbasan", lat: 41.1125, lng: 20.0828 },
  { country: "Albania", county: "Fier", lat: 40.7231, lng: 19.5561 },
  { country: "Albania", county: "Gjirokastër", lat: 40.0758, lng: 20.1389 },
  { country: "Albania", county: "Korçë", lat: 40.6186, lng: 20.7808 },
  { country: "Albania", county: "Kukës", lat: 42.0769, lng: 20.4219 },
  { country: "Albania", county: "Lezhë", lat: 41.7836, lng: 19.6436 },
  { country: "Albania", county: "Shkodër", lat: 42.0685, lng: 19.5126 },
  { country: "Albania", county: "Tirana", lat: 41.3275, lng: 19.8189 },
  { country: "Albania", county: "Vlorë", lat: 40.4661, lng: 19.4914 },
];

// 3. Algeria
const algeriaGeoData = [
  { country: "Algeria", province: "Adrar", lat: 27.8743, lng: -0.2939 },
  { country: "Algeria", province: "Chlef", lat: 36.1653, lng: 1.3345 },
  { country: "Algeria", province: "Laghouat", lat: 33.8000, lng: 2.8833 },
  { country: "Algeria", province: "Oum El Bouaghi", lat: 35.8754, lng: 7.1135 },
  { country: "Algeria", province: "Batna", lat: 35.5550, lng: 6.1744 },
  { country: "Algeria", province: "Béjaïa", lat: 36.7500, lng: 5.0833 },
  { country: "Algeria", province: "Biskra", lat: 34.8504, lng: 5.7280 },
  { country: "Algeria", province: "Béchar", lat: 31.6167, lng: -2.2167 },
  { country: "Algeria", province: "Blida", lat: 36.4700, lng: 2.8300 },
  { country: "Algeria", province: "Bouira", lat: 36.3804, lng: 3.9000 },
  { country: "Algeria", province: "Tamanrasset", lat: 22.7850, lng: 5.5228 },
  { country: "Algeria", province: "Tébessa", lat: 35.4042, lng: 8.1242 },
  { country: "Algeria", province: "Tlemcen", lat: 34.8783, lng: -1.3150 },
  { country: "Algeria", province: "Tiaret", lat: 35.3700, lng: 1.3200 },
  { country: "Algeria", province: "Tizi Ouzou", lat: 36.7169, lng: 4.0497 },
  { country: "Algeria", province: "Algiers", lat: 36.7372, lng: 3.0865 },
  { country: "Algeria", province: "Djelfa", lat: 34.6667, lng: 3.2500 },
  { country: "Algeria", province: "Jijel", lat: 36.8206, lng: 5.7667 },
  { country: "Algeria", province: "Sétif", lat: 36.1911, lng: 5.4137 },
  { country: "Algeria", province: "Saïda", lat: 34.8303, lng: 0.1517 },
  { country: "Algeria", province: "Skikda", lat: 36.8667, lng: 6.9000 },
  { country: "Algeria", province: "Sidi Bel Abbès", lat: 35.2000, lng: -0.6333 },
  { country: "Algeria", province: "Annaba", lat: 36.9000, lng: 7.7667 },
  { country: "Algeria", province: "Guelma", lat: 36.4669, lng: 7.4333 },
  { country: "Algeria", province: "Constantine", lat: 36.3650, lng: 6.6147 },
  { country: "Algeria", province: "Médéa", lat: 36.2675, lng: 2.7500 },
  { country: "Algeria", province: "Mostaganem", lat: 35.9333, lng: 0.0900 },
  { country: "Algeria", province: "M'Sila", lat: 35.7058, lng: 4.5419 },
  { country: "Algeria", province: "Mascara", lat: 35.4000, lng: 0.1400 },
  { country: "Algeria", province: "Ouargla", lat: 31.9500, lng: 5.3333 },
  { country: "Algeria", province: "Oran", lat: 35.6969, lng: -0.6331 },
  { country: "Algeria", province: "El Bayadh", lat: 33.6833, lng: 1.0167 },
  { country: "Algeria", province: "Illizi", lat: 26.4833, lng: 8.4667 },
  { country: "Algeria", province: "Bordj Bou Arréridj", lat: 36.0733, lng: 4.7611 },
  { country: "Algeria", province: "Boumerdès", lat: 36.7667, lng: 3.4700 },
  { country: "Algeria", province: "El Tarf", lat: 36.7678, lng: 8.3138 },
  { country: "Algeria", province: "Tindouf", lat: 27.6711, lng: -8.1474 },
  { country: "Algeria", province: "Tissemsilt", lat: 35.6072, lng: 1.8103 },
  { country: "Algeria", province: "El Oued", lat: 33.3561, lng: 6.8632 },
  { country: "Algeria", province: "Khenchela", lat: 35.4358, lng: 7.1433 },
  { country: "Algeria", province: "Souk Ahras", lat: 36.2864, lng: 7.9511 },
  { country: "Algeria", province: "Tipaza", lat: 36.5900, lng: 2.4500 },
  { country: "Algeria", province: "Mila", lat: 36.4500, lng: 6.2667 },
  { country: "Algeria", province: "Aïn Defla", lat: 36.2644, lng: 1.9678 },
  { country: "Algeria", province: "Naâma", lat: 33.2667, lng: -0.3167 },
  { country: "Algeria", province: "Aïn Témouchent", lat: 35.2975, lng: -1.1400 },
  { country: "Algeria", province: "Ghardaïa", lat: 32.4833, lng: 3.6833 },
  { country: "Algeria", province: "Relizane", lat: 35.7333, lng: 1.3167 },
  { country: "Algeria", province: "Souk Ahras", lat: 36.2864, lng: 7.9511 },
  { country: "Algeria", province: "Tissemsilt", lat: 35.6072, lng: 1.8103 },
  { country: "Algeria", province: "Tizi Ouzou", lat: 36.7169, lng: 4.0497 },
  { country: "Algeria", province: "Tlemcen", lat: 34.8783, lng: -1.3150 },
];

// 4. Andorra  
const andorraGeoData = [
  { country: "Andorra", state: "Andorra la Vella", lat: 42.5075, lng: 1.5210 },
  { country: "Andorra", state: "Canillo", lat: 42.5667, lng: 1.6000 },
  { country: "Andorra", state: "Encamp", lat: 42.5333, lng: 1.5833 },
  { country: "Andorra", state: "Escaldes-Engordany", lat: 42.5000, lng: 1.5333 },
  { country: "Andorra", state: "La Massana", lat: 42.5447, lng: 1.5148 },
  { country: "Andorra", state: "Ordino", lat: 42.5562, lng: 1.5332 },
  { country: "Andorra", state: "Sant Julià de Lòria", lat: 42.4637, lng: 1.4913 }
];

// 5. Angola
const angolaGeoData = [
  { country: "Angola", state: "Bengo", lat: -8.7833, lng: 13.7833 },
  { country: "Angola", state: "Benguela", lat: -12.5833, lng: 13.4000 },
  { country: "Angola", state: "Bié", lat: -12.3833, lng: 17.0000 },
  { country: "Angola", state: "Cabinda", lat: -5.5500, lng: 12.2000 },
  { country: "Angola", state: "Cuando Cubango", lat: -16.7500, lng: 18.7500 },
  { country: "Angola", state: "Cuanza Norte", lat: -9.0000, lng: 15.0000 },
  { country: "Angola", state: "Cuanza Sul", lat: -11.0000, lng: 14.5000 },
  { country: "Angola", state: "Cunene", lat: -17.2500, lng: 16.0000 },
  { country: "Angola", state: "Huambo", lat: -12.7833, lng: 15.7333 },
  { country: "Angola", state: "Huíla", lat: -14.7500, lng: 15.0000 },
  { country: "Angola", state: "Luanda", lat: -8.8333, lng: 13.2333 },
  { country: "Angola", state: "Lunda Norte", lat: -8.7500, lng: 20.7500 },
  { country: "Angola", state: "Lunda Sul", lat: -10.2500, lng: 21.0000 },
  { country: "Angola", state: "Malanje", lat: -9.5333, lng: 16.3333 },
  { country: "Angola", state: "Moxico", lat: -11.7500, lng: 21.7500 },
  { country: "Angola", state: "Namibe", lat: -15.2500, lng: 12.2500 },
  { country: "Angola", state: "Uíge", lat: -7.6167, lng: 15.0667 },
  { country: "Angola", state: "Zaire", lat: -6.1667, lng: 12.5000 }
];

// 6. Antigua and Barbuda
const antiguaAndBarbudaGeoData = [
  { country: "Antigua and Barbuda", state: "Saint John", lat: 17.1167, lng: -61.8500 }, // Includes St. John's City
  { country: "Antigua and Barbuda", state: "Saint Peter", lat: 17.0500, lng: -61.7833 },
  { country: "Antigua and Barbuda", state: "Saint Mary", lat: 17.0333, lng: -61.8333 },
  { country: "Antigua and Barbuda", state: "Saint Paul", lat: 17.0500, lng: -61.8500 },
  { country: "Antigua and Barbuda", state: "Saint Philip", lat: 17.0500, lng: -61.7667 },
  { country: "Antigua and Barbuda", state: "Barbuda", lat: 17.6333, lng: -61.8000 },
  { country: "Antigua and Barbuda", state: "Redonda", lat: 16.9333, lng: -62.3500 }
];

// 7. Argentina
const argentinaGeoData = [
  { country: "Argentina", state: "Buenos Aires", lat: -34.5833, lng: -58.6667 }, // City of Buenos Aires
  { country: "Argentina", state: "Buenos Aires Province", lat: -36.6667, lng: -60.0000 },
  { country: "Argentina", state: "Catamarca", lat: -28.0000, lng: -67.0000 },
  { country: "Argentina", state: "Chaco", lat: -27.0000, lng: -60.0000 },
  { country: "Argentina", state: "Chubut", lat: -43.0000, lng: -68.0000 },
  { country: "Argentina", state: "Córdoba", lat: -32.0000, lng: -64.0000 },
  { country: "Argentina", state: "Corrientes", lat: -29.0000, lng: -58.0000 },
  { country: "Argentina", state: "Entre Ríos", lat: -32.0000, lng: -59.0000 },
  { country: "Argentina", state: "Formosa", lat: -25.5000, lng: -60.0000 },
  { country: "Argentina", state: "Jujuy", lat: -24.0000, lng: -65.5000 },
  { country: "Argentina", state: "La Pampa", lat: -37.0000, lng: -65.0000 },
  { country: "Argentina", state: "La Rioja", lat: -29.5000, lng: -67.5000 },
  { country: "Argentina", state: "Mendoza", lat: -33.0000, lng: -69.0000 },
  { country: "Argentina", state: "Misiones", lat: -27.0000, lng: -54.5000 },
  { country: "Argentina", state: "Neuquén", lat: -39.0000, lng: -70.0000 },
  { country: "Argentina", state: "Río Negro", lat: -41.0000, lng: -67.0000 },
  { country: "Argentina", state: "Salta", lat: -24.7833, lng: -65.4167 },
  { country: "Argentina", state: "San Juan", lat: -31.5000, lng: -69.0000 },
  { country: "Argentina", state: "San Luis", lat: -33.5000, lng: -66.0000 },
  { country: "Argentina", state: "Santa Cruz", lat: -49.0000, lng: -70.0000 },
  { country: "Argentina", state: "Santa Fe", lat: -30.0000, lng: -61.0000 },
  { country: "Argentina", state: "Santiago del Estero", lat: -28.0000, lng: -64.0000 },
  { country: "Argentina", state: "Tierra del Fuego", lat: -54.0000, lng: -68.0000 },
  { country: "Argentina", state: "Tucumán", lat: -27.0000, lng: -65.5000 }
];

// 8. Armenia
const armeniaGeoData = [
  { country: "Armenia", state: "Aragatsotn", lat: 40.3333, lng: 44.3333 },
  { country: "Armenia", state: "Ararat", lat: 39.9000, lng: 44.7000 },
  { country: "Armenia", state: "Armavir", lat: 40.1667, lng: 44.0000 },
  { country: "Armenia", state: "Gegharkunik", lat: 40.3333, lng: 45.3333 },
  { country: "Armenia", state: "Kotayk", lat: 40.2500, lng: 44.7500 },
  { country: "Armenia", state: "Lori", lat: 40.8333, lng: 44.5000 },
  { country: "Armenia", state: "Shirak", lat: 40.7500, lng: 43.8333 },
  { country: "Armenia", state: "Syunik", lat: 39.3333, lng: 46.0000 },
  { country: "Armenia", state: "Tavush", lat: 40.9000, lng: 45.2500 },
  { country: "Armenia", state: "Vayots Dzor", lat: 39.7500, lng: 45.5000 },
  { country: "Armenia", state: "Yerevan", lat: 40.1833, lng: 44.5167 } // Capital City
];

// 9. Australia
const australiaGeoData = [
  { country: "Australia", state: "Australian Capital Territory", lat: -35.4735, lng: 149.0124 },
  { country: "Australia", state: "New South Wales", lat: -32.0000, lng: 147.0000 },
  { country: "Australia", state: "Northern Territory", lat: -19.0000, lng: 133.0000 },
  { country: "Australia", state: "Queensland", lat: -21.0000, lng: 145.0000 },
  { country: "Australia", state: "South Australia", lat: -30.0000, lng: 135.0000 },
  { country: "Australia", state: "Tasmania", lat: -42.0000, lng: 147.0000 },
  { country: "Australia", state: "Victoria", lat: -37.0000, lng: 145.0000 },
  { country: "Australia", state: "Western Australia", lat: -27.0000, lng: 121.0000 }
];

// 10. Austria
const austriaGeoData = [
  { country: "Austria", state: "Burgenland", lat: 47.7500, lng: 16.5000 },
  { country: "Austria", state: "Carinthia", lat: 46.7500, lng: 14.0000 },
  { country: "Austria", state: "Lower Austria", lat: 48.2500, lng: 15.7500 },
  { country: "Austria", state: "Upper Austria", lat: 48.0000, lng: 14.0000 },
  { country: "Austria", state: "Salzburg", lat: 47.5000, lng: 13.0000 },
  { country: "Austria", state: "Styria", lat: 47.2500, lng: 15.2500 },
  { country: "Austria", state: "Tyrol", lat: 47.2500, lng: 11.2500 },
  { country: "Austria", state: "Vorarlberg", lat: 47.2500, lng: 9.7500 },
  { country: "Austria", state: "Vienna", lat: 48.2082, lng: 16.3738 }
];

// 11. Azerbaijan
const azerbaijanGeoData = [
  { country: "Azerbaijan", state: "Absheron", lat: 40.4000, lng: 49.8667 }, // Includes Baku
  { country: "Azerbaijan", state: "Ganja-Qazakh", lat: 40.6833, lng: 46.3500 },
  { country: "Azerbaijan", state: "Lankaran-Astara", lat: 38.7667, lng: 48.8333 },
  { country: "Azerbaijan", state: "Quba-Khachmaz", lat: 41.3500, lng: 48.5167 },
  { country: "Azerbaijan", state: "Shaki-Zaqatala", lat: 41.3833, lng: 46.7500 },
  { country: "Azerbaijan", state: "Shirvan", lat: 39.9500, lng: 48.9167 },
  { country: "Azerbaijan", state: "Yukhari Karabakh", lat: 39.7500, lng: 46.7500 }, // Includes disputed territory
  { country: "Azerbaijan", state: "Nakhchivan Autonomous Republic", lat: 39.2000, lng: 45.4000 }
];

// 12. Bahamas
const bahamasGeoData = [
  { country: "Bahamas", state: "Acklins", lat: 22.6000, lng: -74.0000 },
  { country: "Bahamas", state: "Berry Islands", lat: 25.6667, lng: -77.8000 },
  { country: "Bahamas", state: "Bimini", lat: 25.7333, lng: -79.2833 },
  { country: "Bahamas", state: "Cat Island", lat: 24.4000, lng: -75.4500 },
  { country: "Bahamas", state: "Crooked Island", lat: 22.7500, lng: -73.9500 },
  { country: "Bahamas", state: "Eleuthera", lat: 25.0000, lng: -76.1167 },
  { country: "Bahamas", state: "Exuma", lat: 23.5000, lng: -75.8000 },
  { country: "Bahamas", state: "Grand Bahama", lat: 26.5000, lng: -78.5000 },
  { country: "Bahamas", state: "Inagua", lat: 21.0000, lng: -73.0000 },
  { country: "Bahamas", state: "Long Island", lat: 23.2500, lng: -75.1000 },
  { country: "Bahamas", state: "Mayaguana", lat: 22.3833, lng: -73.0000 },
  { country: "Bahamas", state: "New Providence", lat: 25.0500, lng: -77.3333 }, // Includes Nassau
  { country: "Bahamas", state: "Ragged Island", lat: 22.2167, lng: -75.7333 },
  { country: "Bahamas", state: "Rum Cay", lat: 23.6667, lng: -74.8333 },
  { country: "Bahamas", state: "San Salvador", lat: 24.0500, lng: -74.5000 }
];

// 13. Bahrain
const bahrainGeoData = [
    { country: "Bahrain", state: "Capital", lat: 26.2285, lng: 50.5865 }, // Includes Manama
    { country: "Bahrain", state: "Central", lat: 26.1500, lng: 50.5333 },
    { country: "Bahrain", state: "Muharraq", lat: 26.2667, lng: 50.6167 },
    { country: "Bahrain", state: "Northern", lat: 26.2500, lng: 50.5000 },
    { country: "Bahrain", state: "Southern", lat: 25.9000, lng: 50.5500 }
];

// 14. Bangladesh
const bangladeshGeoData = [
  { country: "Bangladesh", state: "Barishal", lat: 22.7000, lng: 90.3500 },
  { country: "Bangladesh", state: "Chattogram", lat: 22.3384, lng: 91.8316 },
  { country: "Bangladesh", state: "Dhaka", lat: 23.7104, lng: 90.4074 },
  { country: "Bangladesh", state: "Khulna", lat: 22.8167, lng: 89.5667 },
  { country: "Bangladesh", state: "Mymensingh", lat: 24.7500, lng: 90.4167 },
  { country: "Bangladesh", state: "Rajshahi", lat: 24.3667, lng: 88.6000 },
  { country: "Bangladesh", state: "Rangpur", lat: 25.7500, lng: 89.2500 },
  { country: "Bangladesh", state: "Sylhet", lat: 24.8919, lng: 91.8806 }
];

// 15. Barbados
const barbadosGeoData = [
  { country: "Barbados", state: "Christ Church", lat: 13.0667, lng: -59.5333 },
  { country: "Barbados", state: "Saint Andrew", lat: 13.2167, lng: -59.5667 },
  { country: "Barbados", state: "Saint George", lat: 13.1000, lng: -59.5000 },
  { country: "Barbados", state: "Saint James", lat: 13.1833, lng: -59.6333 },
  { country: "Barbados", state: "Saint John", lat: 13.2000, lng: -59.5167 },
  { country: "Barbados", state: "Saint Joseph", lat: 13.2167, lng: -59.5333 },
  { country: "Barbados", state: "Saint Lucy", lat: 13.3167, lng: -59.6333 },
  { country: "Barbados", state: "Saint Michael", lat: 13.1000, lng: -59.6167 }, // Includes Bridgetown
  { country: "Barbados", state: "Saint Peter", lat: 13.2500, lng: -59.6167 },
  { country: "Barbados", state: "Saint Philip", lat: 13.1167, lng: -59.4667 },
  { country: "Barbados", state: "Saint Thomas", lat: 13.1667, lng: -59.5500 }
];

// 16. Belarus
const belarusGeoData = [
  { country: "Belarus", state: "Brest Region", lat: 52.0975, lng: 23.6878 },
  { country: "Belarus", state: "Gomel Region", lat: 52.4345, lng: 31.0154 },
  { country: "Belarus", state: "Grodno Region", lat: 53.6835, lng: 23.8378 },
  { country: "Belarus", state: "Minsk Region", lat: 53.9000, lng: 27.5667 }, // Includes Minsk City
  { country: "Belarus", state: "Mogilev Region", lat: 53.9167, lng: 30.3333 },
  { country: "Belarus", state: "Vitebsk Region", lat: 55.1917, lng: 30.2000 }
];

// 17. Belgium
const belgiumGeoData = [
  { country: "Belgium", state: "Antwerp", lat: 51.2500, lng: 4.4000 },
  { country: "Belgium", state: "Brussels-Capital Region", lat: 50.8333, lng: 4.3333 },
  { country: "Belgium", state: "East Flanders", lat: 51.0000, lng: 3.7500 },
  { country: "Belgium", state: "Flemish Brabant", lat: 50.8750, lng: 4.6667 },
  { country: "Belgium", state: "Hainaut", lat: 50.4167, lng: 4.0000 },
  { country: "Belgium", state: "Liège", lat: 50.6333, lng: 5.5667 },
  { country: "Belgium", state: "Luxembourg", lat: 49.8333, lng: 5.5000 },
  { country: "Belgium", state: "Namur", lat: 50.4667, lng: 4.8667 },
  { country: "Belgium", state: "Walloon Brabant", lat: 50.6667, lng: 4.5833 },
  { country: "Belgium", state: "West Flanders", lat: 51.0000, lng: 3.0000 }
];

// 18. Belize
const belizeGeoData = [
  { country: "Belize", state: "Belize", lat: 17.5000, lng: -88.2000 },
  { country: "Belize", state: "Cayo", lat: 17.2500, lng: -89.0000 },
  { country: "Belize", state: "Corozal", lat: 18.3000, lng: -88.4000 },
  { country: "Belize", state: "Orange Walk", lat: 18.0000, lng: -88.7500 },
  { country: "Belize", state: "Stann Creek", lat: 16.7500, lng: -88.4000 },
  { country: "Belize", state: "Toledo", lat: 16.2500, lng: -89.0000 }
];

// 19. Benin
const beninGeoData = [
    { country: "Benin", state: "Alibori", lat: 11.2500, lng: 3.5000 },
    { country: "Benin", state: "Atakora", lat: 10.7500, lng: 1.2500 },
    { country: "Benin", state: "Atlantique", lat: 6.5000, lng: 2.5000 },
    { country: "Benin", state: "Borgou", lat: 9.7500, lng: 3.0000 },
    { country: "Benin", state: "Collines", lat: 7.5000, lng: 2.0000 },
    { country: "Benin", state: "Couffo", lat: 6.7500, lng: 1.7500 },
    { country: "Benin", state: "Donga", lat: 9.7500, lng: 1.5000 },
    { country: "Benin", state: "Littoral", lat: 6.3667, lng: 2.4167 }, // Cotonou
    { country: "Benin", state: "Mono", lat: 6.5000, lng: 1.5000 },
    { country: "Benin", state: "Ouémé", lat: 6.7500, lng: 2.5000 },
    { country: "Benin", state: "Plateau", lat: 7.0000, lng: 2.7500 },
    { country: "Benin", state: "Zou", lat: 7.2500, lng: 2.2500 }
];

// 20. Bhutan
const bhutanGeoData = [
  { country: "Bhutan", state: "Bumthang", lat: 27.5667, lng: 90.7333 },
  { country: "Bhutan", state: "Chukha", lat: 27.0000, lng: 89.6667 },
  { country: "Bhutan", state: "Dagana", lat: 27.0000, lng: 90.1667 },
  { country: "Bhutan", state: "Gasa", lat: 27.8333, lng: 89.8333 },
  { country: "Bhutan", state: "Haa", lat: 27.2500, lng: 89.2167 },
  { country: "Bhutan", state: "Lhuntse", lat: 27.6667, lng: 91.1667 },
  { country: "Bhutan", state: "Mongar", lat: 27.2500, lng: 91.2500 },
  { country: "Bhutan", state: "Paro", lat: 27.4167, lng: 89.4167 },
  { country: "Bhutan", state: "Pemagatshel", lat: 27.0000, lng: 91.4167 },
  { country: "Bhutan", state: "Punakha", lat: 27.5000, lng: 89.8667 },
  { country: "Bhutan", state: "Samdrup Jongkhar", lat: 26.8333, lng: 91.5000 },
  { country: "Bhutan", state: "Samtse", lat: 26.8333, lng: 89.0833 },
  { country: "Bhutan", state: "Sarpang", lat: 26.8333, lng: 90.2500 },
  { country: "Bhutan", state: "Thimphu", lat: 27.5000, lng: 89.6333 },
  { country: "Bhutan", state: "Trashigang", lat: 27.3333, lng: 91.5667 },
  { country: "Bhutan", state: "Trongsa", lat: 27.5000, lng: 90.5000 },
  { country: "Bhutan", state: "Tsirang", lat: 27.0000, lng: 90.0000 },
  { country: "Bhutan", state: "Wangdue Phodrang", lat: 27.4167, lng: 89.9167 },
  { country: "Bhutan", state: "Zhemgang", lat: 27.0000, lng: 90.7500 }
];

// 21. Bolivia
const boliviaGeoData = [
  { country: "Bolivia", state: "Beni", lat: -14.8333, lng: -64.7500 },
  { country: "Bolivia", state: "Chuquisaca", lat: -19.5000, lng: -64.0000 },
  { country: "Bolivia", state: "Cochabamba", lat: -17.5000, lng: -66.0000 },
  { country: "Bolivia", state: "La Paz", lat: -16.5000, lng: -68.0000 },
  { country: "Bolivia", state: "Oruro", lat: -18.5000, lng: -67.0000 },
  { country: "Bolivia", state: "Pando", lat: -11.0000, lng: -68.0000 },
  { country: "Bolivia", state: "Potosí", lat: -20.0000, lng: -66.0000 },
  { country: "Bolivia", state: "Santa Cruz", lat: -17.5000, lng: -63.0000 },
  { country: "Bolivia", state: "Tarija", lat: -21.5000, lng: -64.0000 }
];

// 22. Bosnia and Herzegovina
const bosniaAndHerzegovinaGeoData = [
  { country: "Bosnia and Herzegovina", state: "Federation of Bosnia and Herzegovina", lat: 44.0000, lng: 18.0000 },
  { country: "Bosnia and Herzegovina", state: "Republika Srpska", lat: 44.7500, lng: 17.5000 },
  { country: "Bosnia and Herzegovina", state: "Brčko District", lat: 44.8667, lng: 18.8000 }
];

// 23. Botswana
const botswanaGeoData = [
  { country: "Botswana", state: "Central", lat: -22.0000, lng: 26.0000 },
  { country: "Botswana", state: "Ghanzi", lat: -21.5000, lng: 21.7500 },
  { country: "Botswana", state: "Kgalagadi", lat: -25.0000, lng: 22.0000 },
  { country: "Botswana", state: "Kgatleng", lat: -24.5000, lng: 26.5000 },
  { country: "Botswana", state: "Kweneng", lat: -24.0000, lng: 24.5000 },
  { country: "Botswana", state: "North-East", lat: -20.5000, lng: 27.5000 },
  { country: "Botswana", state: "North-West", lat: -19.5000, lng: 23.0000 },
  { country: "Botswana", state: "South-East", lat: -24.7500, lng: 25.7500 },
  { country: "Botswana", state: "Southern", lat: -25.5000, lng: 25.0000 }
];

// 24. Brazil
const brazilGeoData = [
  { country: "Brazil", state: "Acre", lat: -9.0000, lng: -70.0000 },
  { country: "Brazil", state: "Alagoas", lat: -9.5000, lng: -36.5000 },
  { country: "Brazil", state: "Amapá", lat: 1.0000, lng: -52.0000 },
  { country: "Brazil", state: "Amazonas", lat: -3.0000, lng: -63.0000 },
  { country: "Brazil", state: "Bahia", lat: -12.5000, lng: -41.5000 },
  { country: "Brazil", state: "Ceará", lat: -5.0000, lng: -39.5000 },
  { country: "Brazil", state: "Distrito Federal", lat: -15.7500, lng: -47.7500 },
  { country: "Brazil", state: "Espírito Santo", lat: -20.0000, lng: -40.5000 },
  { country: "Brazil", state: "Goiás", lat: -16.0000, lng: -50.0000 },
  { country: "Brazil", state: "Maranhão", lat: -5.0000, lng: -45.0000 },
  { country: "Brazil", state: "Mato Grosso", lat: -13.0000, lng: -56.0000 },
  { country: "Brazil", state: "Mato Grosso do Sul", lat: -21.0000, lng: -55.0000 },
  { country: "Brazil", state: "Minas Gerais", lat: -19.0000, lng: -44.5000 },
  { country: "Brazil", state: "Pará", lat: -3.0000, lng: -52.0000 },
  { country: "Brazil", state: "Paraíba", lat: -7.0000, lng: -37.0000 },
  { country: "Brazil", state: "Paraná", lat: -24.5000, lng: -51.0000 },
  { country: "Brazil", state: "Pernambuco", lat: -8.0000, lng: -35.0000 },
  { country: "Brazil", state: "Piauí", lat: -8.0000, lng: -43.0000 },
  { country: "Brazil", state: "Rio de Janeiro", lat: -22.5000, lng: -43.0000 },
  { country: "Brazil", state: "Rio Grande do Norte", lat: -6.0000, lng: -36.5000 },
  { country: "Brazil", state: "Rio Grande do Sul", lat: -30.0000, lng: -53.0000 },
  { country: "Brazil", state: "Rondônia", lat: -10.0000, lng: -63.0000 },
  { country: "Brazil", state: "Roraima", lat: 2.0000, lng: -61.0000 },
  { country: "Brazil", state: "Santa Catarina", lat: -27.5000, lng: -50.0000 },
  { country: "Brazil", state: "São Paulo", lat: -23.5000, lng: -46.5000 },
  { country: "Brazil", state: "Sergipe", lat: -10.5000, lng: -37.0000 },
  { country: "Brazil", state: "Tocantins", lat: -10.0000, lng: -48.0000 }
];

// 25. Brunei
const bruneiGeoData = [
  { country: "Brunei", state: "Belait", lat: 4.5000, lng: 114.3333 },
  { country: "Brunei", state: "Brunei-Muara", lat: 4.9000, lng: 114.9333 },
  { country: "Brunei", state: "Temburong", lat: 4.5833, lng: 115.1667 },
  { country: "Brunei", state: "Tutong", lat: 4.7500, lng: 114.6667 }
];

// 26. Bulgaria
const bulgariaGeoData = [
  { country: "Bulgaria", state: "Blagoevgrad", lat: 41.9667, lng: 23.0833 },
  { country: "Bulgaria", state: "Burgas", lat: 42.5000, lng: 27.2500 },
  { country: "Bulgaria", state: "Dobrich", lat: 43.5667, lng: 27.8333 },
  { country: "Bulgaria", state: "Gabrovo", lat: 42.8667, lng: 25.3167 },
  { country: "Bulgaria", state: "Haskovo", lat: 41.9333, lng: 25.5500 },
  { country: "Bulgaria", state: "Kardzhali", lat: 41.6500, lng: 25.3667 },
  { country: "Bulgaria", state: "Kyustendil", lat: 42.2833, lng: 22.6833 },
  { country: "Bulgaria", state: "Lovech", lat: 43.1333, lng: 24.7167 },
  { country: "Bulgaria", state: "Montana", lat: 43.4000, lng: 23.2333 },
  { country: "Bulgaria", state: "Pazardzhik", lat: 42.1833, lng: 24.3333 },
  { country: "Bulgaria", state: "Pernik", lat: 42.6000, lng: 23.0333 },
  { country: "Bulgaria", state: "Pleven", lat: 43.4000, lng: 24.6167 },
  { country: "Bulgaria", state: "Plovdiv", lat: 42.1500, lng: 24.7500 },
  { country: "Bulgaria", state: "Razgrad", lat: 43.5333, lng: 26.5167 },
  { country: "Bulgaria", state: "Ruse", lat: 43.8333, lng: 25.9667 },
  { country: "Bulgaria", state: "Shumen", lat: 43.2667, lng: 26.9333 },
  { country: "Bulgaria", state: "Silistra", lat: 44.1167, lng: 27.2667 },
  { country: "Bulgaria", state: "Sliven", lat: 42.6833, lng: 26.3167 },
  { country: "Bulgaria", state: "Smolyan", lat: 41.5000, lng: 24.7000 },
  { country: "Bulgaria", state: "Sofia City", lat: 42.6977, lng: 23.3219}, // Sofia
  { country: "Bulgaria", state: "Sofia Province", lat: 42.7500, lng: 23.7500 },
  { country: "Bulgaria", state: "Stara Zagora", lat: 42.4333, lng: 25.6167 },
  { country: "Bulgaria", state: "Targovishte", lat: 43.2500, lng: 26.5833 },
  { country: "Bulgaria", state: "Varna", lat: 43.2167, lng: 27.9167 },
  { country: "Bulgaria", state: "Veliko Tarnovo", lat: 43.0833, lng: 25.6333 },
  { country: "Bulgaria", state: "Vidin", lat: 43.9833, lng: 22.8667 },
  { country: "Bulgaria", state: "Vratsa", lat: 43.2167, lng: 23.5500 },
  { country: "Bulgaria", state: "Yambol", lat: 42.4833, lng: 26.5000 }
];

// 27. Burkina Faso
const burkinaFasoGeoData = [
  { country: "Burkina Faso", state: "Boucle du Mouhoun", lat: 12.5000, lng: -3.5000 },
  { country: "Burkina Faso", state: "Cascades", lat: 10.2500, lng: -5.0000 },
  { country: "Burkina Faso", state: "Centre", lat: 12.3000, lng: -1.5000 },
  { country: "Burkina Faso", state: "Centre-Est", lat: 11.7500, lng: 0.2500 },
  { country: "Burkina Faso", state: "Centre-Nord", lat: 13.2500, lng: -1.7500 },
  { country: "Burkina Faso", state: "Centre-Ouest", lat: 12.2500, lng: -2.5000 },
  { country: "Burkina Faso", state: "Est", lat: 12.0000, lng: 1.0000 },
  { country: "Burkina Faso", state: "Hauts-Bassins", lat: 11.2500, lng: -4.5000 },
  { country: "Burkina Faso", state: "Nord", lat: 14.0000, lng: -2.0000 },
  { country: "Burkina Faso", state: "Plateau-Central", lat: 12.5000, lng: -1.0000 },
  { country: "Burkina Faso", state: "Sahel", lat: 14.2500, lng: 0.0000 },
  { country: "Burkina Faso", state: "Sud-Ouest", lat: 10.5000, lng: -3.0000 }
];

// 28. Burundi
const burundiGeoData = [
  { country: "Burundi", state: "Bujumbura Mairie", lat: -3.3822, lng: 29.3644 },
  { country: "Burundi", state: "Bubanza", lat: -3.0500, lng: 29.4000 },
  { country: "Burundi", state: "Cankuzo", lat: -3.0000, lng: 30.3000 },
  { country: "Burundi", state: "Cibitoke", lat: -2.8833, lng: 29.1333 },
  { country: "Burundi", state: "Gitega", lat: -3.4333, lng: 29.9333 },
  { country: "Burundi", state: "Karusi", lat: -3.1833, lng: 30.1500 },
  { country: "Burundi", state: "Kayanza", lat: -2.9167, lng: 29.6167 },
  { country: "Burundi", state: "Kirundo", lat: -2.5333, lng: 30.0833 },
  { country: "Burundi", state: "Makamba", lat: -4.1333, lng: 29.8000 },
  { country: "Burundi", state: "Muramvya", lat: -3.2667, lng: 29.6000 },
  { country: "Burundi", state: "Mwaro", lat: -3.5167, lng: 29.7167 },
  { country: "Burundi", state: "Ngozi", lat: -2.9000, lng: 29.8333 },
  { country: "Burundi", state: "Rutana", lat: -3.9167, lng: 30.0000 },
  { country: "Burundi", state: "Ruyigi", lat: -3.4667, lng: 30.2500 },
];

// 29. Cabo Verde
const caboVerdeGeoData = [
  { country: "Cabo Verde", state: "Boa Vista", lat: 16.1333, lng: -22.8000 },
  { country: "Cabo Verde", state: "Brava", lat: 14.8500, lng: -24.7000 },
  { country: "Cabo Verde", state: "Fogo", lat: 14.9500, lng: -24.4667 },
  { country: "Cabo Verde", state: "Maio", lat: 15.1333, lng: -23.1667 },
  { country: "Cabo Verde", state: "Mosteiros", lat: 15.0667, lng: -24.3333},
  { country: "Cabo Verde", state: "Paul", lat: 17.0667, lng: -25.0000},
  { country: "Cabo Verde", state: "Porto Novo", lat: 17.0333, lng: -25.0667},
  { country: "Cabo Verde", state: "Praia", lat: 14.9167, lng: -23.5167 },
  { country: "Cabo Verde", state: "Ribeira Grande", lat: 17.2000, lng: -25.0833},
  { country: "Cabo Verde", state: "Sal", lat: 16.7500, lng: -22.9500 },
  { country: "Cabo Verde", state: "Santa Catarina", lat: 15.0000, lng: -23.6000},
  { country: "Cabo Verde", state: "Santa Cruz", lat: 15.1167, lng: -23.5167},
  { country: "Cabo Verde", state: "São Domingos", lat: 15.0000, lng: -23.5000},
  { country: "Cabo Verde", state: "São Filipe", lat: 14.8833, lng: -24.4833},
  { country: "Cabo Verde", state: "São Miguel", lat: 15.1333, lng: -23.6333},
  { country: "Cabo Verde", state: "São Vicente", lat: 16.8833, lng: -24.9833 },
  { country: "Cabo Verde", state: "Tarrafal", lat: 15.2667, lng: -23.7667},
  { country: "Cabo Verde", state: "Tarrafal de São Nicolau", lat: 16.5667, lng: -24.3500},
]; 

// 30. Cambodia
const cambodiaGeoData = [
  { country: "Cambodia", state: "Banteay Meanchey", lat: 13.7500, lng: 102.8000 },
  { country: "Cambodia", state: "Battambang", lat: 13.1000, lng: 103.2000 },
  { country: "Cambodia", state: "Kampong Cham", lat: 12.0000, lng: 105.5000 },
  { country: "Cambodia", state: "Kampong Chhnang", lat: 12.2500, lng: 104.5000 },
  { country: "Cambodia", state: "Kampong Speu", lat: 11.4500, lng: 104.5000 },
  { country: "Cambodia", state: "Kampot", lat: 10.6000, lng: 104.2000 },
  { country: "Cambodia", state: "Kandal", lat: 11.5000, lng: 105.0000 },
  { country: "Cambodia", state: "Kep", lat: 10.3167, lng: 104.3167 },
  { country: "Cambodia", state: "Koh Kong", lat: 11.6167, lng: 103.0000 },
  { country: "Cambodia", state: "Kratie", lat: 12.4833, lng: 106.0167 },
  { country: "Cambodia", state: "Mondulkiri", lat: 12.5000, lng: 107.2500 },
  { country: "Cambodia", state: "Oddar Meanchey", lat: 14.2500, lng: 103.5000 },
  { country: "Cambodia", state: "Pailin", lat: 12.8500, lng: 102.5833 },
  { country: "Cambodia", state: "Phnom Penh", lat: 11.5500, lng: 104.9167 },
  { country: "Cambodia", state: "Preah Sihanouk", lat: 10.6333, lng: 103.5000 },
  { country: "Cambodia", state: "Preah Vihear", lat: 14.0000, lng: 104.9833 },
  { country: "Cambodia", state: "Pursat", lat: 12.5333, lng: 103.9167 },
  { country: "Cambodia", state: "Ratanakiri", lat: 13.7500, lng: 106.0000 },
  { country: "Cambodia", state: "Siem Reap", lat: 13.3667, lng: 103.8500 },
  { country: "Cambodia", state: "Stung Treng", lat: 13.5000, lng: 105.9667 },
  { country: "Cambodia", state: "Svay Rieng", lat: 11.0833, lng: 105.7833 },
  { country: "Cambodia", state: "Takeo", lat: 11.1333, lng: 104.8000 },
];

// 31. Cameroon
const cameroonGeoData = [
  { country: "Cameroon", state: "Adamawa", lat: 7.3333, lng: 13.5000 },
  { country: "Cameroon", state: "Centre", lat: 4.5000, lng: 11.5000 },
  { country: "Cameroon", state: "East", lat: 4.0000, lng: 14.0000 },
  { country: "Cameroon", state: "Far North", lat: 10.5000, lng: 14.5000 },
  { country: "Cameroon", state: "Littoral", lat: 4.0000, lng: 9.7500 },
  { country: "Cameroon", state: "North", lat: 8.5000, lng: 14.0000 },
  { country: "Cameroon", state: "Northwest", lat: 6.0000, lng: 10.5000 },
  { country: "Cameroon", state: "South", lat: 2.5000, lng: 10.5000 },
  { country: "Cameroon", state: "Southwest", lat: 4.5000, lng: 9.2500 },
  { country: "Cameroon", state: "West", lat: 5.5000, lng: 10.2500 }
];

// 32. Canada
const canadaGeoData = [
  { country: "Canada", province: "Alberta", lat: 53.9333, lng: -116.5765 },
  { country: "Canada", province: "British Columbia", lat: 53.7267, lng: -127.6476 },
  { country: "Canada", province: "Manitoba", lat: 53.7609, lng: -98.8139 },
  { country: "Canada", province: "New Brunswick", lat: 46.5653, lng: -66.4619 },
  { country: "Canada", province: "Newfoundland and Labrador", lat: 53.1355, lng: -57.6604 },
  { country: "Canada", province: "Nova Scotia", lat: 44.6820, lng: -63.7443 },
  { country: "Canada", province: "Ontario", lat: 51.2538, lng: -85.3232 },
  { country: "Canada", province: "Prince Edward Island", lat: 46.5107, lng: -63.4168 },
  { country: "Canada", province: "Quebec", lat: 52.9399, lng: -73.5491 },
  { country: "Canada", province: "Saskatchewan", lat: 52.9399, lng: -106.4509 },
  { country: "Canada", territory: "Northwest Territories", lat: 64.8255, lng: -124.8457 },
  { country: "Canada", territory: "Nunavut", lat: 70.2999, lng: -83.1076 },
  { country: "Canada", territory: "Yukon", lat: 64.2823, lng: -135.0000 }
];

// 33. Central African Republic
const centralAfricanRepublicGeoData = [
  { country: "Central African Republic", state: "Bamingui-Bangoran", lat: 8.0, lng: 21.0 },
  { country: "Central African Republic", state: "Bangui", lat: 4.3667, lng: 18.5833 },
  { country: "Central African Republic", state: "Basse-Kotto", lat: 5.0, lng: 22.0 },
  { country: "Central African Republic", state: "Haute-Kotto", lat: 7.0, lng: 25.0 },
  { country: "Central African Republic", state: "Haut-Mbomou", lat: 5.0, lng: 26.0 },
  { country: "Central African Republic", state: "Kémo", lat: 5.0, lng: 19.0 },
  { country: "Central African Republic", state: "Lobaye", lat: 4.0, lng: 17.0 },
  { country: "Central African Republic", state: "Mambéré-Kadéï", lat: 5.0, lng: 16.0 },
  { country: "Central African Republic", state: "Mbomou", lat: 4.0, lng: 24.0 },
  { country: "Central African Republic", state: "Nana-Grébizi", lat: 7.0, lng: 20.0 },
  { country: "Central African Republic", state: "Nana-Mambéré", lat: 6.0, lng: 15.0 },
  { country: "Central African Republic", state: "Ombella-M'Poko", lat: 4.5, lng: 18.0 },
  { country: "Central African Republic", state: "Ouaka", lat: 6.0, lng: 22.0 },
  { country: "Central African Republic", state: "Ouham", lat: 7.0, lng: 18.0 },
  { country: "Central African Republic", state: "Ouham-Pendé", lat: 7.0, lng: 16.0 },
  { country: "Central African Republic", state: "Sangha-Mbaéré", lat: 3.5, lng: 16.0 },
  { country: "Central African Republic", state: "Vakaga", lat: 10.0, lng: 23.0 }
];

// 34. Chad
const chadGeoData = [
  { country: "Chad", state: "Bahr el Gazel", lat: 15.0, lng: 18.0 },
  { country: "Chad", state: "Batha", lat: 13.0, lng: 18.0 },
  { country: "Chad", state: "Borkou", lat: 19.0, lng: 18.0 },
  { country: "Chad", state: "Ennedi Est", lat: 17.0, lng: 23.0 },
  { country: "Chad", state: "Ennedi Ouest", lat: 18.0, lng: 21.0 },
  { country: "Chad", state: "Guéra", lat: 11.5, lng: 18.5 },
  { country: "Chad", state: "Hadjer-Lamis", lat: 12.5, lng: 16.0 },
  { country: "Chad", state: "Kanem", lat: 14.0, lng: 15.0 },
  { country: "Chad", state: "Lac", lat: 13.5, lng: 14.5 },
  { country: "Chad", state: "Logone Occidental", lat: 9.0, lng: 15.5 },
  { country: "Chad", state: "Logone Oriental", lat: 8.5, lng: 16.5 },
  { country: "Chad", state: "Mandoul", lat: 9.0, lng: 17.5 },
  { country: "Chad", state: "Mayo-Kebbi Est", lat: 9.5, lng: 15.0 },
  { country: "Chad", state: "Mayo-Kebbi Ouest", lat: 9.2, lng: 14.5 },
  { country: "Chad", state: "Moyen-Chari", lat: 9.5, lng: 18.5 },
  { country: "Chad", state: "Ouaddaï", lat: 13.5, lng: 21.0 },
  { country: "Chad", state: "Salamat", lat: 11.0, lng: 20.5 },
  { country: "Chad", state: "Sila", lat: 12.0, lng: 22.0 },
  { country: "Chad", state: "Tandjilé", lat: 10.0, lng: 16.0 },
  { country: "Chad", state: "Tibesti", lat: 21.0, lng: 17.0 },
  { country: "Chad", state: "Wadi Fira", lat: 14.5, lng: 22.0 }
];

// 35. Chile
const chileGeoData = [
  { country: "Chile", state: "Arica y Parinacota", lat: -18.4752, lng: -70.3001 },
  { country: "Chile", state: "Tarapacá", lat: -20.5500, lng: -69.3000 },
  { country: "Chile", state: "Antofagasta", lat: -24.0000, lng: -69.0000 },
  { country: "Chile", state: "Atacama", lat: -27.5000, lng: -70.0000 },
  { country: "Chile", state: "Coquimbo", lat: -30.0000, lng: -71.0000 },
  { country: "Chile", state: "Valparaíso", lat: -33.0000, lng: -71.5000 },
  { country: "Chile", state: "Metropolitana de Santiago", lat: -33.4500, lng: -70.6667 },
  { country: "Chile", state: "Libertador General Bernardo O'Higgins", lat: -34.5000, lng: -71.0000 },
  { country: "Chile", state: "Maule", lat: -35.5000, lng: -72.0000 },
  { country: "Chile", state: "Ñuble", lat: -36.6000, lng: -72.0000 },
  { country: "Chile", state: "Biobío", lat: -37.0000, lng: -73.0000 },
  { country: "Chile", state: "La Araucanía", lat: -38.7000, lng: -72.6000 },
  { country: "Chile", state: "Los Ríos", lat: -39.8000, lng: -73.2000 },
  { country: "Chile", state: "Los Lagos", lat: -41.5000, lng: -73.0000 },
  { country: "Chile", state: "Aysén del General Carlos Ibáñez del Campo", lat: -45.5000, lng: -72.0000 },
  { country: "Chile", state: "Magallanes y de la Antártica Chilena", lat: -53.0000, lng: -71.0000 }
];

// 36. China
const chinaGeoData = [
  { country: "China", state: "Anhui", lat: 31.8283, lng: 117.2272 },
  { country: "China", state: "Beijing", lat: 39.9042, lng: 116.4074 },
  { country: "China", state: "Chongqing", lat: 29.9717, lng: 106.5824 },
  { country: "China", state: "Fujian", lat: 26.0789, lng: 117.9874 },
  { country: "China", state: "Gansu", lat: 36.0570, lng: 103.8235 },
  { country: "China", state: "Guangdong", lat: 23.1291, lng: 113.2644 },
  { country: "China", state: "Guangxi", lat: 23.5500, lng: 108.3167 },
  { country: "China", state: "Guizhou", lat: 26.8154, lng: 106.7187 },
  { country: "China", state: "Hainan", lat: 19.2000, lng: 109.9000 },
  { country: "China", state: "Hebei", lat: 38.0428, lng: 114.5097 },
  { country: "China", state: "Heilongjiang", lat: 47.8649, lng: 127.6025 },
  { country: "China", state: "Henan", lat: 33.8947, lng: 113.6145 },
  { country: "China", state: "Hong Kong", lat: 22.3964, lng: 114.1095 },
  { country: "China", state: "Hubei", lat: 30.9756, lng: 112.2707 },
  { country: "China", state: "Hunan", lat: 27.6822, lng: 111.7088 },
  { country: "China", state: "Inner Mongolia", lat: 40.8183, lng: 111.6731 },
  { country: "China", state: "Jiangsu", lat: 32.0415, lng: 118.7674 },
  { country: "China", state: "Jiangxi", lat: 27.9881, lng: 115.0000 },
  { country: "China", state: "Jilin", lat: 43.8868, lng: 125.3224 },
  { country: "China", state: "Liaoning", lat: 41.7901, lng: 123.4328 },
  { country: "China", state: "Macau", lat: 22.1987, lng: 113.5491 },
  { country: "China", state: "Ningxia", lat: 37.2822, lng: 106.0000 },
  { country: "China", state: "Qinghai", lat: 36.6172, lng: 101.7781 },
  { country: "China", state: "Shaanxi", lat: 34.2631, lng: 108.9480 },
  { country: "China", state: "Shandong", lat: 36.6683, lng: 117.0000 },
  { country: "China", state: "Shanghai", lat: 31.2304, lng: 121.4737 },
  { country: "China", state: "Shanxi", lat: 37.8700, lng: 112.5600 },
  { country: "China", state: "Sichuan", lat: 30.6595, lng: 104.0657 },
  { country: "China", state: "Taiwan", lat: 23.6978, lng: 120.9605 },
  { country: "China", state: "Tianjin", lat: 39.1400, lng: 117.2000 },
  { country: "China", state: "Tibet", lat: 30.0000, lng: 90.0000 },
  { country: "China", state: "Xinjiang", lat: 43.7949, lng: 87.6177 },
  { country: "China", state: "Yunnan", lat: 25.0406, lng: 101.7000 },
  { country: "China", state: "Zhejiang", lat: 29.1800, lng: 120.0900 }
];

// 37. Colombia
const colombiaGeoData = [
  { country: "Colombia", state: "Amazonas", lat: -0.5000, lng: -70.0000 },
  { country: "Colombia", state: "Antioquia", lat: 6.2500, lng: -75.5667 },
  { country: "Colombia", state: "Arauca", lat: 7.0000, lng: -70.7500 },
  { country: "Colombia", state: "Atlántico", lat: 10.9878, lng: -74.7889 },
  { country: "Colombia", state: "Bolívar", lat: 9.0000, lng: -75.0000 },
  { country: "Colombia", state: "Boyacá", lat: 5.5000, lng: -73.0000 },
  { country: "Colombia", state: "Caldas", lat: 5.0000, lng: -75.5000 },
  { country: "Colombia", state: "Caquetá", lat: 1.5000, lng: -74.5000 },
  { country: "Colombia", state: "Casanare", lat: 5.5000, lng: -72.0000 },
  { country: "Colombia", state: "Cauca", lat: 2.5000, lng: -77.0000 },
  { country: "Colombia", state: "Cesar", lat: 10.0000, lng: -73.5000 },
  { country: "Colombia", state: "Chocó", lat: 5.0000, lng: -76.5000 },
  { country: "Colombia", state: "Córdoba", lat: 8.5000, lng: -75.5000 },
  { country: "Colombia", state: "Cundinamarca", lat: 4.5000, lng: -74.2500 },
  { country: "Colombia", state: "Guainía", lat: 2.5000, lng: -69.0000 },
  { country: "Colombia", state: "Guaviare", lat: 2.0000, lng: -72.5000 },
  { country: "Colombia", state: "Huila", lat: 2.5000, lng: -75.5000 },
  { country: "Colombia", state: "La Guajira", lat: 11.5000, lng: -72.5000 },
  { country: "Colombia", state: "Magdalena", lat: 10.5000, lng: -74.0000 },
  { country: "Colombia", state: "Meta", lat: 3.5000, lng: -73.5000 },
  { country: "Colombia", state: "Nariño", lat: 1.5000, lng: -78.0000 },
  { country: "Colombia", state: "Norte de Santander", lat: 8.0000, lng: -73.0000 },
  { country: "Colombia", state: "Putumayo", lat: 0.5000, lng: -76.0000 },
  { country: "Colombia", state: "Quindío", lat: 4.5000, lng: -75.7500 },
  { country: "Colombia", state: "Risaralda", lat: 5.0000, lng: -76.0000 },
  { country: "Colombia", state: "San Andrés y Providencia", lat: 12.5000, lng: -81.5000 },
  { country: "Colombia", state: "Santander", lat: 7.0000, lng: -73.5000 },
  { country: "Colombia", state: "Sucre", lat: 9.0000, lng: -75.2500 },
  { country: "Colombia", state: "Tolima", lat: 4.0000, lng: -75.0000 },
  { country: "Colombia", state: "Valle del Cauca", lat: 3.5000, lng: -76.5000 },
  { country: "Colombia", state: "Vaupés", lat: 1.0000, lng: -70.5000 },
  { country: "Colombia", state: "Vichada", lat: 4.0000, lng: -69.0000 }
];

// 38. Comoros
const comorosGeoData = [
  { country: "Comoros", island: "Grande Comore (Ngazidja)", lat: -11.7500, lng: 43.3333 },
  { country: "Comoros", island: "Mohéli (Mwali)", lat: -12.3000, lng: 43.7000 },
  { country: "Comoros", island: "Anjouan (Ndzuani)", lat: -12.2333, lng: 44.4333 },
  { country: "Comoros", island: "Mayotte (Maore)", lat: -12.8333, lng: 45.1667 } // Claimed by Comoros, administered by France
];

// 39. Congo, Democratic Republic of the Congo
const congoDemocraticRepublicGeoData = [
  { country: "Democratic Republic of the Congo", state: "Kinshasa", lat: -4.4419, lng: 15.2663 },
  { country: "Democratic Republic of the Congo", state: "Kongo Central", lat: -5.7833, lng: 13.0667 },
  { country: "Democratic Republic of the Congo", state: "Kwango", lat: -6.4667, lng: 17.2833 },
  { country: "Democratic Republic of the Congo", state: "Kwilu", lat: -5.0333, lng: 18.8167 },
  { country: "Democratic Republic of the Congo", state: "Mai-Ndombe", lat: -2.6333, lng: 18.3333 },
  { country: "Democratic Republic of the Congo", state: "Kasai", lat: -5.0333, lng: 20.3667 },
  { country: "Democratic Republic of the Congo", state: "Kasai-Central", lat: -6.1167, lng: 22.4833 },
  { country: "Democratic Republic of the Congo", state: "Kasai-Oriental", lat: -6.5167, lng: 23.6000 },
  { country: "Democratic Republic of the Congo", state: "Lomami", lat: -7.0000, lng: 24.0000 },
  { country: "Democratic Republic of the Congo", state: "Sankuru", lat: -3.0000, lng: 23.4333 },
  { country: "Democratic Republic of the Congo", state: "Maniema", lat: -3.0333, lng: 26.1500 },
  { country: "Democratic Republic of the Congo", state: "South Kivu", lat: -3.0667, lng: 28.5167 },
  { country: "Democratic Republic of the Congo", state: "North Kivu", lat: -1.6667, lng: 28.8333 },
  { country: "Democratic Republic of the Congo", state: "Ituri", lat: 1.8833, lng: 29.9333 },
  { country: "Democratic Republic of the Congo", state: "Haut-Uele", lat: 3.2167, lng: 27.9167 },
  { country: "Democratic Republic of the Congo", state: "Tshopo", lat: 0.5167, lng: 25.2000 },
  { country: "Democratic Republic of the Congo", state: "Bas-Uele", lat: 3.3333, lng: 25.0000 },
  { country: "Democratic Republic of the Congo", state: "Nord-Ubangi", lat: 3.6833, lng: 21.0000 },
  { country: "Democratic Republic of the Congo", state: "Mongala", lat: 2.1667, lng: 21.5000 },
  { country: "Democratic Republic of the Congo", state: "Sud-Ubangi", lat: 3.4000, lng: 19.2333 },
  { country: "Democratic Republic of the Congo", state: "Équateur", lat: 0.0333, lng: 18.2667 },
  { country: "Democratic Republic of the Congo", state: "Tshuapa", lat: -0.1000, lng: 22.4667 },
  { country: "Democratic Republic of the Congo", state: "Tanganyika", lat: -6.7333, lng: 27.5000 },
  { country: "Democratic Republic of the Congo", state: "Haut-Lomami", lat: -7.7500, lng: 24.9833 },
  { country: "Democratic Republic of the Congo", state: "Lualaba", lat: -10.7167, lng: 25.4667 },
  { country: "Democratic Republic of the Congo", state: "Haut-Katanga", lat: -11.6667, lng: 27.4833 },
];

// 40. Congo, Republic of the Congo
const congoRepublicGeoData = [
  { country: "Republic of the Congo", state: "Bouenza", lat: -4.1133, lng: 13.7267 },
  { country: "Republic of the Congo", state: "Brazzaville", lat: -4.2634, lng: 15.2429 },
  { country: "Republic of the Congo", state: "Cuvette", lat: -0.0015, lng: 16.3897 },
  { country: "Republic of the Congo", state: "Cuvette-Ouest", lat: 0.8853, lng: 14.7997 },
  { country: "Republic of the Congo", state: "Kouilou", lat: -4.1583, lng: 11.8885 },
  { country: "Republic of the Congo", state: "Lékoumou", lat: -3.1344, lng: 13.9989 },
  { country: "Republic of the Congo", state: "Likouala", lat: 2.9427, lng: 17.7199 },
  { country: "Republic of the Congo", state: "Niari", lat: -3.2000, lng: 12.2500 },
  { country: "Republic of the Congo", state: "Plateaux", lat: -2.0683, lng: 15.8669 },
  { country: "Republic of the Congo", state: "Pointe-Noire", lat: -4.7789, lng: 11.8635 },
  { country: "Republic of the Congo", state: "Pool", lat: -3.7667, lng: 14.7500 },
  { country: "Republic of the Congo", state: "Sangha", lat: 1.4669, lng: 15.3832 }
];

// 41. Costa Rica
const costaRicaGeoData = [
  { country: "Costa Rica", province: "Alajuela", lat: 10.0162, lng: -84.2144 },
  { country: "Costa Rica", province: "Cartago", lat: 9.8638, lng: -83.9196 },
  { country: "Costa Rica", province: "Guanacaste", lat: 10.6267, lng: -85.4437 },
  { country: "Costa Rica", province: "Heredia", lat: 10.0024, lng: -84.1165 },
  { country: "Costa Rica", province: "Limón", lat: 9.9911, lng: -83.0374 },
  { country: "Costa Rica", province: "Puntarenas", lat: 9.9765, lng: -84.8384 },
  { country: "Costa Rica", province: "San José", lat: 9.9281, lng: -84.0907 }
];

// 42. Croatia
const croatiaGeoData = [
  { country: "Croatia", county: "Bjelovar-Bilogora", lat: 45.8990, lng: 16.8419 },
  { country: "Croatia", county: "Brod-Posavina", lat: 45.1611, lng: 17.7442 },
  { country: "Croatia", county: "Dubrovnik-Neretva", lat: 42.8127, lng: 17.6791 },
  { country: "Croatia", county: "Istria", lat: 45.2275, lng: 13.9379 },
  { country: "Croatia", county: "Karlovac", lat: 45.4929, lng: 15.5553 },
  { country: "Croatia", county: "Koprivnica-Križevci", lat: 46.1638, lng: 16.8278 },
  { country: "Croatia", county: "Krapina-Zagorje", lat: 46.1000, lng: 15.8833 },
  { country: "Croatia", county: "Lika-Senj", lat: 44.5403, lng: 15.3717 },
  { country: "Croatia", county: "Međimurje", lat: 46.3744, lng: 16.4336 },
  { country: "Croatia", county: "Osijek-Baranja", lat: 45.5550, lng: 18.6955 },
  { country: "Croatia", county: "Požega-Slavonia", lat: 45.3319, lng: 17.6753 },
  { country: "Croatia", county: "Primorje-Gorski Kotar", lat: 45.3270, lng: 14.4422 },
  { country: "Croatia", county: "Šibenik-Knin", lat: 43.7350, lng: 15.8952 },
  { country: "Croatia", county: "Sisak-Moslavina", lat: 45.4851, lng: 16.3751 },
  { country: "Croatia", county: "Split-Dalmatia", lat: 43.5147, lng: 16.4435 },
  { country: "Croatia", county: "Varaždin", lat: 46.3044, lng: 16.3378 },
  { country: "Croatia", county: "Virovitica-Podravina", lat: 45.8319, lng: 17.3839 },
  { country: "Croatia", county: "Vukovar-Srijem", lat: 45.2877, lng: 18.8045 },
  { country: "Croatia", county: "Zadar", lat: 44.1194, lng: 15.2314 },
  { country: "Croatia", county: "Zagreb County", lat: 45.8150, lng: 15.9819 },
  { country: "Croatia", county: "City of Zagreb", lat: 45.8150, lng: 15.9819 }
];

// 43. Cuba
const cubaGeoData = [
  { country: "Cuba", province: "Artemisa", lat: 22.8167, lng: -82.7500 },
  { country: "Cuba", province: "Camagüey", lat: 21.3808, lng: -77.9169 },
  { country: "Cuba", province: "Ciego de Ávila", lat: 21.8400, lng: -78.7619 },
  { country: "Cuba", province: "Cienfuegos", lat: 22.1456, lng: -80.4358 },
  { country: "Cuba", province: "Granma", lat: 20.3764, lng: -76.6458 },
  { country: "Cuba", province: "Guantánamo", lat: 20.1453, lng: -75.2089 },
  { country: "Cuba", province: "Havana", lat: 23.1136, lng: -82.3666 },
  { country: "Cuba", province: "Holguín", lat: 20.8872, lng: -76.2631 },
  { country: "Cuba", province: "Isla de la Juventud", lat: 21.7000, lng: -82.8500 },
  { country: "Cuba", province: "Las Tunas", lat: 20.9617, lng: -76.9511 },
  { country: "Cuba", province: "Matanzas", lat: 23.0511, lng: -81.5767 },
  { country: "Cuba", province: "Mayabeque", lat: 22.9667, lng: -82.1500 },
  { country: "Cuba", province: "Pinar del Río", lat: 22.4175, lng: -83.6981 },
  { country: "Cuba", province: "Sancti Spíritus", lat: 21.9269, lng: -79.4425 },
  { country: "Cuba", province: "Santiago de Cuba", lat: 20.0217, lng: -75.8267 },
  { country: "Cuba", province: "Villa Clara", lat: 22.4067, lng: -79.9647 }
];

// 44. Cyprus
const cyprusGeoData = [
  { country: "Cyprus", district: "Famagusta", lat: 35.1167, lng: 33.9500 },
  { country: "Cyprus", district: "Kyrenia", lat: 35.3364, lng: 33.3189 },
  { country: "Cyprus", district: "Larnaca", lat: 34.9000, lng: 33.6333 },
  { country: "Cyprus", district: "Limassol", lat: 34.6786, lng: 33.0339 },
  { country: "Cyprus", district: "Nicosia", lat: 35.1856, lng: 33.3822 },
  { country: "Cyprus", district: "Paphos", lat: 34.7767, lng: 32.4253 }
];

// 45. Czech Republic (Czechia)
const czechRepublicGeoData = [
  { country: "Czech Republic", region: "Prague", lat: 50.0755, lng: 14.4378 },
  { country: "Czech Republic", region: "Central Bohemian", lat: 50.0000, lng: 14.5000 },
  { country: "Czech Republic", region: "South Bohemian", lat: 48.9747, lng: 14.4744 },
  { country: "Czech Republic", region: "Plzeň", lat: 49.7475, lng: 13.3775 },
  { country: "Czech Republic", region: "Karlovy Vary", lat: 50.2319, lng: 12.8711 },
  { country: "Czech Republic", region: "Ústí nad Labem", lat: 50.6607, lng: 14.0328 },
  { country: "Czech Republic", region: "Liberec", lat: 50.7667, lng: 15.0542 },
  { country: "Czech Republic", region: "Hradec Králové", lat: 50.2092, lng: 15.8322 },
  { country: "Czech Republic", region: "Pardubice", lat: 50.0389, lng: 15.7792 },
  { country: "Czech Republic", region: "Vysočina", lat: 49.4508, lng: 15.6253 },
  { country: "Czech Republic", region: "South Moravian", lat: 49.1950, lng: 16.6068 },
  { country: "Czech Republic", region: "Olomouc", lat: 49.5937, lng: 17.2508 },
  { country: "Czech Republic", region: "Zlín", lat: 49.2244, lng: 17.6627 },
  { country: "Czech Republic", region: "Moravian-Silesian", lat: 49.8209, lng: 18.2625 }
];

// 46. Denmark
const denmarkGeoData = [
  { country: "Denmark", region: "Capital Region", lat: 55.6761, lng: 12.5683 },
  { country: "Denmark", region: "Central Denmark", lat: 56.1496, lng: 9.3750 },
  { country: "Denmark", region: "North Denmark", lat: 57.0488, lng: 9.9217 },
  { country: "Denmark", region: "Region Zealand", lat: 55.4495, lng: 11.7887 },
  { country: "Denmark", region: "South Denmark", lat: 55.3293, lng: 10.3951 },
  { country: "Denmark", region: "Faroe Islands", lat: 62.0079, lng: -6.7916 },
  { country: "Denmark", region: "Greenland", lat: 71.7069, lng: -42.6043 }
];

// 47. Djibouti
const djiboutiGeoData = [
  { country: "Djibouti", region: "Ali Sabieh", lat: 11.1558, lng: 42.7042 },
  { country: "Djibouti", region: "Arta", lat: 11.5258, lng: 42.8420 },
  { country: "Djibouti", region: "Dikhil", lat: 11.1086, lng: 42.3706 },
  { country: "Djibouti", region: "Djibouti", lat: 11.5886, lng: 43.1450 },
  { country: "Djibouti", region: "Obock", lat: 11.9640, lng: 43.2935 },
  { country: "Djibouti", region: "Tadjourah", lat: 11.7853, lng: 42.8844 }
];

// 48. Dominica
const dominicaGeoData = [
  { country: "Dominica", parish: "Saint Andrew", lat: 15.6167, lng: -61.4167 },
  { country: "Dominica", parish: "Saint David", lat: 15.3667, lng: -61.2500 },
  { country: "Dominica", parish: "Saint George", lat: 15.3000, lng: -61.3833 },
  { country: "Dominica", parish: "Saint John", lat: 15.5833, lng: -61.4333 },
  { country: "Dominica", parish: "Saint Joseph", lat: 15.4000, lng: -61.4333 },
  { country: "Dominica", parish: "Saint Luke", lat: 15.2500, lng: -61.3667 },
  { country: "Dominica", parish: "Saint Mark", lat: 15.2167, lng: -61.3833 },
  { country: "Dominica", parish: "Saint Patrick", lat: 15.2667, lng: -61.2500 },
  { country: "Dominica", parish: "Saint Paul", lat: 15.4000, lng: -61.3667 },
  { country: "Dominica", parish: "Saint Peter", lat: 15.5167, lng: -61.4500 }
];

// 49. Dominican Republic
const dominicanRepublicGeoData = [
  { country: "Dominican Republic", province: "Azua", lat: 18.4500, lng: -70.7333 },
  { country: "Dominican Republic", province: "Baoruco", lat: 18.4833, lng: -71.4167 },
  { country: "Dominican Republic", province: "Barahona", lat: 18.2000, lng: -71.1000 },
  { country: "Dominican Republic", province: "Dajabón", lat: 19.5500, lng: -71.7000 },
  { country: "Dominican Republic", province: "Distrito Nacional", lat: 18.4861, lng: -69.9312 },
  { country: "Dominican Republic", province: "Duarte", lat: 19.2000, lng: -70.0167 },
  { country: "Dominican Republic", province: "El Seibo", lat: 18.7667, lng: -69.0333 },
  { country: "Dominican Republic", province: "Elías Piña", lat: 18.8667, lng: -71.7000 },
  { country: "Dominican Republic", province: "Espaillat", lat: 19.6000, lng: -70.5167 },
  { country: "Dominican Republic", province: "Hato Mayor", lat: 18.7667, lng: -69.2567 },
  { country: "Dominican Republic", province: "Hermanas Mirabal", lat: 19.3833, lng: -70.4167 },
  { country: "Dominican Republic", province: "Independencia", lat: 18.4833, lng: -71.8500 },
  { country: "Dominican Republic", province: "La Altagracia", lat: 18.5833, lng: -68.6167 },
  { country: "Dominican Republic", province: "La Romana", lat: 18.4333, lng: -68.9667 },
  { country: "Dominican Republic", province: "La Vega", lat: 19.2167, lng: -70.5167 },
  { country: "Dominican Republic", province: "María Trinidad Sánchez", lat: 19.3833, lng: -69.8500 },
  { country: "Dominican Republic", province: "Monseñor Nouel", lat: 18.9333, lng: -70.4167 },
  { country: "Dominican Republic", province: "Monte Cristi", lat: 19.8500, lng: -71.6500 },
  { country: "Dominican Republic", province: "Monte Plata", lat: 18.8000, lng: -69.7833 },
  { country: "Dominican Republic", province: "Pedernales", lat: 18.0333, lng: -71.7500 },
  { country: "Dominican Republic", province: "Peravia", lat: 18.2833, lng: -70.3333 },
  { country: "Dominican Republic", province: "Puerto Plata", lat: 19.7900, lng: -70.6900 },
  { country: "Dominican Republic", province: "Samaná", lat: 19.2000, lng: -69.3333 },
  { country: "Dominican Republic", province: "San Cristóbal", lat: 18.4167, lng: -70.1000 },
  { country: "Dominican Republic", province: "San José de Ocoa", lat: 18.5500, lng: -70.5000 },
  { country: "Dominican Republic", province: "San Juan", lat: 18.8000, lng: -71.2333 },
  { country: "Dominican Republic", province: "San Pedro de Macorís", lat: 18.4500, lng: -69.3000 },
  { country: "Dominican Republic", province: "Santiago", lat: 19.4500, lng: -70.7000 },
  { country: "Dominican Republic", province: "Santiago Rodríguez", lat: 19.4667, lng: -71.3333 },
  { country: "Dominican Republic", province: "Santo Domingo", lat: 18.5001, lng: -69.9886 },
  { country: "Dominican Republic", province: "Valverde", lat: 19.5833, lng: -71.0833 }
];

// 50. East Timor (Timor-Leste)
const timorLesteGeoData = [
  { country: "Timor-Leste", municipality: "Aileu", lat: -8.7283, lng: 125.5667 },
  { country: "Timor-Leste", municipality: "Ainaro", lat: -8.9917, lng: 125.5083 },
  { country: "Timor-Leste", municipality: "Baucau", lat: -8.4667, lng: 126.4500 },
  { country: "Timor-Leste", municipality: "Bobonaro", lat: -8.9667, lng: 125.2500 },
  { country: "Timor-Leste", municipality: "Cova Lima", lat: -9.2667, lng: 125.2500 },
  { country: "Timor-Leste", municipality: "Dili", lat: -8.5586, lng: 125.5736 },
  { country: "Timor-Leste", municipality: "Ermera", lat: -8.7500, lng: 125.4000 },
  { country: "Timor-Leste", municipality: "Lautém", lat: -8.3667, lng: 126.9000 },
  { country: "Timor-Leste", municipality: "Liquiçá", lat: -8.7333, lng: 125.3417 },
  { country: "Timor-Leste", municipality: "Manatuto", lat: -8.5167, lng: 126.0167 },
  { country: "Timor-Leste", municipality: "Manufahi", lat: -9.0000, lng: 125.8333 },
  { country: "Timor-Leste", municipality: "Oecusse", lat: -9.2000, lng: 124.3667 },
  { country: "Timor-Leste", municipality: "Viqueque", lat: -8.8667, lng: 126.3667 }
];

// 51. Ecuador
const ecuadorGeoData = [
  { country: "Ecuador", province: "Azuay", lat: -2.8833, lng: -78.9833 },
  { country: "Ecuador", province: "Bolívar", lat: -1.6000, lng: -79.0000 },
  { country: "Ecuador", province: "Cañar", lat: -2.5500, lng: -78.9333 },
  { country: "Ecuador", province: "Carchi", lat: 0.8000, lng: -77.8333 },
  { country: "Ecuador", province: "Chimborazo", lat: -1.6667, lng: -78.6667 },
  { country: "Ecuador", province: "Cotopaxi", lat: -0.9333, lng: -78.6167 },
  { country: "Ecuador", province: "El Oro", lat: -3.2667, lng: -79.9333 },
  { country: "Ecuador", province: "Esmeraldas", lat: 0.9667, lng: -79.6500 },
  { country: "Ecuador", province: "Galápagos", lat: -0.9500, lng: -90.9667 },
  { country: "Ecuador", province: "Guayas", lat: -2.1900, lng: -79.8875 },
  { country: "Ecuador", province: "Imbabura", lat: 0.3500, lng: -78.1167 },
  { country: "Ecuador", province: "Loja", lat: -4.0000, lng: -79.2167 },
  { country: "Ecuador", province: "Los Ríos", lat: -1.7667, lng: -79.4500 },
  { country: "Ecuador", province: "Manabí", lat: -1.0500, lng: -80.4500 },
  { country: "Ecuador", province: "Morona Santiago", lat: -2.3167, lng: -78.1167 },
  { country: "Ecuador", province: "Napo", lat: -0.9833, lng: -77.8167 },
  { country: "Ecuador", province: "Orellana", lat: -0.9333, lng: -76.2667 },
  { country: "Ecuador", province: "Pastaza", lat: -1.0667, lng: -78.0010 },
  { country: "Ecuador", province: "Pichincha", lat: -0.2167, lng: -78.5000 },
  { country: "Ecuador", province: "Santa Elena", lat: -2.2267, lng: -80.8583 },
  { country: "Ecuador", province: "Santo Domingo de los Tsáchilas", lat: -0.2500, lng: -79.1750 },
  { country: "Ecuador", province: "Sucumbíos", lat: 0.0833, lng: -76.8833 },
  { country: "Ecuador", province: "Tungurahua", lat: -1.2333, lng: -78.6167 },
  { country: "Ecuador", province: "Zamora Chinchipe", lat: -4.0667, lng: -78.9500 }
];

// 52. Egypt
const egyptGeoData = [
  { country: "Egypt", governorate: "Alexandria", lat: 31.2001, lng: 29.9187 },
  { country: "Egypt", governorate: "Aswan", lat: 24.0889, lng: 32.8998 },
  { country: "Egypt", governorate: "Asyut", lat: 27.1783, lng: 31.1859 },
  { country: "Egypt", governorate: "Beheira", lat: 30.8481, lng: 30.3436 },
  { country: "Egypt", governorate: "Beni Suef", lat: 29.0661, lng: 31.0994 },
  { country: "Egypt", governorate: "Cairo", lat: 30.0444, lng: 31.2357 },
  { country: "Egypt", governorate: "Dakahlia", lat: 31.0500, lng: 31.5800 },
  { country: "Egypt", governorate: "Damietta", lat: 31.4175, lng: 31.8144 },
  { country: "Egypt", governorate: "Faiyum", lat: 29.3084, lng: 30.8428 },
  { country: "Egypt", governorate: "Gharbia", lat: 30.8754, lng: 31.0335 },
  { country: "Egypt", governorate: "Giza", lat: 30.0131, lng: 31.2089 },
  { country: "Egypt", governorate: "Ismailia", lat: 30.5833, lng: 32.2667 },
  { country: "Egypt", governorate: "Kafr El Sheikh", lat: 31.1092, lng: 30.9376 },
  { country: "Egypt", governorate: "Luxor", lat: 25.6872, lng: 32.6396 },
  { country: "Egypt", governorate: "Matrouh", lat: 31.3543, lng: 27.2373 },
  { country: "Egypt", governorate: "Minya", lat: 28.1099, lng: 30.7503 },
  { country: "Egypt", governorate: "Monufia", lat: 30.5972, lng: 30.9876 },
  { country: "Egypt", governorate: "New Valley", lat: 25.4484, lng: 30.5556 },
  { country: "Egypt", governorate: "North Sinai", lat: 30.8333, lng: 33.7500 },
  { country: "Egypt", governorate: "Port Said", lat: 31.2567, lng: 32.2841 },
  { country: "Egypt", governorate: "Qalyubia", lat: 30.1795, lng: 31.2425 },
  { country: "Egypt", governorate: "Qena", lat: 26.1552, lng: 32.7168 },
  { country: "Egypt", governorate: "Red Sea", lat: 26.9900, lng: 33.9000 },
  { country: "Egypt", governorate: "Sharqia", lat: 30.7333, lng: 31.7333 },
  { country: "Egypt", governorate: "Sohag", lat: 26.5567, lng: 31.6948 },
  { country: "Egypt", governorate: "South Sinai", lat: 28.2333, lng: 33.6167 },
  { country: "Egypt", governorate: "Suez", lat: 29.9668, lng: 32.5498 }
];

// 53. El Salvador
const elSalvadorGeoData = [
  { country: "El Salvador", department: "Ahuachapán", lat: 13.9214, lng: -89.8451 },
  { country: "El Salvador", department: "Cabañas", lat: 13.8333, lng: -88.6333 },
  { country: "El Salvador", department: "Chalatenango", lat: 14.0333, lng: -88.9333 },
  { country: "El Salvador", department: "Cuscatlán", lat: 13.7167, lng: -88.9333 },
  { country: "El Salvador", department: "La Libertad", lat: 13.6833, lng: -89.3167 },
  { country: "El Salvador", department: "La Paz", lat: 13.5000, lng: -88.9667 },
  { country: "El Salvador", department: "La Unión", lat: 13.3333, lng: -87.8500 },
  { country: "El Salvador", department: "Morazán", lat: 13.7667, lng: -88.1000 },
  { country: "El Salvador", department: "San Miguel", lat: 13.4833, lng: -88.1833 },
  { country: "El Salvador", department: "San Salvador", lat: 13.6894, lng: -89.1872 },
  { country: "El Salvador", department: "San Vicente", lat: 13.6333, lng: -88.7833 },
  { country: "El Salvador", department: "Santa Ana", lat: 14.0000, lng: -89.5500 },
  { country: "El Salvador", department: "Sonsonate", lat: 13.7167, lng: -89.7167 },
  { country: "El Salvador", department: "Usulután", lat: 13.3500, lng: -88.4500 }
];

// 54. Equatorial Guinea
const equatorialGuineaGeoData = [
  { country: "Equatorial Guinea", province: "Annobón", lat: -1.4500, lng: 5.6333 },
  { country: "Equatorial Guinea", province: "Bioko Norte", lat: 3.7000, lng: 8.7667 },
  { country: "Equatorial Guinea", province: "Bioko Sur", lat: 3.4200, lng: 8.6667 },
  { country: "Equatorial Guinea", province: "Centro Sur", lat: 1.3333, lng: 10.5000 },
  { country: "Equatorial Guinea", province: "Djibloho", lat: 1.8762, lng: 10.8324 },
  { country: "Equatorial Guinea", province: "Kie-Ntem", lat: 2.0333, lng: 11.3333 },
  { country: "Equatorial Guinea", province: "Litoral", lat: 1.8667, lng: 9.7667 },
  { country: "Equatorial Guinea", province: "Wele-Nzas", lat: 1.4167, lng: 11.0833 }
];

// 55. Eritrea
const eritreaGeoData = [
  { country: "Eritrea", region: "Anseba", lat: 16.7500, lng: 37.9167 },
  { country: "Eritrea", region: "Debub", lat: 15.2000, lng: 38.9333 },
  { country: "Eritrea", region: "Gash-Barka", lat: 15.4500, lng: 37.2167 },
  { country: "Eritrea", region: "Maekel", lat: 15.3333, lng: 38.9333 },
  { country: "Eritrea", region: "Northern Red Sea", lat: 16.5000, lng: 39.0000 },
  { country: "Eritrea", region: "Southern Red Sea", lat: 13.9333, lng: 41.8333 }
];

// 56. Estonia
const estoniaGeoData = [
  { country: "Estonia", county: "Harju", lat: 59.3333, lng: 25.0000 },
  { country: "Estonia", county: "Hiiu", lat: 58.9167, lng: 22.5000 },
  { country: "Estonia", county: "Ida-Viru", lat: 59.2500, lng: 27.4167 },
  { country: "Estonia", county: "Järva", lat: 58.8833, lng: 25.5667 },
  { country: "Estonia", county: "Jõgeva", lat: 58.7467, lng: 26.3939 },
  { country: "Estonia", county: "Lääne", lat: 58.9333, lng: 23.5833 },
  { country: "Estonia", county: "Lääne-Viru", lat: 59.2000, lng: 26.2500 },
  { country: "Estonia", county: "Pärnu", lat: 58.3853, lng: 24.4972 },
  { country: "Estonia", county: "Põlva", lat: 58.0500, lng: 27.0667 },
  { country: "Estonia", county: "Rapla", lat: 58.9964, lng: 24.7928 },
  { country: "Estonia", county: "Saare", lat: 58.2500, lng: 22.5000 },
  { country: "Estonia", county: "Tartu", lat: 58.3806, lng: 26.7250 },
  { country: "Estonia", county: "Valga", lat: 57.7778, lng: 26.0473 },
  { country: "Estonia", county: "Viljandi", lat: 58.3639, lng: 25.5944 },
  { country: "Estonia", county: "Võru", lat: 57.8333, lng: 27.0167 }
];

// 57. Eswatini (formerly Swaziland)
const eswatiniGeoData = [
  { country: "Eswatini", region: "Hhohho", lat: -26.1333, lng: 31.3500 },
  { country: "Eswatini", region: "Lubombo", lat: -26.4500, lng: 31.8667 },
  { country: "Eswatini", region: "Manzini", lat: -26.4958, lng: 31.3800 },
  { country: "Eswatini", region: "Shiselweni", lat: -27.0000, lng: 31.5000 }
];

// 58. Ethiopia
const ethiopiaGeoData = [
  { country: "Ethiopia", region: "Addis Ababa", lat: 9.0333, lng: 38.7000 },
  { country: "Ethiopia", region: "Afar", lat: 11.7500, lng: 41.0000 },
  { country: "Ethiopia", region: "Amhara", lat: 11.3333, lng: 38.0000 },
  { country: "Ethiopia", region: "Benishangul-Gumuz", lat: 10.0667, lng: 35.1000 },
  { country: "Ethiopia", region: "Dire Dawa", lat: 9.6000, lng: 41.8667 },
  { country: "Ethiopia", region: "Gambela", lat: 8.2500, lng: 34.5833 },
  { country: "Ethiopia", region: "Harari", lat: 9.3200, lng: 42.1500 },
  { country: "Ethiopia", region: "Oromia", lat: 7.0000, lng: 39.0000 },
  { country: "Ethiopia", region: "Sidama", lat: 6.7333, lng: 38.3167 },
  { country: "Ethiopia", region: "Somali", lat: 7.0000, lng: 44.0000 },
  { country: "Ethiopia", region: "South West Ethiopia Peoples'", lat: 7.0000, lng: 35.0000 },
  { country: "Ethiopia", region: "Southern Nations, Nationalities and Peoples'", lat: 6.1500, lng: 36.5667 },
  { country: "Ethiopia", region: "Tigray", lat: 14.0000, lng: 38.8333 }
];

// 59. Fiji
const fijiGeoData = [
  { country: "Fiji", division: "Central", lat: -17.8333, lng: 178.0000 },
  { country: "Fiji", division: "Eastern", lat: -17.7167, lng: 179.0000 },
  { country: "Fiji", division: "Northern", lat: -16.5833, lng: 179.2500 },
  { country: "Fiji", division: "Western", lat: -17.6167, lng: 177.4500 },
  { country: "Fiji", division: "Rotuma", lat: -12.5000, lng: 177.0667 }
];

// 60. Finland
const finlandGeoData = [
  { country: "Finland", region: "Åland", lat: 60.1167, lng: 19.9000 },
  { country: "Finland", region: "Central Finland", lat: 62.5000, lng: 25.7500 },
  { country: "Finland", region: "Central Ostrobothnia", lat: 63.8333, lng: 23.5000 },
  { country: "Finland", region: "Kainuu", lat: 64.2500, lng: 28.7500 },
  { country: "Finland", region: "Kymenlaakso", lat: 60.8750, lng: 26.8750 },
  { country: "Finland", region: "Lapland", lat: 67.0000, lng: 27.0000 },
  { country: "Finland", region: "North Karelia", lat: 62.9167, lng: 30.6667 },
  { country: "Finland", region: "North Ostrobothnia", lat: 65.0000, lng: 26.0000 },
  { country: "Finland", region: "North Savo", lat: 63.0833, lng: 27.6833 },
  { country: "Finland", region: "Ostrobothnia", lat: 63.1167, lng: 21.8000 },
  { country: "Finland", region: "Pirkanmaa", lat: 61.6983, lng: 23.7603 },
  { country: "Finland", region: "Päijät-Häme", lat: 61.0000, lng: 26.0000 },
  { country: "Finland", region: "Satakunta", lat: 61.5000, lng: 22.0000 },
  { country: "Finland", region: "South Karelia", lat: 61.0500, lng: 28.1000 },
  { country: "Finland", region: "South Ostrobothnia", lat: 62.8333, lng: 23.0000 },
  { country: "Finland", region: "South Savo", lat: 61.7000, lng: 27.2667 },
  { country: "Finland", region: "Southwest Finland", lat: 60.5000, lng: 22.7500 },
  { country: "Finland", region: "Uusimaa", lat: 60.1667, lng: 24.9333 }
];

// 61. France
const franceGeoData = [
  { country: "France", region: "Auvergne-Rhône-Alpes", lat: 45.4471, lng: 4.3853 },
  { country: "France", region: "Bourgogne-Franche-Comté", lat: 47.2805, lng: 4.9994 },
  { country: "France", region: "Brittany", lat: 48.2020, lng: -2.9326 },
  { country: "France", region: "Centre-Val de Loire", lat: 47.4818, lng: 1.6927 },
  { country: "France", region: "Corsica", lat: 42.0396, lng: 9.0129 },
  { country: "France", region: "Grand Est", lat: 48.6998, lng: 6.1878 },
  { country: "France", region: "Hauts-de-France", lat: 50.4801, lng: 2.7937 },
  { country: "France", region: "Île-de-France", lat: 48.8499, lng: 2.6370 },
  { country: "France", region: "Normandy", lat: 49.0897, lng: 0.6331 },
  { country: "France", region: "Nouvelle-Aquitaine", lat: 45.7089, lng: 0.6331 },
  { country: "France", region: "Occitanie", lat: 43.8927, lng: 2.0190 },
  { country: "France", region: "Pays de la Loire", lat: 47.7632, lng: -0.3299 },
  { country: "France", region: "Provence-Alpes-Côte d'Azur", lat: 43.9351, lng: 6.0679 }
];

// 62. Gabon
const gabonGeoData = [
  { country: "Gabon", province: "Estuaire", lat: 0.3858, lng: 9.4580 },
  { country: "Gabon", province: "Haut-Ogooué", lat: -1.6311, lng: 13.9137 },
  { country: "Gabon", province: "Moyen-Ogooué", lat: -0.8736, lng: 10.7471 },
  { country: "Gabon", province: "Ngounié", lat: -1.8658, lng: 11.0583 },
  { country: "Gabon", province: "Nyanga", lat: -2.9526, lng: 11.0583 },
  { country: "Gabon", province: "Ogooué-Ivindo", lat: 0.8736, lng: 13.0583 },
  { country: "Gabon", province: "Ogooué-Lolo", lat: -0.8736, lng: 12.5791 },
  { country: "Gabon", province: "Ogooué-Maritime", lat: -1.0000, lng: 9.0000 },
  { country: "Gabon", province: "Woleu-Ntem", lat: 1.6311, lng: 11.5791 }
];

// 63. Gambia
const gambiaGeoData = [
  { country: "Gambia", division: "Banjul", lat: 13.4557, lng: -16.5814 },
  { country: "Gambia", division: "Central River", lat: 13.5500, lng: -14.9000 },
  { country: "Gambia", division: "Lower River", lat: 13.3500, lng: -15.9000 },
  { country: "Gambia", division: "North Bank", lat: 13.5500, lng: -16.0000 },
  { country: "Gambia", division: "Upper River", lat: 13.4167, lng: -14.0000 },
  { country: "Gambia", division: "West Coast", lat: 13.2833, lng: -16.6667 }
];

// 64. Georgia
const georgiaGeoData = [
  { country: "Georgia", region: "Abkhazia", lat: 43.0000, lng: 41.0000 },
  { country: "Georgia", region: "Adjara", lat: 41.6000, lng: 42.0000 },
  { country: "Georgia", region: "Guria", lat: 41.9500, lng: 42.0000 },
  { country: "Georgia", region: "Imereti", lat: 42.2500, lng: 42.7500 },
  { country: "Georgia", region: "Kakheti", lat: 41.6500, lng: 45.7500 },
  { country: "Georgia", region: "Kvemo Kartli", lat: 41.4833, lng: 44.7500 },
  { country: "Georgia", region: "Mtskheta-Mtianeti", lat: 42.1667, lng: 44.6667 },
  { country: "Georgia", region: "Racha-Lechkhumi and Kvemo Svaneti", lat: 42.6667, lng: 43.5000 },
  { country: "Georgia", region: "Samegrelo-Zemo Svaneti", lat: 42.5000, lng: 42.0000 },
  { country: "Georgia", region: "Samtskhe-Javakheti", lat: 41.5500, lng: 43.2667 },
  { country: "Georgia", region: "Shida Kartli", lat: 42.0000, lng: 44.0000 },
  { country: "Georgia", region: "Tbilisi", lat: 41.7225, lng: 44.7925 }
];

// 65. Germany
const germanyGeoData = [
  { country: "Germany", state: "Baden-Württemberg", lat: 48.6616, lng: 9.3501 },
  { country: "Germany", state: "Bavaria", lat: 48.7904, lng: 11.4979 },
  { country: "Germany", state: "Berlin", lat: 52.5200, lng: 13.4050 },
  { country: "Germany", state: "Brandenburg", lat: 52.4125, lng: 12.5316 },
  { country: "Germany", state: "Bremen", lat: 53.0793, lng: 8.8017 },
  { country: "Germany", state: "Hamburg", lat: 53.5511, lng: 9.9937 },
  { country: "Germany", state: "Hesse", lat: 50.6521, lng: 9.1624 },
  { country: "Germany", state: "Lower Saxony", lat: 52.6367, lng: 9.8451 },
  { country: "Germany", state: "Mecklenburg-Vorpommern", lat: 53.6127, lng: 12.4297 },
  { country: "Germany", state: "North Rhine-Westphalia", lat: 51.4332, lng: 7.6616 },
  { country: "Germany", state: "Rhineland-Palatinate", lat: 49.9129, lng: 7.4497 },
  { country: "Germany", state: "Saarland", lat: 49.3964, lng: 7.0230 },
  { country: "Germany", state: "Saxony", lat: 51.1045, lng: 13.2017 },
  { country: "Germany", state: "Saxony-Anhalt", lat: 51.9503, lng: 11.6923 },
  { country: "Germany", state: "Schleswig-Holstein", lat: 54.2194, lng: 9.6961 },
  { country: "Germany", state: "Thuringia", lat: 50.8614, lng: 11.0522 }
];

// 66. Ghana
const ghanaGeoData = [
  { country: "Ghana", region: "Ahafo", lat: 7.0000, lng: -2.5000 },
  { country: "Ghana", region: "Ashanti", lat: 6.7500, lng: -1.5000 },
  { country: "Ghana", region: "Bono", lat: 7.5000, lng: -2.5000 },
  { country: "Ghana", region: "Bono East", lat: 7.7500, lng: -1.5000 },
  { country: "Ghana", region: "Central", lat: 5.5000, lng: -1.0000 },
  { country: "Ghana", region: "Eastern", lat: 6.5000, lng: -0.5000 },
  { country: "Ghana", region: "Greater Accra", lat: 5.5500, lng: -0.2000 },
  { country: "Ghana", region: "North East", lat: 10.0000, lng: -0.5000 },
  { country: "Ghana", region: "Northern", lat: 9.5000, lng: -1.0000 },
  { country: "Ghana", region: "Oti", lat: 8.0000, lng: 0.0000 },
  { country: "Ghana", region: "Savannah", lat: 9.0000, lng: -2.0000 },
  { country: "Ghana", region: "Upper East", lat: 10.7500, lng: -1.0000 },
  { country: "Ghana", region: "Upper West", lat: 10.5000, lng: -2.5000 },
  { country: "Ghana", region: "Volta", lat: 6.5000, lng: 0.5000 },
  { country: "Ghana", region: "Western", lat: 5.0000, lng: -2.0000 },
  { country: "Ghana", region: "Western North", lat: 6.0000, lng: -2.7500 }
];

// 67. Greece
const greeceGeoData = [
  { country: "Greece", region: "Attica", lat: 38.0000, lng: 23.7000 },
  { country: "Greece", region: "Central Greece", lat: 38.6000, lng: 22.7000 },
  { country: "Greece", region: "Central Macedonia", lat: 40.6000, lng: 23.0000 },
  { country: "Greece", region: "Crete", lat: 35.2401, lng: 24.8093 },
  { country: "Greece", region: "East Macedonia and Thrace", lat: 41.1000, lng: 24.9000 },
  { country: "Greece", region: "Epirus", lat: 39.6000, lng: 20.8500 },
  { country: "Greece", region: "Ionian Islands", lat: 38.1800, lng: 20.5900 },
  { country: "Greece", region: "North Aegean", lat: 39.1000, lng: 26.0500 },
  { country: "Greece", region: "Peloponnese", lat: 37.5000, lng: 22.3700 },
  { country: "Greece", region: "South Aegean", lat: 37.0800, lng: 25.1500 },
  { country: "Greece", region: "Thessaly", lat: 39.6000, lng: 22.4200 },
  { country: "Greece", region: "West Greece", lat: 38.5000, lng: 21.6500 },
  { country: "Greece", region: "West Macedonia", lat: 40.3000, lng: 21.8000 }
];

// 68. Grenada
const grenadaGeoData = [
  { country: "Grenada", parish: "Saint Andrew", lat: 12.1333, lng: -61.6167 },
  { country: "Grenada", parish: "Saint David", lat: 12.0500, lng: -61.6667 },
  { country: "Grenada", parish: "Saint George", lat: 12.0500, lng: -61.7500 },
  { country: "Grenada", parish: "Saint John", lat: 12.1333, lng: -61.7500 },
  { country: "Grenada", parish: "Saint Mark", lat: 12.1333, lng: -61.6833 },
  { country: "Grenada", parish: "Saint Patrick", lat: 12.2000, lng: -61.4833 },
  { country: "Grenada", dependency: "Carriacou and Petite Martinique", lat: 12.4833, lng: -61.4500 }
];

// 69. Guatemala
const guatemalaGeoData = [
  { country: "Guatemala", department: "Alta Verapaz", lat: 15.5000, lng: -90.3333 },
  { country: "Guatemala", department: "Baja Verapaz", lat: 15.1000, lng: -90.3167 },
  { country: "Guatemala", department: "Chimaltenango", lat: 14.6667, lng: -90.8167 },
  { country: "Guatemala", department: "Chiquimula", lat: 14.8000, lng: -89.5500 },
  { country: "Guatemala", department: "El Progreso", lat: 14.8500, lng: -90.0167 },
  { country: "Guatemala", department: "Escuintla", lat: 14.3000, lng: -90.7833 },
  { country: "Guatemala", department: "Guatemala", lat: 14.6248, lng: -90.5328 },
  { country: "Guatemala", department: "Huehuetenango", lat: 15.3167, lng: -91.4667 },
  { country: "Guatemala", department: "Izabal", lat: 15.5000, lng: -88.8333 },
  { country: "Guatemala", department: "Jalapa", lat: 14.6333, lng: -89.9833 },
  { country: "Guatemala", department: "Jutiapa", lat: 14.2833, lng: -89.8967 },
  { country: "Guatemala", department: "Petén", lat: 16.9167, lng: -89.8833 },
  { country: "Guatemala", department: "Quetzaltenango", lat: 14.8333, lng: -91.5167 },
  { country: "Guatemala", department: "Quiché", lat: 15.0333, lng: -91.1500 },
  { country: "Guatemala", department: "Retalhuleu", lat: 14.5333, lng: -91.6833 },
  { country: "Guatemala", department: "Sacatepéquez", lat: 14.5667, lng: -90.7333 },
  { country: "Guatemala", department: "San Marcos", lat: 14.9667, lng: -91.7833 },
  { country: "Guatemala", department: "Santa Rosa", lat: 14.1667, lng: -90.3667 },
  { country: "Guatemala", department: "Sololá", lat: 14.7667, lng: -91.1833 },
  { country: "Guatemala", department: "Suchitepéquez", lat: 14.4167, lng: -91.4000 },
  { country: "Guatemala", department: "Totonicapán", lat: 14.9167, lng: -91.3667 },
  { country: "Guatemala", department: "Zacapa", lat: 14.9667, lng: -89.5333 }
];

// 70. Guinea
const guineaGeoData = [
  { country: "Guinea", region: "Boké", lat: 10.9333, lng: -14.2833 },
  { country: "Guinea", region: "Conakry", lat: 9.5092, lng: -13.7122 },
  { country: "Guinea", region: "Faranah", lat: 10.0333, lng: -10.7500 },
  { country: "Guinea", region: "Kankan", lat: 10.3833, lng: -9.3000 },
  { country: "Guinea", region: "Kindia", lat: 10.0500, lng: -12.8667 },
  { country: "Guinea", region: "Labé", lat: 11.3167, lng: -12.2833 },
  { country: "Guinea", region: "Mamou", lat: 10.3833, lng: -12.0833 },
  { country: "Guinea", region: "Nzérékoré", lat: 7.7500, lng: -8.8333 }
];

// 71. Guinea-Bissau
const guineaBissauGeoData = [
  { country: "Guinea-Bissau", region: "Bafatá", lat: 12.1667, lng: -14.6667 },
  { country: "Guinea-Bissau", region: "Biombo", lat: 11.8667, lng: -15.7333 },
  { country: "Guinea-Bissau", region: "Bolama", lat: 11.5833, lng: -15.4833 },
  { country: "Guinea-Bissau", region: "Cacheu", lat: 12.2667, lng: -16.1667 },
  { country: "Guinea-Bissau", region: "Gabú", lat: 12.2833, lng: -14.2167 },
  { country: "Guinea-Bissau", region: "Oio", lat: 12.2833, lng: -15.3167 },
  { country: "Guinea-Bissau", region: "Quinara", lat: 11.8833, lng: -15.1167 },
  { country: "Guinea-Bissau", region: "Tombali", lat: 11.3667, lng: -14.9833 }
];

// 72. Guyana
const guyanaGeoData = [
  { country: "Guyana", region: "Barima-Waini", lat: 7.7000, lng: -59.7000 },
  { country: "Guyana", region: "Cuyuni-Mazaruni", lat: 6.4667, lng: -60.2167 },
  { country: "Guyana", region: "Demerara-Mahaica", lat: 6.8000, lng: -58.1667 },
  { country: "Guyana", region: "East Berbice-Corentyne", lat: 2.8833, lng: -57.3500 },
  { country: "Guyana", region: "Essequibo Islands-West Demerara", lat: 6.5833, lng: -58.5833 },
  { country: "Guyana", region: "Mahaica-Berbice", lat: 6.2333, lng: -57.9167 },
  { country: "Guyana", region: "Pomeroon-Supenaam", lat: 7.1333, lng: -58.9167 },
  { country: "Guyana", region: "Potaro-Siparuni", lat: 4.7833, lng: -59.3000 },
  { country: "Guyana", region: "Upper Demerara-Berbice", lat: 5.4000, lng: -58.1500 },
  { country: "Guyana", region: "Upper Takutu-Upper Essequibo", lat: 2.8167, lng: -59.3000 }
];

// 73. Haiti
const haitiGeoData = [
  { country: "Haiti", department: "Artibonite", lat: 19.3667, lng: -72.4167 },
  { country: "Haiti", department: "Centre", lat: 19.1458, lng: -71.8869 },
  { country: "Haiti", department: "Grand'Anse", lat: 18.4167, lng: -74.0000 },
  { country: "Haiti", department: "Nippes", lat: 18.4000, lng: -73.1667 },
  { country: "Haiti", department: "Nord", lat: 19.7500, lng: -72.2000 },
  { country: "Haiti", department: "Nord-Est", lat: 19.5000, lng: -71.8333 },
  { country: "Haiti", department: "Nord-Ouest", lat: 19.8333, lng: -73.0000 },
  { country: "Haiti", department: "Ouest", lat: 18.5333, lng: -72.3333 },
  { country: "Haiti", department: "Sud", lat: 18.2000, lng: -73.7500 },
  { country: "Haiti", department: "Sud-Est", lat: 18.2333, lng: -72.3333 }
];

// 74. Honduras
const hondurasGeoData = [
  { country: "Honduras", department: "Atlántida", lat: 15.7500, lng: -87.0000 },
  { country: "Honduras", department: "Choluteca", lat: 13.3000, lng: -87.1500 },
  { country: "Honduras", department: "Colón", lat: 15.8333, lng: -85.5000 },
  { country: "Honduras", department: "Comayagua", lat: 14.4500, lng: -87.6333 },
  { country: "Honduras", department: "Copán", lat: 14.8333, lng: -89.0000 },
  { country: "Honduras", department: "Cortés", lat: 15.5000, lng: -88.0000 },
  { country: "Honduras", department: "El Paraíso", lat: 13.8833, lng: -86.5167 },
  { country: "Honduras", department: "Francisco Morazán", lat: 14.1000, lng: -87.2167 },
  { country: "Honduras", department: "Gracias a Dios", lat: 15.0000, lng: -84.3333 },
  { country: "Honduras", department: "Intibucá", lat: 14.3167, lng: -88.1667 },
  { country: "Honduras", department: "Islas de la Bahía", lat: 16.3000, lng: -86.5333 },
  { country: "Honduras", department: "La Paz", lat: 14.3167, lng: -87.6833 },
  { country: "Honduras", department: "Lempira", lat: 14.5833, lng: -88.5833 },
  { country: "Honduras", department: "Ocotepeque", lat: 14.4333, lng: -89.1833 },
  { country: "Honduras", department: "Olancho", lat: 14.8000, lng: -86.0000 },
  { country: "Honduras", department: "Santa Bárbara", lat: 14.9167, lng: -88.2333 },
  { country: "Honduras", department: "Valle", lat: 13.5833, lng: -87.5833 },
  { country: "Honduras", department: "Yoro", lat: 15.1333, lng: -87.1333 }
];

// 75. Hungary
const hungaryGeoData = [
  { country: "Hungary", county: "Bács-Kiskun", lat: 46.5000, lng: 19.4167 },
  { country: "Hungary", county: "Baranya", lat: 46.0000, lng: 18.2167 },
  { country: "Hungary", county: "Békés", lat: 46.6667, lng: 21.0000 },
  { country: "Hungary", county: "Borsod-Abaúj-Zemplén", lat: 48.1000, lng: 20.7833 },
  { country: "Hungary", county: "Budapest", lat: 47.4979, lng: 19.0402 },
  { country: "Hungary", county: "Csongrád-Csanád", lat: 46.3333, lng: 20.1667 },
  { country: "Hungary", county: "Fejér", lat: 47.1833, lng: 18.4167 },
  { country: "Hungary", county: "Győr-Moson-Sopron", lat: 47.6833, lng: 17.6333 },
  { country: "Hungary", county: "Hajdú-Bihar", lat: 47.5333, lng: 21.6333 },
  { country: "Hungary", county: "Heves", lat: 47.9000, lng: 20.3667 },
  { country: "Hungary", county: "Jász-Nagykun-Szolnok", lat: 47.1833, lng: 20.2000 },
  { country: "Hungary", county: "Komárom-Esztergom", lat: 47.7333, lng: 18.1333 },
  { country: "Hungary", county: "Nógrád", lat: 48.1000, lng: 19.8000 },
  { country: "Hungary", county: "Pest", lat: 47.4833, lng: 19.2500 },
  { country: "Hungary", county: "Somogy", lat: 46.5500, lng: 17.6833 },
  { country: "Hungary", county: "Szabolcs-Szatmár-Bereg", lat: 48.1000, lng: 22.0000 },
  { country: "Hungary", county: "Tolna", lat: 46.3500, lng: 18.7000 },
  { country: "Hungary", county: "Vas", lat: 47.2333, lng: 16.6167 },
  { country: "Hungary", county: "Veszprém", lat: 47.1000, lng: 17.9167 },
  { country: "Hungary", county: "Zala", lat: 46.8333, lng: 16.8500 }
];

// 76. Iceland
const icelandGeoData = [
  { country: "Iceland", region: "Capital Region", lat: 64.1333, lng: -21.9333 },
  { country: "Iceland", region: "Southern Peninsula", lat: 63.9667, lng: -22.5500 },
  { country: "Iceland", region: "Western Region", lat: 64.5333, lng: -21.9167 },
  { country: "Iceland", region: "Westfjords", lat: 65.9167, lng: -22.4333 },
  { country: "Iceland", region: "Northwestern Region", lat: 65.6833, lng: -19.5833 },
  { country: "Iceland", region: "Northeastern Region", lat: 65.6833, lng: -17.3500 },
  { country: "Iceland", region: "Eastern Region", lat: 65.2667, lng: -14.4000 },
  { country: "Iceland", region: "Southern Region", lat: 63.7500, lng: -20.2500 }
];

// 77. India
const indiaGeoData = [
  { country: "India", state: "Andaman and Nicobar Islands", lat: 10.2188, lng: 92.5771 },
  { country: "India", state: "Andhra Pradesh", lat: 15.9129, lng: 79.7390 },
  { country: "India", state: "Arunachal Pradesh", lat: 28.2180, lng: 94.7278 },
  { country: "India", state: "Assam", lat: 26.2006, lng: 92.9376 },
  { country: "India", state: "Bihar", lat: 25.0961, lng: 85.3131 },
  { country: "India", state: "Chandigarh", lat: 30.7333, lng: 76.7794 },
  { country: "India", state: "Chhattisgarh", lat: 21.2787, lng: 81.8661 },
  { country: "India", state: "Dadra and Nagar Haveli and Daman and Diu", lat: 20.3974, lng: 72.8328 },
  { country: "India", state: "Delhi", lat: 28.7041, lng: 77.1025 },
  { country: "India", state: "Goa", lat: 15.2993, lng: 74.1240 },
  { country: "India", state: "Gujarat", lat: 22.2587, lng: 71.1924 },
  { country: "India", state: "Haryana", lat: 29.0588, lng: 76.0856 },
  { country: "India", state: "Himachal Pradesh", lat: 31.1048, lng: 77.1734 },
  { country: "India", state: "Jammu and Kashmir", lat: 33.2778, lng: 75.3412 },
  { country: "India", state: "Jharkhand", lat: 23.6102, lng: 85.2799 },
  { country: "India", state: "Karnataka", lat: 15.3173, lng: 75.7139 },
  { country: "India", state: "Kerala", lat: 10.8505, lng: 76.2711 },
  { country: "India", state: "Ladakh", lat: 34.1526, lng: 77.5770 },
  { country: "India", state: "Lakshadweep", lat: 10.3280, lng: 72.7846 },
  { country: "India", state: "Madhya Pradesh", lat: 22.9734, lng: 78.6569 },
  { country: "India", state: "Maharashtra", lat: 19.7515, lng: 75.7139 },
  { country: "India", state: "Manipur", lat: 24.6637, lng: 93.9063 },
  { country: "India", state: "Meghalaya", lat: 25.4670, lng: 91.3662 },
  { country: "India", state: "Mizoram", lat: 23.1645, lng: 92.9376 },
  { country: "India", state: "Nagaland", lat: 26.1584, lng: 94.5624 },
  { country: "India", state: "Odisha", lat: 20.9517, lng: 85.0985 },
  { country: "India", state: "Puducherry", lat: 11.9416, lng: 79.8083 },
  { country: "India", state: "Punjab", lat: 31.1471, lng: 75.3412 },
  { country: "India", state: "Rajasthan", lat: 27.0238, lng: 74.2179 },
  { country: "India", state: "Sikkim", lat: 27.5330, lng: 88.5122 },
  { country: "India", state: "Tamil Nadu", lat: 11.1271, lng: 78.6569 },
  { country: "India", state: "Telangana", lat: 18.1124, lng: 79.0193 },
  { country: "India", state: "Tripura", lat: 23.9408, lng: 91.9882 },
  { country: "India", state: "Uttar Pradesh", lat: 26.8467, lng: 80.9462 },
  { country: "India", state: "Uttarakhand", lat: 30.0668, lng: 79.0193 },
  { country: "India", state: "West Bengal", lat: 22.9868, lng: 87.8550 }
];

// 78. Indonesia
const indonesiaGeoData = [
  { country: "Indonesia", province: "Aceh", lat: 4.6951, lng: 96.7494 },
  { country: "Indonesia", province: "Bali", lat: -8.4095, lng: 115.1889 },
  { country: "Indonesia", province: "Bangka Belitung Islands", lat: -2.7411, lng: 106.4406 },
  { country: "Indonesia", province: "Banten", lat: -6.4058, lng: 106.0640 },
  { country: "Indonesia", province: "Bengkulu", lat: -3.7928, lng: 102.2608 },
  { country: "Indonesia", province: "Central Java", lat: -7.1510, lng: 110.1403 },
  { country: "Indonesia", province: "Central Kalimantan", lat: -1.6813, lng: 113.3823 },
  { country: "Indonesia", province: "Central Sulawesi", lat: -1.4300, lng: 121.4456 },
  { country: "Indonesia", province: "East Java", lat: -7.5360, lng: 112.2384 },
  { country: "Indonesia", province: "East Kalimantan", lat: 0.5387, lng: 116.4194 },
  { country: "Indonesia", province: "East Nusa Tenggara", lat: -8.6574, lng: 121.0794 },
  { country: "Indonesia", province: "Gorontalo", lat: 0.6999, lng: 122.4467 },
  { country: "Indonesia", province: "Jakarta", lat: -6.2088, lng: 106.8456 },
  { country: "Indonesia", province: "Jambi", lat: -1.4852, lng: 103.7381 },
  { country: "Indonesia", province: "Lampung", lat: -4.5586, lng: 105.4068 },
  { country: "Indonesia", province: "Maluku", lat: -3.2385, lng: 130.1453 },
  { country: "Indonesia", province: "North Kalimantan", lat: 3.0731, lng: 116.0413 },
  { country: "Indonesia", province: "North Maluku", lat: 1.5709, lng: 127.8087 },
  { country: "Indonesia", province: "North Sulawesi", lat: 0.6246, lng: 123.9750 },
  { country: "Indonesia", province: "North Sumatra", lat: 2.1154, lng: 99.5451 }
];

// 79. Iran
const iranGeoData = [
  { country: "Iran", province: "Alborz", lat: 35.9960, lng: 50.9289 },
  { country: "Iran", province: "Ardabil", lat: 38.2498, lng: 48.2933 },
  { country: "Iran", province: "Bushehr", lat: 28.9234, lng: 50.8203 },
  { country: "Iran", province: "Chaharmahal and Bakhtiari", lat: 32.3256, lng: 50.8644 },
  { country: "Iran", province: "East Azerbaijan", lat: 37.9035, lng: 46.2679 },
  { country: "Iran", province: "Fars", lat: 29.1044, lng: 53.0459 },
  { country: "Iran", province: "Gilan", lat: 37.2809, lng: 49.5924 },
  { country: "Iran", province: "Golestan", lat: 37.2898, lng: 55.1375 },
  { country: "Iran", province: "Hamadan", lat: 34.7989, lng: 48.5150 },
  { country: "Iran", province: "Hormozgan", lat: 27.1832, lng: 56.2666 },
  { country: "Iran", province: "Ilam", lat: 33.2957, lng: 46.6703 },
  { country: "Iran", province: "Isfahan", lat: 32.6546, lng: 51.6680 },
  { country: "Iran", province: "Kerman", lat: 30.2839, lng: 57.0834 },
  { country: "Iran", province: "Kermanshah", lat: 34.3142, lng: 47.0650 },
  { country: "Iran", province: "Khuzestan", lat: 31.3183, lng: 48.6706 },
  { country: "Iran", province: "Kohgiluyeh and Boyer-Ahmad", lat: 30.7246, lng: 50.8456 },
  { country: "Iran", province: "Kurdistan", lat: 35.9554, lng: 47.1362 },
  { country: "Iran", province: "Lorestan", lat: 33.5818, lng: 48.3988 },
  { country: "Iran", province: "Markazi", lat: 34.0954, lng: 49.7013 },
  { country: "Iran", province: "Mazandaran", lat: 36.2262, lng: 52.5319 }
];

// 80. Iraq
const iraqGeoData = [
  { country: "Iraq", governorate: "Al Anbar", lat: 32.5000, lng: 41.9167 },
  { country: "Iraq", governorate: "Babil", lat: 32.4667, lng: 44.4333 },
  { country: "Iraq", governorate: "Baghdad", lat: 33.3152, lng: 44.3661 },
  { country: "Iraq", governorate: "Basra", lat: 30.5000, lng: 47.8167 },
  { country: "Iraq", governorate: "Dhi Qar", lat: 31.0500, lng: 46.2500 },
  { country: "Iraq", governorate: "Diyala", lat: 33.7500, lng: 45.0000 },
  { country: "Iraq", governorate: "Dohuk", lat: 36.8667, lng: 43.0000 },
  { country: "Iraq", governorate: "Erbil", lat: 36.1911, lng: 44.0094 },
  { country: "Iraq", governorate: "Karbala", lat: 32.6167, lng: 44.0333 },
  { country: "Iraq", governorate: "Kirkuk", lat: 35.4667, lng: 44.4000 },
  { country: "Iraq", governorate: "Maysan", lat: 31.8333, lng: 47.1500 },
  { country: "Iraq", governorate: "Muthanna", lat: 29.9917, lng: 45.2975 },
  { country: "Iraq", governorate: "Najaf", lat: 32.0000, lng: 44.3333 },
  { country: "Iraq", governorate: "Nineveh", lat: 36.3400, lng: 43.1300 },
  { country: "Iraq", governorate: "Qadisiyyah", lat: 31.9667, lng: 44.9333 },
  { country: "Iraq", governorate: "Saladin", lat: 34.6167, lng: 43.6833 },
  { country: "Iraq", governorate: "Sulaymaniyah", lat: 35.5589, lng: 45.4382 },
  { country: "Iraq", governorate: "Wasit", lat: 32.5000, lng: 45.8167 }
];

// 81. Ireland
const irelandGeoData = [
  { country: "Ireland", county: "Carlow", lat: 52.7333, lng: -6.9333 },
  { country: "Ireland", county: "Cavan", lat: 53.9667, lng: -7.3667 },
  { country: "Ireland", county: "Clare", lat: 52.9000, lng: -9.0000 },
  { country: "Ireland", county: "Cork", lat: 51.9000, lng: -8.4731 },
  { country: "Ireland", county: "Donegal", lat: 54.9167, lng: -7.7500 },
  { country: "Ireland", county: "Dublin", lat: 53.3498, lng: -6.2603 },
  { country: "Ireland", county: "Galway", lat: 53.2707, lng: -9.0568 },
  { country: "Ireland", county: "Kerry", lat: 52.1544, lng: -9.5666 },
  { country: "Ireland", county: "Kildare", lat: 53.1589, lng: -6.9092 },
  { country: "Ireland", county: "Kilkenny", lat: 52.6542, lng: -7.2522 },
  { country: "Ireland", county: "Laois", lat: 53.0000, lng: -7.3333 },
  { country: "Ireland", county: "Leitrim", lat: 54.1167, lng: -8.0000 },
  { country: "Ireland", county: "Limerick", lat: 52.6647, lng: -8.6231 },
  { country: "Ireland", county: "Longford", lat: 53.7333, lng: -7.8000 },
  { country: "Ireland", county: "Louth", lat: 53.9500, lng: -6.5333 },
  { country: "Ireland", county: "Mayo", lat: 53.9000, lng: -9.3000 },
  { country: "Ireland", county: "Meath", lat: 53.6500, lng: -6.6833 },
  { country: "Ireland", county: "Monaghan", lat: 54.2500, lng: -6.9667 },
  { country: "Ireland", county: "Offaly", lat: 53.2333, lng: -7.7167 },
  { country: "Ireland", county: "Roscommon", lat: 53.6333, lng: -8.1833 },
  { country: "Ireland", county: "Sligo", lat: 54.2667, lng: -8.4833 },
  { country: "Ireland", county: "Tipperary", lat: 52.4734, lng: -8.1622 },
  { country: "Ireland", county: "Waterford", lat: 52.2583, lng: -7.1119 },
  { country: "Ireland", county: "Westmeath", lat: 53.5333, lng: -7.4667 },
  { country: "Ireland", county: "Wexford", lat: 52.3342, lng: -6.4575 },
  { country: "Ireland", county: "Wicklow", lat: 52.9800, lng: -6.0444 }
];

// 82. Israel
const israelGeoData = [
  { country: "Israel", district: "Central", lat: 32.0833, lng: 34.9167 },
  { country: "Israel", district: "Haifa", lat: 32.8192, lng: 34.9992 },
  { country: "Israel", district: "Jerusalem", lat: 31.7833, lng: 35.2167 },
  { country: "Israel", district: "Northern", lat: 32.9167, lng: 35.3333 },
  { country: "Israel", district: "Southern", lat: 31.2500, lng: 34.7917 },
  { country: "Israel", district: "Tel Aviv", lat: 32.0853, lng: 34.7818 }
];

// 83. Italy
const italyGeoData = [
  { country: "Italy", region: "Abruzzo", lat: 42.3500, lng: 13.4000 },
  { country: "Italy", region: "Basilicata", lat: 40.5000, lng: 16.5000 },
  { country: "Italy", region: "Calabria", lat: 39.0500, lng: 16.5833 },
  { country: "Italy", region: "Campania", lat: 40.8333, lng: 14.2500 },
  { country: "Italy", region: "Emilia-Romagna", lat: 44.5000, lng: 11.0000 },
  { country: "Italy", region: "Friuli Venezia Giulia", lat: 46.0667, lng: 13.2333 },
  { country: "Italy", region: "Lazio", lat: 41.9000, lng: 12.7000 },
  { country: "Italy", region: "Liguria", lat: 44.4167, lng: 8.9500 },
  { country: "Italy", region: "Lombardy", lat: 45.4667, lng: 9.1900 },
  { country: "Italy", region: "Marche", lat: 43.3667, lng: 13.1667 },
  { country: "Italy", region: "Molise", lat: 41.5667, lng: 14.6667 },
  { country: "Italy", region: "Piedmont", lat: 45.0500, lng: 7.7333 },
  { country: "Italy", region: "Puglia", lat: 41.1250, lng: 16.8667 },
  { country: "Italy", region: "Sardinia", lat: 40.0000, lng: 9.0000 },
  { country: "Italy", region: "Sicily", lat: 37.5833, lng: 14.2667 },
  { country: "Italy", region: "Tuscany", lat: 43.7667, lng: 11.2500 },
  { country: "Italy", region: "Trentino-South Tyrol", lat: 46.0667, lng: 11.1333 },
  { country: "Italy", region: "Umbria", lat: 43.1000, lng: 12.3833 },
  { country: "Italy", region: "Valle d'Aosta", lat: 45.7333, lng: 7.3167 },
  { country: "Italy", region: "Veneto", lat: 45.4333, lng: 12.3333 }
];

// 84. Jamaica
const jamaicaGeoData = [
  { country: "Jamaica", parish: "Clarendon", lat: 17.9588, lng: -77.2372 },
  { country: "Jamaica", parish: "Hanover", lat: 18.4167, lng: -78.1333 },
  { country: "Jamaica", parish: "Kingston", lat: 17.9927, lng: -76.7920 },
  { country: "Jamaica", parish: "Manchester", lat: 18.0000, lng: -77.5000 },
  { country: "Jamaica", parish: "Portland", lat: 18.1000, lng: -76.5333 },
  { country: "Jamaica", parish: "Saint Andrew", lat: 18.0167, lng: -76.7500 },
  { country: "Jamaica", parish: "Saint Ann", lat: 18.4333, lng: -77.2000 },
  { country: "Jamaica", parish: "Saint Catherine", lat: 17.9833, lng: -77.0000 },
  { country: "Jamaica", parish: "Saint Elizabeth", lat: 18.0500, lng: -77.8000 },
  { country: "Jamaica", parish: "Saint James", lat: 18.4667, lng: -77.9167 },
  { country: "Jamaica", parish: "Saint Mary", lat: 18.3667, lng: -76.9000 },
  { country: "Jamaica", parish: "Saint Thomas", lat: 17.9000, lng: -76.4333 },
  { country: "Jamaica", parish: "Trelawny", lat: 18.3500, lng: -77.6333 },
  { country: "Jamaica", parish: "Westmoreland", lat: 18.2167, lng: -78.1667 }
];

// 85. Japan
const japanGeoData = [
  { country: "Japan", prefecture: "Aichi", lat: 35.1833, lng: 136.9000 },
  { country: "Japan", prefecture: "Akita", lat: 39.7167, lng: 140.1167 },
  { country: "Japan", prefecture: "Aomori", lat: 40.8222, lng: 140.7474 },
  { country: "Japan", prefecture: "Chiba", lat: 35.6073, lng: 140.1063 },
  { country: "Japan", prefecture: "Ehime", lat: 33.8417, lng: 132.7661 },
  { country: "Japan", prefecture: "Fukui", lat: 36.0641, lng: 136.2196 },
  { country: "Japan", prefecture: "Fukuoka", lat: 33.6064, lng: 130.4181 },
  { country: "Japan", prefecture: "Fukushima", lat: 37.7500, lng: 140.4678 },
  { country: "Japan", prefecture: "Gifu", lat: 35.4233, lng: 136.7606 },
  { country: "Japan", prefecture: "Gunma", lat: 36.3927, lng: 139.0607 },
  { country: "Japan", prefecture: "Hiroshima", lat: 34.3853, lng: 132.4553 },
  { country: "Japan", prefecture: "Hokkaido", lat: 43.0642, lng: 141.3469 },
  { country: "Japan", prefecture: "Hyogo", lat: 34.6913, lng: 135.1830 },
  { country: "Japan", prefecture: "Ibaraki", lat: 36.3418, lng: 140.4467 },
  { country: "Japan", prefecture: "Ishikawa", lat: 36.5944, lng: 136.6256 },
  { country: "Japan", prefecture: "Iwate", lat: 39.7036, lng: 141.1527 },
  { country: "Japan", prefecture: "Kagawa", lat: 34.3401, lng: 134.0434 },
  { country: "Japan", prefecture: "Kagoshima", lat: 31.5969, lng: 130.5571 },
  { country: "Japan", prefecture: "Kanagawa", lat: 35.4478, lng: 139.6425 },
  { country: "Japan", prefecture: "Kochi", lat: 33.5597, lng: 133.5311 }
];

// 86. Jordan
const jordanGeoData = [
  { country: "Jordan", governorate: "Ajloun", lat: 32.3333, lng: 35.7500 },
  { country: "Jordan", governorate: "Amman", lat: 31.9500, lng: 35.9333 },
  { country: "Jordan", governorate: "Aqaba", lat: 29.5267, lng: 35.0078 },
  { country: "Jordan", governorate: "Balqa", lat: 32.0333, lng: 35.7333 },
  { country: "Jordan", governorate: "Irbid", lat: 32.5556, lng: 35.8500 },
  { country: "Jordan", governorate: "Jerash", lat: 32.2808, lng: 35.8997 },
  { country: "Jordan", governorate: "Karak", lat: 31.1850, lng: 35.7047 },
  { country: "Jordan", governorate: "Ma'an", lat: 30.1964, lng: 35.7344 },
  { country: "Jordan", governorate: "Madaba", lat: 31.7167, lng: 35.8000 },
  { country: "Jordan", governorate: "Mafraq", lat: 32.3431, lng: 36.2078 },
  { country: "Jordan", governorate: "Tafilah", lat: 30.8333, lng: 35.6000 },
  { country: "Jordan", governorate: "Zarqa", lat: 32.0667, lng: 36.1000 }
];

// 87. Kazakhstan
const kazakhstanGeoData = [
  { country: "Kazakhstan", region: "Akmola", lat: 51.9167, lng: 69.4167 },
  { country: "Kazakhstan", region: "Aktobe", lat: 50.2833, lng: 57.1667 },
  { country: "Kazakhstan", region: "Almaty", lat: 43.2567, lng: 76.9286 },
  { country: "Kazakhstan", region: "Atyrau", lat: 47.1167, lng: 51.8833 },
  { country: "Kazakhstan", region: "East Kazakhstan", lat: 49.9500, lng: 82.6167 },
  { country: "Kazakhstan", region: "Jambyl", lat: 44.2667, lng: 72.5833 },
  { country: "Kazakhstan", region: "Karaganda", lat: 49.8333, lng: 73.1667 },
  { country: "Kazakhstan", region: "Kostanay", lat: 53.2167, lng: 63.6167 },
  { country: "Kazakhstan", region: "Kyzylorda", lat: 44.8500, lng: 65.5000 },
  { country: "Kazakhstan", region: "Mangystau", lat: 43.6500, lng: 51.1500 },
  { country: "Kazakhstan", region: "North Kazakhstan", lat: 54.8667, lng: 69.1500 },
  { country: "Kazakhstan", region: "Pavlodar", lat: 52.3000, lng: 76.9500 },
  { country: "Kazakhstan", region: "Turkestan", lat: 43.3000, lng: 68.2500 },
  { country: "Kazakhstan", region: "West Kazakhstan", lat: 51.2333, lng: 51.3833 }
];

// 88. Kenya
const kenyaGeoData = [
  { country: "Kenya", county: "Baringo", lat: 0.4667, lng: 35.9667 },
  { country: "Kenya", county: "Bomet", lat: -0.7833, lng: 35.3333 },
  { country: "Kenya", county: "Bungoma", lat: 0.5667, lng: 34.5667 },
  { country: "Kenya", county: "Busia", lat: 0.4667, lng: 34.1167 },
  { country: "Kenya", county: "Elgeyo-Marakwet", lat: 0.8000, lng: 35.5000 },
  { country: "Kenya", county: "Embu", lat: -0.5333, lng: 37.4500 },
  { country: "Kenya", county: "Garissa", lat: -0.4500, lng: 39.6333 },
  { country: "Kenya", county: "Homa Bay", lat: -0.5333, lng: 34.4500 },
  { country: "Kenya", county: "Isiolo", lat: 0.3500, lng: 37.5833 },
  { country: "Kenya", county: "Kajiado", lat: -1.8500, lng: 36.8000 },
  { country: "Kenya", county: "Kakamega", lat: 0.2833, lng: 34.7500 },
  { country: "Kenya", county: "Kericho", lat: -0.3667, lng: 35.2833 },
  { country: "Kenya", county: "Kiambu", lat: -1.1667, lng: 36.8333 },
  { country: "Kenya", county: "Kilifi", lat: -3.6333, lng: 39.8500 },
  { country: "Kenya", county: "Kirinyaga", lat: -0.5000, lng: 37.3000 }
];

// 89. Kiribati
const kiribatiGeoData = [
  { country: "Kiribati", region: "Gilbert Islands", lat: 1.4167, lng: 173.0000 },
  { country: "Kiribati", region: "Line Islands", lat: -0.5000, lng: -157.0000 },
  { country: "Kiribati", region: "Phoenix Islands", lat: -3.5000, lng: -172.0000 }
];

// 90. Korea, North
const koreaNorthGeoData = [
  { country: "North Korea", province: "Chagang", lat: 40.8700, lng: 126.5600 },
  { country: "North Korea", province: "North Hamgyong", lat: 41.8100, lng: 129.7600 },
  { country: "North Korea", province: "South Hamgyong", lat: 40.3700, lng: 128.2000 },
  { country: "North Korea", province: "North Hwanghae", lat: 38.7300, lng: 126.4500 },
  { country: "North Korea", province: "South Hwanghae", lat: 38.4000, lng: 125.4900 },
  { country: "North Korea", province: "Kangwon", lat: 38.6600, lng: 127.7400 },
  { country: "North Korea", province: "North Pyongan", lat: 39.9800, lng: 125.6100 },
  { country: "North Korea", province: "South Pyongan", lat: 39.3500, lng: 126.0000 },
  { country: "North Korea", province: "Ryanggang", lat: 41.2300, lng: 128.2100 }
];

// 91. Korea, South
const koreaSouthGeoData = [
  { country: "South Korea", province: "Gangwon", lat: 37.8228, lng: 128.1555 },
  { country: "South Korea", province: "Gyeonggi", lat: 37.4138, lng: 127.5183 },
  { country: "South Korea", province: "North Chungcheong", lat: 36.8000, lng: 127.7000 },
  { country: "South Korea", province: "South Chungcheong", lat: 36.5184, lng: 126.8000 },
  { country: "South Korea", province: "North Jeolla", lat: 35.7175, lng: 127.1530 },
  { country: "South Korea", province: "South Jeolla", lat: 34.8679, lng: 126.9910 },
  { country: "South Korea", province: "North Gyeongsang", lat: 36.4919, lng: 128.8889 },
  { country: "South Korea", province: "South Gyeongsang", lat: 35.4606, lng: 128.2132 },
  { country: "South Korea", province: "Jeju", lat: 33.4996, lng: 126.5312 }
];

// 92. Kosovo
const kosovoGeoData = [
  { country: "Kosovo", district: "Ferizaj", lat: 42.3700, lng: 21.1500 },
  { country: "Kosovo", district: "Gjakova", lat: 42.3833, lng: 20.4333 },
  { country: "Kosovo", district: "Gjilan", lat: 42.4667, lng: 21.4667 },
  { country: "Kosovo", district: "Mitrovica", lat: 42.8833, lng: 20.8667 },
  { country: "Kosovo", district: "Peja", lat: 42.6667, lng: 20.3000 },
  { country: "Kosovo", district: "Pristina", lat: 42.6667, lng: 21.1667 },
  { country: "Kosovo", district: "Prizren", lat: 42.2167, lng: 20.7333 }
];

// 93. Kuwait
const kuwaitGeoData = [
  { country: "Kuwait", governorate: "Al Ahmadi", lat: 29.0769, lng: 48.0839 },
  { country: "Kuwait", governorate: "Al Farwaniyah", lat: 29.2775, lng: 47.9589 },
  { country: "Kuwait", governorate: "Al Jahra", lat: 29.3375, lng: 47.6581 },
  { country: "Kuwait", governorate: "Capital", lat: 29.3697, lng: 47.9783 },
  { country: "Kuwait", governorate: "Hawalli", lat: 29.3333, lng: 48.0167 },
  { country: "Kuwait", governorate: "Mubarak Al-Kabeer", lat: 29.2167, lng: 48.0833 }
];

// 94. Kyrgyzstan
const kyrgyzstanGeoData = [
  { country: "Kyrgyzstan", region: "Batken", lat: 40.0625, lng: 70.8214 },
  { country: "Kyrgyzstan", region: "Chuy", lat: 42.8747, lng: 74.5698 },
  { country: "Kyrgyzstan", region: "Issyk-Kul", lat: 42.1850, lng: 77.2833 },
  { country: "Kyrgyzstan", region: "Jalal-Abad", lat: 41.1000, lng: 72.9833 },
  { country: "Kyrgyzstan", region: "Naryn", lat: 41.4269, lng: 76.0153 },
  { country: "Kyrgyzstan", region: "Osh", lat: 40.5333, lng: 72.7833 },
  { country: "Kyrgyzstan", region: "Talas", lat: 42.5167, lng: 72.2333 }
];

// 95. Laos
const laosGeoData = [
  { country: "Laos", province: "Attapeu", lat: 14.8000, lng: 107.1000 },
  { country: "Laos", province: "Bokeo", lat: 20.3000, lng: 100.4167 },
  { country: "Laos", province: "Bolikhamsai", lat: 18.3333, lng: 104.5000 },
  { country: "Laos", province: "Champasak", lat: 15.1167, lng: 105.9000 },
  { country: "Laos", province: "Houaphanh", lat: 20.3333, lng: 104.0000 },
  { country: "Laos", province: "Khammouane", lat: 17.5000, lng: 105.0000 },
  { country: "Laos", province: "Luang Namtha", lat: 21.0000, lng: 101.4167 },
  { country: "Laos", province: "Luang Prabang", lat: 19.8833, lng: 102.1333 },
  { country: "Laos", province: "Oudomxay", lat: 20.6833, lng: 102.0000 },
  { country: "Laos", province: "Phongsaly", lat: 21.6833, lng: 102.1000 }
];

// 96. Latvia
const latviaGeoData = [
  { country: "Latvia", region: "Riga", lat: 56.9496, lng: 24.1052 },
  { country: "Latvia", region: "Vidzeme", lat: 57.3333, lng: 25.5000 },
  { country: "Latvia", region: "Latgale", lat: 56.5000, lng: 27.3333 },
  { country: "Latvia", region: "Kurzeme", lat: 57.0000, lng: 22.0000 },
  { country: "Latvia", region: "Zemgale", lat: 56.5000, lng: 24.0000 }
];

// 97. Lebanon
const lebanonGeoData = [
  { country: "Lebanon", governorate: "Akkar", lat: 34.5333, lng: 36.0833 },
  { country: "Lebanon", governorate: "Baalbek-Hermel", lat: 34.0067, lng: 36.2167 },
  { country: "Lebanon", governorate: "Beirut", lat: 33.8869, lng: 35.5131 },
  { country: "Lebanon", governorate: "Beqaa", lat: 33.8500, lng: 35.9000 },
  { country: "Lebanon", governorate: "Mount Lebanon", lat: 33.8167, lng: 35.6000 },
  { country: "Lebanon", governorate: "Nabatieh", lat: 33.3833, lng: 35.4833 },
  { country: "Lebanon", governorate: "North", lat: 34.4333, lng: 35.8333 },
  { country: "Lebanon", governorate: "South", lat: 33.2667, lng: 35.2000 }
];

// 98. Lesotho
const lesothoGeoData = [
  { country: "Lesotho", district: "Berea", lat: -29.1500, lng: 28.0000 },
  { country: "Lesotho", district: "Butha-Buthe", lat: -28.7667, lng: 28.2500 },
  { country: "Lesotho", district: "Leribe", lat: -28.8667, lng: 28.0500 },
  { country: "Lesotho", district: "Mafeteng", lat: -29.8167, lng: 27.2333 },
  { country: "Lesotho", district: "Maseru", lat: -29.3167, lng: 27.4833 },
  { country: "Lesotho", district: "Mohale's Hoek", lat: -30.1500, lng: 27.4667 },
  { country: "Lesotho", district: "Mokhotlong", lat: -29.2833, lng: 29.0667 },
  { country: "Lesotho", district: "Qacha's Nek", lat: -30.1167, lng: 28.6833 },
  { country: "Lesotho", district: "Quthing", lat: -30.4000, lng: 27.7000 },
  { country: "Lesotho", district: "Thaba-Tseka", lat: -29.5000, lng: 28.6167 }
];

// 99. Liberia
const liberiaGeoData = [
  { country: "Liberia", county: "Bomi", lat: 6.7500, lng: -10.8333 },
  { country: "Liberia", county: "Bong", lat: 6.8333, lng: -9.3667 },
  { country: "Liberia", county: "Gbarpolu", lat: 7.4833, lng: -10.0833 },
  { country: "Liberia", county: "Grand Bassa", lat: 6.2333, lng: -9.8167 },
  { country: "Liberia", county: "Grand Cape Mount", lat: 7.0467, lng: -11.0706 },
  { country: "Liberia", county: "Grand Gedeh", lat: 6.0000, lng: -8.2167 },
  { country: "Liberia", county: "Grand Kru", lat: 4.9333, lng: -8.2333 },
  { country: "Liberia", county: "Lofa", lat: 8.1333, lng: -9.7167 },
  { country: "Liberia", county: "Margibi", lat: 6.5167, lng: -10.3000 },
  { country: "Liberia", county: "Maryland", lat: 4.7250, lng: -7.7417 },
  { country: "Liberia", county: "Montserrado", lat: 6.3167, lng: -10.8000 },
  { country: "Liberia", county: "Nimba", lat: 6.8667, lng: -8.7000 },
  { country: "Liberia", county: "River Cess", lat: 5.9000, lng: -9.4167 },
  { country: "Liberia", county: "River Gee", lat: 5.2667, lng: -7.8720 },
  { country: "Liberia", county: "Sinoe", lat: 5.0333, lng: -8.6667 }
];

// 100. Libya
const libyaGeoData = [
  { country: "Libya", district: "Al Wahat", lat: 29.1167, lng: 21.9833 },
  { country: "Libya", district: "Benghazi", lat: 32.1167, lng: 20.0667 },
  { country: "Libya", district: "Derna", lat: 32.7667, lng: 22.6333 },
  { country: "Libya", district: "Ghat", lat: 24.9667, lng: 10.1833 },
  { country: "Libya", district: "Jabal al Gharbi", lat: 31.9167, lng: 12.0833 },
  { country: "Libya", district: "Jabal al Akhdar", lat: 32.7667, lng: 21.7500 },
  { country: "Libya", district: "Jufra", lat: 29.2000, lng: 16.0000 },
  { country: "Libya", district: "Kufra", lat: 24.1833, lng: 23.3167 },
  { country: "Libya", district: "Marj", lat: 32.5000, lng: 20.8333 },
  { country: "Libya", district: "Misrata", lat: 32.3754, lng: 15.0925 },
  { country: "Libya", district: "Murqub", lat: 32.7500, lng: 14.0000 },
  { country: "Libya", district: "Murzuq", lat: 25.9167, lng: 13.9167 },
  { country: "Libya", district: "Nalut", lat: 31.8667, lng: 10.9833 },
  { country: "Libya", district: "Nuqat al Khams", lat: 32.7933, lng: 12.4883 },
  { country: "Libya", district: "Sabha", lat: 27.0333, lng: 14.4333 },
  { country: "Libya", district: "Sirte", lat: 31.2089, lng: 16.5887 },
  { country: "Libya", district: "Tripoli", lat: 32.8925, lng: 13.1800 },
  { country: "Libya", district: "Wadi al Hayaa", lat: 26.5000, lng: 12.5000 },
  { country: "Libya", district: "Wadi al Shatii", lat: 27.5500, lng: 12.9000 },
  { country: "Libya", district: "Zawiya", lat: 32.7522, lng: 12.7278 }
];

// 101. Liechtenstein
const liechtensteinGeoData = [
  { country: "Liechtenstein", municipality: "Vaduz", lat: 47.1410, lng: 9.5209 },
  { country: "Liechtenstein", municipality: "Schaan", lat: 47.1667, lng: 9.5167 },
  { country: "Liechtenstein", municipality: "Balzers", lat: 47.0667, lng: 9.5000 },
  { country: "Liechtenstein", municipality: "Triesen", lat: 47.1167, lng: 9.5333 },
  { country: "Liechtenstein", municipality: "Eschen", lat: 47.2167, lng: 9.5167 }
];

// 102. Lithuania
const lithuaniaGeoData = [
  { country: "Lithuania", county: "Vilnius", lat: 54.6872, lng: 25.2797 },
  { country: "Lithuania", county: "Kaunas", lat: 54.8985, lng: 23.9036 },
  { country: "Lithuania", county: "Klaipėda", lat: 55.7033, lng: 21.1443 },
  { country: "Lithuania", county: "Šiauliai", lat: 55.9349, lng: 23.3137 },
  { country: "Lithuania", county: "Panevėžys", lat: 55.7333, lng: 24.3500 }
];

// 103. Luxembourg
const luxembourgGeoData = [
  { country: "Luxembourg", canton: "Luxembourg City", lat: 49.6116, lng: 6.1319 },
  { country: "Luxembourg", canton: "Esch-sur-Alzette", lat: 49.4958, lng: 5.9806 },
  { country: "Luxembourg", canton: "Diekirch", lat: 49.8678, lng: 6.1592 },
  { country: "Luxembourg", canton: "Echternach", lat: 49.8117, lng: 6.4200 },
  { country: "Luxembourg", canton: "Grevenmacher", lat: 49.6811, lng: 6.4400 }
];

// 104. Madagascar
const madagascarGeoData = [
  { country: "Madagascar", region: "Antananarivo", lat: -18.9149, lng: 47.5316 },
  { country: "Madagascar", region: "Toamasina", lat: -18.1492, lng: 49.4023 },
  { country: "Madagascar", region: "Mahajanga", lat: -15.7167, lng: 46.3167 },
  { country: "Madagascar", region: "Toliara", lat: -23.3500, lng: 43.6667 },
  { country: "Madagascar", region: "Antsiranana", lat: -12.2787, lng: 49.2917 }
];

// 105. Malawi
const malawiGeoData = [
  { country: "Malawi", region: "Lilongwe", lat: -13.9669, lng: 33.7873 },
  { country: "Malawi", region: "Blantyre", lat: -15.7861, lng: 35.0058 },
  { country: "Malawi", region: "Mzuzu", lat: -11.4656, lng: 34.0207 },
  { country: "Malawi", region: "Zomba", lat: -15.3833, lng: 35.3333 },
  { country: "Malawi", region: "Kasungu", lat: -13.0333, lng: 33.4833 }
];

// 106. Malaysia
const malaysiaGeoData = [
  { country: "Malaysia", state: "Kuala Lumpur", lat: 3.1390, lng: 101.6869 },
  { country: "Malaysia", state: "Selangor", lat: 3.0738, lng: 101.5183 },
  { country: "Malaysia", state: "Johor", lat: 1.4927, lng: 103.7414 },
  { country: "Malaysia", state: "Penang", lat: 5.4164, lng: 100.3327 },
  { country: "Malaysia", state: "Sabah", lat: 5.9804, lng: 116.0735 }
];

// 107. Maldives
const maldivesGeoData = [
  { country: "Maldives", atoll: "Male", lat: 4.1755, lng: 73.5093 },
  { country: "Maldives", atoll: "Addu", lat: -0.6300, lng: 73.1500 },
  { country: "Maldives", atoll: "Fuvahmulah", lat: -0.2981, lng: 73.4242 },
  { country: "Maldives", atoll: "Kulhudhuffushi", lat: 6.6222, lng: 73.0700 },
  { country: "Maldives", atoll: "Thinadhoo", lat: 0.5300, lng: 72.9300 }
];

// 108. Mali
const maliGeoData = [
  { country: "Mali", region: "Bamako", lat: 12.6500, lng: -8.0000 },
  { country: "Mali", region: "Sikasso", lat: 11.3167, lng: -5.6667 },
  { country: "Mali", region: "Ségou", lat: 13.4333, lng: -6.2667 },
  { country: "Mali", region: "Mopti", lat: 14.4833, lng: -4.1833 },
  { country: "Mali", region: "Timbuktu", lat: 16.7667, lng: -3.0167 }
];

// 109. Malta
const maltaGeoData = [
  { country: "Malta", region: "Valletta", lat: 35.8989, lng: 14.5146 },
  { country: "Malta", region: "Birkirkara", lat: 35.8972, lng: 14.4611 },
  { country: "Malta", region: "Qormi", lat: 35.8764, lng: 14.4722 },
  { country: "Malta", region: "Mosta", lat: 35.9092, lng: 14.4256 },
  { country: "Malta", region: "Zabbar", lat: 35.8761, lng: 14.5356 }
];

// 110. Marshall Islands
const marshallIslandsGeoData = [
  { country: "Marshall Islands", atoll: "Majuro", lat: 7.1164, lng: 171.1854 },
  { country: "Marshall Islands", atoll: "Kwajalein", lat: 8.7167, lng: 167.7333 },
  { country: "Marshall Islands", atoll: "Arno", lat: 7.0500, lng: 171.5500 },
  { country: "Marshall Islands", atoll: "Jaluit", lat: 5.9167, lng: 169.6333 },
  { country: "Marshall Islands", atoll: "Wotje", lat: 9.4500, lng: 170.2333 }
];

// 111. Mauritania
const mauritaniaGeoData = [
  { country: "Mauritania", region: "Nouakchott", lat: 18.0858, lng: -15.9785 },
  { country: "Mauritania", region: "Nouadhibou", lat: 20.9319, lng: -17.0347 },
  { country: "Mauritania", region: "Kiffa", lat: 16.6167, lng: -11.4000 },
  { country: "Mauritania", region: "Kaédi", lat: 16.1500, lng: -13.5000 },
  { country: "Mauritania", region: "Rosso", lat: 16.5167, lng: -15.8167 }
];

// 112. Mauritius
const mauritiusGeoData = [
  { country: "Mauritius", region: "Port Louis", lat: -20.1619, lng: 57.4989 },
  { country: "Mauritius", region: "Beau Bassin-Rose Hill", lat: -20.2333, lng: 57.4667 },
  { country: "Mauritius", region: "Vacoas-Phoenix", lat: -20.2981, lng: 57.4783 },
  { country: "Mauritius", region: "Curepipe", lat: -20.3162, lng: 57.5166 },
  { country: "Mauritius", region: "Quatre Bornes", lat: -20.2644, lng: 57.4791 }
];

// 113. Mexico
const mexicoGeoData = [
  { country: "Mexico", state: "Mexico City", lat: 19.4326, lng: -99.1332 },
  { country: "Mexico", state: "Guadalajara", lat: 20.6597, lng: -103.3496 },
  { country: "Mexico", state: "Monterrey", lat: 25.6866, lng: -100.3161 },
  { country: "Mexico", state: "Puebla", lat: 19.0413, lng: -98.2062 },
  { country: "Mexico", state: "Tijuana", lat: 32.5149, lng: -117.0382 }
];

// 114. Micronesia
const micronesiaGeoData = [
  { country: "Micronesia", state: "Palikir", lat: 6.9248, lng: 158.1618 },
  { country: "Micronesia", state: "Kolonia", lat: 6.9641, lng: 158.2089 },
  { country: "Micronesia", state: "Colonia", lat: 9.5167, lng: 138.1333 },
  { country: "Micronesia", state: "Weno", lat: 7.4500, lng: 151.8500 },
  { country: "Micronesia", state: "Tofol", lat: 5.3277, lng: 163.0147 }
];

// 115. Moldova
const moldovaGeoData = [
  { country: "Moldova", region: "Chișinău", lat: 47.0105, lng: 28.8638 },
  { country: "Moldova", region: "Bălți", lat: 47.7631, lng: 27.9287 },
  { country: "Moldova", region: "Orhei", lat: 47.3831, lng: 28.8245 },
  { country: "Moldova", region: "Ungheni", lat: 47.2108, lng: 27.8000 },
  { country: "Moldova", region: "Cahul", lat: 45.9075, lng: 28.1994 }
];

// 116. Monaco
const monacoGeoData = [
  { country: "Monaco", district: "Monte Carlo", lat: 43.7384, lng: 7.4246 },
  { country: "Monaco", district: "La Condamine", lat: 43.7333, lng: 7.4167 },
  { country: "Monaco", district: "Monaco-Ville", lat: 43.7308, lng: 7.4226 },
  { country: "Monaco", district: "Fontvieille", lat: 43.7271, lng: 7.4197 },
  { country: "Monaco", district: "Larvotto", lat: 43.7452, lng: 7.4334 }
];

// 117. Mongolia
const mongoliaGeoData = [
  { country: "Mongolia", region: "Ulaanbaatar", lat: 47.8864, lng: 106.9057 },
  { country: "Mongolia", region: "Erdenet", lat: 49.0333, lng: 104.0833 },
  { country: "Mongolia", region: "Darkhan", lat: 49.4667, lng: 105.9167 },
  { country: "Mongolia", region: "Choibalsan", lat: 48.0667, lng: 114.5000 },
  { country: "Mongolia", region: "Ölgii", lat: 48.9683, lng: 89.9628 }
];

// 118. Montenegro
const montenegroGeoData = [
  { country: "Montenegro", region: "Podgorica", lat: 42.4304, lng: 19.2594 },
  { country: "Montenegro", region: "Nikšić", lat: 42.7731, lng: 18.9445 },
  { country: "Montenegro", region: "Budva", lat: 42.2864, lng: 18.8400 },
  { country: "Montenegro", region: "Bar", lat: 42.0931, lng: 19.1000 },
  { country: "Montenegro", region: "Herceg Novi", lat: 42.4531, lng: 18.5375 }
];

// Morocco
const moroccoGeoData = [
  { country: "Morocco", region: "Casablanca", lat: 33.5731, lng: -7.5898 },
  { country: "Morocco", region: "Rabat", lat: 34.0209, lng: -6.8416 },
  { country: "Morocco", region: "Fez", lat: 34.0333, lng: -5.0000 },
  { country: "Morocco", region: "Marrakesh", lat: 31.6295, lng: -7.9811 },
  { country: "Morocco", region: "Tangier", lat: 35.7595, lng: -5.8340 }
];

// 119. Mozambique
const mozambiqueGeoData = [
  { country: "Mozambique", region: "Maputo", lat: -25.9692, lng: 32.5732 },
  { country: "Mozambique", region: "Matola", lat: -25.9622, lng: 32.4589 },
  { country: "Mozambique", region: "Beira", lat: -19.8436, lng: 34.8389 },
  { country: "Mozambique", region: "Nampula", lat: -15.1167, lng: 39.2667 },
  { country: "Mozambique", region: "Chimoio", lat: -19.1164, lng: 33.4833 }
];

// 120. Myanmar
const myanmarBurmaGeoData = [
  { country: "Myanmar", region: "Yangon", lat: 16.8661, lng: 96.1951 },
  { country: "Myanmar", region: "Mandalay", lat: 21.9588, lng: 96.0891 },
  { country: "Myanmar", region: "Naypyidaw", lat: 19.7633, lng: 96.0785 },
  { country: "Myanmar", region: "Mawlamyine", lat: 16.4900, lng: 97.6300 },
  { country: "Myanmar", region: "Bago", lat: 17.3350, lng: 96.4815 }
];

// 121. Namibia
const namibiaGeoData = [
  { country: "Namibia", region: "Windhoek", lat: -22.5609, lng: 17.0658 },
  { country: "Namibia", region: "Walvis Bay", lat: -22.9575, lng: 14.5053 },
  { country: "Namibia", region: "Swakopmund", lat: -22.6784, lng: 14.5258 },
  { country: "Namibia", region: "Oshakati", lat: -17.7883, lng: 15.7044 },
  { country: "Namibia", region: "Rundu", lat: -17.9333, lng: 19.7667 }
];

// 122. Nauru
const nauruGeoData = [
  { country: "Nauru", district: "Yaren", lat: -0.5477, lng: 166.9209 },
  { country: "Nauru", district: "Aiwo", lat: -0.5333, lng: 166.9167 },
  { country: "Nauru", district: "Denigomodu", lat: -0.5167, lng: 166.9167 },
  { country: "Nauru", district: "Meneng", lat: -0.5472, lng: 166.9397 },
  { country: "Nauru", district: "Boe", lat: -0.5333, lng: 166.9167 }
];

// 123. Nepal
const nepalGeoData = [
  { country: "Nepal", region: "Kathmandu", lat: 27.7172, lng: 85.3240 },
  { country: "Nepal", region: "Pokhara", lat: 28.2096, lng: 83.9856 },
  { country: "Nepal", region: "Lalitpur", lat: 27.6833, lng: 85.3167 },
  { country: "Nepal", region: "Bharatpur", lat: 27.6833, lng: 84.4333 },
  { country: "Nepal", region: "Biratnagar", lat: 26.4833, lng: 87.2833 }
];

// 124. Netherlands
const netherlandsGeoData = [
  { country: "Netherlands", region: "Amsterdam", lat: 52.3676, lng: 4.9041 },
  { country: "Netherlands", region: "Rotterdam", lat: 51.9244, lng: 4.4777 },
  { country: "Netherlands", region: "The Hague", lat: 52.0705, lng: 4.3007 },
  { country: "Netherlands", region: "Utrecht", lat: 52.0907, lng: 5.1214 },
  { country: "Netherlands", region: "Eindhoven", lat: 51.4416, lng: 5.4697 }
];

// 125. New Zealand
const newZealandGeoData = [
  { country: "New Zealand", region: "Auckland", lat: -36.8485, lng: 174.7633 },
  { country: "New Zealand", region: "Wellington", lat: -41.2866, lng: 174.7756 },
  { country: "New Zealand", region: "Christchurch", lat: -43.5320, lng: 172.6306 },
  { country: "New Zealand", region: "Hamilton", lat: -37.7870, lng: 175.2793 },
  { country: "New Zealand", region: "Tauranga", lat: -37.6878, lng: 176.1651 }
];

// 126. Nicaragua
const nicaraguaGeoData = [
  { country: "Nicaragua", region: "Managua", lat: 12.1149, lng: -86.2362 },
  { country: "Nicaragua", region: "León", lat: 12.4333, lng: -86.8833 },
  { country: "Nicaragua", region: "Masaya", lat: 11.9742, lng: -86.0944 },
  { country: "Nicaragua", region: "Chinandega", lat: 12.6333, lng: -87.1333 },
  { country: "Nicaragua", region: "Granada", lat: 11.9333, lng: -85.9500 }
];

// 127. Niger
const nigerGeoData = [
  { country: "Niger", region: "Niamey", lat: 13.5117, lng: 2.1251 },
  { country: "Niger", region: "Zinder", lat: 13.8000, lng: 8.9833 },
  { country: "Niger", region: "Maradi", lat: 13.5000, lng: 7.1000 },
  { country: "Niger", region: "Agadez", lat: 16.9733, lng: 7.9867 },
  { country: "Niger", region: "Tahoua", lat: 14.8888, lng: 5.2692 }
];

// 128. Nigeria
const nigeriaGeoData = [
  { country: "Nigeria", region: "Lagos", lat: 6.5244, lng: 3.3792 },
  { country: "Nigeria", region: "Kano", lat: 12.0000, lng: 8.5167 },
  { country: "Nigeria", region: "Ibadan", lat: 7.3775, lng: 3.9470 },
  { country: "Nigeria", region: "Abuja", lat: 9.0765, lng: 7.3986 },
  { country: "Nigeria", region: "Port Harcourt", lat: 4.8156, lng: 7.0498 }
];

// 129. North Macedonia
const northMacedoniaGeoData = [
  { country: "North Macedonia", region: "Skopje", lat: 41.9973, lng: 21.4280 },
  { country: "North Macedonia", region: "Bitola", lat: 41.0314, lng: 21.3347 },
  { country: "North Macedonia", region: "Kumanovo", lat: 42.1322, lng: 21.7144 },
  { country: "North Macedonia", region: "Prilep", lat: 41.3451, lng: 21.5553 },
  { country: "North Macedonia", region: "Tetovo", lat: 42.0097, lng: 20.9715 }
];

// 130. Norway
const norwayGeoData = [
  { country: "Norway", region: "Oslo", lat: 59.9139, lng: 10.7522 },
  { country: "Norway", region: "Bergen", lat: 60.3913, lng: 5.3221 },
  { country: "Norway", region: "Trondheim", lat: 63.4305, lng: 10.3951 },
  { country: "Norway", region: "Stavanger", lat: 58.9700, lng: 5.7331 },
  { country: "Norway", region: "Tromsø", lat: 69.6492, lng: 18.9553 }
];

// 131. Oman
const omanGeoData = [
  { country: "Oman", region: "Muscat", lat: 23.5880, lng: 58.3829 },
  { country: "Oman", region: "Salalah", lat: 17.0151, lng: 54.0924 },
  { country: "Oman", region: "Sohar", lat: 24.3425, lng: 56.7467 },
  { country: "Oman", region: "Nizwa", lat: 22.9333, lng: 57.5333 },
  { country: "Oman", region: "Sur", lat: 22.5667, lng: 59.5289 }
];

// 132. Pakistan
const pakistanGeoData = [
  { country: "Pakistan", region: "Karachi", lat: 24.8607, lng: 67.0011 },
  { country: "Pakistan", region: "Lahore", lat: 31.5204, lng: 74.3587 },
  { country: "Pakistan", region: "Islamabad", lat: 33.6844, lng: 73.0479 },
  { country: "Pakistan", region: "Rawalpindi", lat: 33.6007, lng: 73.0679 },
  { country: "Pakistan", region: "Faisalabad", lat: 31.4504, lng: 73.1350 }
];

// 133. Palau
const palauGeoData = [
  { country: "Palau", region: "Ngerulmud", lat: 7.5000, lng: 134.6244 },
  { country: "Palau", region: "Koror", lat: 7.3419, lng: 134.4783 },
  { country: "Palau", region: "Melekeok", lat: 7.4963, lng: 134.6367 },
  { country: "Palau", region: "Airai", lat: 7.3964, lng: 134.5692 },
  { country: "Palau", region: "Peleliu", lat: 7.0050, lng: 134.2429 }
];

// 134. Palestine
const palestineGeoData = [
  { country: "Palestine", region: "Ramallah", lat: 31.9038, lng: 35.2034 },
  { country: "Palestine", region: "Gaza City", lat: 31.5017, lng: 34.4668 },
  { country: "Palestine", region: "Hebron", lat: 31.5326, lng: 35.0998 },
  { country: "Palestine", region: "Nablus", lat: 32.2211, lng: 35.2544 },
  { country: "Palestine", region: "Bethlehem", lat: 31.7054, lng: 35.2024 }
];

// 135. Panama
const panamaGeoData = [
  { country: "Panama", region: "Panama City", lat: 8.9824, lng: -79.5199 },
  { country: "Panama", region: "San Miguelito", lat: 9.0333, lng: -79.5000 },
  { country: "Panama", region: "David", lat: 8.4333, lng: -82.4333 },
  { country: "Panama", region: "Colón", lat: 9.3569, lng: -79.9000 },
  { country: "Panama", region: "La Chorrera", lat: 8.8833, lng: -79.7833 }
];

// 136. Papua New Guinea
const papuaNewGuineaGeoData = [
  { country: "Papua New Guinea", region: "Port Moresby", lat: -9.4438, lng: 147.1803 },
  { country: "Papua New Guinea", region: "Lae", lat: -6.7333, lng: 147.0000 },
  { country: "Papua New Guinea", region: "Mount Hagen", lat: -5.8583, lng: 144.2333 },
  { country: "Papua New Guinea", region: "Madang", lat: -5.2222, lng: 145.7875 },
  { country: "Papua New Guinea", region: "Goroka", lat: -6.0833, lng: 145.3875 }
];

// 137. Paraguay
const paraguayGeoData = [
  { country: "Paraguay", region: "Asunción", lat: -25.2867, lng: -57.3333 },
  { country: "Paraguay", region: "Ciudad del Este", lat: -25.5167, lng: -54.6167 },
  { country: "Paraguay", region: "San Lorenzo", lat: -25.3333, lng: -57.5333 },
  { country: "Paraguay", region: "Luque", lat: -25.2667, lng: -57.4833 },
  { country: "Paraguay", region: "Capiatá", lat: -25.3500, lng: -57.4333 }
];

// 138. Peru
const peruGeoData = [
  { country: "Peru", region: "Lima", lat: -12.0432, lng: -77.0282 },
  { country: "Peru", region: "Arequipa", lat: -16.4090, lng: -71.5375 },
  { country: "Peru", region: "Trujillo", lat: -8.1119, lng: -79.0289 },
  { country: "Peru", region: "Chiclayo", lat: -6.7719, lng: -79.8408 },
  { country: "Peru", region: "Cusco", lat: -13.5319, lng: -71.9675 }
];

// 139. Philippines
const philippinesGeoData = [
  { country: "Philippines", region: "Manila", lat: 14.5995, lng: 120.9842 },
  { country: "Philippines", region: "Quezon City", lat: 14.6760, lng: 121.0437 },
  { country: "Philippines", region: "Davao City", lat: 7.0707, lng: 125.6087 },
  { country: "Philippines", region: "Cebu City", lat: 10.3157, lng: 123.8854 },
  { country: "Philippines", region: "Makati", lat: 14.5547, lng: 121.0244 }
];

// 140. Poland
const polandGeoData = [
  { country: "Poland", region: "Warsaw", lat: 52.2297, lng: 21.0122 },
  { country: "Poland", region: "Kraków", lat: 50.0647, lng: 19.9450 },
  { country: "Poland", region: "Łódź", lat: 51.7592, lng: 19.4559 },
  { country: "Poland", region: "Wrocław", lat: 51.1079, lng: 17.0385 },
  { country: "Poland", region: "Poznań", lat: 52.4064, lng: 16.9252 }
];

// 141. Portugal
const portugalGeoData = [
  { country: "Portugal", region: "Lisbon", lat: 38.7223, lng: -9.1393 },
  { country: "Portugal", region: "Porto", lat: 41.1579, lng: -8.6291 },
  { country: "Portugal", region: "Vila Nova de Gaia", lat: 41.1333, lng: -8.6167 },
  { country: "Portugal", region: "Amadora", lat: 38.7500, lng: -9.2333 },
  { country: "Portugal", region: "Braga", lat: 41.5333, lng: -8.4167 }
];

// 142. Qatar
const qatarGeoData = [
  { country: "Qatar", region: "Doha", lat: 25.2867, lng: 51.5333 },
  { country: "Qatar", region: "Al Wakrah", lat: 25.1715, lng: 51.6034 },
  { country: "Qatar", region: "Al Khor", lat: 25.6839, lng: 51.5058 },
  { country: "Qatar", region: "Al Rayyan", lat: 25.2919, lng: 51.4244 },
  { country: "Qatar", region: "Umm Salal", lat: 25.5169, lng: 51.4000 }
];

// 143. Romania
const romaniaGeoData = [
  { country: "Romania", region: "Bucharest", lat: 44.4268, lng: 26.1025 },
  { country: "Romania", region: "Cluj-Napoca", lat: 46.7712, lng: 23.6236 },
  { country: "Romania", region: "Timișoara", lat: 45.7489, lng: 21.2087 },
  { country: "Romania", region: "Iași", lat: 47.1585, lng: 27.6014 },
  { country: "Romania", region: "Constanța", lat: 44.1733, lng: 28.6383 }
];

// 144. Russia
const russiaGeoData = [
  { country: "Russia", region: "Moscow", lat: 55.7558, lng: 37.6173 },
  { country: "Russia", region: "Saint Petersburg", lat: 59.9343, lng: 30.3351 },
  { country: "Russia", region: "Novosibirsk", lat: 55.0084, lng: 82.9357 },
  { country: "Russia", region: "Yekaterinburg", lat: 56.8389, lng: 60.6057 },
  { country: "Russia", region: "Kazan", lat: 55.7887, lng: 49.1221 }
];

// 145. Rwanda
const rwandaGeoData = [
  { country: "Rwanda", region: "Kigali", lat: -1.9441, lng: 30.0619 },
  { country: "Rwanda", region: "Butare", lat: -2.5967, lng: 29.7397 },
  { country: "Rwanda", region: "Gitarama", lat: -2.0744, lng: 29.7567 },
  { country: "Rwanda", region: "Ruhengeri", lat: -1.4996, lng: 29.6335 },
  { country: "Rwanda", region: "Gisenyi", lat: -1.7017, lng: 29.2569 }
];

// 146. Saint Kitts and Nevis
const saintKittsAndNevisGeoData = [
  { country: "Saint Kitts and Nevis", region: "Basseterre", lat: 17.2955, lng: -62.7291 },
  { country: "Saint Kitts and Nevis", region: "Charlestown", lat: 17.1333, lng: -62.6167 },
  { country: "Saint Kitts and Nevis", region: "Sandy Point Town", lat: 17.3587, lng: -62.8486 },
  { country: "Saint Kitts and Nevis", region: "Cayon", lat: 17.3500, lng: -62.7333 },
  { country: "Saint Kitts and Nevis", region: "Newcastle", lat: 17.2000, lng: -62.5833 }
];

// 147. Saint Lucia
const saintLuciaGeoData = [
  { country: "Saint Lucia", region: "Castries", lat: 14.0101, lng: -60.9875 },
  { country: "Saint Lucia", region: "Vieux Fort", lat: 13.7167, lng: -60.9500 },
  { country: "Saint Lucia", region: "Micoud", lat: 13.8167, lng: -60.9000 },
  { country: "Saint Lucia", region: "Soufrière", lat: 13.8500, lng: -61.0667 },
  { country: "Saint Lucia", region: "Gros Islet", lat: 14.0833, lng: -60.9500 }
];

// 148. Saint Vincent and the Grenadines
const saintVincentAndTheGrenadinesGeoData = [
  { country: "Saint Vincent and the Grenadines", region: "Kingstown", lat: 13.1483, lng: -61.2121 },
  { country: "Saint Vincent and the Grenadines", region: "Port Elizabeth", lat: 13.0111, lng: -61.2350 },
  { country: "Saint Vincent and the Grenadines", region: "Georgetown", lat: 13.2833, lng: -61.1167 },
  { country: "Saint Vincent and the Grenadines", region: "Barrouallie", lat: 13.2333, lng: -61.2733 },
  { country: "Saint Vincent and the Grenadines", region: "Chateaubelair", lat: 13.2900, lng: -61.2400 }
];

// 149. Samoa
const samoaGeoData = [
  { country: "Samoa", region: "Apia", lat: -13.8333, lng: -171.7667 },
  { country: "Samoa", region: "Vaitele", lat: -13.8333, lng: -171.8000 },
  { country: "Samoa", region: "Faleula", lat: -13.8167, lng: -171.8333 },
  { country: "Samoa", region: "Siusega", lat: -13.8500, lng: -171.7833 },
  { country: "Samoa", region: "Malie", lat: -13.7833, lng: -171.8167 }
];

// 150. San Marino
const sanMarinoGeoData = [
  { country: "San Marino", region: "City of San Marino", lat: 43.9367, lng: 12.4464 },
  { country: "San Marino", region: "Serravalle", lat: 43.9694, lng: 12.4811 },
  { country: "San Marino", region: "Borgo Maggiore", lat: 43.9333, lng: 12.4472 },
  { country: "San Marino", region: "Domagnano", lat: 43.9500, lng: 12.4667 },
  { country: "San Marino", region: "Fiorentino", lat: 43.9167, lng: 12.4500 }
];

// 151. Sao Tome and Principe
const saoTomeAndPrincipeGeoData = [
  { country: "Sao Tome and Principe", region: "São Tomé", lat: 0.3365, lng: 6.7273 },
  { country: "Sao Tome and Principe", region: "Santo António", lat: 1.6390, lng: 7.4209 },
  { country: "Sao Tome and Principe", region: "Neves", lat: 0.3583, lng: 6.5500 },
  { country: "Sao Tome and Principe", region: "Santana", lat: 0.2500, lng: 6.7333 },
  { country: "Sao Tome and Principe", region: "Guadalupe", lat: 0.3833, lng: 6.6167 }
];

// 152. Saudi Arabia
const saudiArabiaGeoData = [
  { country: "Saudi Arabia", region: "Riyadh", lat: 24.7136, lng: 46.6753 },
  { country: "Saudi Arabia", region: "Jeddah", lat: 21.5433, lng: 39.1728 },
  { country: "Saudi Arabia", region: "Mecca", lat: 21.4225, lng: 39.8262 },
  { country: "Saudi Arabia", region: "Medina", lat: 24.4686, lng: 39.6142 },
  { country: "Saudi Arabia", region: "Dammam", lat: 26.4333, lng: 50.1000 }
];

// 153. Senegal
const senegalGeoData = [
  { country: "Senegal", region: "Dakar", lat: 14.7167, lng: -17.4677 },
  { country: "Senegal", region: "Thiès", lat: 14.7833, lng: -16.9167 },
  { country: "Senegal", region: "Saint-Louis", lat: 16.0167, lng: -16.5000 },
  { country: "Senegal", region: "Ziguinchor", lat: 12.5833, lng: -16.2667 },
  { country: "Senegal", region: "Kaolack", lat: 14.1667, lng: -16.0667 }
];

// 154. Serbia
const serbiaGeoData = [
  { country: "Serbia", region: "Belgrade", lat: 44.7866, lng: 20.4489 },
  { country: "Serbia", region: "Novi Sad", lat: 45.2671, lng: 19.8335 },
  { country: "Serbia", region: "Niš", lat: 43.3209, lng: 21.8958 },
  { country: "Serbia", region: "Kragujevac", lat: 44.0167, lng: 20.9167 },
  { country: "Serbia", region: "Subotica", lat: 46.1000, lng: 19.6667 }
];

// 155. Seychelles
const seychellesGeoData = [
  { country: "Seychelles", region: "Victoria", lat: -4.6167, lng: 55.4500 },
  { country: "Seychelles", region: "Anse Boileau", lat: -4.7167, lng: 55.4833 },
  { country: "Seychelles", region: "Beau Vallon", lat: -4.6208, lng: 55.4300 },
  { country: "Seychelles", region: "Cascade", lat: -4.6667, lng: 55.5000 },
  { country: "Seychelles", region: "Takamaka", lat: -4.7667, lng: 55.5000 }
];

// 156. Sierra Leone
const sierraLeoneGeoData = [
  { country: "Sierra Leone", region: "Freetown", lat: 8.4900, lng: -13.2344 },
  { country: "Sierra Leone", region: "Bo", lat: 7.9647, lng: -11.7383 },
  { country: "Sierra Leone", region: "Kenema", lat: 7.8833, lng: -11.1833 },
  { country: "Sierra Leone", region: "Makeni", lat: 8.8833, lng: -12.0500 },
  { country: "Sierra Leone", region: "Koidu", lat: 8.6433, lng: -10.9714 }
];

// 157. Singapore
const singaporeGeoData = [
  { country: "Singapore", region: "Central Area", lat: 1.2897, lng: 103.8501 },
  { country: "Singapore", region: "Woodlands", lat: 1.4382, lng: 103.7891 },
  { country: "Singapore", region: "Tampines", lat: 1.3497, lng: 103.9500 },
  { country: "Singapore", region: "Jurong East", lat: 1.3329, lng: 103.7436 },
  { country: "Singapore", region: "Punggol", lat: 1.3984, lng: 103.9072 }
];

// 158. Slovakia
const slovakiaGeoData = [
  { country: "Slovakia", region: "Bratislava", lat: 48.1486, lng: 17.1077 },
  { country: "Slovakia", region: "Košice", lat: 48.7164, lng: 21.2611 },
  { country: "Slovakia", region: "Prešov", lat: 48.9984, lng: 21.2339 },
  { country: "Slovakia", region: "Žilina", lat: 49.2231, lng: 18.7394 },
  { country: "Slovakia", region: "Banská Bystrica", lat: 48.7333, lng: 19.1500 }
];

// 159. Slovenia
const sloveniaGeoData = [
  { country: "Slovenia", region: "Ljubljana", lat: 46.0569, lng: 14.5058 },
  { country: "Slovenia", region: "Maribor", lat: 46.5547, lng: 15.6467 },
  { country: "Slovenia", region: "Celje", lat: 46.2311, lng: 15.2686 },
  { country: "Slovenia", region: "Kranj", lat: 46.2389, lng: 14.3556 },
  { country: "Slovenia", region: "Koper", lat: 45.5469, lng: 13.7294 }
];

// 160. Solomon Islands
const solomonIslandsGeoData = [
  { country: "Solomon Islands", region: "Honiara", lat: -9.4333, lng: 159.9500 },
  { country: "Solomon Islands", region: "Auki", lat: -8.7667, lng: 160.7000 },
  { country: "Solomon Islands", region: "Gizo", lat: -8.1000, lng: 156.8500 },
  { country: "Solomon Islands", region: "Kirakira", lat: -10.4500, lng: 161.9167 },
  { country: "Solomon Islands", region: "Tulagi", lat: -9.1000, lng: 160.1500 }
];

// 161. Somalia
const somaliaGeoData = [
  { country: "Somalia", region: "Mogadishu", lat: 2.0469, lng: 45.3182 },
  { country: "Somalia", region: "Hargeisa", lat: 9.5600, lng: 44.0650 },
  { country: "Somalia", region: "Bosaso", lat: 11.2842, lng: 49.1816 },
  { country: "Somalia", region: "Kismayo", lat: -0.3567, lng: 42.5450 },
  { country: "Somalia", region: "Merca", lat: 1.7167, lng: 44.7667 }
];

// 162. South Africa
const southAfricaGeoData = [
  { country: "South Africa", region: "Johannesburg", lat: -26.2041, lng: 28.0473 },
  { country: "South Africa", region: "Cape Town", lat: -33.9249, lng: 18.4241 },
  { country: "South Africa", region: "Durban", lat: -29.8587, lng: 31.0218 },
  { country: "South Africa", region: "Pretoria", lat: -25.7461, lng: 28.1881 },
  { country: "South Africa", region: "Port Elizabeth", lat: -33.9608, lng: 25.6022 }
];

// 163. South Sudan
const southSudanGeoData = [
  { country: "South Sudan", region: "Juba", lat: 4.8517, lng: 31.5825 },
  { country: "South Sudan", region: "Wau", lat: 7.7000, lng: 27.9833 },
  { country: "South Sudan", region: "Malakal", lat: 9.5333, lng: 31.6500 },
  { country: "South Sudan", region: "Bor", lat: 6.2089, lng: 31.5586 },
  { country: "South Sudan", region: "Yei", lat: 4.0903, lng: 30.6778 }
];

// 164. Spain
const spainGeoData = [
  { country: "Spain", region: "Madrid", lat: 40.4168, lng: -3.7038 },
  { country: "Spain", region: "Barcelona", lat: 41.3851, lng: 2.1734 },
  { country: "Spain", region: "Valencia", lat: 39.4699, lng: -0.3763 },
  { country: "Spain", region: "Seville", lat: 37.3891, lng: -5.9845 },
  { country: "Spain", region: "Bilbao", lat: 43.2627, lng: -2.9253 }
];

// 165. Sri Lanka
const sriLankaGeoData = [
  { country: "Sri Lanka", region: "Colombo", lat: 6.9271, lng: 79.8612 },
  { country: "Sri Lanka", region: "Kandy", lat: 7.2906, lng: 80.6337 },
  { country: "Sri Lanka", region: "Galle", lat: 6.0535, lng: 80.2210 },
  { country: "Sri Lanka", region: "Jaffna", lat: 9.6615, lng: 80.0255 },
  { country: "Sri Lanka", region: "Trincomalee", lat: 8.5667, lng: 81.2333 }
];

// 166. Sudan
const sudanGeoData = [
  { country: "Sudan", region: "Khartoum", lat: 15.5007, lng: 32.5599 },
  { country: "Sudan", region: "Omdurman", lat: 15.6167, lng: 32.4800 },
  { country: "Sudan", region: "Port Sudan", lat: 19.6167, lng: 37.2167 },
  { country: "Sudan", region: "Kassala", lat: 15.4500, lng: 36.4000 },
  { country: "Sudan", region: "El Obeid", lat: 13.1833, lng: 30.2167 }
];

// 167. Suriname
const surinameGeoData = [
  { country: "Suriname", region: "Paramaribo", lat: 5.8520, lng: -55.2038 },
  { country: "Suriname", region: "Lelydorp", lat: 5.7000, lng: -55.2333 },
  { country: "Suriname", region: "Nieuw Nickerie", lat: 5.9500, lng: -56.9833 },
  { country: "Suriname", region: "Moengo", lat: 5.6167, lng: -54.4000 },
  { country: "Suriname", region: "Albina", lat: 5.5000, lng: -54.0500 }
];

// 168. Sweden
const swedenGeoData = [
  { country: "Sweden", region: "Stockholm", lat: 59.3293, lng: 18.0686 },
  { country: "Sweden", region: "Gothenburg", lat: 57.7089, lng: 11.9746 },
  { country: "Sweden", region: "Malmö", lat: 55.6050, lng: 13.0038 },
  { country: "Sweden", region: "Uppsala", lat: 59.8586, lng: 17.6389 },
  { country: "Sweden", region: "Västerås", lat: 59.6167, lng: 16.5500 }
];

// 169. Switzerland
const switzerlandGeoData = [
  { country: "Switzerland", region: "Zurich", lat: 47.3769, lng: 8.5417 },
  { country: "Switzerland", region: "Geneva", lat: 46.2044, lng: 6.1432 },
  { country: "Switzerland", region: "Basel", lat: 47.5596, lng: 7.5886 },
  { country: "Switzerland", region: "Bern", lat: 46.9480, lng: 7.4474 },
  { country: "Switzerland", region: "Lausanne", lat: 46.5197, lng: 6.6323 }
];

// 170. Syria
const syriaGeoData = [
  { country: "Syria", region: "Damascus", lat: 33.5138, lng: 36.2765 },
  { country: "Syria", region: "Aleppo", lat: 36.2021, lng: 37.1343 },
  { country: "Syria", region: "Homs", lat: 34.7324, lng: 36.7137 },
  { country: "Syria", region: "Latakia", lat: 35.5317, lng: 35.7915 },
  { country: "Syria", region: "Hama", lat: 35.1333, lng: 36.7500 }
];

// 171. Taiwan
const taiwanGeoData = [
  { country: "Taiwan", region: "Taipei", lat: 25.0330, lng: 121.5654 },
  { country: "Taiwan", region: "Kaohsiung", lat: 22.6273, lng: 120.3014 },
  { country: "Taiwan", region: "Taichung", lat: 24.1477, lng: 120.6736 },
  { country: "Taiwan", region: "Tainan", lat: 22.9999, lng: 120.2269 },
  { country: "Taiwan", region: "Hsinchu", lat: 24.8036, lng: 120.9687 }
];

// 172. Tajikistan
const tajikistanGeoData = [
  { country: "Tajikistan", region: "Dushanbe", lat: 38.5358, lng: 68.7791 },
  { country: "Tajikistan", region: "Khujand", lat: 40.2833, lng: 69.6167 },
  { country: "Tajikistan", region: "Kulob", lat: 37.9146, lng: 69.7845 },
  { country: "Tajikistan", region: "Qurghonteppa", lat: 37.8333, lng: 68.7833 },
  { country: "Tajikistan", region: "Isfara", lat: 40.1333, lng: 70.6167 }
];

// 173. Tanzania
const tanzaniaGeoData = [
  { country: "Tanzania", region: "Dar es Salaam", lat: -6.7924, lng: 39.2083 },
  { country: "Tanzania", region: "Dodoma", lat: -6.1722, lng: 35.7395 },
  { country: "Tanzania", region: "Mwanza", lat: -2.5167, lng: 32.9000 },
  { country: "Tanzania", region: "Arusha", lat: -3.3667, lng: 36.6833 },
  { country: "Tanzania", region: "Zanzibar City", lat: -6.1667, lng: 39.2000 }
];

// 174. Thailand
const thailandGeoData = [
  { country: "Thailand", region: "Bangkok", lat: 13.7563, lng: 100.5018 },
  { country: "Thailand", region: "Chiang Mai", lat: 18.7883, lng: 98.9853 },
  { country: "Thailand", region: "Phuket", lat: 7.8804, lng: 98.3923 },
  { country: "Thailand", region: "Pattaya", lat: 12.9236, lng: 100.8824 },
  { country: "Thailand", region: "Hat Yai", lat: 7.0086, lng: 100.4747 }
];

// 175. Togo
const togoGeoData = [
  { country: "Togo", region: "Lomé", lat: 6.1375, lng: 1.2123 },
  { country: "Togo", region: "Sokodé", lat: 8.9833, lng: 1.1333 },
  { country: "Togo", region: "Kara", lat: 9.5500, lng: 1.1833 },
  { country: "Togo", region: "Kpalimé", lat: 6.9000, lng: 0.6333 },
  { country: "Togo", region: "Atakpamé", lat: 7.5333, lng: 1.1333 }
];

// 176. Tonga
const tongaGeoData = [
  { country: "Tonga", region: "Nuku'alofa", lat: -21.1333, lng: -175.2000 },
  { country: "Tonga", region: "Neiafu", lat: -18.6500, lng: -173.9833 },
  { country: "Tonga", region: "Pangai", lat: -19.8000, lng: -174.3500 },
  { country: "Tonga", region: "Ohonua", lat: -21.3333, lng: -174.9500 },
  { country: "Tonga", region: "Hihifo", lat: -15.9500, lng: -173.7833 }
];

// 177. Trinidad and Tobago
const trinidadAndTobagoGeoData = [
  { country: "Trinidad and Tobago", region: "Port of Spain", lat: 10.6667, lng: -61.5167 },
  { country: "Trinidad and Tobago", region: "San Fernando", lat: 10.2833, lng: -61.4667 },
  { country: "Trinidad and Tobago", region: "Scarborough", lat: 11.1833, lng: -60.7333 },
  { country: "Trinidad and Tobago", region: "Chaguanas", lat: 10.5167, lng: -61.4167 },
  { country: "Trinidad and Tobago", region: "Arima", lat: 10.6333, lng: -61.2833 }
];

// 178. Tunisia
const tunisiaGeoData = [
  { country: "Tunisia", region: "Tunis", lat: 36.8065, lng: 10.1815 },
  { country: "Tunisia", region: "Sfax", lat: 34.7400, lng: 10.7600 },
  { country: "Tunisia", region: "Sousse", lat: 35.8333, lng: 10.6333 },
  { country: "Tunisia", region: "Kairouan", lat: 35.6781, lng: 10.0964 },
  { country: "Tunisia", region: "Bizerte", lat: 37.2744, lng: 9.8739 }
];

// 179. Turkey
const turkeyGeoData = [
  { country: "Turkey", region: "Istanbul", lat: 41.0082, lng: 28.9784 },
  { country: "Turkey", region: "Ankara", lat: 39.9334, lng: 32.8597 },
  { country: "Turkey", region: "Izmir", lat: 38.4192, lng: 27.1287 },
  { country: "Turkey", region: "Bursa", lat: 40.1885, lng: 29.0610 },
  { country: "Turkey", region: "Antalya", lat: 36.8969, lng: 30.7133 }
];

// 180. Turkmenistan
const turkmenistanGeoData = [
  { country: "Turkmenistan", region: "Ashgabat", lat: 37.9500, lng: 58.3833 },
  { country: "Turkmenistan", region: "Türkmenabat", lat: 39.1000, lng: 63.5667 },
  { country: "Turkmenistan", region: "Daşoguz", lat: 41.8333, lng: 59.9667 },
  { country: "Turkmenistan", region: "Mary", lat: 37.6000, lng: 61.8333 },
  { country: "Turkmenistan", region: "Balkanabat", lat: 39.5100, lng: 54.3650 }
];

// 181. Tuvalu
const tuvaluGeoData = [
  { country: "Tuvalu", region: "Funafuti", lat: -8.5167, lng: 179.2167 },
  { country: "Tuvalu", region: "Vaitupu", lat: -7.4781, lng: 178.6748 },
  { country: "Tuvalu", region: "Nukufetau", lat: -8.0000, lng: 178.5000 },
  { country: "Tuvalu", region: "Nukulaelae", lat: -9.3833, lng: 179.8500 },
  { country: "Tuvalu", region: "Nanumea", lat: -5.6667, lng: 176.1167 }
];

// 182. Uganda
const ugandaGeoData = [
  { country: "Uganda", region: "Kampala", lat: 0.3476, lng: 32.5825 },
  { country: "Uganda", region: "Gulu", lat: 2.7747, lng: 32.2990 },
  { country: "Uganda", region: "Lira", lat: 2.2499, lng: 32.8999 },
  { country: "Uganda", region: "Mbarara", lat: -0.6167, lng: 30.6500 },
  { country: "Uganda", region: "Jinja", lat: 0.4333, lng: 33.2033 }
];

// 183. Ukraine
const ukraineGeoData = [
  { country: "Ukraine", region: "Kyiv", lat: 50.4501, lng: 30.5234 },
  { country: "Ukraine", region: "Kharkiv", lat: 49.9935, lng: 36.2304 },
  { country: "Ukraine", region: "Odesa", lat: 46.4825, lng: 30.7233 },
  { country: "Ukraine", region: "Dnipro", lat: 48.4647, lng: 35.0462 },
  { country: "Ukraine", region: "Lviv", lat: 49.8397, lng: 24.0297 }
];

// 184. United Arab Emirates
const unitedArabEmiratesGeoData = [
  { country: "United Arab Emirates", region: "Dubai", lat: 25.2048, lng: 55.2708 },
  { country: "United Arab Emirates", region: "Abu Dhabi", lat: 24.4539, lng: 54.3773 },
  { country: "United Arab Emirates", region: "Sharjah", lat: 25.3573, lng: 55.4033 },
  { country: "United Arab Emirates", region: "Ajman", lat: 25.4111, lng: 55.4354 },
  { country: "United Arab Emirates", region: "Ras Al Khaimah", lat: 25.7895, lng: 55.9432 }
];

// 185. United Kingdom
const unitedKingdomGeoData = [
  { country: "United Kingdom", region: "London", lat: 51.5074, lng: -0.1278 },
  { country: "United Kingdom", region: "Manchester", lat: 53.4808, lng: -2.2426 },
  { country: "United Kingdom", region: "Birmingham", lat: 52.4862, lng: -1.8904 },
  { country: "United Kingdom", region: "Glasgow", lat: 55.8642, lng: -4.2518 },
  { country: "United Kingdom", region: "Liverpool", lat: 53.4084, lng: -2.9916 }
];

// 186. United States of America
const unitedStatesGeoData = [
  { country: "United States", region: "Washington DC", lat: 38.9072, lng: -77.0369 },
  { country: "United States", region: "New York", lat: 40.7128, lng: -74.0060 },
  { country: "United States", region: "Los Angeles", lat: 34.0522, lng: -118.2437 },
  { country: "United States", region: "Chicago", lat: 41.8781, lng: -87.6298 },
  { country: "United States", region: "Houston", lat: 29.7604, lng: -95.3698 }
];

// 187. Uruguay
const uruguayGeoData = [
  { country: "Uruguay", region: "Montevideo", lat: -34.9011, lng: -56.1645 },
  { country: "Uruguay", region: "Salto", lat: -31.3833, lng: -57.9667 },
  { country: "Uruguay", region: "Ciudad de la Costa", lat: -34.8167, lng: -55.9500 },
  { country: "Uruguay", region: "Paysandú", lat: -32.3214, lng: -58.0756 },
  { country: "Uruguay", region: "Las Piedras", lat: -34.7300, lng: -56.2190 }
];

// 188. Uzbekistan
const uzbekistanGeoData = [
  { country: "Uzbekistan", region: "Tashkent", lat: 41.2995, lng: 69.2401 },
  { country: "Uzbekistan", region: "Namangan", lat: 41.0000, lng: 71.6667 },
  { country: "Uzbekistan", region: "Samarkand", lat: 39.6547, lng: 66.9597 },
  { country: "Uzbekistan", region: "Andijan", lat: 40.7833, lng: 72.3333 },
  { country: "Uzbekistan", region: "Nukus", lat: 42.4667, lng: 59.6000 }
];

// 189. Vanuatu
const vanuatuGeoData = [
  { country: "Vanuatu", region: "Port Vila", lat: -17.7333, lng: 168.3167 },
  { country: "Vanuatu", region: "Luganville", lat: -15.5333, lng: 167.1667 },
  { country: "Vanuatu", region: "Norsup", lat: -16.0667, lng: 167.4000 },
  { country: "Vanuatu", region: "Isangel", lat: -19.5333, lng: 169.2833 },
  { country: "Vanuatu", region: "Sola", lat: -13.8667, lng: 167.5500 }
];

// 190. Venezuela
const venezuelaGeoData = [
  { country: "Venezuela", region: "Caracas", lat: 10.4806, lng: -66.9036 },
  { country: "Venezuela", region: "Maracaibo", lat: 10.6317, lng: -71.6406 },
  { country: "Venezuela", region: "Valencia", lat: 10.1667, lng: -68.0000 },
  { country: "Venezuela", region: "Barquisimeto", lat: 10.0678, lng: -69.3467 },
  { country: "Venezuela", region: "Maracay", lat: 10.2469, lng: -67.5958 }
];

// 191. Vietnam
const vietnamGeoData = [
  { country: "Vietnam", region: "Hanoi", lat: 21.0285, lng: 105.8542 },
  { country: "Vietnam", region: "Ho Chi Minh City", lat: 10.8231, lng: 106.6297 },
  { country: "Vietnam", region: "Da Nang", lat: 16.0544, lng: 108.2022 },
  { country: "Vietnam", region: "Hai Phong", lat: 20.8449, lng: 106.6881 },
  { country: "Vietnam", region: "Can Tho", lat: 10.0333, lng: 105.7833 }
];

// 192. Yemen
const yemenGeoData = [
  { country: "Yemen", region: "Sanaa", lat: 15.3694, lng: 44.1910 },
  { country: "Yemen", region: "Aden", lat: 12.7797, lng: 45.0095 },
  { country: "Yemen", region: "Taiz", lat: 13.5789, lng: 44.0219 },
  { country: "Yemen", region: "Al Hudaydah", lat: 14.7979, lng: 42.9530 },
  { country: "Yemen", region: "Ibb", lat: 13.9667, lng: 44.1833 }
];

// 193. Zambia
const zambiaGeoData = [
  { country: "Zambia", region: "Lusaka", lat: -15.4167, lng: 28.2833 },
  { country: "Zambia", region: "Kitwe", lat: -12.8231, lng: 28.2131 },
  { country: "Zambia", region: "Ndola", lat: -12.9683, lng: 28.6339 },
  { country: "Zambia", region: "Kabwe", lat: -14.4469, lng: 28.4464 },
  { country: "Zambia", region: "Livingstone", lat: -17.8419, lng: 25.8542 }
];

// 194. Zimbabwe
const zimbabweGeoData = [
  { country: "Zimbabwe", region: "Harare", lat: -17.8292, lng: 31.0522 },
  { country: "Zimbabwe", region: "Bulawayo", lat: -20.1700, lng: 28.5800 },
  { country: "Zimbabwe", region: "Chitungwiza", lat: -18.0128, lng: 31.0756 },
  { country: "Zimbabwe", region: "Mutare", lat: -18.9707, lng: 32.6709 },
  { country: "Zimbabwe", region: "Gweru", lat: -19.4500, lng: 29.8167 }
];


const geoData = [
  ...afghanistanGeoData,
  ...albaniaGeoData,
  ...algeriaGeoData,
  ...andorraGeoData,
  ...angolaGeoData,
  ...antiguaAndBarbudaGeoData,
  ...argentinaGeoData,
  ...armeniaGeoData,
  ...australiaGeoData,
  ...austriaGeoData,
  ...azerbaijanGeoData,
  ...bahamasGeoData,
  ...bahrainGeoData,
  ...bangladeshGeoData,
  ...barbadosGeoData,
  ...belarusGeoData,
  ...belgiumGeoData,
  ...belizeGeoData,
  ...beninGeoData,
  ...bhutanGeoData,
  ...boliviaGeoData,
  ...bosniaAndHerzegovinaGeoData,
  ...botswanaGeoData,
  ...brazilGeoData,
  ...bruneiGeoData,
  ...bulgariaGeoData,
  ...burkinaFasoGeoData,
  ...burundiGeoData,
  ...caboVerdeGeoData,
  ...cambodiaGeoData,
  ...cameroonGeoData,
  ...canadaGeoData,
  ...centralAfricanRepublicGeoData,
  ...chadGeoData,
  ...chileGeoData,
  ...chinaGeoData,
  ...colombiaGeoData,
  ...comorosGeoData,
  ...congoDemocraticRepublicGeoData,
  ...congoRepublicGeoData,
  ...costaRicaGeoData,
  ...croatiaGeoData,
  ...cubaGeoData,
  ...cyprusGeoData,
  ...czechRepublicGeoData,
  ...denmarkGeoData,
  ...djiboutiGeoData,
  ...dominicaGeoData,
  ...dominicanRepublicGeoData,
  ...timorLesteGeoData,
  ...ecuadorGeoData,
  ...egyptGeoData,
  ...elSalvadorGeoData,
  ...equatorialGuineaGeoData,
  ...eritreaGeoData,
  ...estoniaGeoData,
  ...eswatiniGeoData,
  ...ethiopiaGeoData,
  ...fijiGeoData,
  ...finlandGeoData,
  ...franceGeoData,
  ...gabonGeoData,
  ...gambiaGeoData,
  ...georgiaGeoData,
  ...germanyGeoData,
  ...ghanaGeoData,
  ...greeceGeoData,
  ...grenadaGeoData,
  ...guatemalaGeoData,
  ...guineaGeoData,
  ...guineaBissauGeoData,
  ...guyanaGeoData,
  ...haitiGeoData,
  ...hondurasGeoData,
  ...hungaryGeoData,
  ...icelandGeoData,
  ...indiaGeoData,
  ...indonesiaGeoData,
  ...iranGeoData,
  ...iraqGeoData,
  ...irelandGeoData,
  ...israelGeoData,
  ...italyGeoData,
  ...jamaicaGeoData,
  ...japanGeoData,
  ...jordanGeoData,
  ...kazakhstanGeoData,
  ...kenyaGeoData,
  ...kiribatiGeoData,
  ...koreaNorthGeoData,
  ...koreaSouthGeoData,
  ...kosovoGeoData,
  ...kuwaitGeoData,
  ...kyrgyzstanGeoData,
  ...laosGeoData,
  ...latviaGeoData,
  ...lebanonGeoData,
  ...lesothoGeoData,
  ...liberiaGeoData,
  ...libyaGeoData,
  ...liechtensteinGeoData,
  ...lithuaniaGeoData,
  ...luxembourgGeoData,
  ...madagascarGeoData,
  ...malawiGeoData,
  ...malaysiaGeoData,
  ...maldivesGeoData,
  ...maliGeoData,
  ...maltaGeoData,
  ...marshallIslandsGeoData,
  ...mauritaniaGeoData,
  ...mauritiusGeoData,
  ...mexicoGeoData,
  ...micronesiaGeoData,
  ...moldovaGeoData,
  ...monacoGeoData,
  ...mongoliaGeoData,
  ...montenegroGeoData,
  ...moroccoGeoData,
  ...mozambiqueGeoData,
  ...myanmarBurmaGeoData,
  ...namibiaGeoData,
  ...nauruGeoData,
  ...nepalGeoData,
  ...netherlandsGeoData,
  ...newZealandGeoData,
  ...nicaraguaGeoData,
  ...nigerGeoData,
  ...nigeriaGeoData,
  ...northMacedoniaGeoData,
  ...norwayGeoData,
  ...omanGeoData,
  ...pakistanGeoData,
  ...palauGeoData,
  ...palestineGeoData,
  ...panamaGeoData,
  ...papuaNewGuineaGeoData,
  ...paraguayGeoData,
  ...peruGeoData,
  ...philippinesGeoData,
  ...polandGeoData,
  ...portugalGeoData,
  ...qatarGeoData,
  ...romaniaGeoData,
  ...russiaGeoData,
  ...rwandaGeoData,
  ...saintKittsAndNevisGeoData,
  ...saintLuciaGeoData,
  ...saintVincentAndTheGrenadinesGeoData,
  ...samoaGeoData,
  ...sanMarinoGeoData,
  ...saoTomeAndPrincipeGeoData,
  ...saudiArabiaGeoData,
  ...senegalGeoData,
  ...serbiaGeoData,
  ...seychellesGeoData,
  ...sierraLeoneGeoData,
  ...singaporeGeoData,
  ...slovakiaGeoData,
  ...sloveniaGeoData,
  ...solomonIslandsGeoData,
  ...somaliaGeoData,
  ...southAfricaGeoData,
  ...southSudanGeoData,
  ...spainGeoData,
  ...sriLankaGeoData,
  ...sudanGeoData,
  ...surinameGeoData,
  ...swedenGeoData,
  ...switzerlandGeoData,
  ...syriaGeoData,
  ...taiwanGeoData,
  ...tajikistanGeoData,
  ...tanzaniaGeoData,
  ...thailandGeoData,
  ...togoGeoData,
  ...tongaGeoData,
  ...trinidadAndTobagoGeoData,
  ...tunisiaGeoData,
  ...turkeyGeoData,
  ...turkmenistanGeoData,
  ...tuvaluGeoData,
  ...ugandaGeoData,
  ...ukraineGeoData,
  ...unitedArabEmiratesGeoData,
  ...unitedKingdomGeoData,
  ...unitedStatesGeoData,
  ...uruguayGeoData,
  ...uzbekistanGeoData,
  ...vanuatuGeoData,
  ...venezuelaGeoData,
  ...vietnamGeoData,
  ...yemenGeoData,
  ...zambiaGeoData,
  ...zimbabweGeoData
];

export function getCountryFromLatLng(lat, lng) {
  let nearest = null;
  let shortestDistance = Infinity;

  geoData.forEach((location) => {
    // Calculate distance using Haversine formula
    const R = 6371; // Earth's radius in km
    const dLat = toRad(location.lat - lat);
    const dLon = toRad(location.lng - lng);
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(toRad(lat)) * Math.cos(toRad(location.lat)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c;

    if (distance < shortestDistance) {
      shortestDistance = distance;
      nearest = location;
    }
  });

  return nearest;
}

function toRad(degrees) {
  return degrees * (Math.PI/180);
} 