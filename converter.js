let ipcToBnsMap = {};

fetch('ipc_bns_mapping.json')
  .then(response => response.json())
  .then(data => { ipcToBnsMap = data; });

function convertSection() {
  const oldSection = document.getElementById("oldSection").value.trim();
  const resultDiv = document.getElementById("result");
  
  if (ipcToBnsMap[oldSection]) {
    const mapping = ipcToBnsMap[oldSection];
    resultDiv.innerHTML = `
      <b>Old IPC Section:</b> ${oldSection}<br>
      <b>New BNS Section:</b> ${mapping.bns}<br>
      <b>Section Title:</b> ${mapping.title}<br>
      <b>Illustration:</b> ${mapping.illustration}
    `;
  } else {
    resultDiv.innerHTML = "No mapping found for this section.";
  }
}
