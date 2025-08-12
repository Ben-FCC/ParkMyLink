# Pending-Organized-Server
Simple personal server for collecting URLs you want to process later.

## Demo
https://github.com/user-attachments/assets/9e36980c-78ec-48a7-a812-a457ae078216

## Features
- Receive URLs via HTTP and store them in a last-in-first-out queue.
- Frontend shows previews of each URL with a **Finished** button to remove it.
- Uses [TailwindCSS](https://tailwindcss.com/) with a dark theme.
- Can be exposed to the internet through [ngrok](https://ngrok.com/) so you can share from your phone or computer.

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   node server.js
   ```
   The server listens on port **3000** by default.
3. (Optional) Expose the server to the internet with ngrok:
   ```bash
   ngrok http 3000
   ```
   Use the HTTPS URL provided by ngrok for external access.

## API
- `GET /api/urls` – list all stored URLs.
- `POST /api/urls` – add a URL. Accepts JSON `{ "url": "https://example.com" }` or form data.
- `DELETE /api/urls/:id` – remove a URL by its id.
- `GET /add?url=...` – quick endpoint for adding a URL via query string.

## iPhone Shortcuts
Create a Shortcut that sends a **POST** request to your ngrok URL:
```
1. Receive URLs input from Share Sheet (information button; Show in Share Sheet)
2. Get contents of https://YOUR-NGROK-ID.ngrok-free.app/api/urls
   - Method: POST
   - Request Body: JSON
   - Text: url = (Shortcut Input)
```
<img width="500" height="1000" alt="IMG_7137" src="https://github.com/user-attachments/assets/0d47d301-d931-4462-b5bb-a4d644ddcff9" />

Now you can share a link from Safari or any app to this Shortcut and it will appear in the web UI.

## Notes
URLs are stored in `data.json` in the project directory. It is ignored by git so your browsing list stays private.
