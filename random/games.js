function launchGame(url) {
  const win = window.open("about:blank", "_blank");

  if (!win) {
    alert("Popup blocked. Please allow popups to play.");
    return;
  }

  win.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Game</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          background: black;
          overflow: hidden;
        }
        iframe {
          width: 100%;
          height: 100%;
          border: none;
        }
      </style>
    </head>
    <body>
      <iframe src="${url}" allowfullscreen></iframe>
    </body>
    </html>
  `);

  win.document.close();
}
