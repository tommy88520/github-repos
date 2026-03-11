export interface GithubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  stargazers_count: number
  language: string | null
  updated_at: string
}

export const useGithubRepos = () => {
  const repos = ref<GithubRepo[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  const page = ref(1)
  const hasMore = ref(true)
  const perPage = 10

  const username = 'yuaanlin'
  

  const api = useGithubApi()

  const fetchRepos = async (pageNum: number = 1) => {
    if (loading.value) return

    loading.value = true
    error.value = null

    try {
      const response = await api.getUserRepos<GithubRepo[]>(username, pageNum, perPage)

      if (response.length < perPage) {
        hasMore.value = false
      }

      repos.value = [...repos.value, ...response]
      page.value = pageNum

    } catch (err: any) {
      error.value = err.message || '獲取數據失敗'
      console.error('獲取 GitHub repos 失敗:', err)
    } finally {
      loading.value = false
    }
  }

  const loadMore = async () => {
    if (!hasMore.value || loading.value) return
    await fetchRepos(page.value + 1)
  }

  const reset = () => {
    repos.value = []
    page.value = 1
    hasMore.value = true
    error.value = null
  }

  return {
    repos,
    loading,
    error,
    page,
    hasMore,
    username,
    fetchRepos,
    loadMore,
    reset
  }
}
