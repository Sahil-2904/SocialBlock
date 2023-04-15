#SocialBlock

**Problem :** Web2 social media, which is the current mainstream model, is characterized by centralized platforms that have control over user data and content. Following are some problems highlighting the limitations of web2 social media : 
Lack of User Control 
Data Privacy Concerns 
Content Moderation Challenges 
Lack of Transparency and Trust 
Centralized Authority 
Incentives Misalignment 
Limited Interoperability

**Solution Proposed :** Use of Web3 social media application Web3 social media offers potential benefits such as user-controlled data, content, and platform rules, greater transparency and trust, decentralized moderation, incentives alignment, and interoperability across different platforms. Users have more control over their personal information, can verify the authenticity of content, and can participate in decision-making through decentralized governance.

**Technologies used:** 
_React_: Used for creating the frontend of our application. 
_Solidity_: For writing smart contracts to add user’s data on blockchain. 
_Tailwind CSS_: For changing the UI of our application. 
_Google Cloud Blockchain Node Engine_

_Functions:_
Create profile using metamask
Add and delete tweets
Get all tweets in your feed

_How to Use SocialBlock:_
To create a profile, add or delete tweet you need to have a metamask account
Download Metamask extension in your browser.
Create a node on **Google Cloud Blockchain Node Engine** and generate URL
Change url in ./server/hardhatconfig.js
Add your Metamask account's private key to accounts in ./server/hardhatconfig.js
In ./server run the following command:
    npx hardhat run scripts/deploy.js --network googleCloudPlatforms
Then add the generated deploy address to ./client/src/config.js
Then in ./client run the following commands
    npm start


