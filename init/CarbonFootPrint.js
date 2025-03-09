const database = require('../config/mongoose');
    const CarbonDb = [
    { "activity": "Driving a gasoline car", "unit": "mile", "emissions_g_co2e": 404 },
    { "activity": "Driving a diesel car", "unit": "mile", "emissions_g_co2e": 450 },
    { "activity": "Riding a motorcycle", "unit": "mile", "emissions_g_co2e": 103 },
    { "activity": "Flying (economy class)", "unit": "mile", "emissions_g_co2e": 133 },
    { "activity": "Flying (business class)", "unit": "mile", "emissions_g_co2e": 267 },
    { "activity": "Flying (first class)", "unit": "mile", "emissions_g_co2e": 400 },
    { "activity": "Taking a bus", "unit": "mile", "emissions_g_co2e": 68 },
    { "activity": "Taking a train", "unit": "mile", "emissions_g_co2e": 41 },
    { "activity": "Using a smartphone (per year)", "unit": "device", "emissions_g_co2e": 1250 },
    { "activity": "Streaming video (HD)", "unit": "hour", "emissions_g_co2e": 36 },
    { "activity": "Streaming video (4K)", "unit": "hour", "emissions_g_co2e": 216 },
    { "activity": "Sending an email (no attachment)", "unit": "email", "emissions_g_co2e": 4 },
    { "activity": "Sending an email (with attachment)", "unit": "email", "emissions_g_co2e": 50 },
    { "activity": "Using a laptop", "unit": "hour", "emissions_g_co2e": 50 },
    { "activity": "Using a desktop computer", "unit": "hour", "emissions_g_co2e": 150 },
    { "activity": "Boiling a kettle", "unit": "boil", "emissions_g_co2e": 21 },
    { "activity": "Taking a shower (10 minutes)", "unit": "shower", "emissions_g_co2e": 900 },
    { "activity": "Washing clothes (per load)", "unit": "load", "emissions_g_co2e": 600 },
    { "activity": "Drying clothes (per load)", "unit": "load", "emissions_g_co2e": 2200 },
    { "activity": "Using a dishwasher", "unit": "cycle", "emissions_g_co2e": 770 },
    { "activity": "Cooking with a gas stove", "unit": "hour", "emissions_g_co2e": 200 },
    { "activity": "Cooking with an electric stove", "unit": "hour", "emissions_g_co2e": 450 },
    { "activity": "Using a microwave oven", "unit": "minute", "emissions_g_co2e": 10 },
    { "activity": "Using a refrigerator (per day)", "unit": "day", "emissions_g_co2e": 600 },
    { "activity": "Using an air conditioner", "unit": "hour", "emissions_g_co2e": 1000 },
    { "activity": "Using a ceiling fan", "unit": "hour", "emissions_g_co2e": 15 },
    { "activity": "Using a space heater", "unit": "hour", "emissions_g_co2e": 1500 },
    { "activity": "Using a hair dryer", "unit": "minute", "emissions_g_co2e": 20 },
    { "activity": "Using an iron", "unit": "hour", "emissions_g_co2e": 800 },
    { "activity": "Charging a smartphone", "unit": "charge", "emissions_g_co2e": 5 },
    { "activity": "Charging a laptop", "unit": "hour", "emissions_g_co2e": 50 },
    { "activity": "Watching TV (LED, 40-inch)", "unit": "hour", "emissions_g_co2e": 50 },
    { "activity": "Watching TV (Plasma, 40-inch)", "unit": "hour", "emissions_g_co2e": 200 },
    { "activity": "Using a gaming console", "unit": "hour", "emissions_g_co2e": 130 },
    { "activity": "Reading a book (e-reader)", "unit": "hour", "emissions_g_co2e": 10 },
    { "activity": "Reading a book (printed)", "unit": "book", "emissions_g_co2e": 1000 },
    { "activity": "Listening to music (streaming)", "unit": "hour", "emissions_g_co2e": 55 },
    { "activity": "Listening to music (downloaded)", "unit": "hour", "emissions_g_co2e": 27 },
    { "activity": "Attending a concert", "unit": "event", "emissions_g_co2e": 5000 },
    { "activity": "Going to the cinema", "unit": "visit", "emissions_g_co2e": 200 },
    { "activity": "Eating a beef burger", "unit": "burger", "emissions_g_co2e": 3000 },
    { "activity": "Eating a chicken burger", "unit": "burger", "emissions_g_co2e": 800 },
    { "activity": "Eating a vegetarian burger", "unit": "burger", "emissions_g_co2e": 300 },
    { "activity": "Drinking a cup of coffee (black)", "unit": "cup", "emissions_g_co2e": 21 },
    { "activity": "Drinking a cup of coffee (with milk)", "unit": "cup", "emissions_g_co2e": 53 },
    { "activity": "Drinking a cup of tea", "unit": "cup", "emissions_g_co2e": 15 },
    { "activity": "Eating a chocolate bar", "unit": "bar", "emissions_g_co2e": 200 },
    { "activity": "Eating an apple", "unit": "apple", "emissions_g_co2e": 36 },
    { "activity": "Eating a banana", "unit": "banana", "emissions_g_co2e": 80 },
    { "activity": "Drinking a pint of beer", "unit": "pint", "emissions_g_co2e": 500 },
    { "activity": "Drinking a glass of wine", "unit": "glass", "emissions_g_co2e": 120 },
    { "activity": "Drinking a bottle of water (plastic)", "unit": "bottle", "emissions_g_co2e": 82.8 },
    { "activity": "Drinking a bottle of water (glass)", "unit": "bottle", "emissions_g_co2e": 50 },
    { "activity": "Boiling a kettle", "unit": "boil", "emissions_g_co2e": 21 },
    { "activity": "Making a card payment", "unit": "transaction", "emissions_g_co2e": 4 },
    { "activity": "Sending a selfie", "unit": "photo", "emissions_g_co2e": 4 },
    { "activity": "Streaming Netflix for one hour", "unit": "hour", "emissions_g_co2e": 55 },
    { "activity": "Sending a text message", "unit": "message", "emissions_g_co2e": 0.014 },
    { "activity": "Performing a Google search", "unit": "search", "emissions_g_co2e": 0.2 },
    { "activity": "Sending an email without attachment", "unit": "email", "emissions_g_co2e": 0.3 },
    { "activity": "Sending an email with attachment", "unit": "email", "emissions_g_co2e": 50 },
    { "activity": "Using a smartphone (per year)", "unit": "device", "emissions_g_co2e": 1250 },
    { "activity": "Using a laptop (per hour)", "unit": "hour", "emissions_g_co2e": 50 },
    { "activity": "Using a desktop computer (per hour)", "unit": "hour", "emissions_g_co2e": 150 },
    { "activity": "Watching TV (per hour)", "unit": "hour", "emissions_g_co2e": 88 },
    { "activity": "Listening to music streaming (per hour)", "unit": "hour", "emissions_g_co2e": 55 },
    { "activity": "Charging a smartphone", "unit": "charge", "emissions_g_co2e": 3 },
    { "activity": "Charging a laptop", "unit": "charge", "emissions_g_co2e": 50 },
    { "activity": "Using a tablet (per hour)", "unit": "hour", "emissions_g_co2e": 30 },
    { "activity": "Playing video games (per hour)", "unit": "hour", "emissions_g_co2e": 75 },
    { "activity": "Using a microwave oven (per 10 minutes)", "unit": "10 minutes", "emissions_g_co2e": 40 },
    { "activity": "Using an electric oven (per hour)", "unit": "hour", "emissions_g_co2e": 800 },
    { "activity": "Using a gas oven (per hour)", "unit": "hour", "emissions_g_co2e": 600 },
    { "activity": "Using a dishwasher (per load)", "unit": "load", "emissions_g_co2e": 774 },
    { "activity": "Using a washing machine (per load)", "unit": "load", "emissions_g_co2e": 600 },
    { "activity": "Using a clothes dryer (per load)", "unit": "load", "emissions_g_co2e": 2200 },
    { "activity": "Ironing clothes (per hour)", "unit": "hour", "emissions_g_co2e": 600 },
    { "activity": "Vacuuming (per hour)", "unit": "hour", "emissions_g_co2e": 100 },
    { "activity": "Using a hairdryer (per 10 minutes)", "unit": "10 minutes", "emissions_g_co2e": 26 },
    { "activity": "Taking a shower (10 minutes)", "unit": "shower", "emissions_g_co2e": 900 },
    { "activity": "Taking a bath", "unit": "bath", "emissions_g_co2e": 1700 },
    { "activity": "Flushing a toilet", "unit": "flush", "emissions_g_co2e": 0.6 },
    { "activity": "Brushing teeth with running water (2 minutes)", "unit": "session", "emissions_g_co2e": 0.6 },
    { "activity": "Driving a car (gasoline) per mile", "unit": "mile", "emissions_g_co2e": 404 },
    { "activity": "Driving a car (diesel) per mile", "unit": "mile", "emissions_g_co2e": 430 },
    { "activity": "Riding a motorcycle per mile", "unit": "mile", "emissions_g_co2e": 103 },
    { "activity": "Taking a bus per mile", "unit": "mile", "emissions_g_co2e": 68 },
    { "activity": "Taking a train per mile", "unit": "mile", "emissions_g_co2e": 41 },
    { "activity": "Flying (economy class) per mile", "unit": "mile", "emissions_g_co2e": 133 },
    { "activity": "Flying (business class) per mile", "unit": "mile", "emissions_g_co2e": 267 },
    { "activity": "Flying (first class) per mile", "unit": "mile", "emissions_g_co2e": 533 },
    { "activity": "Cycling per mile", "unit": "mile", "emissions_g_co2e": 16 },
    { "activity": "Walking per mile", "unit": "mile", "emissions_g_co2e": 33 },
    { "activity": "Eating a banana", "unit": "banana", "emissions_g_co2e": 80 },
    { "activity": "Eating an apple", "unit": "apple", "emissions_g_co2e": 60 },
    { "activity": "Eating a serving of beef (75g)", "unit": "serving", "emissions_g_co2e": 7700 },
    { "activity": "Eating a serving of pork (75g)", "unit": "serving", "emissions_g_co2e": 1800 },
    { "activity": "Eating a serving of chicken (75g)", "unit": "serving", "emissions_g_co2e": 1360 },
    { "activity": "Eating a serving of fish (farmed, 75g)", "unit": "serving", "emissions_g_co2e": 1800 },
    { "activity": "Eating a serving of cheese (50g)", "unit": "serving", "emissions_g_co2e": 1200 },
    { "activity": "Eating a serving of lentils (200g)", "unit": "serving", "emissions_g_co2e": 200 },
    { "activity": "Drinking a cup of tea", "unit": "cup", "emissions_g_co2e": 40 },
];

module.exports = CarbonDb;

