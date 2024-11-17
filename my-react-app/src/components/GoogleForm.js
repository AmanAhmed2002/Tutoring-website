import React from 'react';

function GoogleForm() {
  return (
    <div className="my-4">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfm4alnumsvEtNGC91hgHeSNaTIL7sZBytc8dWRC65Ie_wN1A/viewform?embedded=true"
        width="100%"  // Adjusted to fill the container width
        height="2000" // Adjusted for the content size, may need further adjustments based on actual content
        frameBorder="0" // React uses camelCase for DOM attributes
        marginHeight="0"
        marginWidth="0"
        title="Student Information Form"
      >
        Loading…
      </iframe>
    </div>
  );
}

export default GoogleForm;
