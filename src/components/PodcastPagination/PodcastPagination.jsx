import React, { useState,useEffect, useRef } from 'react';

const PodcastPagination = ({ podcastsPerPage = 3, iframes }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(iframes.length / podcastsPerPage);

  const startIndex = (currentPage - 1) * podcastsPerPage;
  const endIndex = startIndex + podcastsPerPage;
  const currentIframes = iframes.slice(startIndex, endIndex);

  const iframeContainerRef = useRef();

  useEffect(() => {
    const iframes = iframeContainerRef.current.querySelectorAll('iframe');
    iframes.forEach(iframe => {
      iframe.style.width = '100%';
      iframe.style.maxWidth = '660px';
      iframe.style.borderRadius = '10px';
      // Add any other styles you want
    });
  }, [currentPage]);

  return (
    <div>
      <div ref={iframeContainerRef}>
        {currentIframes.map((iframe, index) => (
          <div key={index} dangerouslySetInnerHTML={{ __html: iframe }} />
        ))}
      </div>
      <button disabled={currentPage <= 1} onClick={() => setCurrentPage(current => current - 1)}>
        Previous
      </button>
      <button disabled={currentPage >= totalPages} onClick={() => setCurrentPage(current => current + 1)}>
        Next
      </button>
    </div>
  );
};

export default PodcastPagination;
