const LoadMoreBtn = ({ onLoadMore, hasMore }) => {
  if (!hasMore) {
    return null;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={onLoadMore}>Load more</button>
    </div>
  );
};

export default LoadMoreBtn;