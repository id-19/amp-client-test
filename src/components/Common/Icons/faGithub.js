import React from 'react';
import Mixpanel from 'mixpanel';
// Assuming Mixpanel is correctly initialized elsewhere in the project

const FooterComponent = () => {
  const trackGitHubLinkClick = () => {
    Mixpanel.track('GitHub Link Clicked', {
      "Location": "Footer",
      "Purpose": "Visit GitHub Repository"
    });
  };

  return (
    <div className="footer">
      <button type="button" aria-label="View on GitHub" className="github-link-button" onClick={trackGitHubLinkClick} >
        GitHub
      </button>
    </div>
  );
};

export default FooterComponent;
```

```jsx
import React from 'react';
import Mixpanel from 'mixpanel';
// Assuming Mixpanel is correctly initialized elsewhere in the project

const ProjectDescription = () => {
  const trackProjectGitHubLinkClick = () => {
    Mixpanel.track('Project GitHub Link Clicked', {
      "Project Name": "Example Project",
      "Action": "External Navigation"
    });
  };

  return (
    <div className="project-description">
      <a href="https://github.com/example/project" rel="noopener noreferrer" target="_blank" className="github-project-link" onClick={trackProjectGitHubLinkClick} >
        Visit Project on GitHub
      </a>
    </div>
  );
};

export default ProjectDescription;