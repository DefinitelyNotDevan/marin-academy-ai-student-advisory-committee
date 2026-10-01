/**
 * Ask the AI Committee — Google Apps Script
 *
 * SETUP:
 * 1. Go to script.google.com and create a new project
 * 2. Paste this file's contents in
 * 3. Click Deploy > New deployment > Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the deployment URL — that's your NEXT_PUBLIC_APPS_SCRIPT_URL
 *
 * SHEET SETUP:
 * - Create a Google Sheet named "Questions" with these columns in row 1:
 *   A: Submitted At | B: Question | C: Answer | D: Category | E: Status
 * - To publish a Q&A: paste the answer in column C, set Status (column E) to "published"
 * - The website fetches all rows where Status = "published" automatically
 */

const SHEET_NAME = "Questions";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    sheet.appendRow([new Date(), data.question, "", "", "pending"]);
    return respond({ success: true });
  } catch (err) {
    return respond({ success: false, error: String(err) });
  }
}

function doGet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  const rows = sheet.getDataRange().getValues();
  const published = rows.slice(1) // skip header
    .filter(row => String(row[4]).toLowerCase() === "published" && row[1] && row[2])
    .map(row => ({
      question:    String(row[1]),
      answer:      String(row[2]),
      category:    String(row[3] ?? ""),
      answeredAt:  row[0] ? new Date(row[0]).toLocaleDateString("en-US", { month: "long", year: "numeric" }) : "",
    }));
  return respond({ questions: published });
}

function respond(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
