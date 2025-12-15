import React, { useEffect, useState } from "react";
import { RepoCard } from "./gitCard";
import type { Repo } from "../types/GitRepo";

type GitHubRepoAPI = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
};

export default function Projetos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    const url =
      "https://api.github.com/users/interrogation6/repos?per_page=100&sort=updated";

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
        return res.json() as Promise<GitHubRepoAPI[]>;
      })
      .then((data) => {
        if (!mounted) return;

        const mapped: Repo[] = data.map((r) => ({
          id: r.id,
          name: r.name,
          description: r.description,
          html_url: r.html_url,
          language: r.language,
          stargazers_count: r.stargazers_count ?? 0,
        }));

        setRepos(mapped);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(String(err));
      })
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <div>Carregando projetos...</div>;
  if (error) return <div>Erro ao carregar repositórios: {error}</div>;

  return (
    <div>
      <h2 className="text-2xl font-semibold text-cyan-50 mb-4">
        Projetos no GitHub
      </h2>
      <div className="flex flex-wrap -mx-2 max-w-3xl">
        {repos.map((repo) => (
          <div key={repo.id} className="w-1/2 py-2 px-2">
            <RepoCard repo={repo} />
          </div>
        ))}
      </div>
    </div>
  );
}
