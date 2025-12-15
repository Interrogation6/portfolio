import type { Repo } from "../types/gitRepo";

interface Props {
  repo: Repo;
}

export function RepoCard({ repo }: Readonly<Props>) {
  return (
    <a className="block bg-gray-900 p-4 rounded-2xl shadow-md"
    href={repo.html_url} target="_blank" rel="noopener noreferrer">
      <div className="fugaz-one-regular text-lg"
      >{repo.name}</div>

      <p>{repo.description ?? "Sem descrição"}</p>

      <span>Linguagem: {repo.language ?? "N/A"}</span>
      <div className="mt-1">
        <span className="mt-10"
        >⭐ {repo.stargazers_count}</span>
      </div>
    </a>
  );
}
