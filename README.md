# Fundtransfer_UI_GLCMME
Below are the steps to run the UI and backend simultaneously for testing the login UI.
BE: Clone the repository containing the login module, then run the Spring Boot application class. After the backend service is running successfully, proceed with the frontend configuration and test the login UI.
 
UI: First, clone the repository and execute "npm install" to install the required dependencies. After the installation is successful, run "npm start" to launch the application locally. The application will be available at http://localhost:3000/ on port 3000.
 
You may encounter a CORS issue while testing the login functionality. As a temporary workaround, add the following annotation to the backend controller class and restart the application. 
@CrossOrigin(origins = "http://localhost:3000")
This should resolve the issue for local testing.
For the team working on the backend login APIs, please address the CORS configuration at the application level. Since all APIs should be accessible without individual CORS-related issues, avoid adding @CrossOrigin annotations to multiple controllers, as this leads to duplicated configuration. Instead, create a global CORS configuration class and integrate it with the Spring Security configuration so that CORS is managed centrally across the application.