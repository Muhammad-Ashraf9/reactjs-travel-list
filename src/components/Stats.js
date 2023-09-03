export default function Stats({ items }) {
  const numItems = items.length;
  const numItemsPacked = items.reduce((acc, item) => {
    return item.packed ? ++acc : acc;
  }, 0); //we can use filter then reduce //++a = a+1
  const percentage = Math.round((numItemsPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {numItems > 0 &&
          (percentage === 100
            ? `You have packed everything You are ready to go✈️`
            : `You have Packed ${numItemsPacked} items ${percentage}%`)}

        {numItems === 0 && `You need add items`}
      </em>
    </footer>
  );
}
