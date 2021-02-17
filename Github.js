class Github {
 constructor() {
  this.client_id = 'bdf60ab60443ce860a9f';
  this.client_secret = '8c4462fde6773da8278f3c3e374e9d26a730b7f4';
  this.repos_count = 5;
  this.repos_sort = 'created: asc';
 }

 async getUser(user) {
  const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

  const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

  const profile = await profileResponse.json();
  const repos = await repoResponse.json();

  return {
   profile,
   repos
  }
 }
}