export default function TabButton({ children, onSelect, isSelected }) {
  // props children to get the text between the component tags in the app.jsx file
  return (
    <li>
      <button className={isSelected && "active"} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
