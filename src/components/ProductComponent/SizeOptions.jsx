

//we are passing props of option to render size component and selectsize and handleoptionchange  
// for slecting the size type which was clicked
const SizeOptions = ({ options, selectedSize, handleOptionChange }) => (
  <div className="size-options">
    {options.map((size) => (
      <div
        key={size}
        className="size-square"
        onClick={() => handleOptionChange('size', size)}
        style={{
          backgroundColor: selectedSize === size ? 'black' : 'transparent',
          color: selectedSize === size ? 'white' : 'black',
        }}
      >
        {size}
      </div>
    ))}
  </div>
);

export default SizeOptions;
