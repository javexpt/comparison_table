import React from 'react';
import { Button, Container } from 'react-bootstrap';

const records = [
  {
    id: 1,
    name: 'John Doe',
    age: 30,
    department: 'Engineering',
  },
  {
    id: 2,
    name: 'John Doe',
    age: 32,
    department: 'Engineering',
  },
];

function App() {
  const handleViewChanges = () => {
    const newWindow = window.open('', '_blank', 'width=600,height=400');
    const differences = getDifferentFields(records[0], records[1]);
    newWindow.document.body.innerHTML = `<h1>Record Differences</h1><table style="border-collapse: collapse;"><thead><tr><th style="background-color: lightgrey; color: black; border: 1px solid black; padding: 5px;">Field</th><th style="background-color: lightgrey; color: black; border: 1px solid black; padding: 5px;">Value in Record 1</th><th style="background-color: lightgrey; color: black; border: 1px solid black; padding: 5px;">Value in Record 2</th></tr></thead><tbody>${renderTableBody(
      differences
    )}</tbody></table>`;
  };

  const getDifferentFields = (record1, record2) => {
    const differences = {};
    for (const key in record1) {
      if (record1[key] !== record2[key]) {
        differences[key] = {
          field: key,
          value1: record1[key],
          value2: record2[key],
        };
      }
    }
    return differences;
  };

  const renderTableBody = (differences) => {
    let tableBody = '';
    for (const field of Object.values(differences)) {
      tableBody += `<tr><td style="border: 1px solid black; padding: 5px;">${field.field}</td><td style="border: 1px solid black; padding: 5px;">${field.value1}</td><td style="border: 1px solid black; padding: 5px;">${field.value2}</td></tr>`;
    }
    return tableBody;
  };

  return (
    <Container>
      <h1>Record Comparison</h1>
      <Button variant="primary" onClick={handleViewChanges}>
        View Changes
      </Button>
    </Container>
  );
}

export default App;
