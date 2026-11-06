FOOTBALL PRESIDENT SIMULATION - WEBSITE READY FOR GITHUB PAGES
=========================================================
Prepared: 6 November 2026

Live website presently used for the game:
https://footballpresident.github.io/footballpresident/

Public documents (after uploading these files):
- Privacy Policy: https://footballpresident.github.io/footballpresident/privacy.html
- Terms of Use: https://footballpresident.github.io/footballpresident/terms.html
- Support: https://footballpresident.github.io/footballpresident/contact.html

PUBLISHING THE UPDATE:
1. Sign into GitHub account/org that actually owns the live website repository.
2. Open the repository serving the above URL. Do NOT create a new unrelated repository.
3. Upload/replace the files and directories FROM INSIDE this ZIP in that repository's published root:
   .nojekyll, index.html, privacy.html, terms.html, contact.html, css/, js/, assets/
4. Commit the update. Confirm GitHub Pages finishes deploying.
5. Open each page in a private browser window; check menu and footer Terms/Privacy links.
6. Enter the PUBLIC terms.html URL for the Trader declaration in Play Console,
   and the PUBLIC privacy.html URL for the app's Privacy Policy field.

CHANGES INCLUDED:
- Added terms.html using the site's existing layout and user-approved Terms text.
- Linked Terms of Use in navigation and footer on all pages.
- Corrected Privacy Policy's app name and removed internal launch-check footnote.
- Updated this deployment guide to point to the actual live site, not an old example account.
- Did not change home-page screenshots, branding, artwork, or Play Store coming-soon status.

IMPORTANT RELEASE AUDIT (DO THIS BEFORE PRODUCTION):
- Compare Privacy Policy against final APK/AAB: AdMob/UMP and any other SDKs,
  app permissions, crash reporting, data collected and transmitted, and retention.
- Confirm Settings > Legal & Privacy links work inside the Android app.
- Complete Play Console Data Safety consistent with the shipped build.
- Terms document is practical draft; obtain legal advice if you need formal legal assurance.
- No personal address or phone number has been placed into these website files.
  Google Play Trader developer-contact declarations may publish those separately.

NOTE ON APP-ADS.TXT:
- Do not invent the AdMob authorization line; copy the exact row from AdMob.
- For a project path such as /footballpresident/, app-ads.txt normally needs to
  be accessible at the effective developer domain root; follow AdMob's crawler
  instructions and make sure it resolves over HTTPS.

CONTACT: pitchmindgames@gmail.com
