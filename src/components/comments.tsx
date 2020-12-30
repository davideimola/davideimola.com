import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';


const commentNodeId = 'comments';

const Comments = () => {
  // this query is for retrieving the repo name from gatsby-config
  const data = useStaticQuery(graphql`
		query RepoQuery {
			site {
				siteMetadata {
					repo
				}
			}
		}
	`);

  useEffect(() => {
    // docs - https://utteranc.es/
    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.async = true;
    script.setAttribute('repo', data.site.siteMetadata.repo);
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('label', 'comment :speech_balloon:');
    script.setAttribute('theme', 'github-light');
    script.setAttribute('crossorigin', 'anonymous');

    const scriptParentNode = document.getElementById(commentNodeId);
    scriptParentNode.appendChild(script);

    return () => {
      // cleanup - remove the older script with previous theme
      scriptParentNode.removeChild(scriptParentNode.firstChild);
    };
  }, [data]);

  return <div id={commentNodeId} />;
};

export default Comments;
