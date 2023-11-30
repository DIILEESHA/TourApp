// ResultsPage.jsx

import React from 'react';

const Results = ({ searchResults }) => {
  return (
    <div>
      <h2>Search Results</h2>
      {/* Display the search results here */}
      <pre>{JSON.stringify(searchResults, null, 2)}</pre>
    </div>
  );
};

export default Results;
