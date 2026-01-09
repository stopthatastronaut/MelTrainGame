



$dataset = Get-Content ./game_data.json -Verbose | ConvertFrom-Json -depth 5


function Invoke-Game() {
  [cmdletbinding()]
  param()

  $randomstation = $dataset.stations | Get-Random

  Write-Verbose $randomstation

  Write-host ("On which Melbourne Metro train line would you find " + $randomstation.name + " station?")


  $response = Read-Host "Your answer:"

  if ($randomstation.lines -contains $response) {
    Write-Host ("Correct! " + $randomstation.name + " is on " + $randomstation.lines)
  }
  else {
    Write-Host ("Incorrect! " + $randomstation.name + " is on " + $randomstation.lines)
  }

  if((Read-Host "play again? (Y/N)") -eq "Y") {
    Invoke-Game
  }

}


Invoke-Game

