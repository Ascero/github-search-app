export interface GithubRepository {
  name: string;
  description: string;
  forkCount: number;
  owner: {
    login: string;
    _typename: string;
  };
}

export interface SearchResult {
  node: GithubRepository;
}
