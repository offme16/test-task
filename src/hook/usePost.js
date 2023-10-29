import { useMemo } from "react";
//1реализация поиска
//1.1сортировка данных
export const useSortedPost = (post, sort) => {
  const sortedPost = useMemo(() => {
    if (sort) {
      return [...post].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return post;
  }, [sort, post]);
  return sortedPost;
};
//1.2поиск
export const usePost = (post, sort, query) => {
  const sortedPost = useSortedPost(post, sort);
  const sortedAndSearchedPost = useMemo(() => {
    return sortedPost.filter((e) =>
      e.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, sortedPost]);
  return sortedAndSearchedPost;
};
