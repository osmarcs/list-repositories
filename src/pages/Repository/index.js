import React, { useEffect, useState } from 'react';
import api from '../../services/api';

export default function Repository({ match }) {
  const [repository, setRepository] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    const repoName = decodeURIComponent(match.params.repository);
    setLoading(true);
    const [repositoryXHR, issuesXHR] = await Promise.all([
      api.get(`/repos/${repoName}`),
      await api.get(`/repos/${repoName}/issues`, {
        state: 'open',
        per_page: 5,
      }),
    ]);

    setRepository(repositoryXHR.data);
    setIssues(issuesXHR.data);
    setLoading(false);
  }, []);

  return <h1>Repository: {repository.full_name}</h1>;
}
