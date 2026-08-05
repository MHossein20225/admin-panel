import { useMemo, useState, useEffect } from "react";

export function useDataFilter(
    data = [],
    {
        searchKey,
        itemsPerPage = 10,
        initialSort = null,
    } = {}
) {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortConfig, setSortConfig] = useState(initialSort);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setCurrentPage(1);
    }, [data]);

    const filteredData = useMemo(() => {
        if (!Array.isArray(data)) return [];

        if (!searchTerm.trim()) return data;

        return data.filter((item) => {
            const value = item?.[searchKey];

            if (value == null) return false;

            return String(value)
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
        });
    }, [data, searchKey, searchTerm]);

    const sortedData = useMemo(() => {
        if (!sortConfig) return filteredData;

        return [...filteredData].sort((a, b) => {
            let aVal = a?.[sortConfig.key];
            let bVal = b?.[sortConfig.key];

            if (typeof aVal === "string")
                aVal = aVal.toLowerCase();
            if (typeof bVal === "string")
                bVal = bVal.toLowerCase();
            if (aVal < bVal)
                return sortConfig.direction === "asc" ? -1 : 1;
            if (aVal > bVal)
                return sortConfig.direction === "asc" ? 1 : -1;

            return 0;
        });
    }, [filteredData, sortConfig]);

    const totalPages = Math.max(1, Math.ceil(sortedData.length / itemsPerPage));

    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        return sortedData.slice(start, start + itemsPerPage);
    }, [sortedData, currentPage, itemsPerPage]);

    function handleSearch(term) {
        setSearchTerm(term);
        setCurrentPage(1);
    }

    function handleSort(key) {
        setSortConfig((prev) => {
            if (prev?.key === key) {
                return {
                    key,
                    direction:
                        prev.direction === "asc" ? "desc" : "asc",
                };
            }
            return {
                key,
                direction: "asc",
            };
        });

        setCurrentPage(1);
    }

    function handlePageChange(page) {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    }

    function getSortArrow(key) {
        if (sortConfig?.key !== key) return "";

        return sortConfig.direction === "asc"
            ? "↑"
            : "↓";
    }

    return {
        data: paginatedData,
        filteredData,
        sortedData,
        totalPages,
        currentPage,
        searchTerm,
        sortConfig,
        handleSearch,
        handleSort,
        handlePageChange,
        getSortArrow,
    };
}