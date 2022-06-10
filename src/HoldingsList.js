import { useState } from "react";
import "./HoldingsListItem";
import HoldingsListItem from "./HoldingsListItem";
import { mockData } from "./mockData";

function HoldingsList() {
  const [assets, setAssets] = useState(mockData);

  function addAsset() {
    // const icon = prompt("What's the URL of your asset icon?");
    // const name = prompt("What is the name of your asset?");
    // const delta = prompt("What is the delta?");
    // const description = prompt("What is the description of your asset?");
    // const type = prompt("What is the type of asset?");
    // const holdings = prompt("What are the holdings of your asset?");
    // const buyPrice = prompt("What was your buy price?");
    // const holdingsValue = Number(buyPrice) * Number(holdings);
    const asset = {
      icon: "test.svg",
      name: "name",
      delta: "5%",
      description: "Lengthy description...",
      type: "Type",
      transactions: [
        {
          value: 100,
          currency: "USD",
          holdings: 10,
          timestamp: "2020-01-01T00:00:00.000Z",
        },
        {
          value: 200,
          currency: "USD",
          holdings: 10,
          timestamp: "2020-01-04T00:00:00.000Z",
        },
      ],
    };

    asset.holdingsValue = Number(asset.buyPrice.value) * Number(asset.holdings);

    setAssets([...assets, asset]);

    console.log("Asset added");
  }

  return (
    <div>
      <div>Holdings List</div>
      {assets.map((asset, index) => (
        <HoldingsListItem
          key={index}
          icon={asset.icon}
          name={asset.name}
          holdings={asset.holdings}
          holdingsValue={asset.holdingsValue}
          assetDelta={asset.delta}
          description={asset.description}
          type={asset.type}
        />
      ))}
      <button onClick={() => addAsset()}>Add asset</button>
    </div>
  );
}

export default HoldingsList;
