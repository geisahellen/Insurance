const ALL_DAYS = [
  "1P6kRYaohnf_pDdeza3aAs-v2oZu7Le3XD1Ax1PhchJM",
  "1_-McEXTLYPfmiKy3L4ZwJ0f5IGVamjRRoHN13XZKNOU",
  "1BWPRIQVi_hgp-CZPZ-3nTMoHaFmDfFHGIOEM94178pM",
  "1Q_D7hkwj0aukIiEQhxqYXrCe2zlJSv03h_BulOhktGI",
  "14HRc5YNbyMeIbUS4PmlzcYlQc7Uf7AT9ZSs8BCULFoY",
  "1ygyUOjaqfFXmG6MJBTZAd1JyCt-ws3JpMUDz53hVaOU",
  "16R-jqHUf7b3a1d7DifIGWcRZXJ8xibQ1U9YWJfHmdm8"
];

function extractDay(fileId) {
  const presentation = SlidesApp.openById(fileId);
  const slides = presentation.getSlides();
  const payload = slides.map((slide, index) => {
    const notesShape = slide.getNotesPage().getSpeakerNotesShape();
    const notes = notesShape ? notesShape.getText().asString() : "";
    return {
      slideNumber: index + 1,
      notes: notes.trim()
    };
  });

  const fileName = `${presentation.getName()}-speaker-notes.json`;
  const json = JSON.stringify(payload, null, 2);
  return DriveApp.createFile(fileName, json, MimeType.PLAIN_TEXT).getId();
}

function extractAllDays() {
  const output = [];
  ALL_DAYS.forEach((fileId, i) => {
    const outputFileId = extractDay(fileId);
    output.push({
      day: `d${i + 1}`,
      inputFileId: fileId,
      outputFileId: outputFileId,
      outputFileUrl: `https://drive.google.com/file/d/${outputFileId}/view`
    });
  });
  Logger.log(JSON.stringify(output, null, 2));
  return output;
}
