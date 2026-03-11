# **FOR LOCALLY CHECK AT YOUR DEVICE**

#### 

#### ✔ Step 1: Save your changes

#### Press CTRL + S in VS Code.

#### 

#### 

#### 

#### **✔ Step 2:** Open your Terminal in VS Code

#### Make sure you are inside your project folder:



# **cd C:\\SISTEC\\Portfolio\\Monu\_Yaduwanshi\_Portfolio**

#### 

#### 

#### 

#### 

#### **✔ Step 3:** Start the local Firebase server again

#### Use ONE of these commands:

#### ⭐ Recommended (new):

# **firebase hosting:preview**

#### OR classic local server:

# **firebase serve**

#### Firebase will start a local hosting server.

#### 

#### 

#### 

#### **✔ Step 4:** Open the Localhost URL

#### Firebase will show something like:

# Local server started at: http://localhost:5000

#### 

#### 

#### 🔄 IMPORTANT

#### If the server was already running → you must stop it first before checking updated code.

#### To stop server:

# **CTRL + C**

# **Y**

#### 

#### 

After change ctrl+s and refresh same page of portfolio



**UPDATE AT GITHUB AND FINAL HOSTING AND DEPLOYMENT**
===

#### 

#### ✅ STEP 1 — Stop the Local Firebase Server

#### If your terminal is still running this:

# firebase serve

#### 

#### 

#### 

#### **✅ STEP 2 — Push Your Updated Code to GitHub**

#### **Go to your project folder:**

# **C:\\SISTEC\\Portfolio\\Monu\_Yaduwanshi\_Portfolio**

#### **Open terminal in this folder and run:**

#### 

#### 

#### 

#### **1. Check changes**

# **git status**

#### 

#### 

#### **2. Add all changes**

# **git add .**

#### 

#### **3. Commit changes**

# **git commit -m "Updated portfolio website with new UI and images"**

#### 

#### 

#### **4. Push to GitHub**

# **git push origin main**

#### 

#### 

#### 

#### **✅ STEP 3 — Deploy Updated Website to Firebase Hosting**

#### **First run local test (optional)**

# **firebase serve**

#### **(or firebase emulators:start)**

#### 

#### 

#### 

#### 

#### **🚀 Deploy to Live Firebase Hosting**

#### **Run:**

# **firebase deploy --only hosting**

#### **If some changes are NOT showing, then run:**

#### 

# **firebase deploy --only hosting --force**

#### **This forces Firebase to replace old cache.**

#### 

#### 

#### 

#### **✨ STEP 4 — Confirm the Website is Live**

#### **Firebase will give you a link like:**

# **✔  Hosting URL: https://monuyaduwanshiportfolio.web.app**

#### **Open it in browser → press CTRL + F5 (hard refresh).**

