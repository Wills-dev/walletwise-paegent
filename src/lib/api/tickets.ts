import axios from "axios";

export const getTickets = async ({
  currentPage,
  limit,
  search,
  ticketType,
}: {
  currentPage: number;
  limit: number;
  search: string | null;
  ticketType?: string;
}) => {
  try {
    const params = new URLSearchParams();

    params.set("page", currentPage.toString());
    params.set("limit", limit.toString());

    if (search) params.set("search", search);
    if (ticketType) params.set("ticketType", ticketType);

    const url = `/analytics/top-users?${params.toString()}`;

    const { data } = await axios.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};
