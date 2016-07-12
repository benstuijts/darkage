1. Create a new repository on GitHub. To avoid errors, do not initialize the new repository with README, license, or gitignore files. You can add these files after your project has been pushed to GitHub.
2. Open Git Bash.
3. Change the current working directory to your local project.
4. Initialize the local directory as a Git repository.
'''git
$ git init
'''
5. Add the files in your new local repository. This stages them for the first commit.
'''git
$ git add .
'''
6. Commit the files that you've staged in your local repository.
'''git
$ git commit -m "First commit"
7. At the top of your GitHub repository's Quick Setup page, click  to copy the remote repository URL.
8. In the Command prompt, add the URL for the remote repository where your local repository will be pushed.
'''git
$ git remote add origin [URL]
$ git remote -v
'''
9. Push the changes in your local repository to GitHub.
'''git
$ git push origin master
'''
