function HoldingsListItem({
  icon,
  name,
  holdingsValue,
  assetDelta,
  description,
  type,
  holdings,
}) {
  return (
    <div>
      <div>{icon}</div>
      <div>{name}</div>
      <div>
        {holdingsValue.currency}
        {holdingsValue.value}
      </div>
      <div>{assetDelta}</div>
      <div>{description}</div>
      <div>{type}</div>
      <div>{holdings}</div>
    </div>
  );
}

export default HoldingsListItem;
