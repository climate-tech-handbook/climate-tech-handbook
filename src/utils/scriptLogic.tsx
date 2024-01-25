const loadScript = (src: string, type: string = "text/javascript") => {
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.type = type;
    script.async = true;

    script.onload = () => {
      resolve();
    };

    script.onerror = () => {
      reject(new Error(`Failed to load script: ${src}`));
    };

    document.body.appendChild(script);
  });
};

export const loadScripts = async (scriptTags: string[]) => {
  try {
    for (const scriptTag of scriptTags) {
      await loadScript(scriptTag);
    }
  } catch (error) {
    console.error(error);
  }
};

export const scriptCleanup = (scriptTags: string[]) => {
  scriptTags.forEach((tag) => {
    const script = document.querySelector(`script[src="${tag}"]`);
    if (script) {
      script.remove();
    }
  });
};

export const setSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
  
  document.addEventListener('DOMContentLoaded', setSmoothScroll);
}