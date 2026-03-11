/**
 * GitHub API 封裝
 */
export const useGithubApi = () => {
  // 基礎配置
  const baseURL = 'https://api.github.com'
  
  /**
   * 創建 GitHub API 請求實例
   */
  const githubFetch = async <T>(
    endpoint: string, 
    options: Record<string, any> = {}
  ): Promise<T> => {
    const { token, ...fetchOptions } = options
    
    return $fetch<T>(endpoint, {
      baseURL,
      ...fetchOptions,
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        ...(token && { 'Authorization': `Bearer ${token}` }),
        ...(fetchOptions.headers || {})
      },
      onResponseError({ response }) {
        // 統一錯誤處理
        console.error('GitHub API Error:', response.status, response.statusText)
        
        if (response.status === 403) {
          throw new Error('API 請求限制，請稍後再試')
        }
        if (response.status === 404) {
          throw new Error('找不到該用戶或資源')
        }
      }
    })
  }
  
  /**
   * 獲取用戶的 repos
   */
  const getUserRepos = <T = any>(username: string, page: number = 1, perPage: number = 10) => {
    return githubFetch<T>(`/users/${username}/repos`, {
      query: {
        page,
        per_page: perPage,
        sort: 'updated',
        direction: 'desc'
      }
    })
  }
  
  /**
   * 獲取 repo 詳情
   */
  const getRepo = <T = any>(owner: string, repo: string) => {
    return githubFetch<T>(`/repos/${owner}/${repo}`)
  }
  
  return {
    githubFetch,
    getUserRepos,
    getRepo
  }
}
