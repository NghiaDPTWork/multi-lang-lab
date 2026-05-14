// rfc => React Function Component

const Hello = (props: { name: string }) => {
  // const [name, setName] = useState("Nghia Duong");
  return (
    <div>
      <h1 className="text-3xl font-bold underline ">Hello, {props.name}!</h1>
      <h3 className="text-3xl font-bold ">Hello world!</h3>
    </div>
  );
};

export default Hello;
