# 💬 Realtime Chat Application
```bash
"COMPANY" : CODTECH IT SOLUTIONS
"NAME" : KASHISH KUMARI
"INTERN ID" : CT06DF642
"DOMAIN" : MERN STACK WEB DEVELOPMENT
"DURATION" : 6 WEEKS
"MENTOR" : Neela Santhosh

---


This Real-Time Chat App is a modern, interactive chat application developed as part of an internship task. It enables real-time communication between users with features like emoji support, typing indicators, image sharing, and theme toggling. The primary purpose of this project is to demonstrate skills in frontend and backend integration, event-based communication with Socket.IO, and building interactive UIs using React.

This chat application provides a clean user interface and delivers real-time chat functionality by using WebSockets. The application has two major components: the frontend (React) and the backend (Node.js + Express + Socket.IO). Users can chat with each other in real time, and the application supports simultaneous usage in multiple browser tabs or across different devices on the same network.

---

## 🎯 Internship Task Objectives

The goal of this project was to design and implement a functional real-time chat application that demonstrates the following:

- Establish real-time socket communication using Socket.IO.
- Allow multiple clients to join and chat with unique usernames.
- Show typing indicators when another user is typing.
- Include an emoji picker to insert emojis into messages.
- Add support for image uploads and display them in chat.
- Implement light and dark themes with toggling capability.
- Maintain clean, maintainable, and reusable code.

---

## 🚀 Features

- ⚡ **Real-time Messaging:** Messages are delivered instantly between users using Socket.IO.
- 👤 **Username Prompt:** Each user is prompted to enter a username before joining the chat.
- ✍️ **Typing Indicator:** When a user is typing, others see a “someone is typing...” message.
- 😊 **Emoji Picker:** Users can select and insert emojis into their messages.
- 🖼️ **Image Sharing:** Users can upload and send images; the app encodes images in Base64 for preview.
- 🌗 **Dark/Light Theme:** Toggle between dark and light modes using a simple button.
- 💬 **Styled Chat Bubbles:** Messages are styled distinctly for sender and receiver.
- 📱 **Responsive Design:** The UI adapts to various screen sizes for usability.

---

## 🛠 Tech Stack

- **Frontend:** React, Emoji Picker React, CSS
- **Backend:** Node.js, Express
- **Real-Time Engine:** Socket.IO (WebSocket-based communication)

This technology stack ensures that the app performs efficiently and is easily scalable. Socket.IO is used for bi-directional real-time communication between the frontend and backend.

---

## 📦 Installation & Usage

### ✅ Prerequisites

- Node.js and npm installed on your system
- Git (for cloning the repository)

### 🔧 Steps to Run the App

1. **Clone the Repository:**
```bash
git clone https://github.com/kashish-kumari-05/Real-time-Chat-Application.git
cd Realtime-Chat-App
```

2. **Install Dependencies:**
```bash
cd client
npm install

cd ../server
npm install
```

3. **Start the Server:**
```bash
cd server
node index.js
```

4. **Start the Client:**
```bash
cd ../client
npm start
```

The app will launch at: [http://localhost:3000](http://localhost:3000)

You can open two tabs or use two browsers to test real-time communication.

---

## 🗂️ Project Structure

```
Realtime-Chat-App/
├── client/         # React frontend
│   ├── components/ # React components
│   └── styles/     # CSS styles
├── server/         # Node.js + Express backend
│   └── index.js
└── README.md
```

---

## 📸 Screenshot 

<img width="1366" height="687" alt="Image" src="https://github.com/user-attachments/assets/6a193386-2633-4991-96c9-43135c6344c2" />
---

## 🙋‍♀️ Author

**Kashish Kumari**  
Intern at CodTech  
GitHub: [@kashish-kumari-05](https://github.com/kashish-kumari-05)

---

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

It is open source and free to use for learning and development purposes.
