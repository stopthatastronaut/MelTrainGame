Ipmo PSParseHTMl

$url = "https://en.wikipedia.org/wiki/List_of_Metro_Trains_Melbourne_railway_stations"


$wikidata = Invoke-WebRequest $url

$htmlDomObject = $wikidata.content | ConvertFrom-HTML

$htmlDomObject.selectNodes('//table')