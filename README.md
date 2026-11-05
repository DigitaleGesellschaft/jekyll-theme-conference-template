# Conference Website

Template for a conference website based on
[jekyll-theme-conference](https://github.com/DigitaleGesellschaft/jekyll-theme-conference).

## Branches

- `main`: empty template, start your own conference website from here.
- `demo`: same setup filled with a fictional conference to showcase the
  theme's features.

## Usage

```bash
bundle install
bundle exec jekyll serve
```

## Structure

```
_config.yml           site and theme settings
_data/program.yml     schedule
_talks/               one file per talk
_speakers/            one file per speaker
_rooms/               one file per room
index.md              landing page
program/ talks/ speakers/ location/   overview pages
assets/css/main.scss  custom styles
assets/images/        logos, preview images
documents/            slides (slides/) and speaker bios (bio/)
```

See the theme's README for all options and content formats.
