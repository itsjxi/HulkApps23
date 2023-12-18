
//we are passing props of option to render color component and select color and handleoptionchange  
// for slecting the color type which was clicked

const ColorOptions = ({ options, selectedColor, handleOptionChange }) => (
  <div className="color-options">
    {options.length > 1 &&
      options.map((color) => (
        <div
          key={color}
          onClick={() => handleOptionChange('color', color)}
          style={{
            backgroundColor: color,
            border: selectedColor === color ? '2px solid #333' : 'none',
          }}
          className="color-dot"
        ></div>
      ))}
  </div>
);

export default ColorOptions;
