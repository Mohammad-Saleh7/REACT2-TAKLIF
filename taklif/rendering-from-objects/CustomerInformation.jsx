export default function CustomerInformation({ customer }) {
  return (
    <div>
      <h1>my name is {customer.first_name}</h1>
      <h2>my last name is {customer.last_name} </h2>
    </div>
  );
}
