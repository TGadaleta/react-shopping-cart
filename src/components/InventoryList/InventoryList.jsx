// src/components/InventoryList/InventoryList.jsx
import './InventoryList.css'

const InventoryList = ({inventory, title, handleAddItem, handleRemoveItem}) => {
    return (
      <div className='inventory-list'>
        <h2>{title}</h2>
        <ul>
        {inventory.length ? (
          inventory.map((item) => (
            <li key={item._id}>
              <p>{item.name}</p>
              <p>Price: {item.price}</p>
              {handleAddItem ? (
                <button onClick={() => handleAddItem(item)}>
                  Add Item
                </button>
              ) : (
                <button onClick={() => handleRemoveItem(item)}>
                  Remove Item
                </button>
              )}
            </li>
          ))
        ) : (
          <li>
            <p>Empty</p>
          </li>
        )}
        </ul>
      </div>
    );
  };
  
  export default InventoryList;
  