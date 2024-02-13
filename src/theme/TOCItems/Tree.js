import React from 'react';

// Recursive component rendering the toc tree
function TOCItemTree({toc, className, linkClassName, isChild, collapsed, toggleCollapsed}) {
  if (!toc.length) {
    return null;
  }

  const handleClick = (e, headingId) => {
    e.preventDefault();
    
    const scrollIntoViewWithOffset = (selector, offset) => {
      window.scrollTo({
        behavior: 'smooth',
        top: document.querySelector(selector).getBoundingClientRect().top -
          document.body.getBoundingClientRect().top - offset
      })
    }
    
    if (window.innerWidth < 997) {
      scrollIntoViewWithOffset(`#${headingId}`, 300)
      toggleCollapsed();
    } else {
      scrollIntoViewWithOffset(`#${headingId}`, 0)

    }
  };


  return (
    <ul className={isChild ? undefined : className}>
      {toc.map((heading) => (
        <li key={heading.id}>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <a
            href={`#${heading.id}`}
            className={linkClassName ?? undefined}
            // Developer provided the HTML, so assume it's safe.
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: heading.value}}
            onClick={(e) => handleClick(e, heading.id)}
          />
          <TOCItemTree
            isChild
            toc={heading.children}
            className={className}
            linkClassName={linkClassName}
            toggleCollapsed={toggleCollapsed}
            collapsed={collapsed}
          />
        </li>
      ))}
    </ul>
  );
}

// Memo only the tree root is enough
export default React.memo(TOCItemTree);
