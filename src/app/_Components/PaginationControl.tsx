"use client";

import { PageInfo } from "@/constants/types";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const getVisiblePages = (currentPage: number) => {
  if (currentPage < 3) {
    return [1, 2, 3, 4, 5];
  }
  return [
    currentPage - 2,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    currentPage + 2,
  ];
};

export const PaginationControls = ({ pageInfo }: { pageInfo: PageInfo }) => {
  const searchParams = useSearchParams();
  const page = searchParams.get(`page`) || 1;
  const pathname = usePathname();
  const router = useRouter();

  let newArray = [];
  for (let i = Number(page) + 1; i < Number(page) + 1; i++) {
    newArray.push(i);
  }

  const onChangePage = (newPage: number) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("page", String(newPage));

    router.push(pathname + "?" + newParams.toString());
  };

  const lastPage = pageInfo.totalPages > 500 ? 500 : pageInfo.totalPages - 1;
  const visiblePages = getVisiblePages(pageInfo.currentPage);

  return (
    <div className="flex gap-10 mx-1 cursor-pointer">
      {pageInfo.currentPage > 1 && (
        <div onClick={() => onChangePage(pageInfo.currentPage - 1)}> Prev </div>
      )}
      {visiblePages.map((page) => {
        return (
          <div
            onClick={() => onChangePage(page)}
            className="{pageInfo.currentPage === page? 'font-semibold : ''}"
            key={page}
          >
            {page}
          </div>
        );
      })}
      ...
      <div onClick={() => onChangePage(lastPage)}> [lastPage] </div>
      {pageInfo.currentPage < lastPage && (
        <div onClick={() => onChangePage(pageInfo.currentPage + 1)}>Next</div>
      )}
    </div>
  );
};
