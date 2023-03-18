import { useState, useEffect } from "react";
import { Deal } from "./types/Deal.types";
import axios from "axios";
import DealCard from "./components/DealCard/DealCard";

const App = () => {
  const [deals, setDeals] = useState<Array<Deal>>([]);

  useEffect(() => {
    axios
      .get("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15")
      .then((res) => res.status === 200 && setDeals(res.data));
  }, []);

  return (
    <div className="App">
      {deals.map((deal) => (
        <DealCard deal={deal} key={deal.dealID} />
      ))}
    </div>
  );
};

export default App;
