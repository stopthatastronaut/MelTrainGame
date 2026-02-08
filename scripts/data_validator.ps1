$game_data = gc ./../docs/game_data.json | ConvertFrom-Json -depth 10


$game_data.stations | % {
  Write-host "Found station $_.name"

}