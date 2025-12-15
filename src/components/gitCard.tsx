import type { Repo } from "../types/GitRepo";

interface Props {
  repo: Repo;
}

export function RepoCard({ repo }: Readonly<Props>) {
  return (
    <div className="card">
      <h3>{repo.name}</h3>

      <p>{repo.description ?? "Sem descrição"}</p>

      <span>Linguagem: {repo.language ?? "N/A"}</span>

      <span>⭐ {repo.stargazers_count}</span>

      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        Ver no GitHub
      </a>
    </div>
  );
}
