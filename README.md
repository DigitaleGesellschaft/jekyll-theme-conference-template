# Conference Website

Template for a conference website based on [jekyll-theme-conference](https://github.com/DigitaleGesellschaft/jekyll-theme-conference).

## Branches

- `main`: empty template, start your own conference website from here.
- `demo`: same setup filled with a fictional conference to showcase the theme's features. It is not meant as a starting point.

## Try the Demo

Requires [Ruby](https://www.ruby-lang.org/) with [Bundler](https://bundler.io/).

```bash
git clone https://github.com/DigitaleGesellschaft/jekyll-theme-conference-template.git
cd jekyll-theme-conference-template
git checkout demo
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.

## Create Your Website

1. Click **Use this template** (top right of this repository's page on GitHub) → **Create a new repository**. Leave **Include all branches** unticked, so only the empty `main` branch is copied.
2. In `_config.yml`, set `title`, `description`, `url` and `baseurl`, and choose the language under `conference.lang`.
3. Add your talks, speakers, rooms and schedule (see [Structure](#structure)).
4. Preview locally with `bundle install` and `bundle exec jekyll serve`.
5. Replace this README with one describing your conference.

See the theme's README for all options, content formats, and features.

## Deployment

Before going live, set `show_errors: false` in `_config.yml`.

Build the site and upload the content of `_site/` to your web server:

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

Alternatively, let GitHub Actions do it:

- `.github/workflows/test.yml` builds the site for every pull request to `main`. Use it as a status check before merging.
- `.github/workflows/build.yml` builds, minifies and packages the site whenever a tag starting with `v` is pushed (e.g. `v2026.01.01`). The archive `website.zip` is attached to a new GitHub release.

```bash
git tag v2026.01.01
git push origin v2026.01.01
```

If you commit a `Gemfile.lock`, add the platform of the GitHub runners to it first:

```bash
bundle lock --add-platform x86_64-linux
```

## Structure

```
_config.yml           site and theme settings
_data/program.yml     schedule
_talks/               one file per talk
_speakers/            one file per speaker
_rooms/               one file per room
index.md              landing page
404.md                page for missing addresses
program/ talks/ speakers/ location/   overview pages
assets/css/main.scss  custom styles
assets/images/        logos, preview images
documents/            slides (slides/) and speaker bios (bio/)
_tools/               PurgeCSS config used by the build workflow
.github/workflows/    build and test workflows
```
