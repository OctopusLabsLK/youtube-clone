// function App() {
//   return <h1>Hello World</h1>;
// }

const App = () => {
  return (
    <>
      <h1>Hello World</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        assumenda asperiores suscipit obcaecati deleniti nam totam debitis,
        distinctio sequi et tempore saepe quam quia libero omnis in soluta.
        Neque doloribus et ipsam autem, eius fuga vitae dolorem placeat facere
        dolore nobis veniam aut magnam, commodi quam molestiae, quas assumenda
        asperiores.
      </p>

      <p>{process.env.REACT_APP_YOUTUBE_API}</p>
    </>
  );
};
export default App;
