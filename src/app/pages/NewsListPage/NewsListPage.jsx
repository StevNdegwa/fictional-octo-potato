import { useCallback, useEffect, useState } from "react";
import { getDetailedNewTopStories, cancelRequest } from "../../api/hackernews";
import { PageLayout } from "../../layouts";
import { ListLoadingSpinner, NewsListError } from "./styles";
import { NewsList } from "./NewsList";

export function NewsListPage() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const fetchList = useCallback(async () => {
    try {
      let stories = await getDetailedNewTopStories();

      setList(stories);
    } catch (error) {
      setError(error.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchList();

    return () => {
      cancelRequest();
    };
  }, [fetchList]);

  if (loading) {
    return (
      <PageLayout title="Hacker News: Loading">
        <ListLoadingSpinner>In a moment...</ListLoadingSpinner>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Hacker News: Top Stories">
      {Boolean(error) ? (
        <NewsListError> ⚠ {error}</NewsListError>
      ) : (
        <NewsList list={list} />
      )}
    </PageLayout>
  );
}
