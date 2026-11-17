# Preview on your iPad

This is a static website with no dependencies or build step. The count starts at
zero each time the page loads.

## Using a computer on the same Wi-Fi

1. Download or clone this repository onto your computer.
2. Open a terminal in the repository and run:

   ```sh
   python3 -m http.server 8000 --bind 0.0.0.0
   ```

3. Find your computer's local Wi-Fi IP address in its network settings
   (for example, `192.168.1.20`).
4. On your iPad, connect to the same Wi-Fi, open Chrome, and visit
   `http://192.168.1.20:8000`, replacing the address with your computer's IP.
   Allow local network access if prompted and allow the server through your
   computer's firewall on your private network.
5. Tap **Increase counter**, then **Reset**. Rotate the iPad to check both layouts.

Keep the terminal running while previewing. Press Ctrl+C to stop the server.
`localhost` on your iPad refers to the iPad itself, so use the computer's IP.
A server running in a cloud workspace is not on your home Wi-Fi.

## Without a local computer

After these files are pushed to GitHub, you can publish this static site with
GitHub Pages (where available): open the repository's **Settings → Pages**,
choose **Deploy from a branch**, select the branch containing the files and
the **/ (root)** folder, then save. Open the published URL shown there in Chrome
on your iPad once deployment finishes. Enabling Pages publishes the site;
check that the files are suitable for public access first.
