import { useQuery } from "@tanstack/react-query";
import { useTableState } from "./useTableState";
import { getTickets } from "../api/tickets";

export const useGetSoldTickets = () => {
  const {
    currentPage,
    limit,
    setLimit,
    nextPage,
    prevPage,
    goToFirstPage,
    goToLastPage,
    isFirstPage,
    isLastPage,
    search,
    handleSearchChange,
    handleClear,
    submittedQuery,
    handleSearch,
    setCurrentPage,
    ticketType,
    setTicketType,
  } = useTableState();

  const { data, isPending, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["tickets", submittedQuery, limit, currentPage, ticketType],
    queryFn: () =>
      getTickets({
        currentPage,
        limit,
        search: submittedQuery,
        ticketType,
      }),
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return {
    setLimit,
    nextPage,
    prevPage,
    goToFirstPage,
    goToLastPage,
    isFirstPage,
    isLastPage,
    search,
    handleSearchChange,
    data,
    isPending,
    isLoading,
    isError,
    error,
    handleSearch,
    handleClear,
    currentPage,
    limit,
    refetch,
    ticketType,
    setTicketType,
    setCurrentPage,
  };
};
