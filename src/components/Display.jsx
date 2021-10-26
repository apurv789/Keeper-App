import react from "react";
function Display(prop)
{
  return (<div>
    <h1>
      {prop.title}
    </h1>
    <p>
    {prop.content}
    </p>
    </div>
  );
}
export default Display;
