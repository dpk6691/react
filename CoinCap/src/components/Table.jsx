import React, { useEffect, useState } from "react";

const Table = () => {
  const [coinData, updateCoinData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const pageSize = 50;

  const fetchData = () => {
    const offset = (currentPage - 1) * pageSize;
    return fetch(
      `https://api.coincap.io/v2/assets?limit=${pageSize}&offset=${offset}`
    )
      .then((response) => response.json())
      .then((data) => {
        const newData = data.data;
        setHasMore(newData.length === pageSize);

        if (newData.length > 0) {
          setCurrentPage((prevPage) => prevPage + 1);
          updateCoinData(newData);
        }
      });
  };

  const formatCurrency = (value) => {
    return Number(value).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const formatMarketCap = (value) => {
    return `$${(value / 1e9).toFixed(2)}b`;
  };

  const formatSupply = (value) => {
    return `${(value / 1e6).toFixed(2)}m`;
  };

  const iconUrl = (symbol) => {
    return `https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-white">
      <div className="overflow-x-auto border-x border-t">
        <table className="table-auto w-full">
          <thead className="border-b">
            <tr className="bg-gray-50">
              <th className="text-left p-2 text-xs font-medium">Rank</th>
              <th className="text-left p-2 text-xs font-medium">Name</th>
              <th className="text-left p-2 text-xs font-medium">Price</th>
              <th className="text-left p-2 text-xs font-medium">Market Cap</th>
              <th className="text-left p-2 text-xs font-medium">VWAP(24Hr)</th>
              <th className="text-left p-2 text-xs font-medium">Supply</th>
              <th className="text-left p-2 text-xs font-medium">
                Volume(24Hr)
              </th>
              <th className="text-left p-2 text-xs font-medium">
                Change(24Hr)
              </th>
            </tr>
          </thead>
          <tbody>
            {coinData &&
              coinData.map((data) => (
                <tr className="border-b hover:bg-gray-50" key={data.id}>
                  <td className="p-2 text-xs">{data.rank}</td>
                  <td className="p-2 text-xs w-48">
                    <div className="flex flex-wrap flex-row flex-1">
                      <div className="flex flex-col">
                        <div className="flex flex-1">
                          <img
                            className="object-contain w-11 pr-3"
                            src={iconUrl(data.symbol)}
                            alt="Coin Symbol"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col flex-1">
                        <div className="flex flex-1">{data.name}</div>
                        <div className="flex flex-1">{data.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-2 text-xs">
                    {formatCurrency(data.priceUsd)}
                  </td>
                  <td className="p-2 text-xs">
                    {formatMarketCap(data.marketCapUsd)}
                  </td>
                  <td className="p-2 text-xs">
                    {formatCurrency(data.vwap24Hr)}
                  </td>
                  <td className="p-2 text-xs">{formatSupply(data.supply)}</td>
                  <td className="p-2 text-xs">
                    {formatCurrency(data.volumeUsd24Hr)}
                  </td>
                  <td className="p-2 text-xs">
                    {formatCurrency(data.changePercent24Hr)}%
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {hasMore && (
        <div className="text-center mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={fetchData}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Table;
