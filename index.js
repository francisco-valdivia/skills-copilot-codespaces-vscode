import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function Home() {
  const [markdown, setMarkdown] = useState("type markdown here");

  const handleChange = (e) => {
	setMarkdown(e.target.value);
  };

  return (
	<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
	  <textarea
		style={{ width: '100%', height: '200px', marginBottom: '20px' }}
		value={markdown}
		onChange={handleChange}
	  />
	  <div style={{ width: '100%', border: '1px solid #ddd', padding: '20px' }}>
		<ReactMarkdown>{markdown}</ReactMarkdown>
	  </div>
	</div>
  );
}

function reverseSentence(sentence) {
  // Split the sentence into words
  let words = sentence.split(' ');

  // Reverse the array of words
  let reversedWords = words.reverse();

  // Join the reversed array back into a sentence
  let reversedSentence = reversedWords.join(' ');

  // Capitalize the first letter of the reversed sentence
  reversedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);

  return reversedSentence;
}

// Example usage
let inputSentence = "Hello world this is a test";
let outputSentence = reverseSentence(inputSentence);
console.log(outputSentence); // Output: "Test a is this world hello"

// Add a button to reverse the markdown text
<button
    style={{ marginTop: '20px' }}
    onClick={() => setMarkdown(reverseSentence(markdown))}
>
    Reverse Text
</button>

const data = [
    [{ name: 'John' }, { name: 'Jane' }],
    [{ name: 'Bob' }]
  ];
  
  // Use flatMap to flatten the array and extract names
  const names = data.flatMap(innerArray => innerArray.map(obj => obj.name));
  
  console.log(names); // Output: ['John', 'Jane', 'Bob']

