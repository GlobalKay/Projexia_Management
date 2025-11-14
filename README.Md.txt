Below is a **detailed, professional, well-structured README.md** specifically written **for your project “Projexia”**, explaining exactly **how to link Supabase with your HTML/CSS/JS code**, how authentication works, how uploads work, and how the entire system should be set up.

This README is complete enough to submit for **school**, **SIWES**, **GitHub**, or **documentation**.

---

# ✅ **README.md — PROJEXIA MANAGEMENT SYSTEM**

```markdown
# 📁 PROJEXIA – Project & Collaboration Management System

Projexia is a lightweight web-based platform designed to streamline project management, improve team collaboration, and help organizations track tasks, events, and resources in real-time.  
It is built using **HTML, CSS, JavaScript**, and uses **Supabase** as the backend for authentication and database operations.

---

## 📌 Key Features

### 🔐 Authentication
- User Signup & Login using Supabase Authentication  
- Password security handled automatically by Supabase  
- Session persistence (stays logged in)

### 📊 Dashboard
- Displays user information  
- Shows project statistics  
- Time tracking summaries  
- Ongoing project overview  

### 👥 Community Module
- View all groups  
- Create new groups  
- Join and interact with communities

### 📝 Blog Module
- Write articles  
- View blog posts  

### 📞 Contact
- Contact form connected to backend  
- Message storage in Supabase table

### 📅 Events Module
- Create events  
- List events  
- Event details page

### 📂 Projects Module
- Create project  
- View project details  
- Track progress  

### 📘 Wiki Module
- Create wiki notes  
- View available documents

---

# 🔧 **Technologies Used**

| Technology | Purpose |
|-----------|---------|
| **HTML5** | UI Structure |
| **CSS3** | Styling & layout |
| **JavaScript (ES6)** | Logic, linking Supabase, UI interaction |
| **Supabase** | Auth, Database, Storage |
| **Supabase JS SDK** | Communication between JS and Supabase |

---

# 📂 Project Structure

```

projexia/
│── index.html
│── login.html
│── signup.html
│── clients.html
│── projects.html
│── tasks.com
|--- 
│── assets/
│     └── css/styles.css
│     └── images/C:\Users\ANOINTED\Desktop\Projexia[2].png
│
│── server/
├── server.js
├── auth.js
├── dashboard.js
├── project.js
├── events.js
└── utilities.js
|__ server

````

---

# 🛠 **SETUP & INSTALLATION**

## 1️⃣ Install Supabase into your project

Include the Supabase JS library in your HTML:

```html
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
<script src="scripts/supabase.js"></script>
````

---

## 2️⃣ Configure your Supabase keys

Create a file:

```
scripts/supabase.js
```

Add your credentials:

```javascript
const SUPABASE_URL = "https://mwdokvkofktfolhygxie.supabase.co";
const SUPABASE_ANON_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13ZG9rdmtvZmt0Zm9saHlneGllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwNTI3NjEsImV4cCI6MjA3ODYyODc2MX0.ESUMyWD-qRJsJpuxQiq-To06xTw5OoAQqUoCDpYyppk";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
```

Your entire app now has access to the connected database.

---

# 🔐 **AUTHENTICATION (SIGNUP & LOGIN)**

## Signup Code — `signup.html`

```javascript
document.getElementById("signupForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const { data, error } = await supabase.auth.signUp({
        email,
        password
    });

    if (error) return alert(error.message);

    alert("Signup successful. Login now.");
    window.location.href = "login.html";
});
```

---

## Login Code — `login.html`

```javascript
document.getElementById("loginForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });

    if (error) return alert("Invalid login credentials.");

    alert("Login successful!");
    window.location.href = "dashboard.html";
});
```

---

# 🔒 **Protecting Pages (Dashboard, Projects, Etc.)**

Add this to the top of any page that requires login:

```javascript
supabase.auth.getSession().then(({ data }) => {
    if (!data.session) {
        window.location.href = "login.html";
    }
});
```

This ensures only logged-in users can access the page.

---

# 📁 **Database Structure (Supabase)**

Below is a recommended schema for Projexia:

### **Table: users**

| column | type |
| ------ | ---- |
| id     | uuid |
| email  | text |
| name   | text |

### **Table: projects**

| column      | type |
| ----------- | ---- |
| id          | uuid |
| title       | text |
| description | text |
| status      | text |
| owner       | uuid |

### **Table: events**

| column      | type |
| ----------- | ---- |
| id          | uuid |
| event_title | text |
| event_date  | date |
| created_by  | uuid |

### **Table: blog**

| column  | type |
| ------- | ---- |
| id      | uuid |
| title   | text |
| content | text |
| author  | uuid |

### **Table: messages (contact form)**

| column  | type |
| ------- | ---- |
| id      | uuid |
| name    | text |
| email   | text |
| message | text |

---

# 📤 **Uploading Files (Wiki or Projects)**

Example upload function:

```javascript
async function uploadDocument(file) {
    const fileName = `${Date.now()}-${file.name}`;

    const { data, error } = await supabase
        .storage
        .from("projexia_documents")
        .upload(fileName, file);

    if (error) return alert("Upload failed");

    alert("File uploaded successfully!");
}
```

---

# 📥 **Fetching Files**

```javascript
async function getDocuments() {
    const { data, error } = await supabase
        .storage
        .from("projexia_documents")
        .list();

    return data;
}
```

---

# 📞 **Saving Contact Form Messages**

```javascript
async function saveMessage(name, email, message) {
    const { error } = await supabase
        .from("messages")
        .insert([{ name, email, message }]);

    if (error) alert("Message failed to send.");
    else alert("Message sent successfully!");
}
```

---

# 🧪 **Testing That Supabase Is Working**

1. Open **Supabase Dashboard**
2. Go to **Table Editor**
3. Sign up in your app
4. Refresh the `auth.users` table → you should see the user
5. Create a project → check `projects` table
6. Upload a file → check Supabase **Storage**

If these work, your database is fully connected.

---

# 🏁 **CONCLUSION**

Projexia is now fully integrated with Supabase:

* Authentication ✓
* Database tables ✓
* Storage (uploads) ✓
* Protected routes ✓
* Connected JavaScript frontend ✓



