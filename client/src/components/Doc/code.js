import { useState } from 'react';

const codeSnippet = `

async function fetchData() {
  try {
    const apiUrl = \`\${process.env.REACT_APP_DEV_URL}/api/data/fetchData/\${Need to provide api key here}\`;

    // Make a GET request to the API with the authentication token
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": Provide auth token here,
      },
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }

    // Parse the response data
    const fetchedData = await response.json();
    console.log("Fetched data:", fetchedData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}`;

function CopyableCodeBox({ code }) {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopySuccess(true);
  };

  return (
    <div className='w-fit' style={{ border: '1px solid #ccc', padding: '10px', position: 'relative' }}>
      <pre style={{ margin: 0 }}>{code}</pre>
      <button onClick={copyToClipboard} style={{ position: 'absolute', top: '10px', right: '10px' }}>
        {copySuccess ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
}

function YourComponent() {
  return (
    <div>
      <CopyableCodeBox code={codeSnippet} />
    </div>
  );
}

export default YourComponent;
