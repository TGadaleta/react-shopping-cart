// src/components/InventoryList/InventoryList.jsx

const InventoryList = ({inventory, title, handleAddItem}) => {
    return (
      <div>
        <h2>{title}</h2>
        <ul>
            {inventory.map((item) => (
            <li key={item._id}>
            <p>{item.name}</p>
            <p>Price: {item.price}</p>
            <button onClick={() => handleAddItem(item)}>
                Add to Cart
              </button>
          </li>
        ))}
        </ul>
      </div>
    );
  };
  
  export default InventoryList;
  