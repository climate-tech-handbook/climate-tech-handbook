import React, { useState } from 'react';

const PodcastPagination = ({ podcastsPerPage = 3, iframes }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(iframes.length / podcastsPerPage);

  const startIndex = (currentPage - 1) * podcastsPerPage;
  const endIndex = startIndex + podcastsPerPage;
  const currentIframes = iframes.slice(startIndex, endIndex);

  return (
    <div>
      <div>
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
