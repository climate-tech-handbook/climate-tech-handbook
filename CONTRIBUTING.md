# Contributing to Climate Tech Handbook - Docusaurus build

First off, thank you for considering contributing to the Climate Tech Handbook. It's people like you that make this project such a great resource.

## Where do I go from here?

If you've noticed a bug or have a feature request, make one! It's generally best if you get confirmation of your bug or approval for your feature request this way before starting to code.

## Fork & create a branch

If this is something you think you can fix, then fork and create a branch with a descriptive name.

A good branch name would be (where issue #325 is the ticket you're working on):

```bash
git checkout -b 325-add-japanese-translations
```

## Get the test suite running

Make sure you're using the correct Node.js version (>= 12.13.0), and that npm (>= 6.12.0) is installed.

Install the necessary packages by running:

```bash
npm install
```

## Implement your fix or feature

At this point, you're ready to make your changes! Feel free to ask for help; everyone is a beginner at first.

## Make a Pull Request

At this point, you should switch back to your main branch and make sure it's up to date with the latest Climate Tech Handbook main branch:

```bash
git remote add upstream git@github.com:bigolboyyo/docusaurus-cth-wg.git
git checkout main
git pull upstream main
```

Then update your feature branch from your local copy of main, and push it!

```bash
git checkout 325-add-japanese-translations
git rebase main
git push --set-upstream origin 325-add-japanese-translations
```

Finally, go to GitHub and make a Pull Request.

## Keeping your Pull Request updated

If a maintainer asks you to "rebase" your PR, they're saying that a lot of code has changed, and that you need to update your branch so it's easier to merge.

## Review by a maintainer

A maintainer will review your code, and might ask for changes before pulling your PR. They might also push to your branch to make or suggest changes.

## That's it! Thanks for stopping by

Thank you for contributing! After your pull request is merged, you can safely delete your branch and pull the changes from the main (upstream) repository.
