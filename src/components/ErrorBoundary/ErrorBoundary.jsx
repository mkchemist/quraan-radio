import React from "react";

function ErrorBoundary({ error }) {
  return (
    <div className="bg-slate-200 p-5" dir="ltr">
      <div>
        <h1 className="text-3xl text-red-500">{error.name}</h1>
        <p>{error.message}</p>
        <hr className="my-2" />
        <pre>{error.stack}</pre>
      </div>
    </div>
  );
}

export default ErrorBoundary;
