# Pending-Organized-Server
Simple personal server for collecting URLs you want to process later.

## Demo
[![Demo Video](https://img.youtube.com/vi/L9Epl3Z8Bv8/0.jpg)](https://youtu.be/L9Epl3Z8Bv8)

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
<img width="500" height="1000" alt="IMG_7137" src="https://github.com/Ben-FCC/ParkMyLink/raw/main/public/demo/E072818D-610A-410C-AD33-DD24351AC814_1_105_c.jpeg" />

Now you can share a link from Safari or any app to this Shortcut and it will appear in the web UI.

## Notes
URLs are stored in `data.json` in the project directory. It is ignored by git so your browsing list stays private.
