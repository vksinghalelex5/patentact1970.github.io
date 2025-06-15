let ipcToBnsMap = {};

fetch('ipc_bns_mapping.json')
  .then(response => response.json())
  .then(data => { ipcToBnsMap = data; });

function convertSection() {
  const oldSection = document.getElementById("oldSection").value.trim();
  const resultDiv = document.getElementById("result");
  
  if (ipcToBnsMap[oldSection]) {
    const mapping = ipcToBnsMap[oldSection];
    resultDiv.innerHTML = `New BNS Section: ${mapping.bns}<br>Illustration: ${mapping.illustration}`;
  } else {
    resultDiv.innerHTML = "No mapping found for this section.";
  }
}
