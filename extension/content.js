// Define the replacements you want to make
const replacements = [
    { from: "https://w2g DOT ", to: "https://w2g." },
    // Add more replacements as needed
  ];
  
  // Function to replace text in specific HTML elements
  function replaceTextInElements() {
    const elements = document.getElementsByClassName('text-token');
  
    for (const element of elements) {
      for (const replacement of replacements) {
        const regex = new RegExp(replacement.from, 'gi');
        element.textContent = element.textContent.replace(regex, replacement.to);
      }
    }
  }
  
  
  // Call replaceTextInElements to replace the text initially
  replaceTextInElements();
  
  // MutationObserver to monitor changes in the document
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        replaceTextInElements();
      }
    }
  });
  
  
  // Observe mutations in the entire document
  observer.observe(document, { childList: true, subtree: true });
