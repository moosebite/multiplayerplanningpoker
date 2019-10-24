# fall-2019-multiplayer-planning-poker

Below you will find instructions on how to set up your machine to be able to run the Multiplayer Planning Poker application.

*With a Windows Machine*
1. Ensure you have some sort of Linux terminal installed.

**Windows or Linux Machines**
1. Ensure you have Node.js installed.
   1. If you *do not* have Node.js installed, click the link to install the most updated version of Node.js (https://nodejs.org/en/download/).
   2. If you *do* have Node.js installed, utilize the Linux command 'node -v' to ensure you have the most current version of Node.js.
2. Ensure you have npm installed and up to date.

**Installing required Modules from a LINUX Terminal**
1. Utilize the command 'npm install'.

**Connecting to the Git Repo from a LINUX Terminal**
1. Utilize the command 'git clone git@git.decisionsource.com:mtsu-software-engineering/fall-2019-multiplayer-planning-poker.git' to clone the Repo
2. Once connected utilize the command 'git pull' to get the required files and folders to your machine.
   1. **NOTICE** you may have to set up an SSH key to do this.
   2. Assuming you have access to the Git Repo, there is an SSH key that can be used on the web page.
3. When the files are pulled from the repo, use 'git branch' to list all branches.
4. Navigate to a branch by using 'git checkout *branch_name*'.
5. Use 'ls' to show files in the branch.

**Starting the server from a LINUX Terminal**
1. Ensure you are in the Git branch and main file directory.
2. Use 'cd server' to navigate to the server directory.
3. Use 'node server.js' to start the server.

**Starting the user interface (UI) from a LINUX Terminal**
1. Use 'cd react-app' to navigate to the UI directory.
2. Use 'npm start' to start a debugging server and launch the UI in a web browser.