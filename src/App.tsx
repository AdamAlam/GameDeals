import { useState, useEffect } from "react";
import { Deal } from "./types/Deal.types";
import axios from "axios";
import DealCard from "./components/DealCard/DealCard";
import cloneDeep from "lodash/cloneDeep";
import Form from "react-bootstrap/esm/Form";
import { storeDict } from "./dictionaries/stores";

const App = () => {
  const [deals, setDeals] = useState<Array<Deal>>([]);
  const [filteredDeals, setFilteredDeals] = useState<Array<Deal>>([]);
  const [storeFilter, setStoreFilter] = useState<string>("");

  useEffect(() => {
    axios
      .get("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15")
      .then((res) => res.status === 200 && setDeals(res.data));
  }, []);

  useEffect(() => {
    let cloned = cloneDeep(deals);
    if (storeFilter.length > 0) {
      cloned = cloned.filter((deal: Deal) => deal.storeID === storeFilter);
    }
    setFilteredDeals(cloned);
  }, [deals, storeFilter]);

  return (
    <div className="App">
      <Form.Select
        aria-label="Default select example"
        onChange={(e) => {
          setStoreFilter(e.target.value);
        }}
      >
        <option value={""}>All stores</option>
        {storeDict.map((store) => (
          <option value={store.storeID}>{store.storeName}</option>
        ))}
      </Form.Select>
      {filteredDeals.length > 0 ? (
        filteredDeals.map((deal) => <DealCard deal={deal} key={deal.dealID} />)
      ) : (
        <h2>No deals found</h2>
      )}
    </div>
  );
};

export default App;
