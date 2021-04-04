function List({ header, list }) {
  return (
    <div className="mt-4">
      <h2>{header}</h2>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
