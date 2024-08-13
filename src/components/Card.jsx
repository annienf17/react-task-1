// props.children is a special prop that allows you to pass components as data to other components
export const Card = ({ children }) => {
  return <div>{children}</div>;
};

<Card>
  <h1>Card title</h1>
  <p>Text between opening and closing tag</p>
</Card>;
