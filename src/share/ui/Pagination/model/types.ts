import { SetStateAction } from 'react';

export type PaginationContext = {
    page: number;
    totalPages: number | null;
    itemsPerPage: number;
    setPage: (page: number) => void;
    setTotalPages: (total: number) => void;
    goNextPage: () => void;
    goPrevPage: () => void;
    setItemsPerPage?: React.Dispatch<SetStateAction<number>>;
};

export type GetPaginationContext<WithSetItemsPerPage extends boolean> =
    WithSetItemsPerPage extends true
        ? PaginationContext & {
              setItemsPerPage: React.Dispatch<SetStateAction<number>>;
          }
        : Omit<PaginationContext, 'setItemsPerPage'>;

export type PaginationOptions = {
    resetPageIfItemsPerPageChanged?: boolean;
};
