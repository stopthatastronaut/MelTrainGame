# The Melbourne Train Game

Inspired by our local pub trivia, which has regular questions on which station is on which line, this little website lets you practice your Melbourne Train Network knowledge and ace your next pub quiz. [You can play it here](https://choochoo.jasbro.io/).

Well, that one question, anyway.

## Data

The game data has evolved over time.

Originally scraped data from the [PTV Timetable API](https://timetableapi.ptv.vic.gov.au/swagger/ui/index). That was then replaced with a reduced JSON doc sourced from [Wikipedia data](https://en.wikipedia.org/wiki/List_of_Metro_Trains_Melbourne_railway_stations), which was extensively hand-massaged.

You can [find the doc here](docs/game_data.json) if you want to leverage the work done.

## The game

The game itself is in [AlpineJS](https://alpinejs.dev) and the website is hosted in Github Pages/Jekyll.

## Improvements to come

- Persist your scores over time, instead of just per-session
- Show a map when you get an answer correct
- Share buttons
- ~Ko-fi link~
- Remember what you've seen in the recent session, to make repeats less likely
- Colours of train lines in their buttons

## Contributing

Yes, I will accept pull requests. You might need to ping me on [Mastodon](https://aus.social/@drunkenmadman) just to let me know it's there.
