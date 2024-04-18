import Loader from 'react-loader-spinner';

const ImageLoader = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
      <p>Loading...</p>
    </div>
  );
};

export default ImageLoader;