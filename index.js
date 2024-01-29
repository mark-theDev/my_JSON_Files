const countyFiles = `[
    {
        "county" : "Kericho",
        "county_number" : 35,
        "governor" : "Erick Mutai"
    },
    {
        "county" : "Nairobi",
        "county_number" : 47,
        "governor" : "Johnson Sakaja"
    },
    {
        "county" : "Nakuru",
        "county_number" : 32,
        "governor" : "Susan Kihika"
    },
    {
        "county" : "Kericho",
        "county_number" : 35,
        "governor" : "Erick Mutai"
    }
]`;
//const jsonString = JSON.stringify(countyFiles);
//console.log(JSON.parse(countyFiles));
//console.log(JSON.parse(jsonString));

//using fetch()

fetch("county.json")
    .then(response => response.json())
    .then(values => values.forEach(value => 
        console.log(`County: ${value.county}, Governor: ${value.governor}`)))
    .catch(console.error(error));