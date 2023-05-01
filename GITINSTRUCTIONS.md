# Taking my first pull request and providing instructions.

_If you are a new dev on this project, welcome and feel free to reach out to me with any questions_ - Wesley Grant

1. **Fork the repository**: Go to the original repository on GitHub (in this case, `https://github.com/climate-tech-handbook/climate-tech-handbook`) and click the "Fork" button in the top-right corner. This will create a copy of the repository under your GitHub account.

2. **Clone the forked repository**: Clone the forked repository to your local machine using the following command:

```
git clone https://github.com/<your-github-username>/climate-tech-handbook.git
```

Replace `<your-github-username>` with your actual GitHub username.

3. **Navigate to the cloned repository**: Change the directory to the cloned repository:

```
cd climate-tech-handbook
```

4. **Create a new branch**: Create a new branch (e.g., `field-guide`) and switch to it:

```
git checkout -b field-guide
```

5. **Make changes**: Make the necessary changes in the files within your new branch (`field-guide`).

6. **Commit the changes**: Stage and commit the changes:

```
git add .
git commit -m "Add field guide content"
```

7. **Push the changes**: Push the changes to your forked repository:

```
git push origin field-guide
```

8. **Switch to the main branch**: Switch back to the `main` branch in your local repository:

```
git checkout main
```

9. **Merge the changes**: Merge the changes from the `field-guide` branch to the `main` branch:

```
git merge field-guide
```

10. **Push the merged changes**: Push the merged changes to your forked repository:

```
git push origin main
```

11. **Create a pull request**: Create a pull request from your fork's `main` branch to the original repository's `main` branch using the `gh` command:

```
gh pr create --title "Field Guide 1.0" --body "First iteration of the list of suggested and alternative technologies we may find useful" --base main --head <your-github-username>:main --repo climate-tech-handbook/climate-tech-handbook
```

Replace `<your-github-username>` with your actual GitHub username.

This command specifies the base repository (the original `climate-tech-handbook` repository) using the `--repo` option. The pull request will be created from your fork's `main` branch to the original repository's `main` branch.

After running this command, the pull request will be created, and you can then collaborate with the project maintainers on the changes you've proposed.
