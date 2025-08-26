# https://discover.data.vic.gov.au/dataset?q=public%20transport
# Lots of different, and partial data sets

$stopsendpoint = "https://opendata.transport.vic.gov.au/dataset/6d36dfd9-8693-4552-8a03-05eb29a391fd/resource/afa7b823-0c8b-47a1-bc40-ada565f684c7/download/public_transport_stops.geojson"
$linesendpoint = "https://opendata.transport.vic.gov.au/dataset/6d36dfd9-8693-4552-8a03-05eb29a391fd/resource/52e5173e-b5d5-4b65-9b98-89f225fc529c/download/public_transport_lines.geojson"

Invoke-WebRequest -Uri $stopsendpoint -OutFile ./../../site/data/stops.json
Invoke-WebRequest -Uri $linesendpoint -OutFile ./../../site/data/lines.json