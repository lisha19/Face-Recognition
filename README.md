# Be On Time
An attendance tracking application with facial recognition.

Requirement
1.You will need a dependency managers such as npm, yarn, brew, etc.
2.As for me, I am using npm.
3.Download and install NodeJS if not exist: https://nodejs.org/en/download/
4.Open CMD, type "node --version" to check NodeJS have been installed.
5.Open CMD, type "npm --version" to check Node Package Manager (NPM) also have been installed.

Step 1: Download the source code
If you have "git" installed, open CMD and type "git clone https://github.com/lisha19/Face-Recognition.git".

### Step 2: Install the dependency
1. Open project in Visual Studio Code or any IDE.
2. Open CMD in VSCode, change directory to "client" folder and install the dependency [command: cd client && npm i]
3. Open another terminal, change directory to "server" folder and install the dependency [command: cd server && npm i]



### Step 3: Create an account in MongoDB Cloud and configure
1. Go to https://www.mongodb.com/try to register a free-tier account.
2. Create a project named "Attendlytical" and create a cluster named "Attendlytical-Cluster".
3. Choose the nearest region, for me, GCP (Singapore).
4. Adding IP whitelist "0.0.0.0" to allow all network access.

### Step 4: Create an account in Cloudinary media storage and configure
1. Go to https://cloudinary.com/users/register/free to register a free-tier account.
2. You will get an api key and app secret.
3. In tab "Media Library", create folder named "Attendlytical".
4. Inside folder "Attendlytical", create another two folders named "ProfilePicture" and "FaceGallery".
5. Click Setting icon on top right.
6. Under tab "Upload", scroll down until you see "Upload presets".
7. Click "Add upload preset", set Upload preset name to "attendlytical_facegallery" and folder set to "Attendlytical/FaceGallery".
8. Leave the others as default and click "Save".
9. Again, click "Add upload preset", set Upload preset name to "attendlytical_profilepicture" and folder set to "Attendlytical/ProfilePicture".
10. Leave the others as default and click "Save".

### Step 5: Create Google OAuth Credential to enable google login and sending email
1. Go to GCP console: https://console.cloud.google.com/apis.
2. Create an OAuth credential for google login.
3. Under tab "Credentials", click "Create Credential" and choose "OAuth client ID".
4. Choose the application type "Web Application".
5. Name the OAuth client name "Google Login".
6. Add the javascript origin: http://localhost:3000, https://attendlytical.netlify.app
7. Add the redirect uri: https://developers.google.com/oauthplayground.
8. Click "Save".
9. Create an OAuth credential for email sending.
10. Under tab "Credentials", click "Create Credential" and choose "OAuth client ID".
11. Choose the application type "Web Application".
12. Name the OAuth client name "Mail".
13. Add the javascript origin: http://localhost:4000, https://attendlytical.netlify.app
14. Add the redirect uri: https://developers.google.com/oauthplayground.
15. Click "Save".
16. Under tab "OAuth Consent Screen", enter the required info (app name, app logo, app uri, privacy policy, etc).

### Step 6: Configure server environment variables.
1. Inside the "server" folder, create a file named ".env" used to save the credential data of database, API and so on.
2. Inside ".env" file, create 10 variables named "MONGO_URI", "SECRET_KEY", "CLOUDINARY_NAME", "CLOUDINARY_API_KEY", "CLOUDINARY_API_SECRET", "GOOGLE_OAUTH_USERNAME", "GOOGLE_OAUTH_CLIENT_ID", "GOOGLE_OAUTH_CLIENT_SECRET", "GOOGLE_OAUTH_REFRESH_TOKEN" and "GOOGLE_OAUTH_REDIRECT_URI".
3. Go to MongoDB Cloud, select "connect" and choose "Node.js" to get the connection string. Set the MONGO_URI respectively.
4. Set your SECRET_KEY to any random string (e.g: uHRQzuVUcfwT9G21).
5. Go to Cloudinary, copy the app name, id and secret, assigned to CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET.
6. Assign GOOGLE_OAUTH_USERNAME to your gmail (e.g: yourgmailusername@gmail.com)
7. Go to GCP console, choose the "Attendlytical" project.
8. Under "Credentials" tab, select "mail" OAuth client, copy the app id and secret, assigned to "GOOGLE_OAUTH_CLIENT_ID" and "GOOGLE_OAUTH_CLIENT_SECRET".
9. Go to https://developers.google.com/oauthplayground, enter scope: "https://mail.google.com".
10. Before submiting, click the setting icon on the top right.
11. Click "Use your own OAuth credentials"
12. Enter "Client ID" and "Client Secret" of "mail" OAuth client.
13. Submit the API scope.
14. You will get an authorization code, exchange it with access token and refresh token.
15. Assign the refresh token to GOOGLE_OAUTH_REFRESH_TOKEN.
16. Assign GOOGLE_OAUTH_REDIRECT_URI to https://developers.google.com/oauthplayground.

---

## Pretrained Weight Files
1. The model have been put in the "client/public/models" folder.
2. The models is downloaded from https://github.com/justadudewhohacks/face-api.js/weights, the API is built on top of TensorflowJS.
3. There are 4 pretrained models  (face detection, facial landmark detection, face recognition 128 feature vectors extraction, facial expression).
4. Download the shard weight file and model json file.
5. For face detection, there are 3 types of model architecture (MTCNN, SSD MobileNet V1, Tiny Face)
6. As for me, I chose SSD MobileNet V1 for face detection.
7. Model download checklist:
   - face_expression_model-shard1
   - face_expression_model-weights_manifest.json
   - face_landmark_68_model-shard1
   - face_landmark_68_model-weights_manifest.json
   - face_recognition_model-shard1
   - face_recognition_model-shard2
   - face_recognition_model-weights_manifest.json
   - ssd_mobilenetv1_model-shard1
   - ssd_mobilenetv1_model-shard2
   - ssd_mobilenetv1_model-weights_manifest.json


Instructions For Professor:
1. Register here.
2. Create a course.
3. Give the course unique ID.
4. Students has to send the request to register, accept the registration.
5. You do not need upload picture of students, It will be done by students.
6. After all student registration, select a course show below and take the attendance.
7. You can see how many face photo of all the registered students have uploaded.
8. Ensure that the students upload their face photo, otherwise there is no facial data of that student for reference.
9. Only those enroll in the particular course will be counted into dataset for facial classification.
10. Select date , time and camera inside attendance room.
11. Wait for the model to be loaded.
12. Set the distance as you wish.
13. Submit the attendance form if finished.
14. Visualize the attendance data in "Attendance History", or you can enter a particular course and click "View Attendance History".
15. Check Attendance
16. Thank You.

### Student
Instructions For Student:
1. Register an account.
2. Enroll into a course.
3. Wait for system loaded.
4. Upload your face photo in "Face Gallery", at least your two photos must be uploaded.
5. Wait for all models being loaded.
6. The system will perform face detection, ensuring only a single face exist and rejecting photo with empty face or multiple faces.
7. Photos will save in image storage.
8. When your lecturer take the attendance of a particular course, all your uploaded facial data will be counted into the dataset for facial comparison.
9. You can Visualize your attendance data by clicking on "Attendance History" , or you can enter a particular course and click "View Attendance History"


## Running the application
### Server
1. Make sure the 10 env variables have been assigned in ".env" file.
2. Install the "nodemon" which can restart the server script automatically if changes are detected.
3. Open CMD, execute command "npm i -g nodemon" to install nodemon globally.
4. Take a look at "server/package.json".
5. Open CMD under directory "server", type "npm run dev".
6. The server is running on http://localhost:4000.

### Client
1. The client script is built using ReactJS, through CRA command.
2. Open CMD under directory "client", type "npm start".
3. The client is running on http://localhost:3000.

